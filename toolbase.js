const Toolpackage = require('./toolpackage')

const tools = new Toolpackage("Base Chioro Tools")
tools.description = 'These are the toolbox tools included in chioro by default. All the tools defined here are available in the global namespace. '


function getJson(url) {
	if(typeof _apiFetcher === 'undefined') return {};
	return JSON.parse(_apiFetcher.getUrl(url));
}
tools.add({
	id:"getJson",
	impl: getJson,
	aliases: {
		en: "getJson",
		de: "getJson"
	},
	args: {
		en: "",
		de: ""
	},
	tags: ["pattern"],
	hideInToolbox: true,

	tests: () => {
		tools.expect(getJson("https://some.interesting.url")).jsonToBe({});
	}
})


function postJson(url, params) {
	if(typeof _apiFetcher === 'undefined') return {};
	return JSON.parse(_apiFetcher.postUrl(url, JSON.stringify(params)));
}
tools.add({
	id:"postJson",
	impl: postJson,
	aliases: {
		en: "postJson",
		de: "postJson"
	},
	args: {
		en: "",
		de: ""
	},
	tags: ["pattern"],
	hideInToolbox: true,

	tests: () => {
		tools.expect(getJson("https://some.interesting.url")).jsonToBe({});
	}
})


function numberPattern() {
	return /-?[\d.,]*\d/g
}
tools.add({
	id:"numberPattern",
	impl: numberPattern,
	aliases: {
		en: "numberPattern",
		de: "zahlenMuster"
	},
	args: {
		en: "",
		de: ""
	},
	tags: ["pattern"],
	hideInToolbox: true,

	tests: () => {
	}
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
	args: {
		en: "",
		de: ""
	},
	tags: ["pattern"],
	hideInToolbox: true,

	tests: () => {
	}
})


function $(propertyName) {
	if (typeof propertyName === 'undefined' || propertyName === '') {
		return '';
	}
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
	args: {
		en: "",
		de: ""
	},
	tags: ["pattern"],
	hideInToolbox: true,

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
	impl: $,
	aliases: {
		en: "current",
		de: "current"
	},
	args: {
		en: "",
		de: ""
	},
	tags: ["TAGS.UTIL"],
	hideInToolbox: false,

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
	args: {
		en: "",
		de: ""
	},
	tags: ["pattern"],
	hideInToolbox: true,

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
	args: {
		en: "",
		de: ""
	},
	tags: ["pattern"],
	hideInToolbox: true,

	tests: () => {
	}
})


function get(propertyName) {
	if(typeof _source === 'undefined' || typeof _target === 'undefined') return propertyName
	const propertyNameWithoutPrefix = propertyName.replace(/^source\.|^target\./, '');
	const source = JSON.parse(_source);
	const target = _target;
	if(propertyName.startsWith('source.'))
		return source[propertyNameWithoutPrefix];
	else if(propertyName.startsWith('target.'))
		return target[propertyNameWithoutPrefix];
	else {
		if(target.hasOwnProperty(propertyNameWithoutPrefix)) {
			return target[propertyNameWithoutPrefix];
		} else {
			return source[propertyNameWithoutPrefix];
		}
	}
}
tools.add({
	id:"get",
	impl: get,
	aliases: {
		en: "get",
		de: "hole"
	},
	args: {
		en: "",
		de: ""
	},
	tags: ["pattern"],
	hideInToolbox: true,

	tests: () => {
		tools.expect(source("color_s")).toBe("color_s");
		tools.expect(target("color_t")).toBe("color_t");
	}
})


function source(propertyName) {
	if(typeof _source === 'undefined') return propertyName;
	return JSON.parse(_source)[propertyName];
}
tools.add({
	id:"source",
	impl: source,
	aliases: {
		en: "source",
		de: "quelle"
	},
	args: {
		en: "",
		de: ""
	},
	tags: ["pattern"],
	hideInToolbox: true,

	tests: () => {
		tools.expect(source("color")).toBe("color");
	}
})


