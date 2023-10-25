const Toolpackage = require('./toolpackage')
var format = require('date-fns/format')

const tools = new Toolpackage("Base Chioro Tools")
tools.description = 'These are the toolbox tools included in chioro by default. All the tools defined here are available in the global namespace. '


function getJson(url, headers = null) {
	if(typeof _apiFetcher === 'undefined') return {};
	if (headers !== null) {
		return JSON.parse(_apiFetcher.getUrl(url, headers));
	}
	return JSON.parse(_apiFetcher.getUrl(url));
}
tools.add({
	id:"getJson",
	impl: getJson,
	aliases: {
		en: "getJson",
		de: "getJson"
	},
	argsOld: {
		en: "",
		de: ""
	},
	args: {
		en : [],
		de : []
	},
	tags: ["pattern"],
	hideInToolbox: true,
	hideOnSimpleMode: true,
	tests: () => {
		tools.expect(getJson("https://some.interesting.url")).jsonToBe({});
	}
})


function postJson(url, params, headers = null) {
	if(typeof _apiFetcher === 'undefined') return {};
	if (headers !== null) {
		return JSON.parse(_apiFetcher.postUrl(url, JSON.stringify(params), Object.from(headers)));
	}
	return JSON.parse(_apiFetcher.postUrl(url, JSON.stringify(params)));
}
tools.add({
	id:"postJson",
	impl: postJson,
	aliases: {
		en: "postJson",
		de: "postJson"
	},
	argsOld: {
		en: "",
		de: ""
	},
	args: {
		en : [],
		de : []
	},
	tags: ["pattern"],
	hideInToolbox: true,
	hideOnSimpleMode: true,
	tests: () => {
		tools.expect(postJson("https://some.interesting.url")).jsonToBe({});
	}
})

function putJson(url, params, headers = null) {
	if(typeof _apiFetcher === 'undefined') return;
	if (headers !== null) {
		_apiFetcher.putUrl(url, JSON.stringify(params), headers);
	} else {
		_apiFetcher.putUrl(url, JSON.stringify(params));
	}
}
tools.add({
	id:"putJson",
	impl: putJson,
	aliases: {
		en: "putJson",
		de: "putJson"
	},
	argsOld: {
		en: "",
		de: ""
	},
	args: {
		en : [],
		de : []
	},
	tags: ["pattern"],
	hideInToolbox: true,
	hideOnSimpleMode: true,
	tests: () => {}
})

function getSub() {
	let tmp = get(arguments[0]);
	if(!tmp) return null;
	for (let i = 1; i < arguments.length; i++) {
		if (typeof tmp === 'object') {
			tmp = tmp[arguments[i]]
		}
		else {
			return null
		}
	}
	return tmp;
}
tools.add({
	id:"getSub",
	impl: getSub,
	aliases: {
		en: "getSub",
		de: "holeWert"
	},
	argsOld: {
		en: "",
		de: ""
	},
	args: {
		en : [],
		de : []
	},
	tags: ["pattern"],
	hideInToolbox: true,
	hideOnSimpleMode: true,
	tests: () => {
	}
})


function $(propertyName) {
	if (typeof propertyName === 'undefined') return $(current());
	if (propertyName === '') return '';

	if(typeof propertyName !== 'string') return JSON.stringify(propertyName);

	var result = '';
	var prefix = '';
	if(propertyName.startsWith('source.'))
		prefix = 'source.';
	if(propertyName.startsWith('target.'))
		prefix = 'target.';
	propertyName = propertyName.replace(/^source\.|^target\./, '');
	var listOfArgs = propertyName.split('.');
	if(listOfArgs.length > 0) listOfArgs[0] = prefix + listOfArgs[0];
	const v = getSub.apply(null, listOfArgs);
	if(v === null) return '';
	result = v;

	if (typeof result === 'string') {
		return result;
	}
	if (result === null || typeof result === 'undefined') {
		return '';
	}
	return result;
}
tools.add({
	id:"$",
	impl: $,
	aliases: {
		en: "$",
		de: "$"
	},
	argsOld: {
		en: "",
		de: ""
	},
	args: {
		en : [],
		de : []
	},
	tags: ["pattern"],
	hideInToolbox: true,
	hideOnSimpleMode: true,
	tests: () => {
	}
})

function current() {
	if (typeof _targetAttributeName === 'undefined') {
		return '';
	}
	return _targetAttributeName;
}
tools.add({
	id:"current",
	impl: current,
	aliases: {
		en: "current",
		de: "current"
	},
	argsOld: {
		en: "",
		de: ""
	},
	args: {
		en : [],
		de : []
	},
	tags: ["TAGS.UTIL"],
	hideInToolbox: false,
	hideOnSimpleMode: true,
	tests: () => {
	}
})

function $$(propertyName) {

	arrayWithOneValueChecking = function(val) {
		if (Array.isArray(val) && val.length === 1) {
			return val[0];
		}
		return val;
	};
	var result = '';
	var v = $(propertyName);
	if (typeof v['value'] !== 'undefined' && v['value']) {
		result = v['value'];
		if (typeof v['unit'] !== 'undefined' && v['unit']) {
			result = result + ' ' + v['unit'];
		}
	} else {
		result = v;
	}
	result = arrayWithOneValueChecking(result);
	if (typeof result === 'string') {
		return result;
	}
	if (result === null || typeof result === 'undefined') {
		return '';
	}
	if(Array.isArray(result)) return result[0];
	if(typeof result === 'object' && Object.keys(result).length > 0) return result[Object.keys(result)[0]];
	return JSON.stringify(result);
}
tools.add({
	id:"$$",
	impl: $$,
	aliases: {
		en: "$$",
		de: "$$"
	},
	argsOld: {
		en: "",
		de: ""
	},
	args: {
		en : [],
		de : []
	},
	tags: ["pattern"],
	hideInToolbox: true,
	hideOnSimpleMode: true,
	tests: () => {
	}
})


function copy(propertyName) {
	return source(propertyName);
}
tools.add({
	id:"copy",
	impl: copy,
	aliases: {
		en: "copy",
		de: "kopiere"
	},
	argsOld: {
		en: "",
		de: ""
	},
	args: {
		en : [],
		de : []
	},
	tags: ["pattern"],
	hideInToolbox: true,
	hideOnSimpleMode: true,
	tests: () => {
	}
})

let __sourceParsed = null;
let __metadataParsed = null;
function get(propertyName) {
	const source = __sourceParsed ? __sourceParsed :
			(__sourceParsed = (typeof _source != 'undefined' ? JSON.parse(_source) : {}));
	const target = typeof _target != 'undefined' ? _target : {};
	const metadata = __metadataParsed ? __metadataParsed :
			(__metadataParsed = (typeof _metadata != 'undefined' ? JSON.parse(_metadata) : {}));

	if (propertyName.startsWith('source.')) {
		const key = propertyName.slice(7);
		return (source && source[key]) ? source[key] : null;
	} else if (propertyName.startsWith('target.')) {
		const key = propertyName.slice(7);
		return (target && target[key]) ? target[key] : null;
	} else if (propertyName.startsWith('metadata.')) {
		const key = propertyName.slice(9);
		return (metadata && metadata[key]) ? metadata[key] : null;
	} else if (target && target[propertyName]) {
		return target[propertyName];
	} else if (source && source[propertyName]) {
		return source[propertyName];
	} else if (metadata && metadata[propertyName]) {
		return metadata[propertyName];
	}
	return null;
}
tools.add({
	id:"get",
	impl: get,
	aliases: {
		en: "get",
		de: "hole"
	},
	argsOld: {
		en: "",
		de: ""
	},
	args: {
		en : [],
		de : []
	},
	tags: ["pattern"],
	hideInToolbox: true,
	hideOnSimpleMode: true,
	tests: () => {
		tools.expect(get("source.color")).toBe(null);
		tools.expect(get("source.color_s")).toBe(null);
		tools.expect(get("target.color")).toBe(null);
		tools.expect(get("target.color_t")).toBe(null);
		tools.expect(get("metadata.color")).toBe(null);
		tools.expect(get("metadata.color_m")).toBe(null);
		tools.expect(get("color")).toBe(null);
		tools.expect(get("color_s")).toBe(null);
		tools.expect(get("color_t")).toBe(null);
		tools.expect(get("color_m")).toBe(null);
		__sourceParsed = null;
		__metadataParsed = null;
		_source = '{"color":"blue","color_s":"cyan"}';
		_target = {"color":"red","color_t":"lila"};
		_metadata = '{"color":"yellow","color_m":"brown"}';
		tools.expect(get("source.color")).toBe("blue");
		tools.expect(get("source.color_s")).toBe("cyan");
		tools.expect(get("target.color")).toBe("red");
		tools.expect(get("target.color_t")).toBe("lila");
		tools.expect(get("metadata.color")).toBe("yellow");
		tools.expect(get("metadata.color_m")).toBe("brown");
		tools.expect(get("color")).toBe("red");
		tools.expect(get("color_s")).toBe("cyan");
		tools.expect(get("color_t")).toBe("lila");
		tools.expect(get("color_m")).toBe("brown");
		__sourceParsed = null;
		__metadataParsed = null;
		delete _source;
		delete _target;
		delete _metadata;
	}
});


function source(propertyName) {
	return get('source.' + propertyName);
}
tools.add({
	id:"source",
	impl: source,
	aliases: {
		en: "source",
		de: "quelle"
	},
	argsOld: {
		en: "",
		de: ""
	},
	args: {
		en : [],
		de : []
	},
	tags: ["pattern"],
	hideInToolbox: true,
	hideOnSimpleMode: true,
	tests: () => {
		tools.expect(source("color")).toBe(null);
	}
})


function target(propertyName) {
	return get('target.' + propertyName);
}
tools.add({
	id:"target",
	impl: target,
	aliases: {
		en: "target",
		de: "ziel"
	},
	argsOld: {
		en: "",
		de: ""
	},
	args: {
		en : [],
		de : []
	},
	tags: ["pattern"],
	hideInToolbox: true,
	hideOnSimpleMode: true,
	tests: () => {
		tools.expect(target("color")).toBe(null);
	}
})

function metadata(propertyName) {
	return get('metadata.' + propertyName);
}
tools.add({
	id:"metadata",
	impl: metadata,
	aliases: {
		en: "metadata",
		de: "metadaten"
	},
	argsOld: {
		en: "",
		de: ""
	},
	args: {
		en : [],
		de : []
	},
	tags: ["pattern"],
	hideInToolbox: true,
	hideOnSimpleMode: true,
	tests: () => {
		tools.expect(metadata("color")).toBe(null);
	}
})


function getUnit(name) {
	return getSub(name, "unit")
}
tools.add({
	id:"getUnit",
	impl: getUnit,
	aliases: {
		en: "getUnit",
		de: "holeEinheit"
	},
	argsOld: {
		en: "",
		de: ""
	},
	args: {
		en : [],
		de : []
	},
	tags: ["TAGS.UTIL"],
	hideInToolbox: true,
	hideOnSimpleMode: true,
	tests: () => {
	}
})


function getValue(name) {
	return getSub(name, "value")
}
tools.add({
	id:"getValue",
	impl: getValue,
	aliases: {
		en: "getValue",
		de: "holeWert"
	},
	argsOld: {
		en: "",
		de: ""
	},
	args: {
		en : [],
		de : []
	},
	tags: ["TAGS.UTIL"],
	hideInToolbox: true,
	hideOnSimpleMode: true,
	tests: () => {
	}
})


function mapSize(obj) {
	var size = 0, key;
	for (key in obj) {
		if (obj.hasOwnProperty(key)) size++;
	}
	return size;
}
tools.add({
	id:"mapSize",
	impl: mapSize,
	aliases: {
		en: "mapSize",
		de: "größeDerMap"
	},
	argsOld: {
		en: "",
		de: ""
	},
	args: {
		en : [],
		de : []
	},
	tags: ["TAGS.UTIL"],
	hideInToolbox: true,
	hideOnSimpleMode: true,
	tests: () => {
	}
})


function stringOf(input) {
	if (input !== null && typeof input !== 'undefined') {
		return input.toString();
	} else {
		return '';
	}
}
tools.add({
	id:"stringOf",
	impl: stringOf,
	aliases: {
		en: "stringOf",
		de: "zeichenketteVon"
	},
	argsOld: {
		en: "",
		de: ""
	},
	args: {
		en : [],
		de : []
	},
	tags: ["TAGS.UTIL"],
	hideInToolbox: true,
	hideOnSimpleMode: true,
	tests: () => {
		var something_undefined;
		tools.expect(stringOf(something_undefined)).toBe('');
		tools.expect(stringOf(null)).toBe('');
		tools.expect(stringOf('')).toBe('');
		tools.expect(stringOf(true)).toBe('true');
		tools.expect(stringOf(false)).toBe('false');
		tools.expect(stringOf('false')).toBe('false');
		tools.expect(stringOf(0)).toBe('0')
	}
})


function similarCategory(categoryValue, comparisonValue) {
	if (!comparisonValue || !categoryValue ||
		typeof comparisonValue !== 'string' ||
		typeof categoryValue !== 'string'
	) return false;

	if(categoryValue[categoryValue.length - 1] !== '|')
		categoryValue += '|';
	if(categoryValue[0] !== '|')
		categoryValue = '|' +  categoryValue;
	if(comparisonValue[comparisonValue.length - 1] !== '|')
		comparisonValue += '|';
	if(comparisonValue[0] !== '|')
		comparisonValue = '|' +  comparisonValue;

	return categoryValue.startsWith(comparisonValue);
}
tools.add({
	id:"similarCategory",
	impl: similarCategory,
	aliases: {
		en: "similarCategory",
		de: "gleicheKategorie"
	},
	argsOld: {
		en: "",
		de: ""
	},
	args: {
		en : [],
		de : []
	},
	tags: ["TAGS.CONDITIONAL"],
	hideInToolbox: true,
	hideOnSimpleMode: true,
	tests: () => {
	}
})


function isInteger(value) {
	var integer = parseInt(value, 10);
	return !isNaN(integer);
}
tools.add({
	id:"isInteger",
	impl: isInteger,
	aliases: {
		en: "isInteger",
		de: "istInteger"
	},
	argsOld: {
		en: "",
		de: ""
	},
	args: {
		en : [],
		de : []
	},
	tags: ["TAGS.CONDITIONAL"],
	hideInToolbox: true,
	hideOnSimpleMode: true,
	tests: () => {
	}
})


function decodeConditions() {
	for (var i = 0; i < arguments.length - 1; i += 2) {
		const condition = arguments[i];
		const replacement = arguments[i + 1];
		if(condition) return replacement
	}
	if (arguments[i]) {
		return arguments[i];
	}
	return "";
}
tools.add({
	id:"decodeConditions",
	impl: decodeConditions,
	aliases: {
		en: "decodeConditions",
		de: "dekodiereBedingungen"
	},
	argsOld: {
		en: "condition_1, toReplace_1, ...",
		de: "bedingung_1, zuErsetzen_1, ..."
	},
	args: {
		en : [{
				"key" : "condition_1",
				"label": "Condition 1",
				"type": "text",
				"desc": "Condition"
			},
			{
				"key" : "toReplace_1",
				"label": "To Replace 1",
				"type": "text",
				"desc": "Text which will be returned if condition evaluated as true"
			},
			{
				"key" : "...",
				"label": "",
				"type": "text",
				"desc": ""
			}],
		de : [{
				"key" : "condition_1",
				"label": "Bedingung 1",
				"type": "text",
				"desc": "Bedingung"
			},
			{
				"key" : "toReplace_1",
				"label": "To Replace 1",
				"type": "text",
				"desc": "Text, der zurückgegeben wird, wenn Bedingung als wahr bewertet wird"
			},
			{
				"key" : "...",
				"label": "",
				"type": "text",
				"desc": ""
			}]
	},
	tags: ["TAGS.CONDITIONAL"],
	hideInToolbox: false,
	hideInSimpleMode: true,
	tests: () => {
	}
})


