'use strict'

module.exports = class Toolpackage {

    // static getToolPackages(module) {
    //     return Object.entries(module)
    //         .filter(entry => entry[1] instanceof Toolpackage)
    //         .map(entry => entry[1])
    // }

    constructor(name) {
        this.name = name
        this.tbox = {}
        this.cntPass = 0;
        this.cntFail = 0;
    }

	add(tooldef) {
		this.tbox[tooldef.impl.name] = new Tool(tooldef)
	}

	get(symbol) {
		if (typeof symbol === 'function') return this.tbox[symbol.name]
		else return this.tbox[symbol]
	}

    allTools() {
		return Object.values(this.tbox)
    }

    describe(msg, fn) {
        console.log('\t' + msg)
        return fn()
    }

    it(msg, fn) {
        return this.describe('\t' + msg, fn)
    }

    expect(result) {
        return this.matchers(result)
    }

    matchers(result) {
        return {
            toBe: (expected) => {
                if (result === expected) {
                    console.log("\t\tpass: '"+ result + "'");
                    this.cntPass++;
                    return true
                } else {
                    console.error("\t\tFAIL! Expected '" + expected + "', got '" + result + "'");
                    this.cntFail++;
                    return false
                }
            },
            jsonToBe: (expected) => {
                if (typeof expected !== "string") {
                    expected = JSON.stringify(expected);
                }
                this.matchers(JSON.stringify(result)).toBe(expected);
            },
            listToBe: (expected) => {
                const expectedJson = JSON.stringify(expected);
                const actual = JSON.stringify(result);
                this.matchers(actual).toBe(expectedJson);
            }
        }
    }

    test(msg, fn) {
        console.log(msg);
        fn()
    };

    testTool(tool) {
        if (tool.tests) {
            console.log("Running tests for '" + tool.impl.name + "'");
            tool.tests()
        }
		else {
	        console.log("No tests defined for '" + tool.impl.name + "'");
        }
    };

    /*
    //gleichwertig:
    testTool = (tool) => {
        if (tool.tests) {
            console.log(tool.impl);
            tool.tests()
        }
    };
    */

    testAllTools() {
	    console.log("Running tests for all tools in '" + this.name + "'")
        this.allTools().forEach(t => this.testTool(t))
    }

    stats() {
        console.log("---------------------------------------------------------");
        console.log(this.cntPass + " test(s) passed.");
        if (this.cntFail) console.error(this.cntFail + " test(s) failed.");
        console.log("---------------------------------------------------------");
        return this.cntFail === 0
    };

	exportAll(xports) {
		xports.tools = this
		this.allTools().forEach(t => {
			t.toolNamesFlat().forEach(n => {
				xports[n] = t.impl
			})
		})
	}
}

// TODO
// visibility und hideInToolbox nicht mehr nötig?
// was machen wir mit args?

class Tool {
	constructor(t) {
		this.id = t.id
		this.impl = t.impl
		this.name = t.impl.name
		this.aliases = t.aliases || {}
		this.argsOld = t.argsOld
        this.args = t.args
		this.tags = t.tags || []
		this.tests = t.tests
        this.hideInToolbox = t.hideInToolbox
        this.hideOnSimpleMode = t.hideOnSimpleMode
        // this.visibility = t.visibility || "PUBLIC"
	}

	toolNamesFlat() {
		return [this.impl.name].concat(Object.values(this.aliases).flat())
	}

	toolNames() {
		let res = {}
		res['en'] = [this.impl.name]
		Object.entries(this.aliases).forEach(([lang,names]) => {
			if (lang === 'en') {
				res[lang] = [this.impl.name].concat([names]).flat();
			}
			else {
				res[lang] = [names].flat();
			}
		})
		return res
	}
}