function target(propertyName) {
	if(typeof _target === 'undefined') return propertyName;
	return _target[propertyName];
}
tools.add({
	id:"target",
	impl: target,
	aliases: {
		en: "target",
		de: "ziel"
	},
	args: {
		en: "",
		de: ""
	},
	tags: ["pattern"],
	hideInToolbox: true,

	tests: () => {
		tools.expect(source("color")).toBe("color");
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
	args: {
		en: "",
		de: ""
	},
	tags: ["TAGS.UTIL"],
	hideInToolbox: true,

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
	args: {
		en: "",
		de: ""
	},
	tags: ["TAGS.UTIL"],
	hideInToolbox: true,

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
	args: {
		en: "",
		de: ""
	},
	tags: ["TAGS.UTIL"],
	hideInToolbox: true,

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
	args: {
		en: "",
		de: ""
	},
	tags: ["TAGS.UTIL"],
	hideInToolbox: true,

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
	args: {
		en: "",
		de: ""
	},
	tags: ["TAGS.CONDITIONAL"],
	hideInToolbox: true,

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
	args: {
		en: "",
		de: ""
	},
	tags: ["TAGS.CONDITIONAL"],
	hideInToolbox: true,

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
	args: {
		en: "condition_1, toReplace_1, ...",
		de: "bedingung_1, zuErsetzen_1, ..."
	},
	tags: ["TAGS.CONDITIONAL"],
	hideInToolbox: false,

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
	args: {
		en: "",
		de: ""
	},
	tags: ["TAGS.CONDITIONAL"],
	hideInToolbox: true,

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
	args: {
		en: "",
		de: ""
	},
	tags: ["TAGS.CONDITIONAL"],
	hideInToolbox: true,

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
	args: {
		en: "something",
		de: "argument"
	},
	tags: ["TAGS.UTIL", "TAGS.LIST", "TAGS.TEXT"],
	hideInToolbox: null,

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
	args: {
		en: "something1, something2, ...",
		de: "argument1, argument2, ..."
	},
	tags: ["TAGS.UTIL", "TAGS.LIST"],
	hideInToolbox: null,

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
	args: {
		en: "something1, something2, ...",
		de: "Argument1, Argument2, ..."
	},
	tags: ["TAGS.UTIL", "TAGS.LIST"],
	hideInToolbox: null,

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
	args: {
		en: "list property, regexp list",
		de: "listeneintrag, regexp liste"
	},
	tags: ["TAGS.UTIL"],
	hideInToolbox: null,

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
		de: "speichereAlsTabelle"
	},
	args: {
		en: "name1, value1, name2, value2, ...",
		de: "name1, wert1, name2, wert2, ..."
	},
	tags: ["TAGS.UTIL"],
	hideInToolbox: null,

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
	args: {
		en: "list",
		de: "liste"
	},
	tags: ["TAGS.UTIL", "TAGS.LIST"],
	hideInToolbox: null,

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
	args: {
		en: "text",
		de: "text"
	},
	tags: ["TAGS.TEXT"],
	hideInToolbox: null,

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
	args: {
		en: "text",
		de: "text"
	},
	tags: ["TAGS.TEXT"],
	hideInToolbox: null,

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
	args: {
		en: "separator, text1, text2, ...",
		de: "trennzeichen, text1, text2, ..."
	},
	tags: ["TAGS.TEXT"],
	hideInToolbox: null,

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
	args: {
		en: "text1, text2, ...",
		de: "text1, text2, ..."
	},
	tags: ["TAGS.TEXT"],
	hideInToolbox: null,

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
	args: {
		en: "text, textToInsert, position",
		de: "text, einfügeText, position"
	},
	tags: ["TAGS.TEXT"],
	hideInToolbox: null,

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
	args: {
		en: "text, position, length",
		de: "text, position, länge"
	},
	tags: ["TAGS.TEXT"],
	hideInToolbox: null,

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
	args: {
		en: "text",
		de: "text"
	},
	tags: ["TAGS.TEXT"],
	hideInToolbox: null,

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
	args: {
		en: "inputString",
		de: "zeichenkette"
	},
	tags: ["TAGS.TEXT"],
	hideInToolbox: null,

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
	text = stringOf(text);
	if(textToSearch instanceof RegExp) {
		return text.replace(textToSearch, stringOf(replaceWith));
	} else {
		text = replaceAll(text,textToSearch,replaceWith);
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
	args: {
		en: "text, textToSearch, replaceWith",
		de: "text, suchtext, ersetzeDurch"
	},
	tags: ["TAGS.TEXT"],
	hideInToolbox: null,

	tests: () => {
		tools.expect(replaceInText("ene mene muh", /m(.)/g, "A$1A")).toBe("ene AeAne AuAh");
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
	args: {
		en: "text, textToSearch",
		de: "text, suchtext"
	},
	tags: ["TAGS.TEXT"],
	hideInToolbox: null,

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
	args: {
		en: "text, textToSearch",
		de: "text, suchtext"
	},
	tags: ["TAGS.CONDITIONAL", "TAGS.TEXT"],
	hideInToolbox: null,

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
	args: {
		en: "searchItem, listItemToSearch1, listItemToSearch2, ...",
		de: "suchbegriff, listeneintrag1, listeneintrag2, ..."
	},
	tags: ["TAGS.CONDITIONAL", "TAGS.LIST"],
	hideInToolbox: null,

	tests: () => {
	}
})


function extractFromText(text, pattern, fallback, withGroups) {
	var matched = stringOf(text).match(pattern);
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
	args: {
		en: "text, muster, fallback",
		de: "text, muster, fallback"
	},
	tags: ["TAGS.EXTRACT"],
	hideInToolbox: null,

	tests: () => {
		tools.expect(extractFromText("ene mene muh", /m(.*)e/g, "dann halt nicht")).toBe("mene");
		tools.expect(extractFromText("ene mxnx muh", /m(.*)e/g, "dann halt nicht")).toBe("dann halt nicht");
	}
})


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
	args: {
		en: "text, pattern, withGroups",
		de: "text, muster, mitGruppen"
	},
	tags: ["TAGS.EXTRACT"],
	hideInToolbox: null,

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
	args: {
		en: "text, fallback",
		de: "text, fallback"
	},
	tags: ["TAGS.EXTRACT"],
	hideInToolbox: null,

	tests: () => {
		tools.expect(extractNumberFromText("Temperaturen heute: 23 bis 25 Grad")).toBe("25");
	}
})