function isString(value) {
	return typeof value === "string";
}
tools.add({
	id:"isString",
	impl: isString,
	aliases: {
		en: "isString",
		de: "istZeichenkette"
	},
	argsOld: {
		en: "",
		de: ""
	},
	tags: ["TAGS.CONDITIONAL"],
	hideInToolbox: true,
	hideInSimpleMode: true,
	tests: () => {
	}
})


function isList(value) {
	return Array.isArray(value);
}
tools.add({
	id:"isList",
	impl: isList,
	aliases: {
		en: "isList",
		de: "istListe"
	},
	argsOld: {
		en: "",
		de: ""
	},
	tags: ["TAGS.CONDITIONAL"],
	hideInToolbox: true,
	hideOnSimpleMode: true,
	tests: () => {
	}
})


function size(something) {
	if(typeof something === 'number')
		something = something.toString();
	if(something)
		if(something.length) {
			return something.length
		} else {
			return mapSize(something)
		}
	return 0;
}
tools.add({
	id:"size",
	impl: size,
	aliases: {
		en: "size",
		de: "größe"
	},
	argsOld: {
		en: "something",
		de: "argument"
	},
	args: {
		en : [{
			"key" : "something",
			"label": "Input",
			"type": "text",
			"desc": "Returns the length"
		}],
		de : [{
			"key" : "something",
			"label": "Eingabe",
			"type": "text",
			"desc": "Gibt die Länge zurück"
		}]
	},
	tags: ["TAGS.UTIL", "TAGS.LIST", "TAGS.TEXT"],
	hideInToolbox: null,
	hideOnSimpleMode: null,
	tests: () => {
	}
})


function asList() {
	var arr = [];
	for (var i = 0; i < arguments.length; i++) {
		arr.push(arguments[i]);
	}
	return arr;
}
tools.add({
	id:"asList",
	impl: asList,
	aliases: {
		en: "asList",
		de: "speichereAlsTabelle"
	},
	argsOld: {
		en: "something1, something2, ...",
		de: "argument1, argument2, ..."
	},
	args: {
		en : [{
			"key" : "something1",
			"label": "First input",
			"type": "text",
			"desc": "First input which will merged into a list"
		}, {
			"key" : "something2",
			"label": "Second input",
			"type": "text",
			"desc": "Second input which will merged into a list"
		}, {
			"key" : "...",
			"label": "",
			"type": "text",
			"desc": ""
		}],
		de : [{
			"key" : "argument1",
			"label": "Erste Eingabe",
			"type": "text",
			"desc": "Erste Eingabe die zu einer Liste zusammengefügt wird"
		}, {
			"key" : "argument2",
			"label": "Erste Eingabe",
			"type": "text",
			"desc": "Zweite Eingabe die zu einer Liste zusammengefügt wird"
		}, {
			"key" : "...",
			"label": "",
			"type": "text",
			"desc": ""
		}]
	},
	tags: ["TAGS.UTIL", "TAGS.LIST"],
	hideInToolbox: null,
	hideOnSimpleMode: true,
	tests: () => {
	}
})


function anyOf() {
	if(arguments.length < 1)
		return '';
	var arr = Array.from(arguments).flat(1);
	for (var i = 0; i < arr.length; i++) {
		if(arguments[i] || arguments[i] === 0) return arguments[i];
	}
	return '';
}
tools.add({
	id:"anyOf",
	impl: anyOf,
	aliases: {
		en: "anyOf",
		de: "erstesVon"
	},
	argsOld: {
		en: "something1, something2, ...",
		de: "Argument1, Argument2, ..."
	},
	args: {
		en : [{
			"key" : "something1",
			"label": "Input",
			"type": "text",
			"desc": "First argument which will be checked if true"
		}, {
			"key" : "something2",
			"label": "Input",
			"type": "text",
			"desc": "Second argument which will be checked if true"
		}, {
			"key" : "...",
			"label": "",
			"type": "text",
			"desc": ""
		}],
		de : [{
			"key" : "argument1",
			"label": "Eingabe",
			"type": "text",
			"desc": "Überprüfen ob erstes Argument true ist"
		}, {
			"key" : "argument2",
			"label": "Eingabe",
			"type": "text",
			"desc": "Überprüfen ob zweites Argument true ist"
		}, {
			"key" : "...",
			"label": "",
			"type": "text",
			"desc": ""
		}]
	},
	tags: ["TAGS.UTIL", "TAGS.LIST"],
	hideInToolbox: null,
	hideOnSimpleMode: true,
	tests: () => {
	}
})


function filterList(listProperty, regExpList) {
	var targetList = listProperty;
	if(typeof listProperty === 'string')
		targetList = JSON.parse(listProperty);
	if(!targetList || !targetList.filter || !regExpList.some)
		return [];
	return targetList.filter(function (text) {
		return regExpList.some(function (regex) {
			return regex.test(text);
		});
	});
}
tools.add({
	id:"filterList",
	impl: filterList,
	aliases: {
		en: "filterList",
		de: "filtereListe"
	},
	argsOld: {
		en: "list property, regexp list",
		de: "listeneintrag, regexp liste"
	},
	args: {
		en : [{
			"key" : "list property",
			"label": "List",
			"type": "text",
			"desc": "List input"
		}, {
			"key" : "regexp list",
			"label": "Regexp list",
			"type": "text",
			"desc": "List of regex to filter for"
		}],
		de : [{
			"key" : "listeneintrag",
			"label": "Liste",
			"type": "text",
			"desc": "Eingabe Liste die gefiltert werden soll."
		}, {
			"key" : "regexp liste",
			"label": "Regexp list",
			"type": "text",
			"desc": "Liste von Regexp nach denen gefiltert werden soll."
		}]
	},
	tags: ["TAGS.UTIL"],
	hideInToolbox: null,
	hideOnSimpleMode: null,
	tests: () => {
	}
})


function asMap() {
	var result = {};
	for (var i = 0; i < arguments.length - 1; i += 2) {
		var name = stringOf(arguments[i]);
		if(name === "") {
			throw "In asMap(): Key should not be empty."
		}
		result[name] = arguments[i + 1];
	}
	return result
}
tools.add({
	id:"asMap",
	impl: asMap,
	aliases: {
		en: "asMap",
		de: "speichereAlsListe"
	},
	argsOld: {
		en: "name1, value1, name2, value2, ...",
		de: "name1, wert1, name2, wert2, ..."
	},
	args: {
		en : [{
			"key" : "name1",
			"label": "Key 1",
			"type": "text",
			"desc": "Key 1"
		}, {
			"key" : "value1",
			"label": "Value 1",
			"type": "text",
			"desc": "Value 1"
		}, {
			"key" : "name2",
			"label": "Key 2",
			"type": "text",
			"desc": "Key 2"
		}, {
			"key" : "value2",
			"label": "Value 2",
			"type": "text",
			"desc": "Value 2"
		},{
			"key" : "...",
			"label": "",
			"type": "text",
			"desc": ""
		}],
		de : [{
			"key" : "name1",
			"label": "Schlüssel 1",
			"type": "text",
			"desc": "Schlüssel 1"
		}, {
			"key" : "wert1",
			"label": "Wert 1",
			"type": "text",
			"desc": "Wert 1"
		}, {
			"key" : "name2",
			"label": "Schlüssel 2",
			"type": "text",
			"desc": "Schlüssel 2"
		}, {
			"key" : "wert2",
			"label": "Wert 2",
			"type": "text",
			"desc": "Wert 2"
		},{
			"key" : "...",
			"label": "",
			"type": "text",
			"desc": ""
		}]
	},
	tags: ["TAGS.UTIL"],
	hideInToolbox: null,
	hideOnSimpleMode: true,
	tests: () => {
	}
})


function removeEmptyListEntries() {
	if(arguments.length < 1)
		return [];
	return Array.from(arguments).flat(1)
		.filter(s => s !== null)
}
tools.add({
	id:"removeEmptyListEntries",
	impl: removeEmptyListEntries,
	aliases: {
		en: "removeEmptyListEntries",
		de: "entferneLeereListeneinträge"
	},
	argsOld: {
		en: "list",
		de: "liste"
	},
	args: {
		en : [{
			"key" : "list",
			"label": "Input list",
			"type": "text",
			"desc": "List input which will be filtered."
		}, ],
		de : [{
			"key" : "liste",
			"label": "Eingabeliste",
			"type": "text",
			"desc": "Eingabeliste die gefiltert werden soll."
		}]
	},
	tags: ["TAGS.UTIL", "TAGS.LIST"],
	hideInToolbox: null,
	hideOnSimpleMode: null,
	tests: () => {
	}
})


function lowerCaseText(text) {
	return stringOf(text).toLowerCase();
}
tools.add({
	id:"lowerCaseText",
	impl: lowerCaseText,
	aliases: {
		en: "lowerCaseText",
		de: "ändereZuKleinbuchstaben"
	},
	argsOld: {
		en: "text",
		de: "text"
	},
	args: {
		en : [{
			"key" : "text",
			"label": "Input text",
			"type": "text",
			"desc": "Output of the text in lowercase"
		}, ],
		de : [{
			"key" : "text",
			"label": "Eingabetext",
			"type": "text",
			"desc": "Ausgabe des Textes in Kleinbuchstaben"
		}]
	},
	tags: ["TAGS.TEXT"],
	hideInToolbox: null,
	hideOnSimpleMode: null,
	tests: () => {
	}
})


function upperCaseText(text) {
	return stringOf(text).toUpperCase();
}
tools.add({
	id:"upperCaseText",
	impl: upperCaseText,
	aliases: {
		en: "upperCaseText",
		de: "ändereZuGroßbuchstaben"
	},
	argsOld: {
		en: "text",
		de: "text"
	},
	args: {
		en : [{
			"key" : "text",
			"label": "Input text",
			"type": "text",
			"desc": "Output of the text in uppercase"
		}],
		de : [{
			"key" : "text",
			"label": "Eingabetext",
			"type": "text",
			"desc": "Ausgabe des Textes in Großbuchstaben"
		}]
	},
	tags: ["TAGS.TEXT"],
	hideInToolbox: null,
	hideOnSimpleMode: null,
	tests: () => {
	}
})


function joinText() {
	if(arguments.length < 2)
		return '';
	var arr = [];
	var separator = arguments[0];
	for (var i = 1; i < arguments.length; i++) {
		if(Array.isArray(arguments[i])) {
			arr.push(joinText.apply(this, [separator].concat(arguments[i]) ))
		} else {
			arr.push(stringOf(arguments[i]));
		}
	}
	return arr.join(arguments[0]);
}
tools.add({
	id:"joinText",
	impl: joinText,
	aliases: {
		en: "joinText",
		de: "verbindeTextMitTrennzeichen"
	},
	argsOld: {
		en: "separator, text1, text2, ...",
		de: "trennzeichen, text1, text2, ..."
	},
	args: {
		en : [{
			"key" : "separator",
			"label": "Input text",
			"type": "text",
			"desc": "Separator which divides the text"
		}, {
			"key" : "text1",
			"label": "Input text 1",
			"type": "text",
			"desc": "First text to join"
		}, {
			"key" : "text2",
			"label": "Input text 2",
			"type": "text",
			"desc": "Second Text to join"
		}, {
			"key" : "...",
			"label": "",
			"type": "text",
			"desc": ""
		}],
		de : [{
			"key" : "trennzeichen",
			"label": "Eingabetext",
			"type": "text",
			"desc": "Trennzeichen welches den Text teilt"
		}, {
			"key" : "text1",
			"label": "Eingabetext 1",
			"type": "text",
			"desc": "Erster Text der mit Trennzeichen verbunden wird"
		}, {
			"key" : "text2",
			"label": "Eingabetext 2",
			"type": "text",
			"desc": "Zweiter Text der mit Trennzeichen verbunden wird"
		}, {
			"key" : "...",
			"label": "",
			"type": "text",
			"desc": ""
		}]
	},
	tags: ["TAGS.TEXT"],
	hideInToolbox: null,
	hideOnSimpleMode: true,
	tests: () => {
		tools.expect(joinText("-")).toBe("");
		tools.expect(joinText("")).toBe("");
		tools.expect(joinText("-", "a")).toBe("a");
		tools.expect(joinText("-", "a", "b")).toBe("a-b");
		tools.expect(joinText("-", ["a", "b", "c"], "d")).toBe("a-b-c-d");
	}
})


function concatenateText() {
	var arr = [];
	for (var i = 0; i < arguments.length; i++) {
		arr.push(stringOf(arguments[i]));
	}
	return arr.join('');
}
tools.add({
	id:"concatenateText",
	impl: concatenateText,
	aliases: {
		en: "concatenateText",
		de: "verketteText"
	},
	argsOld: {
		en: "text1, text2, ...",
		de: "text1, text2, ..."
	},
	args: {
		en : [{
			"key" : "text1",
			"label": "First input text",
			"type": "text",
			"desc": "First text which should concatenate"
		}, {
			"key" : "text2",
			"label": "Second input text",
			"type": "text",
			"desc": "Second text which should concatenate"
		}, {
			"key" : "...",
			"label": "",
			"type": "text",
			"desc": ""
		}],
		de : [{
			"key" : "text1",
			"label": "Eingabetext",
			"type": "text",
			"desc": "Erster Text der verkettet werden soll"
		}, {
			"key" : "text2",
			"label": "Eingabetext",
			"type": "text",
			"desc": "Zweiter Text der verkettet werden soll"
		}, {
			"key" : "...",
			"label": "",
			"type": "text",
			"desc": ""
		}]
	},
	tags: ["TAGS.TEXT"],
	hideInToolbox: null,
	hideOnSimpleMode: true,
	tests: () => {
	}
})


function insertTextAtPosition(text, textToInsert, position) {

	text = stringOf(text);
	textToInsert = stringOf(textToInsert);

	if (!isInteger(position)) {
		throw("In insertTextAtPosition(): position has to be a number")
	}
	return text.slice(0, position)
		+ textToInsert
		+ text.slice(position);
}
tools.add({
	id:"insertTextAtPosition",
	impl: insertTextAtPosition,
	aliases: {
		en: "insertTextAtPosition",
		de: "fügeTextAnPositionEin"
	},
	argsOld: {
		en: "text, textToInsert, position",
		de: "text, einfügeText, position"
	},
	args: {
		en : [{
			"key" : "text",
			"label": "Input text",
			"type": "text",
			"desc": "Text where something should be inserted"
		}, {
			"key" : "textToInsert",
			"label": "Insert text",
			"type": "text",
			"desc": "Text which should be inserted"
		}, {
			"key" : "position",
			"label": "Input text",
			"type": "text",
			"desc": "Position where the text should be inserted"
		}],
		de : [{
			"key" : "text",
			"label": "Ausgangstext",
			"type": "text",
			"desc": "Text in den was eingefügt werden soll"
		}, {
			"key" : "einfügeText",
			"label": "Einfügetext",
			"type": "text",
			"desc": "Text der eingefügt werden soll"
		}, {
			"key" : "position",
			"label": "Position",
			"type": "text",
			"desc": "Position an die eingefügt werden soll"
		}]
	},
	tags: ["TAGS.TEXT"],
	hideInToolbox: null,
	hideOnSimpleMode: null,
	tests: () => {
	}
})


function textAtPosition(text, position, length) {
	if (!isInteger(position)) {
		throw "In insertTextAtPosition(): position has to be a number";
	}
	if ((length || length === 0) && !isInteger(length)) {
		throw "In insertTextAtPosition(): length has to be a number";
	}
	return stringOf(text).substr(position, length);
}
tools.add({
	id:"textAtPosition",
	impl: textAtPosition,
	aliases: {
		en: "textAtPosition",
		de: "gibTextAnPosition"
	},
	argsOld: {
		en: "text, position, length",
		de: "text, position, länge"
	},
	args: {
		en : [{
			"key" : "text",
			"label": "Input text",
			"type": "text",
			"desc": "Text where something should be extracted"
		}, {
			"key" : "position",
			"label": "Position",
			"type": "text",
			"desc": "Position which should be begin to extract"
		}, {
			"key" : "length",
			"label": "Length",
			"type": "text",
			"desc": "Length of how much should be extracted"
		}],
		de : [{
			"key" : "text",
			"label": "Eingabetext",
			"type": "text",
			"desc": "Text woraus etwas extrahiert werden soll"
		}, {
			"key" : "position",
			"label": "Position",
			"type": "text",
			"desc": "Position von der aus extrahiert werden soll"
		}, {
			"key" : "länge",
			"label": "Länge",
			"type": "text",
			"desc": "Länge des zu extrahierenden Textes"
		}]
	},
	tags: ["TAGS.TEXT"],
	hideInToolbox: null,
	hideOnSimpleMode: null,
	tests: () => {
	}
})


function trimText(text) {
	return stringOf(text).trim();
}
tools.add({
	id:"trimText",
	impl: trimText,
	aliases: {
		en: "trimText",
		de: "schneideTextZu"
	},
	argsOld: {
		en: "text",
		de: "text"
	},
	args: {
		en : [{
			"key" : "text",
			"label": "Input text",
			"type": "text",
			"desc": "Text where spaces, tabs and line breaks will be removed"
		}],
		de : [{
			"key" : "text",
			"label": "Eingabetext",
			"type": "text",
			"desc": "Text wo Leerzeichen, Tabulatoren und Zeilenumbrüche entfernt werden"
		}]
	},
	tags: ["TAGS.TEXT"],
	hideInToolbox: null,
	hideOnSimpleMode: null,
	tests: () => {
	}
})


function normalizeWhitespaces(text) {
	return stringOf(text).replace(/\s+/g, " ");
}
tools.add({
	id:"normalizeWhitespaces",
	impl: normalizeWhitespaces,
	aliases: {
		en: "normalizeWhitespaces",
		de: "normalisiereLücken"
	},
	argsOld: {
		en: "inputString",
		de: "zeichenkette"
	},
	args: {
		en : [{
			"key" : "inputString",
			"label": "Input text",
			"type": "text",
			"desc": "Text where spaces, tabs and line breaks replaced with space."
		}],
		de : [{
			"key" : "zeichenkette",
			"label": "Eingabetext",
			"type": "text",
			"desc": "Text wo Leerzeichen, Tabulatoren und Zeilenumbrüche durch Leerzeichen ersetzt werden"
		}]
	},
	tags: ["TAGS.TEXT"],
	hideInToolbox: null,
	hideOnSimpleMode: null,
	tests: () => {
	}
})

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

function replaceInText(text, textToSearch, replaceWith) {

	const replaceLogic = t => {
		t = stringOf(t);
		if(textToSearch instanceof RegExp) {
			return t.replace(textToSearch, stringOf(replaceWith));
		} else {
			t = replaceAll(t,textToSearch,replaceWith);
		}
		return t;
	}
	if(Array.isArray(text)) {
		//localized text support
		text.map(tx => {
			tx['value'] = replaceLogic(tx['value'])
			return tx;
		});

	} else {
		text = replaceLogic(text);
	}
	return text;

}
tools.add({
	id:"replaceInText",
	impl: replaceInText,
	aliases: {
		en: "replaceInText",
		de: "ersetzeInText"
	},
	argsOld: {
		en: "text, textToSearch, replaceWith",
		de: "text, suchtext, ersetzeDurch"
	},
	args: {
		en : [{
			"key" : "text",
			"label": "Input text",
			"type": "text",
			"desc": "Text where something should be replaced."
		}, {
			"key" : "textToSearch",
			"label": "Search text",
			"type": "text",
			"desc": "Text which should be replaced."
		}, {
			"key" : "replaceWith",
			"label": "Replace text",
			"type": "text",
			"desc": "Text which should be replace something."
		}],
		de : [{
			"key" : "text",
			"label": "Eingabetext",
			"type": "text",
			"desc": "Text wo etwas ersetzt werden soll."
		}, {
			"key" : "suchtext",
			"label": "Suchtext",
			"type": "text",
			"desc": "Text der ersetzt werden soll."
		}, {
			"key" : "ersetzeDurch",
			"label": "Einfügetext",
			"type": "text",
			"desc": "Text der für Suchtext eingefügt werden soll."
		}]
	},
	tags: ["TAGS.TEXT"],
	hideInToolbox: null,
	hideOnSimpleMode: null,
	tests: () => {
		tools.expect(replaceInText("ene mene muh", /m(.)/g, "A$1A")).toBe("ene AeAne AuAh");
		tools.expect(replaceInText("ene mene\n muh", "\n", "")).toBe("ene mene muh");
		tools.expect(replaceInText([{"lang": "en", "value": "ene mene\n muh"}], "\n", "")).jsonToBe([{"lang": "en", "value": "ene mene muh"}]);
	}
})


function locateInText(text, textToSearch) {
	if(textToSearch instanceof RegExp) {
		return stringOf(text).search(textToSearch);
	}
	else {
		return stringOf(text).toLowerCase().indexOf(stringOf(textToSearch).toLowerCase())
	}
}
tools.add({
	id:"locateInText",
	impl: locateInText,
	aliases: {
		en: "locateInText",
		de: "findePositionInText"
	},
	argsOld: {
		en: "text, textToSearch",
		de: "text, suchtext"
	},
	args: {
		en : [{
			"key" : "text",
			"label": "Input text",
			"type": "text",
			"desc": "Text where position should be located"
		}, {
			"key" : "textToSearch",
			"label": "Search text",
			"type": "text",
			"desc": "Text which should be located"
		}],
		de : [{
			"key" : "text",
			"label": "Eingabetext",
			"type": "text",
			"desc": "Text in dem gesucht werden soll."
		}, {
			"key" : "suchtext",
			"label": "Suchtext",
			"type": "text",
			"desc": "Text der gesucht werden soll."
		}]
	},
	tags: ["TAGS.TEXT"],
	hideInToolbox: null,
	hideOnSimpleMode: null,
	tests: () => {
		tools.expect(locateInText("ene mene muh", "mene")).toBe(4);
		tools.expect(locateInText("ene mene muh", "xxx")).toBe(-1);
		tools.expect(locateInText("ene mene muh", /m.*e/)).toBe(4);
		tools.expect(locateInText("ene mene muh", /xxx/)).toBe(-1);
	}
})


function containsText(text, textToSearch) {
	if(Array.isArray(textToSearch) && textToSearch.length > 0) {
		for (let i=0;i<textToSearch.length;i++) {
			const result = containsText(text, textToSearch[i]);
			if(result) return true;
		}
		return false;
	}
	return locateInText(text, textToSearch) >= 0;
}
tools.add({
	id:"containsText",
	impl: containsText,
	aliases: {
		en: "containsText",
		de: "beinhaltetText"
	},
	argsOld: {
		en: "text, textToSearch",
		de: "text, suchtext"
	},
	args: {
		en : [{
			"key" : "text",
			"label": "Input text",
			"type": "text",
			"desc": "Text in which is searched."
		}, {
			"key" : "textToSearch",
			"label": "Search text",
			"type": "text",
			"desc": "Text that is searched."
		}],
		de : [{
			"key" : "text",
			"label": "Eingabetext",
			"type": "text",
			"desc": "Text in dem gesucht werden soll."
		}, {
			"key" : "suchtext",
			"label": "Suchtext",
			"type": "text",
			"desc": "Text der gesucht werden soll."
		}]
	},
	tags: ["TAGS.CONDITIONAL", "TAGS.TEXT"],
	hideInToolbox: null,
	hideOnSimpleMode: null,
	tests: () => {
	}
})


function inList() {
	var arr = Array.from(arguments).flat(1);
	if(arr.length < 2) return false;
	return arr.find((s, i) => s == arr[0] && i > 0);
}
tools.add({
	id:"inList",
	impl: inList,
	aliases: {
		en: "inList",
		de: "istInListe"
	},
	argsOld: {
		en: "searchItem, listItemToSearch1, listItemToSearch2, ...",
		de: "suchbegriff, listeneintrag1, listeneintrag2, ..."
	},
	args: {
		en : [{
			"key" : "searchItem",
			"label": "Input text",
			"type": "text",
			"desc": "Text which should be searched."
		}, {
			"key" : "listItemToSearch1",
			"label": "List item 1",
			"type": "text",
			"desc": "Text where should be searched"
		}, {
			"key" : "listItemToSearch2",
			"label": "Search text",
			"type": "text",
			"desc": "Text where should be searched"
		}, {
			"key" : "...",
			"label": "",
			"type": "text",
			"desc": ""
		}],
		de : [{
			"key" : "suchbegriff",
			"label": "Suchtext",
			"type": "text",
			"desc": "Text der gesucht wird."
		}, {
			"key" : "listeneintrag1",
			"label": "Listeneintrag eins",
			"type": "text",
			"desc": "Text in dem gesucht wird."
		}, {
			"key" : "listeneintrag2",
			"label": "Listeneintrag zwei",
			"type": "text",
			"desc": "Text in dem gesucht wird."
		}, {
			"key" : "...",
			"label": "",
			"type": "text",
			"desc": ""
		}]
	},
	tags: ["TAGS.CONDITIONAL", "TAGS.LIST"],
	hideInToolbox: null,
	hideOnSimpleMode: true,
	tests: () => {
	}
})


function extractFromText(text, pattern, fallback, withGroups) {
	if(!pattern instanceof RegExp) {
		pattern = new RegExp(pattern, 'ig')
	}
	let matched = stringOf(text).match(pattern);
	if (matched !== null) {
		if(withGroups) {
			return matched[1] || matched[0];
		}
		return matched[0];
	}
	else {
		return stringOf(fallback);
	}
}
tools.add({
	id:"extractFromText",
	impl: extractFromText,
	aliases: {
		en: "extractFromText",
		de: "extrahiereAusText"
	},
	argsOld: {
		en: "text, muster, fallback",
		de: "text, muster, fallback"
	},
	args: {
		en : [{
			"key" : "text",
			"label": "Input text",
			"type": "text",
			"desc": "Text in which is searched."
		}, {
			"key" : "muster",
			"label": "Search pattern",
			"type": "text",
			"desc": "Search pattern to search text."
		}, {
			"key" : "fallback",
			"label": "Fallback text",
			"type": "text",
			"desc": "Fallback if nothing found."
		}],
		de : [{
			"key" : "text",
			"label": "Eingabetext",
			"type": "text",
			"desc": "Text in dem gesucht werden soll."
		}, {
			"key" : "muster",
			"label": "Suchtext",
			"type": "text",
			"desc": "Text der gesucht werden soll."
		}, {
			"key" : "fallback",
			"label": "Fallback",
			"type": "text",
			"desc": "Rückgabetext wenn nichts gefunden wurde."
		}]
	},
	tags: ["TAGS.EXTRACT"],
	hideInToolbox: null,
	hideOnSimpleMode: null,
	tests: () => {
		tools.expect(extractFromText("ene mene muh", /m(.*)e/g, "dann halt nicht")).toBe("mene");
		tools.expect(extractFromText("ene mxnx muh", /m(.*)e/g, "dann halt nicht")).toBe("dann halt nicht");
		tools.expect(extractFromText("ene mxnx muh", "muh", "dann halt nicht")).toBe("muh");
	}
})

// LW ab hier args anpassen für simple Mode
function extractAllMatchesFromText(text, pattern, withGroups) {
	// TODO für GUH: Hier weitermachen
	//var myRegexp = new RegExp(pattern, "g");
	var myRegexp;
	if (pattern instanceof RegExp) {
		myRegexp = new RegExp(pattern, pattern.flags.replace("g", "") + "g");
	} else {
		myRegexp = new RegExp(pattern, "g");
	}
	var arr = [];

	while (match = myRegexp.exec(text)) {
		if (withGroups) {
			var subArray = [];
			for (var i = 1; i < match.length; i++) {
				subArray.push(match[i]);
			}
			arr.push(subArray);
		} else {
			arr.push(match[0])
		}
	}

	return arr;


}
tools.add({
	id:"extractAllMatchesFromText",
	impl: extractAllMatchesFromText,
	aliases: {
		en: "extractAllMatchesFromText",
		de: "extrahiereAlleTrefferAusText"
	},
	argsOld: {
		en: "text, pattern, withGroups",
		de: "text, muster, mitGruppen"
	},
	args: {
		en : [
			{
			    "key" : "text",
			    "label": "Text",
			    "type": "text",
			    "desc": "Text to extract from"
		    },
			{
				"key" : "pattern",
				"label": "Search pattern",
				"type": "text",
				"desc": "Simple string or RegEx used for the search"
			},
			{
				"key" : "withGroups",
				"label": "One/all results",
				"type": "text",
				"desc": "Return only first occurrence or all occurrences"
			}
		],
		de : [
			{
				"key" : "text",
				"label": "Text",
				"type": "text",
				"desc": "Der Text in dem gesucht wird"
			},
			{
				"key" : "pattern",
				"label": "Suchmuster",
				"type": "text",
				"desc": "Entweder ein einfacher Text oder RegEx"
			},
			{
				"key" : "withGroups",
				"label": "Erstes/alle Ergebnisse",
				"type": "text",
				"desc": "Nur das Erste oder alle Resultate zurückgeben"
			}
		]
	},
	tags: ["TAGS.EXTRACT"],
	hideInToolbox: null,
	hideOnSimpleMode: null,
	tests: () => {
		tools.describe("Global (i.e. multi) matches", () => {
			tools.expect(extractAllMatchesFromText("ene mene muhe", /m..e/g)).jsonToBe(['mene', 'muhe']);
			tools.expect(extractAllMatchesFromText("ene mene muhe", /m(..)e/g)).jsonToBe(['mene', 'muhe']);
			tools.expect(extractAllMatchesFromText("ene mene muhe", /m(..)x/g)).jsonToBe([]);
		});
		tools.describe("Non-Global matches", () => {
			tools.expect(extractAllMatchesFromText("ene mene muhe", /m..e/)[0]).toBe('mene');
			tools.expect(extractAllMatchesFromText("ene mene muhe", /m(..)e/)[0]).toBe('mene');
			//tools.expect(extractAllMatchesFromText("ene mene muhe", /m(..)e/), true).jsonToBe(['en', 'uh']);
			tools.expect(extractAllMatchesFromText("ene mene muhe", /mxxe/)).jsonToBe([]);
			//tools.expect(extractAllMatchesFromText("Gewicht 23 kg brutto.", /(\d+)\s*([km]*g)/)).jsonToBe(['23 kg', '23', 'kg']);
		});
	}
})