function extractAllNumbersFromText(text) {
	var regex = /\d-(d*)/g;
	return extractAllMatchesFromText(text.replace(regex, text.match(regex) + ' '), numberPattern());
}
tools.add({
	id:"extractAllNumbersFromText",
	impl: extractAllNumbersFromText,
	aliases: {
		en: "extractAllNumbersFromText",
		de: "extrahiereAlleZahlenAusText"
	},
	args: {
		en: "text",
		de: "text"
	},
	tags: ["TAGS.EXTRACT"],
	hideInToolbox: null,

	tests: () => {
		tools.expect(extractAllNumbersFromText("Temperaturen heute: 23 bis 25 Grad")).jsonToBe(["23", "25"]);
		tools.expect(extractAllNumbersFromText("Temperaturen heute: -23,6 bis 25.1 Grad")).jsonToBe(["-23,6", "25.1"]);
		tools.expect(extractAllNumbersFromText("  23-25 ")).jsonToBe(["23", "25"]);
		tools.expect(extractAllNumbersFromText("-23-25")).jsonToBe(["-23", "25"]);
		tools.expect(extractAllNumbersFromText("-23 - -25")).jsonToBe(["-23", "-25"]);
		tools.expect(extractAllNumbersFromText("23- -25")).jsonToBe(["23", "-25"]);
		tools.expect(extractAllNumbersFromText("23    - -25")).jsonToBe(["23", "-25"]);
		tools.expect(extractAllNumbersFromText("2    - -  0")).jsonToBe(["2", "0"]);
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
	args: {
		en: "text",
		de: "text"
	},
	tags: ["TAGS.TEXT"],
	hideInToolbox: null,

	tests: () => {
	}
})


function isBlank(text_or_object) {
	if(text_or_object === null) return true;
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
	args: {
		en: "text_or_object",
		de: "text_oder_objekt"
	},
	tags: ["TAGS.CONDITIONAL"],
	hideInToolbox: null,

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
	args: {
		en: "text_or_object",
		de: "text_oder_objekt"
	},
	tags: ["TAGS.CONDITIONAL"],
	hideInToolbox: null,

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
	args: {
		en: "text",
		de: "text"
	},
	tags: ["TAGS.TEXT", "TAGS.CONDITIONAL"],
	hideInToolbox: null,

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
	args: {
		en: "text",
		de: "text"
	},
	tags: ["TAGS.TEXT", "TAGS.CONDITIONAL"],
	hideInToolbox: null,

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
	args: {
		en: "text, textToSearch_1, textToReplace_1, textToSearch_2, textToReplace_2, ..., fallback",
		de: "text, suchtext_1, zuErsetzenderText_1, suchtext_2, zuErsetzenderText_2, ..., fallback"
	},
	tags: ["TAGS.EXTRACT"],
	hideInToolbox: null,

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
	args: {
		en: "text, textToSearch_1, textToReplace_1, textToSearch_2, textToReplace_2, ..., fallback",
		de: "text, suchtext_1, zuErsetzenderText_1, suchtext_2, zuErsetzenderText_2, ..., fallback"
	},
	tags: ["TAGS.EXTRACT"],
	hideInToolbox: null,

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
	args: {
		en: "text, textToSearchAndShow_1, textToSearchAndShow_2, ...",
		de: "text, zuExtrahierendesWort_1, zuExtrahierendesWort_2, ..."
	},
	tags: ["TAGS.EXTRACT"],
	hideInToolbox: null,

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
	args: {
		en: "text, propertyName, fallback",
		de: "text, nameDerEigenschaft, fallback"
	},
	tags: ["TAGS.EXTRACT"],
	hideInToolbox: null,

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
	args: {
		en: "text, propertyName, fallback",
		de: "text, nameDerEigenschaft, fallback"
	},
	tags: ["TAGS.EXTRACT"],
	hideInToolbox: null,

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
	args: {
		en: "matchingValue, lookupName, matchingColumn, columnToRetrieveValueFrom",
		de: "passenderWert, gesuchterWert, passendeSpalte, zuHolenderWertSpalte"
	},
	tags: ["TAGS.LOOKUP"],
	hideInToolbox: null,

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
		if(regex) {
			if(matchingValue.match(new RegExp(regex, 'ig'))) {
				return lookupItem.get(columnToRetrieveValueFrom);
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
	args: {
		en: "matchingValue, lookupName, matchingRegExpColumn, columnToRetrieveValueFrom",
		de: "passenderWert, gesuchterWert, passendeRegExpSpalte, zuHolenderWertSpalte"
	},
	tags: ["TAGS.LOOKUP"],
	hideInToolbox: null,

	tests: () => {
		tools.expect(lookupGetRegExp("test", "test","test", "test")).toBe("valueFound");
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
		if(regex) {
			if(matchingValue.match(new RegExp(regex, 'ig'))) {
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
	args: {
		en: "matchingValue, lookupName, matchingRegExpColumn, columnToRetrieveValueFrom",
		de: "passenderWert, gesuchterWert, passendeRegExpSpalte, zuHolenderWertSpalte"
	},
	tags: ["TAGS.LOOKUP"],
	hideInToolbox: null,

	tests: () => {
		tools.expect(lookupGetAllRegExp("test", "test","test", "test")).toBe("valueFound");
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
	args: {
		en: "something1, something2, ...",
		de: "argument1, argument2, ..."
	},
	tags: ["TAGS.FORMAT"],
	hideInToolbox: null,

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
	args: {
		en: "value, locale",
		de: "wert, länderFormat"
	},
	tags: ["TAGS.FORMAT"],
	hideInToolbox: null,

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
	args: {
		en: "value, locale",
		de: "wert, länderFormat"
	},
	tags: ["TAGS.FORMAT"],
	hideInToolbox: null,

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
	args: {
		en: "value, locale, ...",
		de: "wert, länderFormat, ..."
	},
	tags: ["TAGS.FORMAT"],
	hideInToolbox: true,

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
	args: {
		en: "",
		de: ""
	},
	tags: ["TAGS.TEXT"],
	hideInToolbox: true,

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
	args: {
		en: "",
		de: ""
	},
	tags: ["TAGS.TEXT"],
	hideInToolbox: true,

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
	args: {
		en: "",
		de: ""
	},
	tags: ["TAGS.TEXT"],
	hideInToolbox: true,

	tests: () => {
	}
})


function addCloudinaryTransformation(cloudinaryUrl, publicId, transformation) {
	return replaceInText(cloudinaryUrl, new RegExp(publicId + "$"), transformation+ "/"+ publicId);
}
tools.add({
	id:"addCloudinaryTransformation",
	impl: addCloudinaryTransformation,
	aliases: {
		en: "addCloudinaryTransformation",
		de: "hinzufügenCloudinaryTransformation"
	},
	args: {
		en: "cloudinaryUrl, publicId, transformation",
		de: "cloudinaryUrl, publicId, transformation"
	},
	tags: ["TAGS.CLOUDINARY"],
	hideInToolbox: false,

	tests: () => {
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
	args: {
		en: "cloudinaryUrl, publicId, named_transformation",
		de: "cloudinaryUrl, publicId, named_transformation"
	},
	tags: ["TAGS.CLOUDINARY"],
	hideInToolbox: false,

	tests: () => {
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
	args: {
		en: "value, factor, oldUnit, newUnit, decimalPlaces",
		de: "wert, faktor, alteEinheit, neueEinheit, dezimalStellen"
	},
	tags: ["TAGS.UNIT"],
	hideInToolbox: false,

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
	args: {
		en: "value, decimalSeparator, decimalPlaces",
		de: "wert, dezimalTrennzeichen, dezimalStellen"
	},
	tags: ["TAGS.UNIT"],
	hideInToolbox: false,

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
	args: {
		en: "value, text",
		de: "wert, text"
	},
	tags: ["TAGS.EXTRACT"],
	hideInToolbox: false,

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
	args: {
		en: "value, text",
		de: "wert, text"
	},
	tags: ["TAGS.EXTRACT"],
	hideInToolbox: false,

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
	args: {
		en: "text",
		de: "text"
	},
	tags: ["TAGS.EXTRACT"],
	hideInToolbox: true,

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
	args: {
		en: "text, separator",
		de: "text, separator"
	},
	tags: ["TAGS.TEXT"],
	hideInToolbox: false,

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
	args: {
		en: "text, separator",
		de: "text, separator"
	},
	tags: ["TAGS.TEXT"],
	hideInToolbox: true,

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
	args: {
		en: "text, search",
		de: "text, suchwert"
	},
	tags: ["TAGS.TEXT"],
	hideInToolbox: false,

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
	args: {
		en: "text, search",
		de: "text, suchwert"
	},
	tags: ["TAGS.TEXT"],
	hideInToolbox: false,

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
	args: {
		en: "something1, something2, ...",
		de: "argument1, argument2, ..."
	},
	tags: ["TAGS.CONDITIONAL"],
	hideInToolbox: false,

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
	args: {
		en: "something1, something2, ...",
		de: "argument1, argument2, ..."
	},
	tags: ["TAGS.CONDITIONAL"],
	hideInToolbox: false,

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
	args: {
		en: "something1, something2, ...",
		de: "argument1, argument2, ..."
	},
	tags: ["TAGS.CONDITIONAL"],
	hideInToolbox: false,

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
	args: {
		en: "value",
		de: "wert"
	},
	tags: ["TAGS.CONDITIONAL"],
	hideInToolbox: false,

	tests: () => {
		tools.expect(not(true)).toBe(false);
		tools.expect(not(false)).toBe(true);
		tools.expect(not([])).toBe(false);
		tools.expect(not({})).toBe(false);
		tools.expect(not()).toBe(false);
	}
})

//-------------- PLEASE ADD FUNCTIONS ABOVE THIS LINE-----------------
tools.exportAll(exports)