function extractNumberFromText(text, fallback) {
	return extractFromText(text, numberPattern(), fallback, true);
}
tools.add({
	id:"extractNumberFromText",
	impl: extractNumberFromText,
	aliases: {
		en: "extractNumberFromText",
		de: "extrahiereZahlAusText"
	},
	argsOld: {
		en: "text, fallback",
		de: "text, fallback"
	},
	args: {
		en : [
			{
				"key" : "text",
				"label": "Text",
				"type": "text",
				"desc": "Text to extract from"
			},
			{
				"key" : "fallback",
				"label": "Fallback",
				"type": "text",
				"desc": "If there is no number found use this fallback"
			}
		],
		de : [
			{
				"key" : "text",
				"label": "Text",
				"type": "text",
				"desc": "Der Text in dem gesucht wird"
			},
			{
				"key" : "pattern",
				"label": "Suchmuster",
				"type": "text",
				"desc": "Wenn die Suche nichts ergibt verwende diesen Wert"
			}
		]
	},
	tags: ["TAGS.EXTRACT"],
	hideInToolbox: null,
	hideOnSimpleMode: null,
	tests: () => {
		tools.expect(extractNumberFromText("Temperaturen heute: 23 bis 25 Grad")).toBe("25");
	}
})

function numberPattern() {
	return /(((?<=[^\d])-)|^-)?[\d.,]*\d/g
}
tools.add({
	id:"numberPattern",
	impl: numberPattern,
	aliases: {
		en: "numberPattern",
		de: "zahlenMuster"
	},
	argsOld: {
		en: "",
		de: ""
	},
	args: {
		en: [],
		de: []
	},
	tags: ["pattern"],
	hideInToolbox: true,
	hideOnSimpleMode: true,
	tests: () => {
	}
})

function extractAllNumbersFromText(text) {
	return extractAllMatchesFromText(text, numberPattern()).map(s => s.trim());
}
tools.add({
	id:"extractAllNumbersFromText",
	impl: extractAllNumbersFromText,
	aliases: {
		en: "extractAllNumbersFromText",
		de: "extrahiereAlleZahlenAusText"
	},
	argsOld: {
		en: "text",
		de: "text"
	},
	args: {
		en : [
			{
				"key" : "text",
				"label": "Text",
				"type": "text",
				"desc": "Text to extract from"
			}
		],
		de : [
			{
				"key" : "text",
				"label": "Text",
				"type": "text",
				"desc": "Der Text in dem gesucht wird"
			}
		]
	},
	tags: ["TAGS.EXTRACT"],
	hideInToolbox: null,
	hideOnSimpleMode: null,
	tests: () => {
		tools.expect(extractAllNumbersFromText("Temperaturen heute: 23 bis 25 Grad")).jsonToBe(["23", "25"]);
		tools.expect(extractAllNumbersFromText("Temperaturen heute: -23,6 bis 25.1 Grad")).jsonToBe(["-23,6", "25.1"]);
		tools.expect(extractAllNumbersFromText("  23-25 ")).jsonToBe(["23", "25"]);
		tools.expect(extractAllNumbersFromText("-23-25")).jsonToBe(["-23", "25"]);
		tools.expect(extractAllNumbersFromText("-23 - -25")).jsonToBe(["-23", "-25"]);
		tools.expect(extractAllNumbersFromText("23- -25")).jsonToBe(["23", "-25"]);
		tools.expect(extractAllNumbersFromText("23    - -25")).jsonToBe(["23", "-25"]);
		tools.expect(extractAllNumbersFromText("2    - -  0")).jsonToBe(["2", "0"]);
		tools.expect(extractAllNumbersFromText("Größe:l40-x-b38-x-50cm:de")).jsonToBe(["40", "38", "-50"]);
	}
})


function deleteSpecialCharacters(text) {
	return stringOf(text).replace(/[^a-zA-Z0-9]/g, "");
}
tools.add({
	id:"deleteSpecialCharacters",
	impl: deleteSpecialCharacters,
	aliases: {
		en: "deleteSpecialCharacters",
		de: "löscheSonderzeichen"
	},
	argsOld: {
		en: "text",
		de: "text"
	},
	args: {
		en : [
			{
				"key" : "text",
				"label": "Text",
				"type": "text",
				"desc": "In this Text the special Chars are removed"
			}
		],
		de : [
			{
				"key" : "text",
				"label": "Text",
				"type": "text",
				"desc": "In diesem Text werden die Sonderzeichen gelöscht"
			}
		]
	},
	tags: ["TAGS.TEXT"],
	hideInToolbox: null,
	hideOnSimpleMode: null,
	tests: () => {
	}
})


function isBlank(text_or_object) {
	if(text_or_object === null || typeof text_or_object === 'undefined') return true;
	if(
			typeof text_or_object==='string' ||
			typeof text_or_object==='boolean' ||
			typeof text_or_object==='number'
	) {
		return stringOf(text_or_object).trim().length < 1;
	}
	if(text_or_object.length) {
		return text_or_object.length < 1;
	}
	var keys = Object.keys(text_or_object);
	if(keys.length) {
		return keys.length < 1;
	}
	return true;
}
tools.add({
	id:"isBlank",
	impl: isBlank,
	aliases: {
		en: "isBlank",
		de: "istLeer"
	},
	argsOld: {
		en: "text_or_object",
		de: "text_oder_objekt"
	},
	args: {
		en : [
			{
				"key" : "text",
				"label": "Text",
				"type": "text",
				"desc": "Check weather the input is empty"
			}
		],
		de : [
			{
				"key" : "text",
				"label": "Text",
				"type": "text",
				"desc": "Überprüfung ob die Eingabe leer ist"
			}
		]
	},
	tags: ["TAGS.CONDITIONAL"],
	hideInToolbox: null,
	hideOnSimpleMode: null,
	tests: () => {
		tools.expect(isBlank("2")).toBe(false);
		tools.expect(isBlank(2)).toBe(false);
		tools.expect(isBlank("")).toBe(true);
		tools.expect(isBlank("    ")).toBe(true);
		tools.expect(isBlank([])).toBe(true);
		tools.expect(isBlank({})).toBe(true);
		tools.expect(isBlank(null)).toBe(true);
		tools.expect(isBlank(['a'])).toBe(false);
		tools.expect(isBlank({a: 'b'})).toBe(false);
	}
})


function isNotBlank(text_or_object) {
	return !isBlank(text_or_object);
}
tools.add({
	id:"isNotBlank",
	impl: isNotBlank,
	aliases: {
		en: "isNotBlank",
		de: "istNichtLeer"
	},
	argsOld: {
		en: "text_or_object",
		de: "text_oder_objekt"
	},
	args: {
		en : [
			{
				"key" : "text",
				"label": "Text",
				"type": "text",
				"desc": "Check weather the input is not empty"
			}
		],
		de : [
			{
				"key" : "text",
				"label": "Text",
				"type": "text",
				"desc": "Überprüfung ob die Eingabe nicht leer ist"
			}
		]
	},
	tags: ["TAGS.CONDITIONAL"],
	hideInToolbox: null,
	hideOnSimpleMode: null,
	tests: () => {
		tools.expect(isNotBlank("2")).toBe(true);
		tools.expect(isNotBlank(2)).toBe(true);
		tools.expect(isNotBlank("")).toBe(false);
		tools.expect(isNotBlank("    ")).toBe(false);
		tools.expect(isNotBlank([])).toBe(false);
		tools.expect(isNotBlank({})).toBe(false);
		tools.expect(isNotBlank(null)).toBe(false);
		tools.expect(isNotBlank(['a'])).toBe(true);
		tools.expect(isNotBlank({a: 'b'})).toBe(true);
	}
})


function startsNumeric(text) {
	return matches(text, /^[\d]/);
}
tools.add({
	id:"startsNumeric",
	impl: startsNumeric,
	aliases: {
		en: "startsNumeric",
		de: "beginntMitZahl"
	},
	argsOld: {
		en: "text",
		de: "text"
	},
	args: {
		en : [
			{
				"key" : "text",
				"label": "Text",
				"type": "text",
				"desc": "Check weather the input starts with a number"
			}
		],
		de : [
			{
				"key" : "text",
				"label": "Text",
				"type": "text",
				"desc": "Überprüfung ob die Eingabe mit einer Zahl beginnt"
			}
		]
	},
	tags: ["TAGS.TEXT", "TAGS.CONDITIONAL"],
	hideInToolbox: null,
	hideOnSimpleMode: null,
	tests: () => {
	}
})


function isNumeric(text) {
	return matches(text, '^' + numberPattern().source + '$');
}
tools.add({
	id:"isNumeric",
	impl: isNumeric,
	aliases: {
		en: "isNumeric",
		de: "istZahl"
	},
	argsOld: {
		en: "text",
		de: "text"
	},
	args: {
		en : [
			{
				"key" : "text",
				"label": "Text",
				"type": "text",
				"desc": "Check weather the input is a number"
			}
		],
		de : [
			{
				"key" : "text",
				"label": "Text",
				"type": "text",
				"desc": "Überprüfung ob die Eingabe eine Zahl ist"
			}
		]
	},
	tags: ["TAGS.TEXT", "TAGS.CONDITIONAL"],
	hideInToolbox: null,
	hideOnSimpleMode: null,
	tests: () => {
		tools.expect(isNumeric("2")).toBe(true);
		tools.expect(isNumeric("23")).toBe(true);
		tools.expect(isNumeric("23,4")).toBe(true);
		tools.expect(isNumeric("23.4")).toBe(true);
		tools.expect(isNumeric("123.456,789")).toBe(true);
		tools.expect(isNumeric("12a3.456,789")).toBe(false);
		tools.expect(isNumeric("123.456,789.")).toBe(false);
	}
})


function decode() {
	var input = arguments[0];

	for (var i = 1; i < arguments.length - 1; i += 2) {
		var replacement = stringOf(arguments[i + 1]);
		if(arguments[i] instanceof RegExp) {
			var match = arguments[i];
			if (match.test(stringOf(input))) {
				return replacement
			}
		} else {
			if(containsText(input, arguments[i])) {
				return replacement
			}
		}
	}
	if (arguments[i]) {
		return arguments[i].toString()
	}
	return ""
}
tools.add({
	id:"decode",
	impl: decode,
	aliases: {
		en: "decode",
		de: "findeUndMappe"
	},
	argsOld: {
		en: "text, textToSearch_1, textToReplace_1, textToSearch_2, textToReplace_2, ..., fallback",
		de: "text, suchtext_1, zuErsetzenderText_1, suchtext_2, zuErsetzenderText_2, ..., fallback"
	},
	args: {
		en : [
			{
				"key" : "text",
				"label": "Text",
				"type": "text",
				"desc": "The text to be searched"
			},
			{
				"key" : "textToSearch_1",
				"label": "Search",
				"type": "text",
				"desc": "First search string or pattern"
			},
			{
				"key" : "textToReplace_1",
				"label": "Replace",
				"type": "text",
				"desc": "First string for replace"
			},
			{
				"key" : "textToSearch_2",
				"label": "Search",
				"type": "text",
				"desc": "Second search string or pattern"
			},
			{
				"key" : "textToReplace_2",
				"label": "Replace",
				"type": "text",
				"desc": "Second string for replace"
			},
			{
				"key" : "...",
				"label": "",
				"type": "text",
				"desc": ""
			},
			{
				"key" : "fallback",
				"label": "Text",
				"type": "text",
				"desc": "If there is nothing found use this fallback"
			}
		],
		de : [
			{
				"key" : "text",
				"label": "Text",
				"type": "text",
				"desc": "Der Text in dem gesucht wird"
			},
			{
				"key" : "textToSearch_1",
				"label": "Suchtext",
				"type": "text",
				"desc": "Erster Text nach dem gesucht wird"
			},
			{
				"key" : "textToReplace_1",
				"label": "Ersatztext",
				"type": "text",
				"desc": "Durch diesen Text wird der erste Suchtext ersetzt"
			},
			{
				"key" : "textToSearch_2",
				"label": "Suchtext",
				"type": "text",
				"desc": "Zweiter Text nach dem gesucht wird"
			},
			{
				"key" : "textToReplace_2",
				"label": "Ersatztext",
				"type": "text",
				"desc": "Durch diesen Text wird der zweite Suchtext ersetzt"
			},
			{
				"key" : "...",
				"label": "",
				"type": "text",
				"desc": ""
			},
			{
				"key" : "fallback",
				"label": "Text",
				"type": "text",
				"desc": "Dieser Text wird verwendet wenn die Suche nicht erfolgreich war"
			}
		]
	},
	tags: ["TAGS.EXTRACT"],
	hideInToolbox: null,
	hideOnSimpleMode: true,
	tests: () => {
		tools.expect(decode("some words", "some", "another", "")).toBe("another");
	}
})


function decodeAll() {
	var checkDuplicate = function(arr, elm) {
		if(arr.indexOf(elm) < 0) {
			arr.push(elm);
		}
		return arr;
	};
	var input = arguments[0];
	var replacements = [];
	for (var i = 1; i < arguments.length - 1; i += 2) {
		var replacement = stringOf(arguments[i + 1]);
		if(arguments[i] instanceof RegExp) {
			var match = arguments[i];
			if (match.test(stringOf(input))) {
				checkDuplicate(replacements, replacement)
			}
		} else {
			if(containsText(input, arguments[i])) {
				checkDuplicate(replacements, replacement)
			}
		}
	}
	if (arguments[i] && replacements.length === 0) {
		replacements.push(arguments[i])
	}
	return replacements;
}
tools.add({
	id:"decodeAll",
	impl: decodeAll,
	aliases: {
		en: "decodeAll",
		de: "findeUndMappeAlles"
	},
	argsOld: {
		en: "text, textToSearch_1, textToReplace_1, textToSearch_2, textToReplace_2, ..., fallback",
		de: "text, suchtext_1, zuErsetzenderText_1, suchtext_2, zuErsetzenderText_2, ..., fallback"
	},
	args: {
		en : [
			{
				"key" : "text",
				"label": "Text",
				"type": "text",
				"desc": "The text to be searched"
			},
			{
				"key" : "textToSearch_1",
				"label": "Search",
				"type": "text",
				"desc": "First search string or pattern"
			},
			{
				"key" : "textToReplace_1",
				"label": "Replace",
				"type": "text",
				"desc": "First string for replace"
			},
			{
				"key" : "textToSearch_2",
				"label": "Search",
				"type": "text",
				"desc": "Second search string or pattern"
			},
			{
				"key" : "textToReplace_2",
				"label": "Replace",
				"type": "text",
				"desc": "Second string for replace"
			},
			{
				"key" : "...",
				"label": "",
				"type": "text",
				"desc": ""
			},
			{
				"key" : "fallback",
				"label": "Text",
				"type": "text",
				"desc": "If there is nothing found use this fallback"
			}
		],
		de : [
			{
				"key" : "text",
				"label": "Text",
				"type": "text",
				"desc": "Der Text in dem gesucht wird"
			},
			{
				"key" : "textToSearch_1",
				"label": "Suchtext",
				"type": "text",
				"desc": "Erster Text nach dem gesucht wird"
			},
			{
				"key" : "textToReplace_1",
				"label": "Ersatztext",
				"type": "text",
				"desc": "Durch diesen Text wird der erste Suchtext ersetzt"
			},
			{
				"key" : "textToSearch_2",
				"label": "Suchtext",
				"type": "text",
				"desc": "Zweiter Text nach dem gesucht wird"
			},
			{
				"key" : "textToReplace_2",
				"label": "Ersatztext",
				"type": "text",
				"desc": "Durch diesen Text wird der zweite Suchtext ersetzt"
			},
			{
				"key" : "...",
				"label": "",
				"type": "text",
				"desc": ""
			},
			{
				"key" : "fallback",
				"label": "Text",
				"type": "text",
				"desc": "Dieser Text wird verwendet wenn die Suche nicht erfolgreich war"
			}
		]
	},
	tags: ["TAGS.EXTRACT"],
	hideInToolbox: null,
	hideOnSimpleMode: true,
	tests: () => {
		tools.expect(decodeAll("some words", "some", "a", "words", "b")).jsonToBe(["a", "b"]);
		tools.expect(decodeAll("some words")).jsonToBe([]);
		tools.expect(decodeAll("some words", "some", "a", "words", "b")).jsonToBe(["a", "b"]);
		tools.expect(decodeAll("some words", "some", "a", "words", "a")).jsonToBe(["a"]);
		tools.expect(decodeAll("some other things", "josef", "a", "words", "b", "nothing")).jsonToBe(["nothing"]);
	}
})


function extractFirstTerm() {
	if(arguments.length < 2) return "";
	var decodeInputs = [arguments[0]];

	for (var i = 1; i < arguments.length; i += 1) {
		decodeInputs.push(stringOf(arguments[i]));
		decodeInputs.push(stringOf(arguments[i]));
	}
	return decode.apply(this, decodeInputs);
}
tools.add({
	id:"extractFirstTerm",
	impl: extractFirstTerm,
	aliases: {
		en: "extractFirstTerm",
		de: "extrahiereErstenBegriff"
	},
	argsOld: {
		en: "text, textToSearchAndShow_1, textToSearchAndShow_2, ...",
		de: "text, zuExtrahierendesWort_1, zuExtrahierendesWort_2, ..."
	},
	args: {
		en : [
			{
				"key" : "text",
				"label": "Text",
				"type": "text",
				"desc": "The text to be searched"
			},
			{
				"key" : "textToSearchAndShow_1",
				"label": "Search",
				"type": "text",
				"desc": "First search string or pattern"
			},
			{
				"key" : "textToSearchAndShow_2",
				"label": "Search",
				"type": "text",
				"desc": "Second search string or pattern"
			},
			{
				"key" : "...",
				"label": "",
				"type": "text",
				"desc": ""
			}
		],
		de : [
			{
				"key" : "text",
				"label": "Text",
				"type": "text",
				"desc": "Der Text in dem gesucht wird"
			},
			{
				"key" : "zuExtrahierendesWort_1",
				"label": "Suchtext",
				"type": "text",
				"desc": "Erster Text nach dem gesucht wird"
			},
			{
				"key" : "zuExtrahierendesWort_2",
				"label": "Suchtext",
				"type": "text",
				"desc": "Zweiter Text nach dem gesucht wird"
			},
			{
				"key" : "...",
				"label": "",
				"type": "text",
				"desc": ""
			}
		]
	},
	tags: ["TAGS.EXTRACT"],
	hideInToolbox: null,
	hideOnSimpleMode: true,
	tests: () => {
		tools.expect(extractFirstTerm("some words", "some")).toBe("some");
		tools.expect(extractFirstTerm("some words", "another")).toBe("");
		tools.expect(extractFirstTerm("some words", "some", "words")).toBe("some");
		tools.expect(extractFirstTerm("some Words", "words", "some")).toBe("words");
	}
})


function extractProperty(text, propertyName, fallback) {
	var regex = stringOf(propertyName) + / *[:=](.*?)[,;|\n]/.source;
	var m = stringOf(text+'|').match(new RegExp(regex, 'i'));
	return (m ? trimText(m[1]) : stringOf(fallback));
}
tools.add({
	id:"extractProperty",
	impl: extractProperty,
	aliases: {
		en: "extractProperty",
		de: "extrahiereEigenschaft"
	},
	argsOld: {
		en: "text, propertyName, fallback",
		de: "text, nameDerEigenschaft, fallback"
	},
	args: {
		en : [
			{
				"key" : "text",
				"label": "Text",
				"type": "text",
				"desc": "The text to be searched"
			},
			{
				"key" : "propertyName",
				"label": "Property",
				"type": "text",
				"desc": "Search for this property and return the value"
			},
			{
				"key" : "fallback",
				"label": "Fallback",
				"type": "text",
				"desc": "If there is nothing found use this fallback"
			}
		],
		de : [
			{
				"key" : "text",
				"label": "Text",
				"type": "text",
				"desc": "Der Text in dem gesucht wird"
			},
			{
				"key" : "nameDerEigenschaft",
				"label": "Eigenschaft",
				"type": "text",
				"desc": "Suche nach dieser Eigenschaft und gib deren Wert zurück"
			},
			{
				"key" : "fallback",
				"label": "Fallback",
				"type": "text",
				"desc": "Dieser Text wird verwendet wenn nichts gefunden wurde"
			}
		]
	},
	tags: ["TAGS.EXTRACT"],
	hideInToolbox: null,
	hideOnSimpleMode: null,
	tests: () => {
		tools.expect(extractProperty("Produkteigenschaften: Farbe: rot, Größe: XL, Hinweise: nicht schleudern", "Größe")).toBe("XL");
		tools.expect(extractProperty("Produkteigenschaften: Farbe: rot, Größe: XL, Hinweise: nicht schleudern", "hinweise")).toBe(("nicht schleudern"));
		tools.expect(extractProperty("Produkteigenschaften: Farbe: rot, Größe: XL, Hinweise: nicht schleudern", "xx", "fallback")).toBe("fallback");
	}
})


function extractFromHtmlEnum(text, propertyName, fallback) {
	var sanitizedText = text.replace(/<div.*?>/igm, '')
		.replace(/<\/div>/igm, '')
		.replace(/<span.*?>/igm, '')
		.replace(/<\/span>/igm, '')
		.replace(/<br>|<br\/>/igm, '');
	var regex = "<li>\\s*" + stringOf(propertyName) + "[ :=](.*?)</li>";
	var m = stringOf(sanitizedText).match(new RegExp(regex, 'i'));
	return (m ? trimText(m[1]) : stringOf(fallback));
}
tools.add({
	id:"extractFromHtmlEnum",
	impl: extractFromHtmlEnum,
	aliases: {
		en: "extractFromHtmlEnum",
		de: "extrahiereAusHtmlEnum"
	},
	argsOld: {
		en: "text, propertyName, fallback",
		de: "text, nameDerEigenschaft, fallback"
	},
	args: {
		en : [
			{
				"key" : "text",
				"label": "Text",
				"type": "text",
				"desc": "The text to be searched"
			},
			{
				"key" : "propertyName",
				"label": "Property",
				"type": "text",
				"desc": "Search for this property and return the value"
			},
			{
				"key" : "fallback",
				"label": "Fallback",
				"type": "text",
				"desc": "If there is nothing found use this fallback"
			}
		],
		de : [
			{
				"key" : "text",
				"label": "Text",
				"type": "text",
				"desc": "Der Text in dem gesucht wird"
			},
			{
				"key" : "nameDerEigenschaft",
				"label": "Eigenschaft",
				"type": "text",
				"desc": "Suche nach dieser Eigenschaft und gib deren Wert zurück"
			},
			{
				"key" : "fallback",
				"label": "Fallback",
				"type": "text",
				"desc": "Dieser Text wird verwendet wenn nichts gefunden wurde"
			}
		]
	},
	tags: ["TAGS.EXTRACT"],
	hideInToolbox: null,
	hideOnSimpleMode: null,
	tests: () => {
		tools.expect(extractFromHtmlEnum("<li>someStuff: other</li>", "someStuff")).toBe("other");
		tools.expect(extractFromHtmlEnum("<li><span style=\"font-size:14px;\"><span style=\"font-family: arial,helvetica,sans-serif;\">Wandstärke: 5- 6cm</span></span></li>", "Wandstärke")).toBe("5- 6cm");
	}
})


function lookupGet(matchingValue, lookupName, matchingColumn, columnToRetrieveValueFrom) {
	/* 'lookups' is injected in environment, an instance of LookupCache class in java */
	if(typeof _lookups === 'undefined') return "valueFound";
	if(!matchingColumn) matchingColumn = 'key';
	if(!columnToRetrieveValueFrom) columnToRetrieveValueFrom = 'value';
	return _lookups.getLookup(lookupName, matchingColumn, columnToRetrieveValueFrom)
		.get(matchingValue, columnToRetrieveValueFrom);
}
tools.add({
	id:"lookupGet",
	impl: lookupGet,
	aliases: {
		en: "lookupGet",
		de: "sucheUndNimm"
	},
	argsOld: {
		en: "matchingValue, lookupName, matchingColumn, columnToRetrieveValueFrom",
		de: "passenderWert, gesuchterWert, passendeSpalte, zuHolenderWertSpalte"
	},
	args: {
		en : [
			{
				"key" : "matchingValue",
				"label": "Text",
				"type": "text",
				"desc": "The text to be searched"
			},
			{
				"key" : "lookupName",
				"label": "Datentabelle",
				"type": "text",
				"desc": "Search in this data table"
			},
			{
				"key" : "matchingColumn",
				"label": "Search column",
				"type": "text",
				"desc": "Search in this column of the data table"
			},
			{
				"key" : "columnToRetrieveValueFrom",
				"label": "Return column",
				"type": "text",
				"desc": "Give back the value of this column"
			}
		],
		de : [
			{
				"key" : "passenderWert",
				"label": "Text",
				"type": "text",
				"desc": "Der Text in dem gesucht wird"
			},
			{
				"key" : "gesuchterWert",
				"label": "Datentabelle",
				"type": "text",
				"desc": "In dieser Datentabelle wird gesucht"
			},
			{
				"key" : "passendeSpalte",
				"label": "Suchspalte",
				"type": "text",
				"desc": "In dieser Spalte der Tabelle wird gesucht"
			},
			{
				"key" : "zuHolenderWertSpalte",
				"label": "Rückgabespalte",
				"type": "text",
				"desc": "Der Wert aus dieser Spalte wird zurückgegeben"
			}
		]
	},
	tags: ["TAGS.LOOKUP"],
	hideInToolbox: null,
	hideOnSimpleMode: null,
	tests: () => {
		tools.expect(lookupGet("test", "test","test", "test")).toBe("valueFound");
	}
})


function lookupGetRegExp(matchingValue, lookupName, matchingRegExpColumn, columnToRetrieveValueFrom) {
	/* 'pool' is injected in environment */
	if(typeof _lookups === 'undefined') return "valueFound";
	if(!matchingRegExpColumn) matchingRegExpColumn = 'key';
	if(!columnToRetrieveValueFrom) columnToRetrieveValueFrom = 'value';
	var lookupItems = _lookups.getLookup(lookupName, matchingRegExpColumn, columnToRetrieveValueFrom).getAllEntries();
	while(lookupItems.hasNext()) {
		const lookupItem = lookupItems.getNext();
		var regex = lookupItem.get(matchingRegExpColumn);
		if(!regex instanceof RegExp) {
			if(matchingValue.match && matchingValue.match(new RegExp(regex, 'ig'))) {
				return lookupItem.get(columnToRetrieveValueFrom);
			}
		} else {
			if(matchingValue.match && matchingValue.match(regex)) {
				results.push(lookupItem.get(columnToRetrieveValueFrom));
			}
		}
	}
	return null;
}
tools.add({
	id:"lookupGetRegExp",
	impl: lookupGetRegExp,
	aliases: {
		en: "lookupGetRegExp",
		de: "sucheUndNimmRegExp"
	},
	argsOld: {
		en: "matchingValue, lookupName, matchingRegExpColumn, columnToRetrieveValueFrom",
		de: "passenderWert, gesuchterWert, passendeRegExpSpalte, zuHolenderWertSpalte"
	},
	args: {
		en : [
			{
				"key" : "matchingValue",
				"label": "Text",
				"type": "text",
				"desc": "The text to be searched"
			},
			{
				"key" : "lookupName",
				"label": "Datentabelle",
				"type": "text",
				"desc": "Search in this data table"
			},
			{
				"key" : "matchingRegExpColumn",
				"label": "Search column",
				"type": "text",
				"desc": "Search in this column of the data table with RegEx"
			},
			{
				"key" : "columnToRetrieveValueFrom",
				"label": "Return column",
				"type": "text",
				"desc": "Give back the value of this column"
			}
		],
		de : [
			{
				"key" : "passenderWert",
				"label": "Text",
				"type": "text",
				"desc": "Der Text in dem gesucht wird"
			},
			{
				"key" : "gesuchterWert",
				"label": "Datentabelle",
				"type": "text",
				"desc": "In dieser Datentabelle wird gesucht"
			},
			{
				"key" : "passendeRegExpSpalte",
				"label": "Suchspalte",
				"type": "text",
				"desc": "In dieser Spalte der Tabelle wird mit RegEx gesucht"
			},
			{
				"key" : "zuHolenderWertSpalte",
				"label": "Rückgabespalte",
				"type": "text",
				"desc": "Der Wert aus dieser Spalte wird zurückgegeben"
			}
		]
	},
	tags: ["TAGS.LOOKUP"],
	hideInToolbox: null,
	hideOnSimpleMode: null,
	tests: () => {
		tools.expect(lookupGetRegExp("test", "test","test", "test")).toBe("valueFound");
		tools.expect(lookupGetRegExp("test", "test",/test/g, "test")).toBe("valueFound");
		tools.expect(lookupGetRegExp("test", "test",/\w+/g, "test")).toBe("valueFound");
	}
})


function lookupGetAllRegExp(matchingValue, lookupName, matchingRegExpColumn, columnToRetrieveValueFrom) {
	if(typeof _lookups === 'undefined') return "valueFound";
	if(!matchingRegExpColumn) matchingRegExpColumn = 'key';
	if(!columnToRetrieveValueFrom) columnToRetrieveValueFrom = 'value';
	var results = [];
	var lookupItems = _lookups.getLookup(lookupName, matchingRegExpColumn, columnToRetrieveValueFrom).getAllEntries();
	while(lookupItems.hasNext()) {
		const lookupItem = lookupItems.getNext();
		var regex = lookupItem.get(matchingRegExpColumn);
		if(!regex instanceof RegExp) {
			if(matchingValue.match && matchingValue.match(new RegExp(regex, 'ig'))) {
				results.push(lookupItem.get(columnToRetrieveValueFrom));
			}
		} else {
			if(matchingValue.match && matchingValue.match(regex)) {
				results.push(lookupItem.get(columnToRetrieveValueFrom));
			}
		}
	}
	return results;
}
tools.add({
	id:"lookupGetAllRegExp",
	impl: lookupGetAllRegExp,
	aliases: {
		en: "lookupGetAllRegExp",
		de: "sucheUndNimmAlleRegExp"
	},
	argsOld: {
		en: "matchingValue, lookupName, matchingRegExpColumn, columnToRetrieveValueFrom",
		de: "passenderWert, gesuchterWert, passendeRegExpSpalte, zuHolenderWertSpalte"
	},
	args: {
		en : [
			{
				"key" : "matchingValue",
				"label": "Text",
				"type": "text",
				"desc": "The text to be searched"
			},
			{
				"key" : "lookupName",
				"label": "Datentabelle",
				"type": "text",
				"desc": "Search in this data table"
			},
			{
				"key" : "matchingRegExpColumn",
				"label": "Search column",
				"type": "text",
				"desc": "Search in this column of the data table with RegEx"
			},
			{
				"key" : "columnToRetrieveValueFrom",
				"label": "Return column",
				"type": "text",
				"desc": "Give back the value of this column"
			}
		],
		de : [
			{
				"key" : "passenderWert",
				"label": "Text",
				"type": "text",
				"desc": "Der Text in dem gesucht wird"
			},
			{
				"key" : "gesuchterWert",
				"label": "Datentabelle",
				"type": "text",
				"desc": "In dieser Datentabelle wird gesucht"
			},
			{
				"key" : "passendeRegExpSpalte",
				"label": "Suchspalte",
				"type": "text",
				"desc": "In dieser Spalte der Tabelle wird mit RegEx gesucht"
			},
			{
				"key" : "zuHolenderWertSpalte",
				"label": "Rückgabespalte",
				"type": "text",
				"desc": "Der Wert aus dieser Spalte wird zurückgegeben"
			}
		]
	},
	tags: ["TAGS.LOOKUP"],
	hideInToolbox: null,
	hideOnSimpleMode: null,
	tests: () => {
		tools.expect(lookupGetAllRegExp("test", "test","test", "test")).toBe("valueFound");
		tools.expect(lookupGetAllRegExp("test", "test",/test/g, "test")).toBe("valueFound");
		tools.expect(lookupGetAllRegExp("test", "test",/\w+/g, "test")).toBe("valueFound");
	}
})


function formatAsHtmlBulletpoints() {
	if(arguments.length < 1)
		return '';
	return '<ul><li>' + Array.from(arguments).flat().join('</li><li>')+'</li></ul>';
}
tools.add({
	id:"formatAsHtmlBulletpoints",
	impl: formatAsHtmlBulletpoints,
	aliases: {
		en: "formatAsHtmlBulletpoints",
		de: "formatiereAlsHtmlAufzählung"
	},
	argsOld: {
		en: "something1, something2, ...",
		de: "argument1, argument2, ..."
	},
	args: {
		en : [
			{
				"key" : "something1",
				"label": "Text",
				"type": "text",
				"desc": "First row"
			},
			{
				"key" : "something2",
				"label": "Text",
				"type": "text",
				"desc": "Second row"
			},
			{
				"key" : "...",
				"label": "",
				"type": "text",
				"desc": ""
			}
		],
		de : [
			{
				"key" : "argument1",
				"label": "Text",
				"type": "text",
				"desc": "Erste Zeile"
			},
			{
				"key" : "argument2",
				"label": "Suchtext",
				"type": "text",
				"desc": "Zweite Zeile"
			},
			{
				"key" : "...",
				"label": "",
				"type": "text",
				"desc": ""
			}
		]
	},
	tags: ["TAGS.FORMAT"],
	hideInToolbox: null,
	hideOnSimpleMode: true,
	tests: () => {
	}
})


function formatAsNumber(value, overrideLocale) {
	if(typeof _locale === 'undefined') _locale = "de-DE";
	let locale = overrideLocale;
	if(!locale && typeof _locale !== 'undefined') locale = _locale;
	if(!locale) locale = 'de-DE';
	return new Intl.NumberFormat(locale).format(value);
}
tools.add({
	id:"formatAsNumber",
	impl: formatAsNumber,
	aliases: {
		en: "formatAsNumber",
		de: "formatiereAlsZahl"
	},
	argsOld: {
		en: "value, locale",
		de: "wert, länderFormat"
	},
	args: {
		en : [
			{
				"key" : "value",
				"label": "Value",
				"type": "text",
				"desc": "The value to format"
			},
			{
				"key" : "locale",
				"label": "Locale",
				"type": "text",
				"desc": "Locale to use/override"
			}
		],
		de : [
			{
				"key" : "wert",
				"label": "Wert",
				"type": "text",
				"desc": "Die zu formatierende Zahl"
			},
			{
				"key" : "länderFormat",
				"label": "Länderformat",
				"type": "text",
				"desc": "Das zu verwendende Länderformat"
			}
		]
	},
	tags: ["TAGS.FORMAT"],
	hideInToolbox: null,
	hideOnSimpleMode: null,
	tests: () => {
		tools.expect(formatAsNumber("8.8")).toBe("8,8");
	}
})


function textToNumber(value, overrideLocale) {
	if(typeof _locale === 'undefined') _locale = "de-DE";
	let locale = overrideLocale;
	if(!locale && typeof _locale !== 'undefined') locale = _locale;
	if(!locale) locale = 'de-DE';
	return _numberParser(value, locale);
}
tools.add({
	id:"textToNumber",
	impl: textToNumber,
	aliases: {
		en: "textToNumber",
		de: "textAlsZahl"
	},
	argsOld: {
		en: "value, locale",
		de: "wert, länderFormat"
	},
	args: {
		en : [
			{
				"key" : "value",
				"label": "Text",
				"type": "text",
				"desc": "The Text to format"
			},
			{
				"key" : "locale",
				"label": "Locale",
				"type": "text",
				"desc": "Locale to use/override"
			}
		],
		de : [
			{
				"key" : "wert",
				"label": "Text",
				"type": "text",
				"desc": "Der zu formatierende Text"
			},
			{
				"key" : "länderFormat",
				"label": "Länderformat",
				"type": "text",
				"desc": "Das zu verwendende Länderformat"
			}
		]
	},
	tags: ["TAGS.FORMAT"],
	hideInToolbox: null,
	hideOnSimpleMode: null,
	tests: () => {
		tools.expect(textToNumber("1,223.3", 'en-US')).toBe(1223.3);
		tools.expect(textToNumber("1.223,3")).toBe(1223.3);
		tools.expect(textToNumber("1234")).toBe(1234);
	}
})


function _numberParser(value, locale) {
	const parts = new Intl.NumberFormat(locale).formatToParts(12345.6);
	const numerals = [...new Intl.NumberFormat(locale, {useGrouping: false}).format(9876543210)].reverse();
	const index = new Map(numerals.map((d, i) => [d, i]));
	let _group = new RegExp(`[${parts.find(d => d.type === "group").value}]`, "g");
	let _decimal = new RegExp(`[${parts.find(d => d.type === "decimal").value}]`);
	let _numeral = new RegExp(`[${numerals.join("")}]`, "g");
	let _index = d => index.get(d);
	return (v = value.trim()
		.replace(_group, "")
		.replace(_decimal, ".")
		.replace(_numeral, _index)) ? +v : null;
}
tools.add({
	id:"_numberParser",
	impl: _numberParser,
	aliases: {
		en: "_numberParser",
		de: "_numberParser"
	},
	argsOld: {
		en: "value, locale, ...",
		de: "wert, länderFormat, ..."
	},
	args: {
		en : [
			{
				"key" : "value",
				"label": "Value",
				"type": "text",
				"desc": "The value to format"
			},
			{
				"key" : "locale",
				"label": "Locale",
				"type": "text",
				"desc": "Locale to use/override"
			},
			{
				"key" : "...",
				"label": "",
				"type": "text",
				"desc": ""
			}
		],
		de : [
			{
				"key" : "wert",
				"label": "Wert",
				"type": "text",
				"desc": "Die zu formatierende Zahl"
			},
			{
				"key" : "länderFormat",
				"label": "Länderformat",
				"type": "text",
				"desc": "Das zu verwendende Länderformat"
			},
			{
				"key" : "...",
				"label": "",
				"type": "text",
				"desc": ""
			}
		]
	},
	tags: ["TAGS.FORMAT"],
	hideInToolbox: true,
	hideOnSimpleMode: true,
	tests: () => {
	}
})


function regExpMatch(input, match, fallback) {
	var matched = stringOf(input).match(match);
	if (matched !== null) {
		return matched[0];
	}
	else {
		return fallback !== undefined ? fallback : input;
	}
}
tools.add({
	id:"regExpMatch",
	impl: regExpMatch,
	aliases: {
		en: "regExpMatch",
		de: "regExpMatch"
	},
	argsOld: {
		en: "",
		de: ""
	},
	args: {
		en: [],
		de: []
	},
	tags: ["TAGS.TEXT"],
	hideInToolbox: true,
	hideOnSimpleMode: true,
	tests: () => {
	}
})


function regExpReplace(input, search, replace) {
	return replaceInText(input, search, replace);
}
tools.add({
	id:"regExpReplace",
	impl: regExpReplace,
	aliases: {
		en: "regExpReplace",
		de: "regExpReplace"
	},
	argsOld: {
		en: "",
		de: ""
	},
	args: {
		en: [],
		de: []
	},
	tags: ["TAGS.TEXT"],
	hideInToolbox: true,
	hideOnSimpleMode: true,
	tests: () => {
	}
})


function matches(input, expr) {
	return stringOf(input).search(expr) >= 0;
}
tools.add({
	id:"matches",
	impl: matches,
	aliases: {
		en: "matches",
		de: "matches"
	},
	argsOld: {
		en: "",
		de: ""
	},
	args: {
		en: [],
		de: []
	},
	tags: ["TAGS.TEXT"],
	hideInToolbox: true,
	hideOnSimpleMode: true,
	tests: () => {
	}
})


function addCloudinaryTransformation(cloudinaryUrl, publicId, transformation) {
	return replaceInText(cloudinaryUrl, publicId, transformation+ "/"+ publicId);
}
tools.add({
	id:"addCloudinaryTransformation",
	impl: addCloudinaryTransformation,
	aliases: {
		en: "addCloudinaryTransformation",
		de: "hinzufügenCloudinaryTransformation"
	},
	argsOld: {
		en: "cloudinaryUrl, publicId, transformation",
		de: "cloudinaryUrl, publicId, transformation"
	},
	tags: ["TAGS.CLOUDINARY"],
	hideInToolbox: false,
	hideOnSimpleMode: null,
	tests: () => {
		tools.expect(addCloudinaryTransformation("https://res.cloudinary.com/ecubede/bekleidung/4029051623453.jpeg", "bekleidung/4029051623453", "cx32x44"))
			.toBe("https://res.cloudinary.com/ecubede/cx32x44/bekleidung/4029051623453.jpeg");
	}
})


function addCloudinaryNamedTransformation(cloudinaryUrl, publicId, transformation) {
	return addCloudinaryTransformation(cloudinaryUrl, publicId, "t_" + transformation);
}
tools.add({
	id:"addCloudinaryNamedTransformation",
	impl: addCloudinaryNamedTransformation,
	aliases: {
		en: "addCloudinaryNamedTransformation",
		de: "hinzufügenCloudinaryNamedTransformation"
	},
	argsOld: {
		en: "cloudinaryUrl, publicId, named_transformation",
		de: "cloudinaryUrl, publicId, named_transformation"
	},
	args: {
		en : [
			{
				"key" : "cloudinaryUrl",
				"label": "Url",
				"type": "text",
				"desc": "The url to be used"
			},
			{
				"key" : "publicId",
				"label": "Public id",
				"type": "text",
				"desc": "The ID to use"
			},
			{
				"key" : "named_transformation",
				"label": "Transformation",
				"type": "text",
				"desc": "Transformation to perform of cloudinary"
			}
		],
		de : [
			{
				"key" : "cloudinaryUrl",
				"label": "Url",
				"type": "text",
				"desc": "Diese Url wird verwendet"
			},
			{
				"key" : "publicId",
				"label": "Public ID",
				"type": "text",
				"desc": "Diese ID wird verwendet"
			},
			{
				"key" : "named_transformation",
				"label": "Transformation",
				"type": "text",
				"desc": "Transformation durch Cloudinary"
			}
		]
	},
	tags: ["TAGS.CLOUDINARY"],
	hideInToolbox: false,
	hideOnSimpleMode: null,
	tests: () => {
		tools.expect(addCloudinaryNamedTransformation("https://res.cloudinary.com/ecubede/bekleidung/4029051623453.jpeg", "bekleidung/4029051623453", "josef"))
			.toBe("https://res.cloudinary.com/ecubede/t_josef/bekleidung/4029051623453.jpeg");
	}
})


function convertUnit(value, factor, oldUnit, newUnit, deciPlaces) {
	if (!oldUnit) { oldUnit = '' }
	if (!newUnit) { newUnit = ''}
	if (deciPlaces == null) { deciPlaces = 0 }
	let result = "";
	const toFactor = (wert) => {
		if(deciPlaces === 0) {
			return String((parseFloat(wert) * factor));
		} else {
			return String((parseFloat(wert) * factor).toFixed(deciPlaces));
		}
	}
	if (value) {
		let rest = [];
		let werte = value.match(/-?\d*[,.]?\d+/g);
		if (!werte) {
			return value;
		}
		for (i=0; i < (werte.length); i++) {
			rest[i] = value.slice(0,value.indexOf(werte[i]));
			value = value.slice(value.indexOf(werte[i]) + werte[i].length,value.length);
		}
		result = result + rest[0]
		rest[werte.length] = value;
		let realDecimalSeparator = '.';
		for (i = 0;i < werte.length; i++) {
			let wert = werte[i];
			if (wert.includes(',')) realDecimalSeparator = ','
			wert = wert.replace(',', '.');
			const unit = rest[i + 1].match(/\w*/g)
			if (oldUnit && newUnit) {
				if (unit[1] && unit[1] === oldUnit) {
					wert = toFactor(wert)
					rest[i + 1] = rest[i + 1].replace(oldUnit, newUnit);
				}
			} else if (!oldUnit && newUnit) {
				if (unit[1] && newUnit !== unit[1]) {
					wert = toFactor(wert)
					rest[i + 1] = " " + newUnit + rest[i + 1];
				}
			} else if (!oldUnit && !newUnit) {
				wert = toFactor(wert);
			}
			wert = wert.replace(',', realDecimalSeparator);
			wert = wert.replace('.', realDecimalSeparator);
			result = result + wert + rest[i + 1];

		}
	} else {
		return value;
	}
	return result;
}
tools.add({
	id:"convertUnit",
	impl: convertUnit,
	aliases: {
		en: "convertUnit",
		de: "rechneEinheitUm"
	},
	argsOld: {
		en: "value, factor, oldUnit, newUnit, decimalPlaces",
		de: "wert, faktor, alteEinheit, neueEinheit, dezimalStellen"
	},
	args: {
		en : [
			{
				"key" : "value",
				"label": "Value",
				"type": "text",
				"desc": "The value to convert"
			},
			{
				"key" : "factor",
				"label": "Factor",
				"type": "text",
				"desc": "Multiplied by this factor"
			},
			{
				"key" : "oldUnit",
				"label": "Old unit",
				"type": "text",
				"desc": "Old unit"
			},
			{
				"key" : "newUnit",
				"label": "New unit",
				"type": "text",
				"desc": "New unit to use"
			},
			{
				"key" : "decimalPlaces",
				"label": "Decimal Places",
				"type": "text",
				"desc": "Decimal Places"
			}
		],
		de : [
			{
				"key" : "wert",
				"label": "Wert",
				"type": "text",
				"desc": "Dieser Wert wird konvertiert"
			},
			{
				"key" : "faktor",
				"label": "Factor",
				"type": "text",
				"desc": "Multiplikator"
			},
			{
				"key" : "alteEinheit",
				"label": "Alte Einheit",
				"type": "text",
				"desc": "Alte Einheit"
			},
			{
				"key" : "neueEinheit",
				"label": "Neue Einheit",
				"type": "text",
				"desc": "Diese Einheit wird verwendet"
			},
			{
				"key" : "dezimalStellen",
				"label": "Dezimalstellen",
				"type": "text",
				"desc": "Dezimalstellen nach dem Komma"
			}
		]
	},
	tags: ["TAGS.UNIT"],
	hideInToolbox: false,
	hideOnSimpleMode: null,
	tests: () => {
		tools.expect(convertUnit("23 cm and 23 cm", 10, "cm", "mm")).toBe("230 mm and 230 mm");
		tools.expect(convertUnit("amazing 2,3 cm thing", 10, "cm", "mm")).toBe("amazing 23 mm thing");
		tools.expect(convertUnit("3 x 23 cmm and", 10, "cm", "mm")).toBe("3 x 23 cmm and");
		tools.expect(convertUnit("3 x 23 cm", 10, "", "mm")).toBe("30 mm x 230 mm cm");
		tools.expect(convertUnit("23 cm", 10, "cm", "mm")).toBe("230 mm");
		tools.expect(convertUnit("23 cm", 10)).toBe("230 cm");
		tools.expect(convertUnit("23 mm", 0.1, "mm", "cm", 1)).toBe("2.3 cm");
		tools.expect(convertUnit("23,5 mm", 0.1, "mm", "cm")).toBe("2,35 cm");
		tools.expect(convertUnit("3 x 23 cm", 10, "cm", "mm")).toBe("3 x 230 mm");
		tools.expect(convertUnit("3 x 23 cm", 10, "", "mm")).toBe("30 mm x 230 mm cm");
		tools.expect(convertUnit("-23 cm", 10, "", "mm")).toBe("-230 mm cm");
		tools.expect(convertUnit("23 cm", 10, "cm", "mm")).toBe("230 mm");
		tools.expect(convertUnit("14 x 5,5 cm, H: 14 cm", 10, "cm", "mm")).toBe("14 x 55 mm, H: 140 mm");
		tools.expect(convertUnit("14 x 5,5 cm, H: 14 cm", 10, "", "mm")).toBe("140 mm x 55 mm cm, H: 140 mm cm");
		tools.expect(convertUnit("14 x 5,5 cm, H: 14 mm", 10, "", "mm")).toBe("140 mm x 55 mm cm, H: 14 mm");
		tools.expect(convertUnit("14 x 5,5 cm, H: 14 cm", 10, "", "")).toBe("140 x 55 cm, H: 140 cm");
		tools.expect(convertUnit("14 x 5 cm, H: 16 cm", 0.01, "cm", "m")).toBe("14 x 0.05 m, H: 0.16 m");
		tools.expect(convertUnit("14 x 5,5 cm, H: 16 cm", 0.01, "cm", "m")).toBe("14 x 0,055 m, H: 0,16 m");
		tools.expect(convertUnit("14 x 5,5 cm, H: 16 cm", 0.01, "cm", "m", 2)).toBe("14 x 0,06 m, H: 0,16 m");
		tools.expect(convertUnit("1,2", 0.01, "", "")).toBe("0,012");
		tools.expect(convertUnit("1,23", 0.01, "", "", 4)).toBe("0,0123");
		tools.expect(convertUnit("12,3", 0.01, "", "", 3)).toBe("0,123");
	}
})


function normalizeValues(value, deciSeparator, deciPlaces) {
	if (deciPlaces == null) { deciPlaces = 0 }
	let result = "";
	if (value) {
		var rest = [];
		werte = value.match(/-?\d*[,.]?\d+/g);
		if (werte == null) {
			return value;
		}
		for (i=0; i < (werte.length); i++) {
			rest[i] = value.slice(0,value.indexOf(werte[i]));
			value = value.slice(value.indexOf(werte[i]) + werte[i].length,value.length);
		}
		result = result + rest[0]
		rest[werte.length] = value;
		for (i=0;i < (werte.length); i++) {
			let realDecimalSeparator = '.';
			let wert = werte[i];
			if (wert.includes(',')) realDecimalSeparator = ',';
			wert=wert.replace(',','.');
			if (deciPlaces !== 0) {
				wert=String((parseFloat(wert)).toFixed(deciPlaces));
			}
			if (deciSeparator) {
				wert=wert.replace('.', deciSeparator);
			}
			else {
				wert=wert.replace('.', realDecimalSeparator);
			}
			result = result + wert + rest[i+1];
		}
	} else {
		return value;
	}
	return result;
}
tools.add({
	id:"normalizeValues",
	impl: normalizeValues,
	aliases: {
		en: "normalizeValues",
		de: "normalisiereWerte"
	},
	argsOld: {
		en: "value, decimalSeparator, decimalPlaces",
		de: "wert, dezimalTrennzeichen, dezimalStellen"
	},
	args: {
		en : [
			{
				"key" : "value",
				"label": "Value",
				"type": "text",
				"desc": "The value to convert"
			},
			{
				"key" : "decimalSeparator",
				"label": "Decimal separator",
				"type": "text",
				"desc": "Decimal separator"
			},
			{
				"key" : "decimalPlaces",
				"label": "Decimal places",
				"type": "text",
				"desc": "Decimal places"
			}
		],
		de : [
			{
				"key" : "wert",
				"label": "Wert",
				"type": "text",
				"desc": "Dieser Wert wird normalisiert"
			},
			{
				"key" : "dezimalTrennzeichen",
				"label": "Trennzeichen",
				"type": "text",
				"desc": "Trennzeichen"
			},
			{
				"key" : "dezimalStellen",
				"label": "Dezimalstellen",
				"type": "text",
				"desc": "Anzahl der Dezimalstellen"
			}
		]
	},
	tags: ["TAGS.UNIT"],
	hideInToolbox: false,
	hideOnSimpleMode: null,
	tests: () => {
		tools.expect(normalizeValues("23.1 and 23.22", '.', 1)).toBe("23.1 and 23.2");
		tools.expect(normalizeValues("23 and 23.225 and some", '.', 1)).toBe("23.0 and 23.2 and some");
		tools.expect(normalizeValues("etwa 2,3 megawatts", '.')).toBe("etwa 2.3 megawatts");
	}
})


function extractValueBeforeText(value,text) {
	if (value.includes(text)) {
		let werte = new RegExp('(?<value>-?\\d*[,.]?\\d+)(\\s)*?' + escapeRegExp(text), 'g').exec(value)
		if(werte && werte.groups.value) {
			return werte.groups.value;
		}
	}
	return value;
}
tools.add({
	id:"extractValueBeforeText",
	impl: extractValueBeforeText,
	aliases: {
		en: "extractValueBeforeText",
		de: "extrahiereWertVorText"
	},
	argsOld: {
		en: "value, text",
		de: "wert, text"
	},
	args: {
		en : [
			{
				"key" : "value",
				"label": "Value",
				"type": "text",
				"desc": "Attribute to search"
			},
			{
				"key" : "text",
				"label": "Text",
				"type": "text",
				"desc": "If this text is found the value before is extracted"
			}
		],
		de : [
			{
				"key" : "wert",
				"label": "Wert",
				"type": "text",
				"desc": "In diesem Attribut wird gesucht"
			},
			{
				"key" : "text",
				"label": "Text",
				"type": "text",
				"desc": "Wird dieser Text gefunden wird der Wert davor zurückgegeben"
			}
		]
	},
	tags: ["TAGS.EXTRACT"],
	hideInToolbox: false,
	hideOnSimpleMode: null,
	tests: () => {
		tools.expect(extractValueBeforeText("some 23.1 mangos and 4 apples ", 'mangos')).toBe("23.1");
		tools.expect(extractValueBeforeText("Dimensions of 25cm and ", 'cm')).toBe("25");
		tools.expect(extractValueBeforeText("range of 3..5 ", '..')).toBe("3");
		tools.expect(extractValueBeforeText("21,3     text blabla", 'text')).toBe("21,3");
		tools.expect(extractValueBeforeText('74-77','-')).toBe("74");
	}
})


function extractValueAfterText(value,text) {
	if (value.includes(text)) {
		let werte = new RegExp(escapeRegExp(text) + '(\\s)*?(?<value>-?\\d*[,.]?\\d+)', 'g').exec(value)
		if(werte && werte.groups.value) {
			return werte.groups.value;
		}
	}

	return value;
}
tools.add({
	id:"extractValueAfterText",
	impl: extractValueAfterText,
	aliases: {
		en: "extractValueAfterText",
		de: "extrahiereWertNachText"
	},
	argsOld: {
		en: "value, text",
		de: "wert, text"
	},
	args: {
		en : [
			{
				"key" : "value",
				"label": "Value",
				"type": "text",
				"desc": "Attribute to search"
			},
			{
				"key" : "text",
				"label": "Text",
				"type": "text",
				"desc": "If this text is found the value after is extracted"
			}
		],
		de : [
			{
				"key" : "wert",
				"label": "Wert",
				"type": "text",
				"desc": "In diesem Attribut wird gesucht"
			},
			{
				"key" : "text",
				"label": "Text",
				"type": "text",
				"desc": "Wird dieser Text gefunden wird der Wert danach zurückgegeben"
			}
		]
	},
	tags: ["TAGS.EXTRACT"],
	hideInToolbox: false,
	hideOnSimpleMode: null,
	tests: () => {
		tools.expect(extractValueAfterText("some 23.1 mangos and 4 apples ", 'some')).toBe("23.1");
		tools.expect(extractValueAfterText("Price of $200", '$')).toBe("200");
		tools.expect(extractValueAfterText("range of 3..5 ", '..')).toBe("5");
	}
})


function escapeRegExp(string) {
	return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}
tools.add({
	id:"escapeRegExp",
	impl: escapeRegExp,
	aliases: {
		en: "escapeRegExp",
		de: "escapeRegExp"
	},
	argsOld: {
		en: "text",
		de: "text"
	},
	args: {
		en : [
			{
				"key" : "text",
				"label": "Text",
				"type": "text",
				"desc": "Text to escape"
			}
		],
		de : [
			{
				"key" : "text",
				"label": "Text",
				"type": "text",
				"desc": "Text"
			}
		]
	},
	tags: ["TAGS.EXTRACT"],
	hideInToolbox: true,
	hideOnSimpleMode: null,
	tests: () => {
	}
})


function splitText(text, separator) {
	if (!separator) { separator = "," }
	if (text != null && text.split) {
		return text.split(separator).map(v => v.trim());
	}
	return null;
}
tools.add({
	id:"splitText",
	impl: splitText,
	aliases: {
		en: "splitText",
		de: "trenneText"
	},
	argsOld: {
		en: "text, separator",
		de: "text, separator"
	},
	args: {
		en : [
			{
				"key" : "text",
				"label": "Value",
				"type": "text",
				"desc": "Attribute to split"
			},
			{
				"key" : "separator",
				"label": "Separator",
				"type": "text",
				"desc": "What to use as separator"
			}
		],
		de : [
			{
				"key" : "text",
				"label": "Value",
				"type": "text",
				"desc": "Attribut das geteilt werden soll"
			},
			{
				"key" : "separator",
				"label": "Separator",
				"type": "text",
				"desc": "Dieser Wert wird als Trennzeichen verwendet"
			}
		]
	},
	tags: ["TAGS.TEXT"],
	hideInToolbox: false,
	hideOnSimpleMode: null,
	tests: () => {
		tools.expect(splitText("a,b,c")).jsonToBe(['a','b','c']);
		tools.expect(splitText("a, b,  c")).jsonToBe(['a','b','c']);
		tools.expect(splitText("a|b|c", '|')).jsonToBe(['a','b','c']);
		tools.expect(splitText("very nice, not nice, too nice", '|')).jsonToBe(["very nice, not nice, too nice"]);
		tools.expect(splitText("boo")).jsonToBe(["boo"]);
		tools.expect(splitText("very nice, not nice, too nice")).jsonToBe(['very nice', 'not nice', 'too nice']);
		tools.expect(splitText(['a', 'b'], ',')).jsonToBe(null);
		tools.expect(splitText([])).jsonToBe(null);
		tools.expect(splitText({a: 1, b: 2})).jsonToBe(null);
		tools.expect(splitText(null, ",")).jsonToBe(null);
	}
})


function attributes() {
	if(typeof _source === 'undefined') return ['attr1','attr2','attr3'];
	return Object.keys(JSON.parse(_source)).filter(k => !k.startsWith("_"));
}
tools.add({
	id:"attributes",
	impl: attributes,
	aliases: {
		en: "attributes",
		de: "attribute"
	},
	argsOld: {
		en: "text, separator",
		de: "text, separator"
	},
	args: {
		en : [
			{
				"key" : "text",
				"label": "Text",
				"type": "text",
				"desc": ""
			},
			{
				"key" : "separator",
				"label": "Separator",
				"type": "text",
				"desc": ""
			}
		],
		de : [
			{
				"key" : "text",
				"label": "Text",
				"type": "text",
				"desc": ""
			},
			{
				"key" : "separator",
				"label": "Separator",
				"type": "text",
				"desc": ""
			}
		]
	},
	tags: ["TAGS.TEXT"],
	hideInToolbox: true,
	hideOnSimpleMode: null,
	tests: () => {
		tools.expect(attributes()).jsonToBe(['attr1','attr2','attr3']);
	}
})


function startsWith(text, search) {

	if (search instanceof RegExp) {
		const obj = {flags: search.flags, source: search.source};
		if (!obj.source.startsWith("^")) {
			obj.source = "^" + obj.source;
			search = new RegExp(obj.source, obj.flags)
		}
		if (search.test(stringOf(text))) {
			return true
		}
	} else {
		if (text != null && text.startsWith && text.startsWith(search)) {
			return true
		}
	}
	return false
}
tools.add({
	id:"startsWith",
	impl: startsWith,
	aliases: {
		en: "startsWith",
		de: "beginntMit"
	},
	argsOld: {
		en: "text, search",
		de: "text, suchwert"
	},
	args: {
		en : [
			{
				"key" : "text",
				"label": "Value",
				"type": "text",
				"desc": "Attribute to search"
			},
			{
				"key" : "search",
				"label": "Search",
				"type": "text",
				"desc": "This text will be searched"
			}
		],
		de : [
			{
				"key" : "text",
				"label": "Text",
				"type": "text",
				"desc": "Attribut in dem gesucht werden soll"
			},
			{
				"key" : "suchwert",
				"label": "Suche",
				"type": "text",
				"desc": "Nach  diesem Wert wird gesucht"
			}
		]
	},
	tags: ["TAGS.TEXT"],
	hideInToolbox: false,
	hideOnSimpleMode: null,
	tests: () => {
		tools.expect(startsWith("super", /u../)).toBe(false);
		tools.expect(startsWith("super", /^s../)).toBe(true);
		tools.expect(startsWith("super", /s../)).toBe(true);
		tools.expect(startsWith("super", "su")).toBe(true);
		tools.expect(startsWith("Super", /^s../i)).toBe(true);
		tools.expect(startsWith("Super", "su")).toBe(false);
		tools.expect(startsWith([], "su")).toBe(false);
		tools.expect(startsWith("super", {})).toBe(false);
		tools.expect(startsWith("super")).toBe(false);
		tools.expect(startsWith()).toBe(false);
	}
})


function endsWith(text, search) {

	if (search instanceof RegExp) {
		const obj = {flags: search.flags, source: search.source};
		if (!obj.source.endsWith("$")) {
			obj.source = obj.source + "$";
			search = new RegExp(obj.source, obj.flags)
		}
		if (search.test(stringOf(text))) {
			return true
		}
	} else {
		if (text != null && text.endsWith && text.endsWith(search)) {
			return true
		}
	}
	return false
}
tools.add({
	id:"endsWith",
	impl: endsWith,
	aliases: {
		en: "endsWith",
		de: "endetMit"
	},
	argsOld: {
		en: "text, search",
		de: "text, suchwert"
	},
	args: {
		en : [
			{
				"key" : "text",
				"label": "Value",
				"type": "text",
				"desc": "Attribute to search"
			},
			{
				"key" : "search",
				"label": "Search",
				"type": "text",
				"desc": "This text will be searched"
			}
		],
		de : [
			{
				"key" : "text",
				"label": "Text",
				"type": "text",
				"desc": "Attribut in dem gesucht werden soll"
			},
			{
				"key" : "suchwert",
				"label": "Suche",
				"type": "text",
				"desc": "Nach  diesem Wert wird gesucht"
			}
		]
	},
	tags: ["TAGS.TEXT"],
	hideInToolbox: false,
	hideOnSimpleMode: null,
	tests: () => {
		tools.expect(endsWith("super", /r/)).toBe(true);
		tools.expect(endsWith("super", /u../)).toBe(false);
		tools.expect(endsWith("super", /e..$/)).toBe(false);
		tools.expect(endsWith("super", "er")).toBe(true);
		tools.expect(endsWith("SupeR", /er/i)).toBe(true);
		tools.expect(endsWith("Super", "er")).toBe(true);
		tools.expect(endsWith([], "su")).toBe(false);
		tools.expect(endsWith("super", {})).toBe(false);
		tools.expect(endsWith("super")).toBe(false);
		tools.expect(endsWith()).toBe(false);
	}
})


function someOf() {
	for (var i = 0; i < arguments.length; i++) {
		if (arguments[i] === true) {
			return true
		}
	}
	return false;
}
tools.add({
	id:"someOf",
	impl: someOf,
	aliases: {
		en: "someOf",
		de: "istEinElementWahr"
	},
	argsOld: {
		en: "something1, something2, ...",
		de: "argument1, argument2, ..."
	},
	args: {
		en : [
			{
				"key" : "something1",
				"label": "Value",
				"type": "text",
				"desc": "The value can be true or false"
			},
			{
				"key" : "something2",
				"label": "Value",
				"type": "text",
				"desc": "The value can be true or false"
			},
			{
				"key" : "...",
				"label": "",
				"type": "text",
				"desc": ""
			}
		],
		de : [
			{
				"key" : "argument1",
				"label": "Wert",
				"type": "text",
				"desc": "Kann wahr oder falsch sein"
			},
			{
				"key" : "argument2",
				"label": "Wert",
				"type": "text",
				"desc": "Kann wahr oder falsch sein"
			},
			{
				"key" : "...",
				"label": "",
				"type": "text",
				"desc": ""
			}
		]
	},
	tags: ["TAGS.CONDITIONAL"],
	hideInToolbox: false,
	hideOnSimpleMode: true,
	tests: () => {
		tools.expect(someOf(true)).toBe(true);
		tools.expect(someOf(true, false)).toBe(true);
		tools.expect(someOf(false, true)).toBe(true);
		tools.expect(someOf([], {})).toBe(false);
		tools.expect(someOf([], true, false)).toBe(true);
		tools.expect(someOf()).toBe(false);
	}
})


function allOf() {
	if (arguments.length === 0) {
		return false;
	}
	for (var i = 0; i < arguments.length; i++) {
		if (arguments[i] !== true) {
			return false;
		}
	}
	return true;
}
tools.add({
	id:"allOf",
	impl: allOf,
	aliases: {
		en: "allOf",
		de: "sindAlleElementeWahr"
	},
	argsOld: {
		en: "something1, something2, ...",
		de: "argument1, argument2, ..."
	},
	args: {
		en : [
			{
				"key" : "something1",
				"label": "Value",
				"type": "text",
				"desc": "The value can be true or false"
			},
			{
				"key" : "something2",
				"label": "Value",
				"type": "text",
				"desc": "The value can be true or false"
			},
			{
				"key" : "...",
				"label": "",
				"type": "text",
				"desc": ""
			}
		],
		de : [
			{
				"key" : "argument1",
				"label": "Wert",
				"type": "text",
				"desc": "Kann wahr oder falsch sein"
			},
			{
				"key" : "argument2",
				"label": "Wert",
				"type": "text",
				"desc": "Kann wahr oder falsch sein"
			},
			{
				"key" : "...",
				"label": "",
				"type": "text",
				"desc": ""
			}
		]
	},
	tags: ["TAGS.CONDITIONAL"],
	hideInToolbox: false,
	hideOnSimpleMode: true,
	tests: () => {
		tools.expect(allOf(true)).toBe(true);
		tools.expect(allOf(true, false)).toBe(false);
		tools.expect(allOf(true, true)).toBe(true);
		tools.expect(allOf([], {})).toBe(false);
		tools.expect(allOf([], true, false)).toBe(false);
		tools.expect(allOf()).toBe(false);
	}
})


function noneOf() {
	if (arguments.length === 0) {
		return false;
	}
	for (var i = 0; i < arguments.length; i++) {
		if (arguments[i] !== false) {
			return false;
		}
	}
	return true;
}
tools.add({
	id:"noneOf",
	impl: noneOf,
	aliases: {
		en: "noneOf",
		de: "istKeinElementWahr"
	},
	argsOld: {
		en: "something1, something2, ...",
		de: "argument1, argument2, ..."
	},
	args: {
		en : [
			{
				"key" : "something1",
				"label": "Value",
				"type": "text",
				"desc": "The value can be true or false"
			},
			{
				"key" : "something2",
				"label": "Value",
				"type": "text",
				"desc": "The value can be true or false"
			},
			{
				"key" : "...",
				"label": "",
				"type": "text",
				"desc": ""
			}
		],
		de : [
			{
				"key" : "argument1",
				"label": "Wert",
				"type": "text",
				"desc": "Kann wahr oder falsch sein"
			},
			{
				"key" : "argument2",
				"label": "Wert",
				"type": "text",
				"desc": "Kann wahr oder falsch sein"
			},
			{
				"key" : "...",
				"label": "",
				"type": "text",
				"desc": ""
			}
		]
	},
	tags: ["TAGS.CONDITIONAL"],
	hideInToolbox: false,
	hideOnSimpleMode: true,
	tests: () => {
		tools.expect(noneOf(true)).toBe(false);
		tools.expect(noneOf(true, false)).toBe(false);
		tools.expect(noneOf(false, false)).toBe(true);
		tools.expect(noneOf([], {})).toBe(false);
		tools.expect(noneOf([], true, false)).toBe(false);
		tools.expect(noneOf()).toBe(false);
	}
})


function not(value) {
	if (typeof value === "boolean") {
		return !value;
	}
	return false;
}
tools.add({
	id:"not",
	impl: not,
	aliases: {
		en: "not",
		de: "nicht"
	},
	argsOld: {
		en: "value",
		de: "wert"
	},
	args: {
		en : [
			{
				"key" : "value",
				"label": "Value",
				"type": "text",
				"desc": "Boolean to be negated"
			}
		],
		de : [
			{
				"key" : "wert",
				"label": "Wert",
				"type": "text",
				"desc": "Boolean der negiert wird"
			}
		]
	},
	tags: ["TAGS.CONDITIONAL"],
	hideInToolbox: false,
	hideOnSimpleMode: null,
	tests: () => {
		tools.expect(not(true)).toBe(false);
		tools.expect(not(false)).toBe(true);
		tools.expect(not([])).toBe(false);
		tools.expect(not({})).toBe(false);
		tools.expect(not()).toBe(false);
	}
})

function date(formatting, initialDate) {
	if (typeof initialDate === "undefined" || !initialDate) {
		initialDate = new Date();
	}
	if (typeof formatting === "undefined" || !formatting) {
		return format(initialDate, "dd.MM.yyyy")
	} else {
		return format(initialDate, formatting);
	}
}
tools.add({
	id:"date",
	impl: date,
	aliases: {
		en: "date",
		de: "datum"
	},
	argsOld: {
		en: "formatting, dateToProcess",
		de: "formatierung, datum"
	},
	args: {
		en : [
			{
				"key" : "formatting",
				"label": "Format",
				"type": "text",
				"desc": "Format of the date (optional)"
			},
			{
				"key" : "dateToProcess",
				"label": "Date",
				"type": "text",
				"desc": "Date to use (optional)"
			}
		],
		de : [
			{
				"key" : "formatierung",
				"label": "Format",
				"type": "text",
				"desc": "Datumsformatierung (optional)"
			},
			{
				"key" : "datum",
				"label": "Datum",
				"type": "text",
				"desc": "Datum (optional)"
			}
		]
	},
	tags: ["TAGS.UTIL"],
	hideInToolbox: false,
	hideOnSimpleMode: null,
	tests: () => {
		tools.expect(date('dd.MM.yyyy', Date.parse("1980/01/01"))).toBe("01.01.1980");
	}
})

function timestamp(formatting, initialDate) {
	if (typeof initialDate === "undefined" || !initialDate) {
		initialDate = new Date();
	}
	if (typeof formatting === "undefined" || !formatting) {
		return format(initialDate, "yyyyMMddhhmm")
	} else {
		return format(initialDate, formatting);
	}
}

tools.add({
	id:"timestamp",
	impl: timestamp,
	aliases: {
		en: "timestamp",
		de: "zeitstempel"
	},
	argsOld: {
		en: "formatting, dateToProcess",
		de: "formatierung, datum"
	},
	args: {
		en : [
			{
				"key" : "formatting",
				"label": "Format",
				"type": "text",
				"desc": "Format of the date (optional)"
			},
			{
				"key" : "dateToProcess",
				"label": "Date",
				"type": "text",
				"desc": "Date to use (optional)"
			}
		],
		de : [
			{
				"key" : "formatierung",
				"label": "Format",
				"type": "text",
				"desc": "Datumsformatierung (optional)"
			},
			{
				"key" : "datum",
				"label": "Datum",
				"type": "text",
				"desc": "Datum (optional)"
			}
		]
	},
	tags: ["TAGS.UTIL"],
	hideInToolbox: false,
	hideOnSimpleMode: null,
	tests: () => {
		tools.expect(timestamp('yyyyMMddhhmm', Date.parse("1980/01/01"))).toBe("198001011200");
	}
})

function roundAllNumbers(value) {
	if (!value) {
		return null;
	}

	const round = v => {
		if (typeof v === "string" ) {
			var listOfNumbersFromString = extractAllNumbersFromText(v);
			listOfNumbersFromString.forEach(number => {
				v = v.replace(number, Math.round(parseFloat(number.replace(',', '.'))))
			})
		} else {
			v = Math.round(v);
		}
		return v;

	}
	if (Array.isArray(value)) {
		for (let i = 0; i < value.length; i++) {
			value[i] = round(value[i]);
		}
		return value

	}
	if (typeof value === "object"){
		Object.keys(value).forEach(key => {
			value[key] = round(value[key]);
		});
		return value
	}

	return round(value);

}
tools.add({
	id:"roundAllNumbers",
	impl: roundAllNumbers,
	aliases: {
		en: "roundAllNumbers",
		de: "rundeAlleZahlen"
	},
	argsOld: {
		en: "value",
		de: "wert"
	},
	args: {
		en : [
			{
				"key" : "value",
				"label": "Value",
				"type": "text",
				"desc": "Text with values to round"
			}
		],
		de : [
			{
				"key" : "wert",
				"label": "Wert",
				"type": "text",
				"desc": "Text mit Zahlen die gerundet werden"
			}
		]
	},
	tags: ["TAGS.CONDITIONAL"],
	hideInToolbox: false,
	hideOnSimpleMode: null,
	tests: () => {
		tools.expect(roundAllNumbers([88.6, 55.8])).jsonToBe([89, 56]);
		tools.expect(roundAllNumbers(["aaa", "bbb"])).jsonToBe(["aaa", "bbb"]);
		tools.expect(roundAllNumbers(["88,6", "66"])).jsonToBe(["89", "66"]);
		tools.expect(roundAllNumbers('Größe:98 x 50,5 x 5 cm:de')).toBe('Größe:98 x 51 x 5 cm:de');
		tools.expect(roundAllNumbers('asfdhgfj 55,4 ashfgklfa')).toBe('asfdhgfj 55 ashfgklfa');
		tools.expect(roundAllNumbers({'a': 88.5, 'b': 55})).jsonToBe({a: 89, b: 55});
		tools.expect(roundAllNumbers({'a': 'blabla', 'b': 'blabla'})).jsonToBe({a: 'blabla', b: 'blabla'});
		tools.expect(roundAllNumbers(null)).toBe(null);
		tools.expect(roundAllNumbers("")).toBe(null);
		tools.expect(roundAllNumbers('hello world')).toBe('hello world');
		tools.expect(roundAllNumbers(['Größe:98 x 50,5 x 5 cm:de', 99.7])).jsonToBe(['Größe:98 x 51 x 5 cm:de', 100]);
	}
})

function $global(key, value) {
	if(typeof _globalContext === 'undefined') _globalContext = {}
	if(typeof value !== 'undefined') {
		_globalContext[key] = value;
	}
	return _globalContext[key];
}
tools.add({
	id:"$global",
	impl: $global,
	aliases: {
		en: "$global",
		de: "$global"
	},
	argsOld: {
		en: "key,value",
		de: "schlüssel,wert"
	},
	args: {
		en : [
			{
				"key" : "key",
				"label": "Key",
				"type": "text",
				"desc": "Key"
			},
			{
				"key" : "value",
				"label": "Value",
				"type": "text",
				"desc": "Value"
			}
		],
		de : [
			{
				"key" : "schlüssel",
				"label": "Schlüssel",
				"type": "text",
				"desc": "Schlüssel"
			},
			{
				"key" : "wert",
				"label": "Wert",
				"type": "text",
				"desc": "Wert"
			}
		]
	},
	tags: ["TAGS.UTIL"],
	hideInToolbox: false,
	hideOnSimpleMode: null,
	tests: () => {
	}
})

function defaultValue(param, def) {
	if(isBlank(param)) return def;
	return param;
}
tools.add({
	id:"default",
	impl: defaultValue,
	aliases: {
		en: "defaultValue",
		de: "standardWert"
	},
	argsOld: {
		en: "argument, default",
		de: "argument, standard wert "
	},
	args: {
		en : [{
			"key" : "argument",
			"label": "Input",
			"type": "text",
			"desc": "First argument which will be checked if true"
		}, {
			"key" : "defaultValue",
			"label": "Input",
			"type": "text",
			"desc": "Second argument which will be checked if true"
		}],
		de : [{
			"key" : "argument",
			"label": "Eingabe",
			"type": "text",
			"desc": "Überprüfen ob erstes Argument true ist"
		}, {
			"key" : "standardWert",
			"label": "Eingabe",
			"type": "text",
			"desc": "Überprüfen ob zweites Argument true ist"
		}]
	},
	tags: ["TAGS.UTIL", "TAGS.LIST"],
	hideInToolbox: false,
	hideOnSimpleMode: true,
	tests: () => {
		tools.expect(defaultValue("123", "default")).toBe("123");
		tools.expect(defaultValue("", "default")).toBe("default");
		tools.expect(defaultValue(null, "default")).toBe("default");
		tools.expect(defaultValue([], "default")).toBe("default");
		tools.expect(defaultValue({}, "default")).toBe("default");
		tools.expect(defaultValue({a: 1}, "default")).jsonToBe({a: 1});
		tools.expect(defaultValue([1], "default")).jsonToBe([1]);
	}
})

//-------------- PLEASE ADD FUNCTIONS ABOVE THIS LINE-----------------
tools.exportAll(exports)
