const Toolpackage = require('./toolpackage');
const format = require('date-fns/format');
const Decimal = require('decimal');

const tools = new Toolpackage("Base Chioro Tools");
tools.description = 'These are the toolbox tools included in Chioro by default. All the tools defined here are available in the global namespace. ';

function isUndefined(value) {
    return typeof value === 'undefined';
}

function isObject(value) {
    return typeof value === 'object';
}

function isBoolean(value) {
    return typeof value === 'boolean';
}

function isNumber(value) {
    return typeof value === 'number';
}

function getJson(url, headers = null) {
    if (typeof _apiFetcher === 'undefined') {
        return {};
    }

    if (headers === null) {
        return JSON.parse(_apiFetcher.getUrl(url));
    }

    if (!headers['content-type']) {
        headers['content-type'] = 'application/json';
    }

    return JSON.parse(_apiFetcher.getUrl(url, headers));
}

tools.add({
    id: "getJson",
    impl: getJson,
    aliases: {
        en: "getJson",
        de: "getJson"
    },
    simpleDescription: {
        de: "JSON-Daten von API abrufen",
        en: "Fetch JSON data from an API"
    },
    argsOld: {
        en: "URL, header",
        de: "URL, header"
    },
    args: [
        {
            "key": "URL",
            "label_en": "URL",
            "label_de": "Adresse",
            "type": "text",
            "desc_en": "URL to call",
            "desc_de": "Aufzurufende Adresse"
        },
        {
            "key": "header",
            "label_en": "HTTP headers",
            "label_de": "HTTP headers",
            "type": "text",
            "desc_en": "The headers to use (e.g. {'content-type': 'text/csv'})",
            "desc_de": "Zu verwendende header (z.B. {'content-type': 'text/csv'})"
        }
    ],
    tags: ["pattern"],
    hideInToolbox: false,
    hideOnSimpleMode: true,
    tests: () => {
        tools.it('will return empty object if no apiFetcher is defined', () => {
            tools.expect(getJson("https://some.interesting.url")).jsonToBe({});
        });

        tools.it('will call the endpoint with the given headers', () => {
            try {
                _apiFetcher = {
                    getUrl: (url, header) => {
                        tools.expect(header['content-type']).toBe('text/csv');
                        return JSON.stringify({});
                    }
                }

                getJson("https://some.interesting.url", {'content-type': 'text/csv'});
            } finally {
                delete _apiFetcher;
            }
        });

        tools.it('will use application/json as default content-type', () => {
            try {
                _apiFetcher = {
                    getUrl: (url, header) => {
                        tools.expect(header).jsonToBe({'content-type': 'application/json'});
                        return JSON.stringify({});
                    }
                }

                getJson("https://some.interesting.url", {});
            } finally {
                delete _apiFetcher;
            }
        });
    }
})


function postJson(url, params, headers = null) {
    if (typeof _apiFetcher === 'undefined') {
        return {};
    }

    if (headers === null) {
        return JSON.parse(_apiFetcher.postUrl(url, JSON.stringify(params)));
    }

    if (!headers['content-type']) {
        headers['content-type'] = 'application/json';
    }

    return JSON.parse(_apiFetcher.postUrl(url, JSON.stringify(params), headers));
}

tools.add({
    id: "postJson",
    impl: postJson,
    aliases: {
        en: "postJson",
        de: "postJson"
    },
    simpleDescription: {
        de: "JSON-Daten zu API senden",
        en: "Send JSON data to an API"
    },

    argsOld: {
        en: "url params headers",
        de: "url parameter header"
    },
    args: [
        {
            "key": "URL",
            "label_en": "URL",
            "label_de": "Adresse",
            "type": "text",
            "desc_en": "URL to send to",
            "desc_de": "Aufzurufende Adresse"
        },
        {
            "key": "params",
            "label_en": "HTTP params",
            "label_de": "HTTP params",
            "type": "text",
            "desc_en": "the payload",
            "desc_de": "Der zu sendende Inhalt"
        },
        {
            "key": "header",
            "label_en": "HTTP headers",
            "label_de": "HTTP headers",
            "type": "text",
            "desc_en": "The headers to use (e.g. {'content-type': 'text/csv'})",
            "desc_de": "Zu verwendende header (z.B. {'content-type': 'text/csv'})\""
        }
    ],
    tags: ["pattern"],
    hideInToolbox: false,
    hideOnSimpleMode: true,
    tests: () => {
        tools.it('returns empty object if no apiFetcher is defined', () => {
            tools.expect(postJson("https://some.interesting.url")).jsonToBe({});
        });

        tools.it('calls the endpoint with the given parameters', () => {
            try {
                _apiFetcher = {
                    postUrl: (url, params, headers) => {
                        tools.expect(JSON.parse(params)).jsonToBe({"test_param": "test_value"});
                        return JSON.stringify({});
                    }
                }

                postJson("https://some.interesting.url", {"test_param": "test_value"});
            } finally {
                delete _apiFetcher;
            }
        });

        tools.it('will set application/json as default content-type', () => {
            try {
                _apiFetcher = {
                    postUrl: (url, params, headers) => {
                        tools.expect(headers['content-type']).toBe('application/json');
                        return JSON.stringify({});
                    }
                }
                postJson("https://some.interesting.url", {"test_param": "test_value"}, {"empty": "header"});
            } finally {
                delete _apiFetcher;
            }
        });


        // It uses a given content-type
        tools.it('will use the given content-type', () => {
            try {
                _apiFetcher = {
                    postUrl: (url, params, headers) => {
                        tools.expect(headers['content-type']).toBe('text/csv');
                        return JSON.stringify({})
                    }
                }
                postJson("https://some.interesting.url", {"test_param": "test_value"}, {"content-type": "text/csv"});
            } finally {
                delete _apiFetcher;
            }
        });
    }
})

function putJson(url, params, headers = null) {
    if (typeof _apiFetcher === 'undefined') {
        return {};
    }

    if (headers === null) {
        return _apiFetcher.putUrl(url, JSON.stringify(params));
    }

    if (!headers['content-type']) {
        headers['content-type'] = 'application/json';
    }

    return _apiFetcher.putUrl(url, JSON.stringify(params), headers);
}

tools.add({
    id: "putJson",
    impl: putJson,
    aliases: {
        en: "putJson",
        de: "putJson"
    },
    argsOld: {
        en: "url, params, headers",
        de: "adresse parameter headers"
    },
    args: [
        {
            "key": "URL",
            "label_en": "URL",
            "label_de": "Adresse",
            "type": "text",
            "desc_en": "URL to send to",
            "desc_de": "Aufzurufende Adresse"
        },
        {
            "key": "params",
            "label_en": "HTTP params",
            "label_de": "HTTP params",
            "type": "text",
            "desc_en": "The payload",
            "desc_de": "Der Inhalt"
        },
        {
            "key": "header",
            "label_en": "HTTP headers",
            "label_de": "HTTP headers",
            "type": "text",
            "desc_en": "The headers to use (e.g. {'content-type': 'text/csv'})",
            "desc_de": "Zu verwendende header (z.B. {'content-type': 'text/csv'})"
        }
    ],
    tags: ["pattern"],
    hideInToolbox: true,
    hideOnSimpleMode: true,
    tests: () => {
        tools.it('will return undefined if no apiFetcher is defined', () => {
            tools.expect(putJson("https://some.interesting.url")).jsonToBe({});
        });

        tools.it('will call the endpoint with the given parameters', () => {
            try {
                _apiFetcher = {
                    putUrl: (url, params, headers) => {
                        tools.expect(JSON.parse(params)).jsonToBe({"test_param": "test_value"});
                        return JSON.stringify({});
                    }
                }

                putJson("https://some.interesting.url", {"test_param": "test_value"});
            } finally {
                delete _apiFetcher;
            }
        });

        tools.it('will set application/json as default content-type', () => {
            try {
                _apiFetcher = {
                    putUrl: (url, params, headers) => {
                        tools.expect(headers['content-type']).toBe('application/json');
                        return JSON.stringify({});
                    }
                }

                putJson('https://some.interesting.url', {}, {'empty': 'header'});
            } finally {
                delete _apiFetcher;
            }
        });

        tools.it('will use the given content-type', () => {
            try {
                _apiFetcher = {
                    putUrl: (url, params, headers) => {
                        tools.expect(headers['content-type']).toBe('text/csv');
                        return JSON.stringify({});
                    }
                }

                putJson('https://some.interesting.url', {}, {'content-type': 'text/csv'});
            } finally {
                delete _apiFetcher;
            }
        });
    }

})

function getSub() {
    let tmp = get(arguments[0]);
    if (!tmp) {
        return null;
    }

    for (let i = 1; i < arguments.length; i++) {
        if (typeof tmp !== 'object') {
            return null;
        }

        tmp = tmp[arguments[i]];
    }

    return tmp;
}

tools.add({
    id: "getSub",
    impl: getSub,
    aliases: {
        en: "getSub",
        de: "holeWert"
    },
    argsOld: {
        en: "",
        de: ""
    },
    args: [],
    tags: ["pattern"],
    hideInToolbox: true,
    hideOnSimpleMode: true,
    tests: () => {
    }
})


function $(propertyName) {
    if (isUndefined(propertyName)) {
        return $(current());
    }

    if (propertyName === '') {
        return '';
    }

    if (!isString(propertyName)) {
        return JSON.stringify(propertyName);
    }

    let result = '';
    let prefix = '';
    if (propertyName.startsWith('source.')) {
        prefix = 'source.';
        propertyName = propertyName.slice(7);
    } else if (propertyName.startsWith('target.')) {
        prefix = 'target.';
        propertyName = propertyName.slice(7);
    }

    const listOfArgs = propertyName.split('.');

    if (listOfArgs.length > 0) {
        listOfArgs[0] = prefix + listOfArgs[0];
    }

    const v = getSub.apply(null, listOfArgs);

    if (v === null) {
        return '';
    }

    result = v;

    if (isString(result)) {
        return result;
    }

    if (result === null || isUndefined(result)) {
        return '';
    }

    return result;
}

tools.add({
    id: "$",
    impl: $,
    aliases: {
        en: "$",
        de: "$"
    },
    argsOld: {
        en: "propertyName",
        de: "attributname"
    },
    args: [
        {
            "key": "propertyName",
            "label_en": "Property Name",
            "label_de": "Attributname",
            "type": "text",
            "desc_en": "Property Name",
            "desc_de": "Attributname"
        }
    ],
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
    id: "current",
    impl: current,
    aliases: {
        en: "current",
        de: "current"
    },
    simpleDescription: {
        de: "Nutze Name des aktuellen Zielattributs",
        en: "Use name of the current target attribute"
    },
    argsOld: {
        en: "",
        de: ""
    },
    args: [],
    tags: ["TAGS.UTIL"],
    hideInToolbox: false,
    hideOnSimpleMode: true,
    tests: () => {
        tools.it('will return an empty string if target attribute name is empty', () => {
            tools.expect(current()).toBe('');
        });

        tools.it('will return the target attribute name', () => {
            try {
                _targetAttributeName = 'test_target_attribute';
                tools.expect(current()).toBe('test_target_attribute');
            } finally {
                delete _targetAttributeName;
            }
        });
    }
})

function $$(propertyName) {

    const arrayWithOneValueChecking = val => {
        if (Array.isArray(val) && val.length === 1) {
            return val[0];
        }
        return val;
    };

    let result = '';
    const v = $(propertyName);
    if (!isUndefined(v['value']) && v['value']) {
        result = v['value'];
        if (!isUndefined(v['unit']) && v['unit']) {
            result = result + ' ' + v['unit'];
        }
    } else {
        result = v;
    }

    result = arrayWithOneValueChecking(result);

    if (isString(result)) {
        return result;
    }

    if (result === null || isUndefined(result)) {
        return '';
    }

    if (Array.isArray(result)) {
        return result[0];
    }

    if (isObject(result) && Object.keys(result).length > 0) {
        return result[Object.keys(result)[0]];
    }

    return JSON.stringify(result);
}

tools.add({
    id: "$$",
    impl: $$,
    aliases: {
        en: "$$",
        de: "$$"
    },
    argsOld: {
        en: "propertyName",
        de: "attributname"
    },
    args: [
        {
            "key": "propertyName",
            "label_en": "Property Name",
            "label_de": "Attributname",
            "type": "text",
            "desc_en": "Property Name",
            "desc_de": "Attributname"
        }
    ],
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
    id: "copy",
    impl: copy,
    aliases: {
        en: "copy",
        de: "kopiere"
    },
    argsOld: {
        en: "propertyName",
        de: "attributname"
    },
    args: [
        {
            "key": "propertyName",
            "label_en": "Property Name",
            "label_de": "Attributname",
            "type": "text",
            "desc_en": "Property Name to copy the value of",
            "desc_de": "Attributname, von dem der Wert kopiert werden soll"
        }
    ],
    tags: ["pattern"],
    hideInToolbox: true,
    hideOnSimpleMode: true,
    tests: () => {
    }
})

function get(propertyName) {
    const source = typeof _source != 'undefined' ? JSON.parse(_source) : {};
    const target = typeof _target != 'undefined' ? _target : {};

    if (propertyName.startsWith('source.')) {
        const key = propertyName.slice(7);
        return (source && source[key]) ? source[key] : null;
    }

    if (propertyName.startsWith('target.')) {
        const key = propertyName.slice(7);
        return (target && target[key]) ? target[key] : null;
    }

    if (target && target[propertyName]) {
        return target[propertyName];
    }

    if (source && source[propertyName]) {
        return source[propertyName];
    }

    return null;
}

tools.add({
    id: "get",
    impl: get,
    aliases: {
        en: "get",
        de: "hole"
    },
    argsOld: {
        en: "propertyName",
        de: "attributname"
    },
    args: [
        {
            "key": "propertyName",
            "label_en": "Property Name",
            "label_de": "Attributname",
            "type": "text",
            "desc_en": "Property Name can start with source. or target. otherwise will try to get from target first and then from source",
            "desc_de": "Attributname kann mit source. oder target. beginnen ansonsten wird zuerst im target und dann im source gesucht"
        }
    ],
    tags: ["pattern"],
    hideInToolbox: true,
    hideOnSimpleMode: true,
    tests: () => {
        tools.expect(get("source.color")).toBe(null);
        tools.expect(get("source.color_s")).toBe(null);
        tools.expect(get("target.color")).toBe(null);
        tools.expect(get("target.color_t")).toBe(null);
        tools.expect(get("color")).toBe(null);
        tools.expect(get("color_s")).toBe(null);
        tools.expect(get("color_t")).toBe(null);
        tools.expect(get("color_m")).toBe(null);
        _source = '{"color":"blue","color_s":"cyan"}';
        _target = {"color": "red", "color_t": "lila"};
        tools.expect(get("source.color")).toBe("blue");
        tools.expect(get("source.color_s")).toBe("cyan");
        tools.expect(get("target.color")).toBe("red");
        tools.expect(get("target.color_t")).toBe("lila");
        tools.expect(get("color")).toBe("red");
        tools.expect(get("color_s")).toBe("cyan");
        tools.expect(get("color_t")).toBe("lila");
        delete _source;
        delete _target;
    }
});


function source(attributeName) {
    return get('source.' + attributeName);
}

tools.add({
    id: "source",
    impl: source,
    aliases: {
        en: "sourceAttribute",
        de: "quellAttribut"
    },
    simpleDescription: {
        de: "Wert aus einem Quellattribut nutzen",
        en: "Use value of a source attribute"
    },
    argsOld: {
        en: "propertyName",
        de: "attributname"
    },
    args: [{
        "key": "attributeName",
        "label_en": "Attribute Name",
        "label_de": "Attributname",
        "attributeType": "attribute",
        "desc_en": "Attribute Name from the source",
        "desc_de": "Attributname, in der Quelle"
    }],
    tags: ["pattern"],
    hideInToolbox: false,
    hideOnSimpleMode: true,
    tests: () => {
        tools.expect(source("color")).toBe(null);
    }
})


function target(attributeName) {
    return get('target.' + attributeName);
}

tools.add({
    id: "target",
    impl: target,
    aliases: {
        en: "target",
        de: "ziel"
    },
    argsOld: {
        en: "propertyName",
        de: "attributname"
    },
    args: [
        {
            "key": "attributeName",
            "label_en": "Attribute Name",
            "label_de": "Attributname",
            "attributeType": "attribute",
            "desc_en": "Attribute Name from the target",
            "desc_de": "Attributname im Ziel"
        }
    ],
    tags: ["pattern"],
    hideInToolbox: true,
    hideOnSimpleMode: true,
    tests: () => {
        tools.expect(target("color")).toBe(null);
    }
})

function context(propertyName) {
    const contextMap = typeof _context !== 'undefined' ? JSON.parse(_context) : {};
    if (propertyName.length === 0) {
        return contextMap;
    }

    if (propertyName.search('.') !== -1) {
        let keys = propertyName.split('.');
        let tmp = contextMap;
        while (keys.length > 0) {
            let key = keys.shift();
            if (isUndefined(tmp[key])) {
                return null;
            }
            tmp = tmp[key];
        }

        return tmp;
    }

    if (contextMap && contextMap[propertyName]) {
        return contextMap[propertyName];
    }

    return null;
}

tools.add({
    id: "context",
    impl: context,
    aliases: {
        en: "context",
        de: "kontext"
    },
    argsOld: {
        en: "propertyName",
        de: "attributname"
    },
    args: [{
        "key": "propertyName",
        "label_en": "Property Name",
        "label_de": "Name",
        "type": "text",
        "desc_en": "Property Name, that should be fetched from the context",
        "desc_de": "Name des Attributs, das aus dem Kontext geholt werden soll"
    }],
    tags: ["pattern"],
    hideInToolbox: true,
    hideOnSimpleMode: true,
    tests: () => {
        _context = '{"color": "red"}';
        tools.expect(context("color")).toBe("red");
        delete _context;
    }
})


function getUnit(name) {
    return getSub(name, "unit")
}

tools.add({
    id: "getUnit",
    impl: getUnit,
    aliases: {
        en: "getUnit",
        de: "holeEinheit"
    },
    argsOld: {
        en: "name",
        de: "name"
    },
    args: [
        {
            "key": "name",
            "label_en": "Name",
            "label_de": "Name",
            "type": "text",
            "desc_en": "the name",
            "desc_de": "der Name"
        }
    ],
    tags: ["TAGS.UTIL"],
    hideInToolbox: true,
    hideOnSimpleMode: true,
    tests: () => {
    }
})


function getValue(name) {
    return getSub(name, "value");
}

tools.add({
    id: "getValue",
    impl: getValue,
    aliases: {
        en: "getValue",
        de: "holeWert"
    },
    argsOld: {
        en: "name",
        de: "name"
    },
    args: [
        {
            "key": "name",
            "label_en": "Name",
            "label_de": "Name",
            "type": "text",
            "desc_en": "the name",
            "desc_de": "der Name"
        }
    ],
    tags: ["TAGS.UTIL"],
    hideInToolbox: true,
    hideOnSimpleMode: true,
    tests: () => {
    }
})


function mapSize(obj) {
    let size = 0;
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            size++;
        }
    }

    return size;
}

tools.add({
    id: "mapSize",
    impl: mapSize,
    aliases: {
        en: "mapSize",
        de: "größeDerMap"
    },
    argsOld: {
        en: "map",
        de: "map"
    },
    args: [{
        "key": "map",
        "label_en": "map",
        "label_de": "map",
        "type": "text",
        "desc_en": "the map object",
        "desc_de": "das Map Objekt"
    }],
    tags: ["TAGS.UTIL"],
    hideInToolbox: true,
    hideOnSimpleMode: true,
    tests: () => {
    }
})


function stringOf(input) {
    if (input !== null && !isUndefined(input)) {
        return input.toString();
    }

    return '';
}

tools.add({
    id: "stringOf",
    impl: stringOf,
    aliases: {
        en: "stringOf",
        de: "zeichenketteVon"
    },
    argsOld: {
        en: "input",
        de: "input"
    },
    args: [{
        "key": "param",
        "label_en": "input",
        "label_de": "input",
        "type": "text",
        "desc_en": "Input to be converted to a string",
        "desc_de": "Engabewert, der zu Text konvertiert werden soll"
    }],
    tags: ["TAGS.UTIL"],
    hideInToolbox: true,
    hideOnSimpleMode: true,
    tests: () => {
        let something_undefined;
        tools.expect(stringOf(undefined)).toBe('');
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
        !isString(comparisonValue) ||
        !isString(categoryValue)
    ) {
        return false;
    }

    if (categoryValue[categoryValue.length - 1] !== '|') {
        categoryValue += '|';
    }

    if (categoryValue[0] !== '|') {
        categoryValue = '|' + categoryValue;
    }

    if (comparisonValue[comparisonValue.length - 1] !== '|') {
        comparisonValue += '|';
    }

    if (comparisonValue[0] !== '|') {
        comparisonValue = '|' + comparisonValue;
    }

    return categoryValue.toLowerCase().startsWith(comparisonValue.toLowerCase());
}

tools.add({
    id: "similarCategory",
    impl: similarCategory,
    aliases: {
        en: "similarCategory",
        de: "gleicheKategorie"
    },
    argsOld: {
        en: "categoryValue, comparisonValue",
        de: "categoryValue, comparisonValue"
    },
    args: [
        {
            "key": "categoryValue",
            "label_en": "Category Value",
            "label_de": "Kategorie Wert",
            "type": "text",
            "desc_en": "Category Value",
            "desc_de": "Kategorie Wert"
        },
        {
            "key": "comparisonValue",
            "label_en": "Comparison Value",
            "label_de": "Vergleichswert",
            "type": "text",
            "desc_en": "The value to compare with",
            "desc_de": "Der wert mit dem verglichen werden soll"
        }
    ],
    tags: ["TAGS.CONDITIONAL"],
    hideInToolbox: true,
    hideOnSimpleMode: true,
    tests: () => {
    }
})


function isInteger(value) {
    const integer = parseInt(value, 10);
    if (size(integer) !== size(value)) {
        return false;
    }
    return !isNaN(integer);
}

tools.add({
    id: "isInteger",
    impl: isInteger,
    aliases: {
        en: "isInteger",
        de: "istInteger"
    },
    argsOld: {
        en: "value",
        de: "wert"
    },
    args: [
        {
            "key": "value",
            "label_en": "Value",
            "label_de": "Wert",
            "type": "text",
            "desc_en": "Value to check",
            "desc_de": "Wert, der geprüft werden soll"
        }
    ],
    tags: ["TAGS.CONDITIONAL"],
    hideInToolbox: true,
    hideOnSimpleMode: true,
    tests: () => {
        tools.expect(isInteger(1)).toBe(true);
        tools.expect(isInteger(1.1)).toBe(false);
        tools.expect(isInteger('1')).toBe(true);
        tools.expect(isInteger('1.1')).toBe(false);
        tools.expect(isInteger('1,1')).toBe(false);
        tools.expect(isInteger('1,11111111119')).toBe(false);
        tools.expect(isInteger('a')).toBe(false);
    }
})


function decodeConditions() {
    for (let i = 0; i < arguments.length - 1; i += 2) {
        const condition = arguments[i];
        const replacement = arguments[i + 1];
        if (condition) {
            return replacement
        }
    }


    const lastArg = arguments[arguments.length - 1];
    if (lastArg) {
        return lastArg
    }

    return "";
}

tools.add({
    id: "decodeConditions",
    impl: decodeConditions,
    aliases: {
        en: "decodeConditions",
        de: "dekodiereBedingungen"
    },
    simpleDescription: {
        de: "Bedingungen dekodieren",
        en: "Decode conditions"
    },

    argsOld: {
        en: "condition_1, toReplace_1, ...",
        de: "bedingung_1, zuErsetzen_1, ..."
    },
    args: [
        {
            "key": "condition+",
            "label_en": "Condition",
            "label_de": "Bedingung",
            "type": "text",
            "desc_en": "Condition",
            "desc_de": "Bedingung"
        },
        {
            "key": "toReplace+",
            "label_en": "Return value",
            "label_de": "Rückgabetext",
            "type": "text",
            "desc_en": "Text to return, if condition evaluated as true",
            "desc_de": "Rückgabetext, wenn Bedingung wahr ist"
        }
    ],
    tags: ["TAGS.CONDITIONAL"],
    hideInToolbox: false,
    hideInSimpleMode: true,
    tests: () => {
        tools.expect(decodeConditions(true, "true", false, "false")).toBe("true");
        tools.expect(decodeConditions(false, "fallback")).toBe("fallback");
        tools.expect(decodeConditions(false, "not expected", true, "expected", "fallback")).toBe("expected");
    }
})


function isString(value) {
    return typeof value === "string";
}

tools.add({
    id: "isString",
    impl: isString,
    aliases: {
        en: "isString",
        de: "istZeichenkette"
    },
    argsOld: {
        en: "value",
        de: "wert"
    },
    args: [
        {
            "key": "value",
            "label_en": "Value",
            "label_de": "Wert",
            "type": "text",
            "desc_en": "Value to check",
            "desc_de": "Wert, der geprüft werden soll"
        }
    ],
    tags: ["TAGS.CONDITIONAL"],
    hideInToolbox: true,
    hideInSimpleMode: true,
    tests: () => {
        tools.expect(isString("")).toBe(true);
        tools.expect(isString(1)).toBe(false);
        tools.expect(isString([])).toBe(false);
        tools.expect(isString({})).toBe(false);
        tools.expect(isString(null)).toBe(false);
    }
})


function isList(value) {
    return Array.isArray(value);
}

tools.add({
    id: "isList",
    impl: isList,
    aliases: {
        en: "isList",
        de: "istListe"
    },
    argsOld: {
        en: "value",
        de: "wert"
    },
    args: [
        {
            "key": "value",
            "label_en": "Value",
            "label_de": "Wert",
            "type": "text",
            "desc_en": "Value to check",
            "desc_de": "Wert, der geprüft werden soll"
        }
    ],
    tags: ["TAGS.CONDITIONAL"],
    hideInToolbox: true,
    hideOnSimpleMode: true,
    tests: () => {
        tools.expect(isList([])).toBe(true);
        tools.expect(isList([1, 2, 3])).toBe(true);
        tools.expect(isList("")).toBe(false);
        tools.expect(isList("abc")).toBe(false);
        tools.expect(isList({})).toBe(false);
        tools.expect(isList(null)).toBe(false);
    }
})


function size(input) {
    if (isNumber(input)) {
        input = input.toString();
    }

    if (!input) {
        return 0;
    }

    if (input.length) {
        return input.length;
    }

    return mapSize(input);
}

tools.add({
    id: "size",
    impl: size,
    aliases: {
        en: "size",
        de: "größe"
    },
    simpleDescription: {
        de: "Berechne die Größe/Länge des Eingabewerts",
        en: "Calculate size/length of the input value"
    },
    argsOld: {
        en: "something",
        de: "argument"
    },
    args: [
        {
            "key": "input",
            "label_en": "Input",
            "label_de": "Eingabewert",
            "type": "text",
            "desc_en": "Value of which the length should be returned",
            "desc_de": "Wert, dessen Länge zurückgegeben werden soll"
        }
    ],
    tags: ["TAGS.UTIL", "TAGS.LIST", "TAGS.TEXT"],
    hideInToolbox: false,
    hideOnSimpleMode: false,
    tests: () => {
        tools.expect(size("")).toBe(0);
        tools.expect(size("abc")).toBe(3);
        tools.expect(size([])).toBe(0);
        tools.expect(size([1, 2, 3])).toBe(3);
        tools.expect(size({})).toBe(0);
        tools.expect(size({"a": 1, "b": 2})).toBe(2);
        tools.expect(size(null)).toBe(0);
        tools.expect(size(1337)).toBe(4);
    }
})


function asList() {
    let arr = [];
    for (let i = 0; i < arguments.length; i++) {
        arr.push(arguments[i]);
    }

    return arr;
}

tools.add({
    id: "asList",
    impl: asList,
    aliases: {
        en: "asList",
        de: "speichereAlsListe"
    },
    simpleDescription: {
        de: "Werte in Liste umwandeln",
        en: "Convert values to a list"
    },
    argsOld: {
        en: "something1, something2, ...",
        de: "argument1, argument2, ..."
    },
    args: [
        {
            "key": "input+",
            "label_en": "Value",
            "label_de": "Wert",
            "type": "text",
            "desc_en": "Input which will merged into a list",
            "desc_de": "Eingabewert, der zu einer Liste zusammengefügt wird"
        }
    ],
    tags: ["TAGS.UTIL", "TAGS.LIST"],
    hideInToolbox: false,
    hideOnSimpleMode: true,
    tests: () => {
        tools.expect(asList()).listToBe([]);
        tools.expect(asList("a")).listToBe(["a"]);
        tools.expect(asList("a", "b")).listToBe(["a", "b"]);
    }
})


function anyOf() {
    if (arguments.length < 1) {
        return '';
    }

    const arr = Array.from(arguments).flat(1);
    for (let i = 0; i < arr.length; i++) {
        console.log('check arg: ' + arguments[i]);
        if (arguments[i] || arguments[i] === 0) {
            return arguments[i];
        }
    }

    return '';
}

tools.add({
    id: "anyOf",
    impl: anyOf,
    aliases: {
        en: "anyOf",
        de: "erstesVon"
    },
    argsOld: {
        en: "something1, something2, ...",
        de: "Argument1, Argument2, ..."
    },
    args: [
        {
            "key": "input+",
            "label_en": "Value",
            "label_de": "Wert",
            "type": "text",
            "desc_en": "Value or condition to check",
            "desc_de": "Wert oder Bedingung, die geprüft werden soll"
        }
    ],
    tags: ["TAGS.UTIL", "TAGS.LIST"],
    hideInToolbox: true,
    hideOnSimpleMode: true,
    tests: () => {
        tools.expect(anyOf()).toBe('');
        tools.expect(anyOf(null, null)).toBe('');
        tools.expect(anyOf(null, null, 1)).toBe(1);
        tools.expect(anyOf(null, null, 1, 2)).toBe(1);
        tools.expect(anyOf(null, null, 0)).toBe(0);
        tools.expect(anyOf(null, null, true)).toBe(true);
        tools.expect(anyOf(null, 'some text', null)).toBe('some text');
    }
})


function filterList(listProperty, regExpList) {
    let targetList = listProperty;
    if (isString(listProperty)) {
        targetList = JSON.parse(listProperty);
    }

    if (!targetList || !targetList.filter || !regExpList.some) {
        return [];
    }

    return targetList.filter(text => regExpList.some(regex => regex.test(text)));
}

tools.add({
    id: "filterList",
    impl: filterList,
    aliases: {
        en: "filterList",
        de: "filtereListe"
    },
    simpleDescription: {
        de: "Liste nach Suchmuster einschränken",
        en: "Filter a list by search patterns"
    },
    argsOld: {
        en: "list property, RegExp list",
        de: "listeneintrag, RegExp liste"
    },
    args: [
        {
            "key": "list property",
            "label_en": "List",
            "label_de": "Liste",
            "type": "text",
            "desc_en": "List to be filtered.",
            "desc_de": "Liste, die gefiltert werden soll."
        },
        {
            "key": "regexp list",
            "label_en": "RegExp list",
            "label_de": "RegExp Liste",
            "type": "text",
            "desc_en": "List of RegExp to filter for",
            "desc_de": "Liste von RegExp nach denen gefiltert werden soll."
        }
    ],
    tags: ["TAGS.UTIL"],
    hideInToolbox: false,
    hideOnSimpleMode: false,
    tests: () => {
        tools.expect(filterList(["apfel", "birne", "clementine"], [/a.*/])).listToBe(["apfel"]);
        tools.expect(filterList(["apfel", "birne", "clementine"], [/notexisting/])).listToBe([]);
        tools.expect(filterList(["apfel", "birne", "clementine"], [/a.*/, /b.*/])).listToBe(["apfel", "birne"]);
    }
})


function asMap() {
    const result = {};
    for (let i = 0; i < arguments.length - 1; i += 2) {
        let name = stringOf(arguments[i]);
        if (name === "") {
            name = 'empty';
        }
        result[name] = arguments[i + 1];
    }

    return result;
}

tools.add({
    id: "asMap",
    impl: asMap,
    aliases: {
        en: "asMap",
        de: "speichereAlsTabelle"
    },
    simpleDescription: {
        de: "Wertpaare in Tabelle umwandeln",
        en: "Convert key value pairs to a map"
    },
    argsOld: {
        en: "name1, value1, name2, value2, ...",
        de: "name1, wert1, name2, wert2, ..."
    },
    args: [
        {
            "key": "key+",
            "label_en": "Key",
            "label_de": "Schlüssel",
            "type": "text",
            "desc_en": "Key",
            "desc_de": "Schlüssel"
        },
        {
            "key": "value+",
            "label_en": "Value",
            "label_de": "Wert",
            "type": "text",
            "desc_en": "Value",
            "desc_de": "Wert"
        }
    ],
    tags: ["TAGS.UTIL"],
    hideInToolbox: false,
    hideOnSimpleMode: true,
    tests: () => {
        tools.expect(asMap("a", 1, "b", 2)).jsonToBe({"a": 1, "b": 2});
        tools.expect(asMap("a", 1)).jsonToBe({"a": 1});
        tools.expect(asMap()).jsonToBe({});

        tools.it('will ignore incomplete key-value pairs', () => {
            tools.expect(asMap("a", 1, "b", 2, "c")).jsonToBe({"a": 1, "b": 2});
        });
    }
})


function removeEmptyListEntries() {
    if (arguments.length < 1) {
        return [];
    }

    return Array.from(arguments)
        .flat(1)
        .filter(s => s !== null);
}

tools.add({
    id: "removeEmptyListEntries",
    impl: removeEmptyListEntries,
    aliases: {
        en: "removeEmptyListEntries",
        de: "entferneLeereListeneinträge"
    },
    simpleDescription: {
        de: "Leere Listeneinträge entfernen",
        en: "Remove empty list entries"
    },
    argsOld: {
        en: "list",
        de: "liste"
    },
    args: [
        {
            "key": "list",
            "label_en": "Input list",
            "label_de": "Eingabeliste",
            "type": "text",
            "desc_en": "List from which empty entries should be removed.",
            "desc_de": "Eingabeliste, aus der leere Einträge entfernt werden sollen."
        }
    ],
    tags: ["TAGS.UTIL", "TAGS.LIST"],
    hideInToolbox: false,
    hideOnSimpleMode: false,
    tests: () => {
        tools.expect(removeEmptyListEntries()).listToBe([]);
        tools.expect(removeEmptyListEntries(null)).listToBe([]);
        tools.expect(removeEmptyListEntries([null, 'a', null, 'b'])).listToBe(['a', 'b']);
        tools.expect(removeEmptyListEntries([null, 'a', [null, 'b'], 'c'])).listToBe(['a', [null, 'b'], 'c']);
    }
})


function lowerCaseText(text) {
    if (isObject(text)) {
        return '';
    }
    return stringOf(text).toLowerCase();
}

tools.add({
    id: "lowerCaseText",
    impl: lowerCaseText,
    aliases: {
        en: "lowerCaseText",
        de: "ändereZuKleinbuchstaben"
    },
    simpleDescription: {
        de: "Ganzen Text kleinschreiben",
        en: "Convert whole text to lowercase"
    },
    argsOld: {
        en: "text",
        de: "text"
    },
    args: [
        {
            "key": "text",
            "label_en": "Input text",
            "label_de": "Eingabetext",
            "type": "text",
            "desc_en": "Text to be converted to lowercase",
            "desc_de": "Text, der in Kleinbuchstaben umgewandelt werden soll"
        }
    ],
    tags: ["TAGS.TEXT"],
    hideInToolbox: false,
    hideOnSimpleMode: false,
    tests: () => {
        tools.expect(lowerCaseText("")).toBe("");
        tools.expect(lowerCaseText("A")).toBe("a");
        tools.expect(lowerCaseText("Aa")).toBe("aa");
        tools.expect(lowerCaseText(1)).toBe("1");
        tools.expect(lowerCaseText("1")).toBe("1");
        tools.expect(lowerCaseText(true)).toBe("true");
        tools.expect(lowerCaseText(false)).toBe("false");
        tools.expect(lowerCaseText({})).toBe('');
        tools.expect(lowerCaseText([])).toBe('');
    }
})


function upperCaseText(text) {
    if (isObject(text)) {
        return '';
    }

    return stringOf(text).toUpperCase();
}

tools.add({
    id: "upperCaseText",
    impl: upperCaseText,
    aliases: {
        en: "upperCaseText",
        de: "ändereZuGroßbuchstaben"
    },
    simpleDescription: {
        de: "Ganzen Text großschreiben",
        en: "Convert whole text to uppercase"
    },
    argsOld: {
        en: "text",
        de: "text"
    },
    args: [
        {
            "key": "text",
            "label_en": "Input text",
            "label_de": "Eingabetext",
            "type": "text",
            "desc_en": "Text to be converted to uppercase",
            "desc_de": "Text, der in Großbuchstaben umgewandelt werden soll"
        }
    ],
    tags: ["TAGS.TEXT"],
    hideInToolbox: false,
    hideOnSimpleMode: false,
    tests: () => {
        tools.expect(upperCaseText("")).toBe("");
        tools.expect(upperCaseText("a")).toBe("A");
        tools.expect(upperCaseText("aa")).toBe("AA");
        tools.expect(upperCaseText(1)).toBe("1");
        tools.expect(upperCaseText("1")).toBe("1");
        tools.expect(upperCaseText(true)).toBe("TRUE");
        tools.expect(upperCaseText(false)).toBe("FALSE");
        tools.expect(upperCaseText({})).toBe('');
        tools.expect(upperCaseText([])).toBe('');
    }
})


function joinText() {
    if (arguments.length < 2) {
        return '';
    }

    const arr = [];
    const separator = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (Array.isArray(arguments[i])) {
            arr.push(joinText.apply(this, [separator].concat(arguments[i])));
        } else {
            arr.push(stringOf(arguments[i]));
        }
    }

    return arr.join(arguments[0]);
}

tools.add({
    id: "joinText",
    impl: joinText,
    aliases: {
        en: "joinText",
        de: "verbindeTextMitTrennzeichen"
    },
    simpleDescription: {
        de: "Mehrere Texte mit Trennzeichen verbinden",
        en: "Join multiple texts with a separator"
    },
    argsOld: {
        en: "separator, text1, text2, ...",
        de: "trennzeichen, text1, text2, ..."
    },
    args: [
        {
            "key": "separator",
            "label_en": "Input text",
            "label_de": "Trennzeichen",
            "type": "text",
            "desc_en": "Separator to use",
            "desc_de": "Zu verwendendes Trennzeichen"
        },
        {
            "key": "text+",
            "label_en": "Text part",
            "label_de": "Teiltext",
            "type": "text",
            "desc_en": "Text part to join with separator",
            "desc_de": "Text, der mit Trennzeichen verbunden wird"
        }
    ],
    tags: ["TAGS.TEXT"],
    hideInToolbox: false,
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
    const arr = [];
    for (let i = 0; i < arguments.length; i++) {
        if (!isObject(arguments[i])) {
            arr.push(stringOf(arguments[i]));
        }
    }

    return arr.join('');
}

tools.add({
    id: "concatenateText",
    impl: concatenateText,
    aliases: {
        en: "concatenateText",
        de: "verketteText"
    },
    simpleDescription: {
        de: "Mehrere Texte mit Trennzeichen verketten",
        en: "Concatenate multiple texts with a separator"
    },
    argsOld: {
        en: "text1, text2, ...",
        de: "text1, text2, ..."
    },
    args: [
        {
            "key": "text+",
            "label_en": "Part of text",
            "label_de": "Teil des Textes",
            "type": "text",
            "desc_en": "Text to concatenate",
            "desc_de": "Text, der verkettet werden soll"
        }
    ],
    tags: ["TAGS.TEXT"],
    hideInToolbox: false,
    hideOnSimpleMode: true,
    tests: () => {
        tools.expect(concatenateText()).toBe("");
        tools.expect(concatenateText("a")).toBe("a");
        tools.expect(concatenateText("a", "b")).toBe("ab");
        tools.expect(concatenateText("a", "b", "c")).toBe("abc");
        tools.expect(concatenateText("a", ["b", "c"], "d")).toBe("ad");
        tools.expect(concatenateText(1, 'a')).toBe("1a");
        tools.expect(concatenateText(true, 'a')).toBe("truea");
        tools.expect(concatenateText(false, 'a')).toBe("falsea");
        tools.expect(concatenateText({}, 'a')).toBe("a");
        tools.expect(concatenateText([], 'a')).toBe("a");
    }
})


function insertTextAtPosition(text, textToInsert, position) {
    text = stringOf(text);
    textToInsert = stringOf(textToInsert);

    if (!isInteger(position)) {
        position = 0;
    }

    return text.slice(0, position)
        + textToInsert
        + text.slice(position);
}

tools.add({
    id: "insertTextAtPosition",
    impl: insertTextAtPosition,
    aliases: {
        en: "insertTextAtPosition",
        de: "fügeTextAnPositionEin"
    },
    simpleDescription: {
        de: "Text an Position einfügen",
        en: "Insert text at position"
    },
    argsOld: {
        en: "text, textToInsert, position",
        de: "text, einfügeText, position"
    },
    args: [
        {
            "key": "text",
            "label_en": "Input text",
            "label_de": "Eingabetext",
            "type": "text",
            "desc_en": "Text where something should be inserted",
            "desc_de": "Text, in dem eingefügt werden soll"
        },
        {
            "key": "textToInsert",
            "label_en": "Insert text",
            "label_de": "Einfügetext",
            "type": "text",
            "desc_en": "Text that should be inserted",
            "desc_de": "Text, der eingefügt werden soll"
        },
        {
            "key": "position",
            "label_en": "Position",
            "label_de": "Position",
            "type": "text",
            "desc_en": "Position where the text should be inserted (starting at 0)",
            "desc_de": "Position, an der der Text eingefügt werden soll (beginnend bei 0)"
        }
    ],
    tags: ["TAGS.TEXT"],
    hideInToolbox: false,
    hideOnSimpleMode: false,
    tests: () => {
        tools.expect(insertTextAtPosition("01234", "#", 1)).toBe("0#1234");
        tools.expect(insertTextAtPosition("01234", "#", 0)).toBe("#01234");
        tools.expect(insertTextAtPosition("01234", "#", 3)).toBe("012#34");
        tools.expect(insertTextAtPosition("01234", "#", 4)).toBe("0123#4");
        tools.expect(insertTextAtPosition("01234", "#", 5)).toBe("01234#");
        tools.expect(insertTextAtPosition("01234", "#", -1)).toBe("0123#4");
        tools.expect(insertTextAtPosition("01234", "#", -2)).toBe("012#34");
        tools.expect(insertTextAtPosition("01234", true, -3)).toBe("01true234");
        tools.expect(insertTextAtPosition("01234", null, 1)).toBe("01234");
    }
})


function textAtPosition(text, position, length) {
    if (!isInteger(position)) {
        return "";
    }

    if ((length || length === 0) && !isInteger(length)) {
        return "";
    }

    if (!length || length === 0) {
        return stringOf(text).substring(position);
    }

    return stringOf(text).substring(position, position + length);
}

tools.add({
    id: "textAtPosition",
    impl: textAtPosition,
    aliases: {
        en: "textAtPosition",
        de: "gibTextAnPosition"
    },
    simpleDescription: {
        de: "Text ab Position auslesen",
        en: "Read text from position"
    },
    argsOld: {
        en: "text, position, length",
        de: "text, position, länge"
    },
    args: [
        {
            "key": "text",
            "label_en": "Input text",
            "label_de": "Eingabetext",
            "type": "text",
            "desc_en": "Text from which something should be extracted",
            "desc_de": "Text, aus dem etwas extrahiert werden soll"
        },
        {
            "key": "position",
            "label_en": "Position",
            "label_de": "Position",
            "type": "text",
            "desc_en": "Position, to start extracting from (starting at 0)",
            "desc_de": "Position, ab der extrahiert wird (beginnend bei 0)"
        },
        {
            "key": "length",
            "label_en": "Length",
            "label_de": "Länge",
            "type": "text",
            "desc_en": "Length of the text to extract (empty = until the end)",
            "desc_de": "Länge des zu extrahierenden Textes (leer = bis zum Ende)"
        }
    ],
    tags: ["TAGS.TEXT"],
    hideInToolbox: false,
    hideOnSimpleMode: false,
    tests: () => {
        tools.expect(textAtPosition("01234", 1, 1)).toBe("1");
        tools.expect(textAtPosition("01234", 0, 1)).toBe("0");
        tools.expect(textAtPosition("01234", 3, 2)).toBe("34");
        tools.expect(textAtPosition("01234", 5, 1)).toBe("");
        tools.expect(textAtPosition("This is expected", 8)).toBe("expected");
    }
})


function trimText(text) {
    return stringOf(text).trim();
}

tools.add({
    id: "trimText",
    impl: trimText,
    aliases: {
        en: "trimText",
        de: "schneideTextZu"
    },
    simpleDescription: {
        de: "Entferne Leerzeichen am Beginn/Ende des Texts",
        en: "Remove leading and trailing spaces from text"
    },
    argsOld: {
        en: "text",
        de: "text"
    },
    args: [
        {
            "key": "text",
            "label_en": "Text",
            "label_de": "Text",
            "type": "text",
            "desc_en": "Text where spaces at the beginning and end should be removed",
            "desc_de": "Text, aus dem Leerzeichen, am Anfang & Ende entfernt werden"
        }
    ],
    tags: ["TAGS.TEXT"],
    hideInToolbox: false,
    hideOnSimpleMode: false,
    tests: () => {
        tools.expect(trimText(" a ")).toBe("a");
        tools.expect(trimText("  a")).toBe("a");
        tools.expect(trimText("a  ")).toBe("a");
        tools.expect(trimText("a")).toBe("a");
        tools.expect(trimText("")).toBe("");
        tools.expect(trimText("a\n")).toBe("a");
    }
})


function normalizeWhitespaces(text) {
    return stringOf(text).replace(/\s+/g, " ");
}

tools.add({
    id: "normalizeWhitespaces",
    impl: normalizeWhitespaces,
    aliases: {
        en: "normalizeWhitespaces",
        de: "normalisiereLücken"
    },
    simpleDescription: {
        de: "Entferne unnötige Leerzeichen aus dem Text",
        en: "Remove unnecessary whitespace"
    },
    argsOld: {
        en: "inputString",
        de: "zeichenkette"
    },
    args: [
        {
            "key": "inputString",
            "label_en": "Text",
            "label_de": "Text",
            "type": "text",
            "desc_en": "Text with multiple whitespaces to reduce",
            "desc_de": "Text, mit zu reduzierenden mehrfachen Leerzeichen"
        }
    ],
    tags: ["TAGS.TEXT"],
    hideInToolbox: false,
    hideOnSimpleMode: false,
    tests: () => {
        tools.expect(normalizeWhitespaces(" ")).toBe(" ");
        tools.expect(normalizeWhitespaces(" ")).toBe(" ");
        tools.expect(normalizeWhitespaces(" ")).toBe(" ");
        tools.expect(normalizeWhitespaces(" ")).toBe(" ");
        tools.expect(normalizeWhitespaces(" ")).toBe(" ");
        tools.expect(normalizeWhitespaces("    ")).toBe(" ");
    }
})

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

function replaceInText(text, textToSearch, replaceWith) {

    const replaceLogic = t => {
        t = stringOf(t);
        if (textToSearch instanceof RegExp) {
            return t.replace(textToSearch, stringOf(replaceWith));
        } else {
            t = replaceAll(t, textToSearch, replaceWith);
        }
        return t;
    }

    if (Array.isArray(text)) {
        //localized text support
        text.map(tx => {
            tx['value'] = replaceLogic(tx['value']);
            return tx;
        });

    } else {
        text = replaceLogic(text);
    }

    return text;

}

tools.add({
    id: "replaceInText",
    impl: replaceInText,
    aliases: {
        en: "replaceInText",
        de: "ersetzeInText"
    },
    simpleDescription: {
        de: "Suchbegriff im Text finden und ersetzen",
        en: "Search and Replace in text"
    },
    argsOld: {
        en: "text, textToSearch, replaceWith",
        de: "text, suchtext, ersetzeDurch"
    },
    args: [
        {
            "key": "text",
            "label_en": "Input text",
            "label_de": "Eingabetext",
            "type": "text",
            "desc_en": "Text in which something should be replaced.",
            "desc_de": "Text, in dem etwas ersetzt werden soll."
        },
        {
            "key": "textToSearch",
            "label_en": "Search",
            "label_de": "Suchtext",
            "type": "text",
            "desc_en": "Text which should be replaced.",
            "desc_de": "Text, der ersetzt werden soll."
        },
        {
            "key": "replaceWith",
            "label_en": "Replace text",
            "label_de": "Einfügetext",
            "type": "text",
            "desc_en": "Text which should be inserted instead of the search text.",
            "desc_de": "Text, der anstelle des Suchtextes eingefügt werden soll."
        }
    ],
    tags: ["TAGS.TEXT"],
    hideInToolbox: false,
    hideOnSimpleMode: false,
    tests: () => {
        tools.expect(replaceInText("ene mene muh", /m(.)/g, "A$1A")).toBe("ene AeAne AuAh");
        tools.expect(replaceInText("ene mene\n muh", "\n", "")).toBe("ene mene muh");
        tools.expect(replaceInText([{"lang": "en", "value": "ene mene\n muh"}], "\n", "")).jsonToBe([{
            "lang": "en",
            "value": "ene mene muh"
        }]);
    }
})


function locateInText(text, textToSearch) {
    if (textToSearch instanceof RegExp) {
        return stringOf(text).search(textToSearch);
    } else {
        return stringOf(text).toLowerCase().indexOf(stringOf(textToSearch).toLowerCase());
    }
}

tools.add({
    id: "locateInText",
    impl: locateInText,
    aliases: {
        en: "locateInText",
        de: "findePositionInText"
    },
    simpleDescription: {
        de: "Suchbegriff im Text finden und Position ausgeben",
        en: "Search for term in text and return position"
    },
    argsOld: {
        en: "text, textToSearch",
        de: "text, suchtext"
    },
    args: [
        {
            "key": "text",
            "label_en": "Input text",
            "label_de": "Eingabetext",
            "type": "text",
            "desc_en": "Text in which is searched.",
            "desc_de": "Text, in dem gesucht wird."
        },
        {
            "key": "textToSearch",
            "label_en": "Search",
            "label_de": "Suchtext",
            "type": "text",
            "desc_en": "Text that should be searched.",
            "desc_de": "Text, der gesucht werden soll."
        }
    ],
    tags: ["TAGS.TEXT"],
    hideInToolbox: false,
    hideOnSimpleMode: false,
    tests: () => {
        tools.expect(locateInText("ene mene muh", "mene")).toBe(4);
        tools.expect(locateInText("ene mene muh", "xxx")).toBe(-1);
        tools.expect(locateInText("ene mene muh", /m.*e/)).toBe(4);
        tools.expect(locateInText("ene mene muh", /xxx/)).toBe(-1);
    }
})


function containsText(text, textToSearch) {
    if (Array.isArray(textToSearch) && textToSearch.length > 0) {
        for (let i = 0; i < textToSearch.length; i++) {
            const result = containsText(text, textToSearch[i]);
            if (result) {
                return true;
            }
        }

        return false;
    }
    return locateInText(text, textToSearch) >= 0;
}

tools.add({
    id: "containsText",
    impl: containsText,
    aliases: {
        en: "containsText",
        de: "beinhaltetText"
    },
    simpleDescription: {
        de: "Ist der Suchbegriff im Text zu finden?",
        en: "Does the text contain the search term?"
    },
    argsOld: {
        en: "text, textToSearch",
        de: "text, suchtext"
    },
    args: [
        {
            "key": "text",
            "label_en": "Input text",
            "label_de": "Eingabetext",
            "type": "text",
            "desc_en": "Text in which is searched.",
            "desc_de": "Text, in dem gesucht wird."
        },
        {
            "key": "textToSearch",
            "label_en": "Search",
            "label_de": "Suchtext",
            "type": "text",
            "desc_en": "Text which should be searched.",
            "desc_de": "Text, der gesucht werden soll."
        }
    ],
    tags: ["TAGS.CONDITIONAL", "TAGS.TEXT"],
    hideInToolbox: false,
    hideOnSimpleMode: false,
    tests: () => {
        tools.expect(containsText("ene mene muh", "mene")).toBe(true);
        tools.expect(containsText("ene mene muh", "xxx")).toBe(false);
        tools.expect(containsText("ene mene muh", ["mene", "xxx"])).toBe(true);
        tools.expect(containsText("ene mene muh", ["xxx", "yyy"])).toBe(false);
    }
})


function inList() {
    const arr = Array.from(arguments).flat(1);
    if (arr.length < 2) {
        return false;
    }

    const searchPredicate = (s, i) => {
        return s == arr[0] && i > 0; // intentional == instead of === to allow finding 1 in ['1', 2]
    };

    return !isUndefined(arr.find(searchPredicate))
}

tools.add({
    id: "inList",
    impl: inList,
    aliases: {
        en: "inList",
        de: "istInListe"
    },
    simpleDescription: {
        de: "Ist der Wert in Liste zu finden?",
        en: "Does a List contain a specific value?"
    },
    argsOld: {
        en: "searchItem, listItemToSearch1, listItemToSearch2, ...",
        de: "suchbegriff, listeneintrag1, listeneintrag2, ..."
    },
    args: [
        {
            "key": "searchItem",
            "label_en": "Search",
            "label_de": "Suchtext",
            "type": "text",
            "desc_en": "Text which should be searched.",
            "desc_de": "Text, der gesucht werden soll."
        },
        {
            "key": "listItemToSearch+",
            "label_en": "List entry",
            "label_de": "Listeneintrag",
            "type": "text",
            "desc_en": "List entry in which is searched.",
            "desc_de": "Listeneintrag, in dem gesucht wird."
        }
    ],
    tags: ["TAGS.CONDITIONAL", "TAGS.LIST"],
    hideInToolbox: false,
    hideOnSimpleMode: true,
    tests: () => {
        tools.expect(inList("a", "a", "b")).toBe(true);
        tools.expect(inList("a", "b", "a")).toBe(true);
        tools.expect(inList("a", "b", "c")).toBe(false);
        tools.expect(inList("a")).toBe(false);

        tools.expect(inList(1, ['1', 2, 'b'])).toBe(true);
        tools.expect(inList(true, ['2', true])).toBe(true);
    }
})


function extractFromText(text, pattern, fallback, withGroups) {
    if (!pattern instanceof RegExp) {
        pattern = new RegExp(pattern, 'ig');
    }

    let matched = stringOf(text).match(pattern);
    if (matched === null) {
        return stringOf(fallback);
    }

    if (withGroups) {
        return matched[1] || matched[0];
    }

    return matched[0];
}

tools.add({
    id: "extractFromText",
    impl: extractFromText,
    aliases: {
        en: "extractFromText",
        de: "extrahiereAusText"
    },
    simpleDescription: {
        de: "Ersten Suchtreffer aus Text auslesen",
        en: "Extract first search hit from text"
    },
    argsOld: {
        en: "text, muster, fallback",
        de: "text, muster, fallback"
    },
    args: [
        {
            "key": "text",
            "label_en": "Input text",
            "label_de": "Eingabetext",
            "type": "text",
            "desc_en": "Text from which something should be extracted.",
            "desc_de": "Text, aus dem etwas extrahiert werden soll."
        },
        {
            "key": "muster",
            "label_en": "Search",
            "label_de": "Suche",
            "type": "text",
            "desc_en": "Simple string or RegExp used for the search.",
            "desc_de": "Text oder RegExp-Muster zum Suchen."
        },
        {
            "key": "fallback",
            "label_en": "Fallback",
            "label_de": "Ersatzwert",
            "type": "text",
            "desc_en": "Text to return if nothing was found.",
            "desc_de": "Rückgabetext, wenn nichts gefunden wurde."
        }
    ],
    tags: ["TAGS.EXTRACT"],
    hideInToolbox: false,
    hideOnSimpleMode: false,
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
    let myRegexp;
    if (pattern instanceof RegExp) {
        myRegexp = new RegExp(pattern, pattern.flags.replace("g", "") + "g");
    } else {
        myRegexp = new RegExp(pattern, "g");
    }
    const arr = [];

    while (match = myRegexp.exec(text)) {
        if (withGroups) {
            const subArray = [];
            for (let i = 1; i < match.length; i++) {
                subArray.push(match[i]);
            }
            arr.push(subArray);
        } else {
            arr.push(match[0]);
        }
    }

    return arr;
}

tools.add({
    id: "extractAllMatchesFromText",
    impl: extractAllMatchesFromText,
    aliases: {
        en: "extractAllMatchesFromText",
        de: "extrahiereAlleTrefferAusText"
    },
    simpleDescription: {
        de: "Alle Suchtreffer aus Text auslesen",
        en: "Extract all search hits from text"
    },
    argsOld: {
        en: "text, pattern, withGroups",
        de: "text, muster, mitGruppen"
    },
    args: [
        {
            "key": "text",
            "label_en": "Text",
            "label_de": "Text",
            "type": "text",
            "desc_en": "Text from which something should be extracted",
            "desc_de": "Text, aus dem etwas extrahiert werden soll"
        },
        {
            "key": "pattern",
            "label_en": "Search",
            "label_de": "Suchtext",
            "type": "text",
            "desc_en": "Simple text or RegExp pattern to search with",
            "desc_de": "Einfacher Text oder RegExp-Muster mit dem gesucht werden soll"
        },
        {
            "key": "withGroups",
            "label_en": "All results",
            "label_de": "Alle Ergebnisse",
            "type": "text",
            "desc_en": "Return all results (active if not empty)",
            "desc_de": "Alle Treffer zurückgeben (aktiv wenn nicht leer)"
        }
    ],
    tags: ["TAGS.EXTRACT"],
    hideInToolbox: false,
    hideOnSimpleMode: false,
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
    id: "extractNumberFromText",
    impl: extractNumberFromText,
    aliases: {
        en: "extractNumberFromText",
        de: "extrahiereZahlAusText"
    },
    simpleDescription: {
        de: "Erste Zahl aus Text auslesen",
        en: "Extract first number from text"
    },
    argsOld: {
        en: "text, fallback",
        de: "text, fallback"
    },
    args: [
        {
            "key": "text",
            "label_en": "Input text",
            "label_de": "Eingabetext",
            "type": "text",
            "desc_en": "Text from which a number should be extracted",
            "desc_de": "Text, aus dem eine Zahl extrahiert werden soll"
        },
        {
            "key": "fallback",
            "label_en": "Fallback",
            "label_de": "Ersatzwert",
            "type": "text",
            "desc_en": "Value to return if no number was found",
            "desc_de": "Rückgabetext, wenn keine Zahl gefunden wurde"
        }
    ],
    tags: ["TAGS.EXTRACT"],
    hideInToolbox: false,
    hideOnSimpleMode: false,
    tests: () => {
        tools.expect(extractNumberFromText("Temperaturen heute: 23 bis 25 Grad")).toBe("25");
        tools.expect(extractNumberFromText("Temperaturen heute: -23,6 bis 25.1 Grad")).toBe("25.1");
        tools.expect(extractNumberFromText("  23-25 ")).toBe("25");
        tools.expect(extractNumberFromText("-23-25")).toBe("25");
        tools.expect(extractNumberFromText("-23 - -25")).toBe("-25");
        tools.expect(extractNumberFromText('Text ohne zahlen', 10)).toBe('10');
        tools.expect(extractNumberFromText('Text ohne zahlen')).toBe('');
        tools.expect(extractNumberFromText('Text ohne zahlen', '20')).toBe('20');
    }
})

function numberPattern() {
    return /(((?<=[^\d])-)|^-)?[\d.,]*\d/g;
}

tools.add({
    id: "numberPattern",
    impl: numberPattern,
    aliases: {
        en: "numberPattern",
        de: "zahlenMuster"
    },
    argsOld: {
        en: "",
        de: ""
    },
    args: [],
    tags: ["pattern"],
    hideInToolbox: true,
    hideOnSimpleMode: true,
    tests: () => {
        tools.expect(numberPattern().source).toBe("(((?<=[^\\d])-)|^-)?[\\d.,]*\\d");
    }
})

function extractAllNumbersFromText(text) {
    return extractAllMatchesFromText(text, numberPattern()).map(s => s.trim());
}

tools.add({
    id: "extractAllNumbersFromText",
    impl: extractAllNumbersFromText,
    aliases: {
        en: "extractAllNumbersFromText",
        de: "extrahiereAlleZahlenAusText"
    },
    simpleDescription: {
        de: "Alle Zahlen aus Text auslesen",
        en: "Extract all numbers from text"
    },
    argsOld: {
        en: "text",
        de: "text"
    },
    args: [
        {
            "key": "text",
            "label_en": "Input text",
            "label_de": "Eingabetext",
            "type": "text",
            "desc_en": "Text from which all numbers should be extracted",
            "desc_de": "Text, aus dem alle Zahlen extrahiert werden sollen"
        }
    ],
    tags: ["TAGS.EXTRACT"],
    hideInToolbox: false,
    hideOnSimpleMode: false,
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
    return stringOf(text).replace(/[^a-zA-Z0-9]/g, ""); // TODO: Space wohl unabsichtlich ebenfalls entfernt?
}

tools.add({
    id: "deleteSpecialCharacters",
    impl: deleteSpecialCharacters,
    aliases: {
        en: "deleteSpecialCharacters",
        de: "löscheSonderzeichen"
    },
    simpleDescription: {
        de: "Entferne alle Sonderzeichen aus Text",
        en: "Remove all special characters from text"
    },
    argsOld: {
        en: "text",
        de: "text"
    },
    args: [
        {
            "key": "text",
            "label_en": "Input text",
            "label_de": "Eingabetext",
            "type": "text",
            "desc_en": "Text from which special characters should be removed",
            "desc_de": "Text, aus dem Sonderzeichen entfernt werden sollen"
        }
    ],
    tags: ["TAGS.TEXT"],
    hideInToolbox: false,
    hideOnSimpleMode: false,
    tests: () => {
        tools.expect(deleteSpecialCharacters("a-b-c")).toBe("abc");
        tools.expect(deleteSpecialCharacters("a b c")).toBe("abc");
        tools.expect(deleteSpecialCharacters("a b c!")).toBe("abc");
        tools.expect(deleteSpecialCharacters("text!\"§$%&/()=?*#'+-.,;:_")).toBe("text");
    }
})

function isBlank(text_or_object) {
    if (text_or_object === null || isUndefined(text_or_object)) {
        return true;
    }

    if (
        isString(text_or_object) ||
        isBoolean(text_or_object) ||
        isNumber(text_or_object)
    ) {
        return stringOf(text_or_object).trim().length < 1;
    }

    if (text_or_object.length) {
        return text_or_object.length < 1;
    }

    const keys = Object.keys(text_or_object);
    if (keys.length) {
        return keys.length < 1;
    }

    return true;
}

tools.add({
    id: "isBlank",
    impl: isBlank,
    aliases: {
        en: "isBlank",
        de: "istLeer"
    },
    simpleDescription: {
        de: "Ist der Wert leer?",
        en: "Is the value empty?"
    },
    argsOld: {
        en: "text_or_object",
        de: "text_oder_objekt"
    },
    args: [
        {
            "key": "text",
            "label_en": "Text or object",
            "label_de": "Text oder Objekt",
            "type": "text",
            "desc_en": "Text or object to check for being empty",
            "desc_de": "Text oder Objekt, das auf Leerheit überprüft werden soll"
        }
    ],
    tags: ["TAGS.CONDITIONAL"],
    hideInToolbox: false,
    hideOnSimpleMode: false,
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
    id: "isNotBlank",
    impl: isNotBlank,
    aliases: {
        en: "isNotBlank",
        de: "istNichtLeer"
    },
    simpleDescription: {
        de: "Ist der Wert gefüllt?",
        en: "Is the value filled?"
    },
    argsOld: {
        en: "text_or_object",
        de: "text_oder_objekt"
    },
    args: [
        {
            "key": "text",
            "label_en": "Text or object",
            "label_de": "Text oder Objekt",
            "type": "text",
            "desc_en": "Text or object which should be checked for not being empty",
            "desc_de": "Text oder Objekt, das auf Nicht-Leerheit überprüft werden soll"
        }
    ],
    tags: ["TAGS.CONDITIONAL"],
    hideInToolbox: false,
    hideOnSimpleMode: false,
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
    id: "startsNumeric",
    impl: startsNumeric,
    aliases: {
        en: "startsNumeric",
        de: "beginntMitZahl"
    },
    simpleDescription: {
        de: "Beginnt der Text mit einer Zahl?",
        en: "Does the text start with a number?"
    },
    argsOld: {
        en: "text",
        de: "text"
    },
    args: [
        {
            "key": "text",
            "label_en": "Input text",
            "label_de": "Eingabetext",
            "type": "text",
            "desc_en": "Text to check for starting with a number",
            "desc_de": "Text bei dem überprüft werden soll, ob er mit einer Zahl beginnt"
        }
    ],
    tags: ["TAGS.TEXT", "TAGS.CONDITIONAL"],
    hideInToolbox: false,
    hideOnSimpleMode: false,
    tests: () => {
        tools.expect(startsNumeric("1")).toBe(true);
        tools.expect(startsNumeric("23")).toBe(true);
        tools.expect(startsNumeric("3,4")).toBe(true);
        tools.expect(startsNumeric("4abcd")).toBe(true);
        tools.expect(startsNumeric("abcd")).toBe(false);
        tools.expect(startsNumeric("   5")).toBe(false);
    }
})


function isNumeric(text) {
    return matches(text, '^' + numberPattern().source + '$');
}

tools.add({
    id: "isNumeric",
    impl: isNumeric,
    aliases: {
        en: "isNumeric",
        de: "istZahl"
    },
    simpleDescription: {
        de: "Ist der Wert eine Zahl?",
        en: "Is the value a number?"
    },
    argsOld: {
        en: "text",
        de: "text"
    },
    args: [
        {
            "key": "text",
            "label_en": "Input text",
            "label_de": "Eingabetext",
            "type": "text",
            "desc_en": "Text to check for being a number",
            "desc_de": "Text bei dem überprüft werden soll, ob es eine Zahl ist"
        }
    ],
    tags: ["TAGS.TEXT", "TAGS.CONDITIONAL"],
    hideInToolbox: false,
    hideOnSimpleMode: false,
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
    const input = arguments[0];

    for (let i = 1; i < arguments.length - 1; i += 2) {
        const replacement = stringOf(arguments[i + 1]);
        if (arguments[i] instanceof RegExp) {
            const match = arguments[i];
            if (match.test(stringOf(input))) {
                return replacement;
            }
        } else if (containsText(input, arguments[i])) {
            return replacement;
        }
    }

    if (arguments.length % 2 === 0 && arguments[arguments.length - 1]) {
        return arguments[arguments.length - 1].toString();
    }

    return "";
}

tools.add({
    id: "decode",
    impl: decode,
    aliases: {
        en: "decode",
        de: "findeUndMappe"
    },
    simpleDescription: {
        de: "Ersten Suchtreffer einer Mehrfachsuche ausgeben",
        en: "Return first search hit of multi search"
    },
    argsOld: {
        en: "text, textToSearch_1, textToReplace_1, textToSearch_2, textToReplace_2, ..., fallback",
        de: "text, suchtext_1, zuErsetzenderText_1, suchtext_2, zuErsetzenderText_2, ..., fallback"
    },
    args: [
        {
            "key": "text",
            "label_en": "Input text",
            "label_de": "Eingabetext",
            "type": "text",
            "desc_en": "Text to be searched",
            "desc_de": "Text, in dem gesucht wird"
        },
        {
            "key": "textToSearch+",
            "label_en": "Search",
            "label_de": "Suche",
            "type": "text",
            "desc_en": "Text or RegExp pattern to search for",
            "desc_de": "Text oder RegExp-Muster nach dem gesucht wird"
        },
        {
            "key": "textToReplace+",
            "label_en": "Replacement text",
            "label_de": "Ersatztext",
            "type": "text",
            "desc_en": "string for replacement",
            "desc_de": "Text, durch den der Suchtext ersetzt wird"
        },
        {
            "key": "fallback",
            "label_en": "Fallback",
            "label_de": "Ersatztext",
            "type": "text",
            "desc_en": "Value to return if nothing was found",
            "desc_de": "Rückgabetext, wenn die Suche nichts ergeben hat"
        }
    ],
    tags: ["TAGS.EXTRACT"],
    hideInToolbox: false,
    hideOnSimpleMode: true,
    tests: () => {
        tools.expect(decode("some words", "default")).toBe("default")
        tools.expect(decode("some words", "some", "another", "")).toBe("another");
        tools.expect(decode("some words", "some", "a", "words", "b")).toBe("a");
        tools.expect(decode("some words", /so.*/, "a", "words", "b")).toBe("a");
        tools.expect(decode("some words", "not", "not_replace", "found", "found_replace", "fallback")).toBe("fallback");
    }
})


function decodeAll() {
    const pushIfUnique = function (arr, elm) {
        if (arr.indexOf(elm) < 0) {
            arr.push(elm);
        }
        return arr;
    };

    const input = arguments[0];
    const replacements = [];
    for (let i = 1; i < arguments.length - 1; i += 2) {
        const replacement = stringOf(arguments[i + 1]);
        if (arguments[i] instanceof RegExp) {
            let match = arguments[i];
            if (match.test(stringOf(input))) {
                pushIfUnique(replacements, replacement);
            }
        } else if (containsText(input, arguments[i])) {
            pushIfUnique(replacements, replacement);
        }
    }

    const fallbackValue = arguments[arguments.length - 1];
    if (replacements.length === 0 && arguments.length % 2 === 0 && fallbackValue) {
        replacements.push(fallbackValue)
    }

    return replacements;
}

tools.add({
    id: "decodeAll",
    impl: decodeAll,
    aliases: {
        en: "decodeAll",
        de: "findeUndMappeAlles"
    },
    simpleDescription: {
        de: "Alle Suchtreffer für Mehrfachsuche ausgeben",
        en: "Return all search hits for multi search"
    },
    argsOld: {
        en: "text, textToSearch_1, textToReplace_1, textToSearch_2, textToReplace_2, ..., fallback",
        de: "text, suchtext_1, zuErsetzenderText_1, suchtext_2, zuErsetzenderText_2, ..., fallback"
    },
    args: [
        {
            "key": "text",
            "label_en": "Input text",
            "label_de": "Eingabetext",
            "type": "text",
            "desc_en": "Text to be searched",
            "desc_de": "Text, in dem gesucht wird"
        },
        {
            "key": "textToSearch+",
            "label_en": "Search",
            "label_de": "Suchtext",
            "type": "text",
            "desc_en": "Text or RegExp pattern to search for",
            "desc_de": "Text oder RegExp-Muster nach dem gesucht wird"
        },
        {
            "key": "textToReplace+",
            "label_en": "Replacement",
            "label_de": "Ersatztext",
            "type": "text",
            "desc_en": "Text to replace the search text with",
            "desc_de": "Text, durch den der Suchtext ersetzt wird"
        },
        {
            "key": "fallback",
            "label_en": "Fallback",
            "label_de": "Ersatzwert",
            "type": "text",
            "desc_en": "Value to return if nothing was found",
            "desc_de": "Rückgabetext, wenn die Suche nichts ergeben hat"
        }
    ],
    tags: ["TAGS.EXTRACT"],
    hideInToolbox: false,
    hideOnSimpleMode: true,
    tests: () => {
        tools.expect(decodeAll("some words", "fallback")).jsonToBe(["fallback"]);
        tools.expect(decodeAll("some words", "some", "a", "words", "b")).jsonToBe(["a", "b"]);
        tools.expect(decodeAll("some words")).jsonToBe([]);
        tools.expect(decodeAll("some words", "some", "a", "words", "b")).jsonToBe(["a", "b"]);
        tools.expect(decodeAll("some words", "some", "a", "words", "a")).jsonToBe(["a"]);
        tools.expect(decodeAll("some other things", "josef", "a", "words", "b", "nothing")).jsonToBe(["nothing"]);
        tools.expect(decodeAll("some words", /so.*/, "a", "words", "b")).jsonToBe(["a", "b"]);
    }
})


function extractFirstTerm() {
    if (arguments.length < 2) {
        return "";
    }

    const decodeInputs = [arguments[0]];
    for (let i = 1; i <= arguments.length; i++) {
        decodeInputs.push(stringOf(arguments[i]));
        decodeInputs.push(stringOf(arguments[i]));
    }
    return decode.apply(this, decodeInputs);
}

tools.add({
    id: "extractFirstTerm",
    impl: extractFirstTerm,
    aliases: {
        en: "extractFirstTerm",
        de: "extrahiereErstenBegriff"
    },
    simpleDescription: {
        de: "Ersten Begriff aus Text auslesen",
        en: "Extract first term from text"
    },
    argsOld: {
        en: "text, textToSearchAndShow_1, textToSearchAndShow_2, ...",
        de: "text, zuExtrahierendesWort_1, zuExtrahierendesWort_2, ..."
    },
    args: [
        {
            "key": "text",
            "label_en": "Input text",
            "label_de": "Eingabetext",
            "type": "text",
            "desc_en": "Text to be searched",
            "desc_de": "Text, in dem gesucht wird"
        },
        {
            "key": "textToSearchAndShow+",
            "label_en": "Search",
            "label_de": "Suchtext",
            "type": "text",
            "desc_en": "Text to search for and return",
            "desc_de": "Text, der gesucht und zurückgegeben werden soll"
        }
    ],
    tags: ["TAGS.EXTRACT"],
    hideInToolbox: false,
    hideOnSimpleMode: true,
    tests: () => {
        tools.expect(extractFirstTerm("some words", "some")).toBe("some");
        tools.expect(extractFirstTerm("some words", "another")).toBe("");
        tools.expect(extractFirstTerm("some words", "some", "words")).toBe("some");
        tools.expect(extractFirstTerm("some Words", "words", "some")).toBe("words");
    }
})


function extractProperty(text, propertyName, fallback) {
    const regex = stringOf(propertyName) + / *[:=](.*?)[,;|\n]/.source;
    const m = stringOf(text + '|').match(new RegExp(regex, 'i'));
    return (m ? trimText(m[1]) : stringOf(fallback));
}

tools.add({
    id: "extractProperty",
    impl: extractProperty,
    aliases: {
        en: "extractProperty",
        de: "extrahiereEigenschaft"
    },
    simpleDescription: {
        de: "Wert aus Text oder JSON-Daten auslesen",
        en: "Read value from text or JSON data"
    },
    argsOld: {
        en: "text, propertyName, fallback",
        de: "text, nameDerEigenschaft, fallback"
    },
    args: [
        {
            "key": "text",
            "label_en": "Input text",
            "label_de": "Eingabetext",
            "type": "text",
            "desc_en": "Text to be searched",
            "desc_de": "Text, in dem gesucht wird"
        },
        {
            "key": "propertyName",
            "label_en": "Property",
            "label_de": "Eigenschaft",
            "type": "text",
            "desc_en": "Name of the property to search for and return the value of",
            "desc_de": "Name der Eigenschaft, deren Wert zurückgegeben werden soll"
        },
        {
            "key": "fallback",
            "label_en": "Fallback",
            "label_de": "Ersatzwert",
            "type": "text",
            "desc_en": "Value to return if nothing was found",
            "desc_de": "Rückgabetext, wenn die Suche nichts ergeben hat"
        }
    ],
    tags: ["TAGS.EXTRACT"],
    hideInToolbox: false,
    hideOnSimpleMode: false,
    tests: () => {
        tools.expect(extractProperty("Produkteigenschaften: Farbe: rot, Größe: XL, Hinweise: nicht schleudern", "Größe")).toBe("XL");
        tools.expect(extractProperty("Produkteigenschaften: Farbe: rot, Größe: XL, Hinweise: nicht schleudern", "hinweise")).toBe(("nicht schleudern"));
        tools.expect(extractProperty("Produkteigenschaften: Farbe: rot, Größe: XL, Hinweise: nicht schleudern", "xx", "fallback")).toBe("fallback");
    }
})


function extractFromHtmlEnum(text, propertyName, fallback) {
    const sanitizedText = text.replace(/<div.*?>/igm, '')
        .replace(/<\/div>/igm, '')
        .replace(/<span.*?>/igm, '')
        .replace(/<\/span>/igm, '')
        .replace(/<br>|<br\/>/igm, '');
    const regex = "<li>\\s*" + stringOf(propertyName) + "[ :=](.*?)</li>";
    const m = stringOf(sanitizedText).match(new RegExp(regex, 'i'));
    return (m ? trimText(m[1]) : stringOf(fallback));
}

tools.add({
    id: "extractFromHtmlEnum",
    impl: extractFromHtmlEnum,
    aliases: {
        en: "extractFromHtmlEnum",
        de: "extrahiereAusHtmlEnum"
    },
    simpleDescription: {
        de: "Text aus HTML-Liste auslesen",
        en: "Read text from HTML bullet points"
    },
    argsOld: {
        en: "text, propertyName, fallback",
        de: "text, nameDerEigenschaft, fallback"
    },
    args: [
        {
            "key": "text",
            "label_en": "Input text",
            "label_de": "Eingabetext",
            "type": "text",
            "desc_en": "The text containing the HTML list",
            "desc_de": "Der Text, der die HTML-Liste enthält"
        },
        {
            "key": "propertyName",
            "label_en": "Property",
            "label_de": "Eigenschaft",
            "type": "text",
            "desc_en": "Name of the property to search for and return the value of",
            "desc_de": "Name der Eigenschaft, deren Wert zurückgegeben werden soll"
        },
        {
            "key": "fallback",
            "label_en": "Fallback",
            "label_de": "Ersatzwert",
            "type": "text",
            "desc_en": "Value to return if nothing was found",
            "desc_de": "Rückgabetext, wenn die Suche nichts ergeben hat"
        }
    ],
    tags: ["TAGS.EXTRACT"],
    hideInToolbox: false,
    hideOnSimpleMode: false,
    tests: () => {
        tools.expect(extractFromHtmlEnum("<li>someStuff: other</li>", "someStuff")).toBe("other");
        tools.expect(extractFromHtmlEnum("<li><span style=\"font-size:14px;\"><span style=\"font-family: arial,helvetica,sans-serif;\">Wandstärke: 5- 6cm</span></span></li>", "Wandstärke")).toBe("5- 6cm");
        tools.expect(extractFromHtmlEnum("<li>someStuff: other</li>", "someStuff", "fallback")).toBe("other");
        tools.expect(extractFromHtmlEnum("<li>someStuff: unimportant</li>", "someOtherStuff", "fallback")).toBe("fallback");
    }
})


function lookupGet(valueToMatch, lookupTableName, columnToCompare, columnToRetrieveValueFrom) {  // TODO: add default
    if (typeof _lookups === 'undefined') {
        return "";
    }

    if (!columnToCompare) {
        columnToCompare = 'key';
    }

    if (!columnToRetrieveValueFrom) {
        columnToRetrieveValueFrom = 'value';
    }

    return _lookups.getLookup(lookupTableName, columnToCompare, columnToRetrieveValueFrom)
        .get(valueToMatch, columnToRetrieveValueFrom);
}

tools.add({
    id: "lookupGet",
    impl: lookupGet,
    aliases: {
        en: "lookupGet",
        de: "sucheUndNimm"
    },
    simpleDescription: {
        de: "Nutze Wert aus Datentabelle",
        en: "Use value from lookup table"
    },
    argsOld: {
        en: "matchingValue, lookupName, matchingColumn, columnToRetrieveValueFrom",
        de: "passenderWert, gesuchterWert, passendeSpalte, zuHolenderWertSpalte"
    },
    args: [
        {
            "key": "valueToMatch",
            "label_en": "Input text",
            "label_de": "Eingabetext",
            "type": "text",
            "desc_en": "Text to be searched",
            "desc_de": "Text, der gesucht wird"
        },
        {
            "key": "lookupTableName",
            "label_en": "Datatable name",
            "label_de": "Datentablellenname",
            "type": "data_table",
            "desc_en": "Name of the data table to search in",
            "desc_de": "Name der Datentabelle, in der gesucht wird"
        },
        {
            "key": "columnToCompare",
            "label_en": "Search column",
            "label_de": "Suchspalte",
            "type": "data_table_column",
            "desc_en": "Column name to search in",
            "desc_de": "Spaltenname der Datentabelle, in der gesucht wird"
        },
        {
            "key": "columnToRetrieveValueFrom",
            "label_en": "Return column",
            "label_de": "Rückgabespalte",
            "type": "data_table_column",
            "desc_en": "Column name to return the value from",
            "desc_de": "Spaltenname der Datentabelle, mit Rückgabewert"
        }
    ],
    tags: ["TAGS.LOOKUP"],
    hideInToolbox: false,
    hideOnSimpleMode: false,
    tests: () => {
    }
})


function lookupGetRegExp(valueToMatch, lookupTableName, columnContainingRegex, columnToRetrieveValueFrom) { // TODO: add default
    if (typeof _lookups === 'undefined') {
        return "";
    }

    if (!columnContainingRegex) {
        columnContainingRegex = 'key';
    }

    if (!columnToRetrieveValueFrom) {
        columnToRetrieveValueFrom = 'value';
    }

    const rows = _lookups.getLookup(lookupTableName, columnContainingRegex, columnToRetrieveValueFrom).getAllEntries();
    while (rows.hasNext()) {
        const row = rows.getNext();
        const regex = row.get(columnContainingRegex);
        if (regex && valueToMatch.match && valueToMatch.match(new RegExp(regex, 'ig'))) {
            return row.get(columnToRetrieveValueFrom);
        }
    }

    return "";
}

tools.add({
    id: "lookupGetRegExp",
    impl: lookupGetRegExp,
    aliases: {
        en: "lookupGetRegExp",
        de: "sucheUndNimmRegExp"
    },
    simpleDescription: {
        de: "Nutze ersten Wert aus Datentabelle mit Musterspalte",
        en: "Use first value from lookup table with pattern column"
    },
    argsOld: {
        en: "matchingValue, lookupName, matchingRegExpColumn, columnToRetrieveValueFrom",
        de: "passenderWert, gesuchterWert, passendeRegExpSpalte, zuHolenderWertSpalte"
    },
    args: [
        {
            "key": "matchingValue",
            "label_en": "Input text",
            "label_de": "Eingabetext",
            "type": "text",
            "desc_en": "Text to be searched",
            "desc_de": "Text, in dem gesucht wird"
        },
        {
            "key": "lookupName",
            "label_en": "Datatable name",
            "label_de": "Datentabellenname",
            "type": "data_table",
            "desc_en": "Name of the data table to search in",
            "desc_de": "Name der Datentabelle, in der gesucht wird"
        },
        {
            "key": "columnContainingRegex",
            "label_en": "Pattern column",
            "label_de": "Suchmuster-Spalte",
            "type": "data_table_column",
            "desc_en": "Column name containing RegExp patterns to search with",
            "desc_de": "Spaltenname mit RegExp-Mustern zur Suche"
        },
        {
            "key": "columnToRetrieveValueFrom",
            "label_en": "Return column",
            "label_de": "Rückgabespalte",
            "type": "data_table_column",
            "desc_en": "Column name to return the value from",
            "desc_de": "Spaltenname der Datentabelle, mit Rückgabewert"
        }
    ],
    tags: ["TAGS.LOOKUP"],
    hideInToolbox: false,
    hideOnSimpleMode: false,
    tests: () => {
        tools.it('will return a default value if _lookups is not defined', () => {
            tools.expect(lookupGetRegExp("test", "test", "test", "test")).toBe("");
        });

        tools.it('will return an empty string if no match is found', () => {
            const row = {
                get: (columnName) => {
                    if (columnName === 'key') {
                        return ".*notMatchingRegex.*"
                    }
                }
            }
            let firstRun = true;
            const rows = {
                hasNext: () => {
                    const hasNext = firstRun;
                    firstRun = false;
                    return hasNext;
                },
                getNext: () => row
            }
            const lookupTable = {
                getAllEntries: () => rows
            }

            try {
                _lookups = {
                    getLookup: (lookupName, matchingRegExpColumn, columnToRetrieveValueFrom) => lookupTable
                };

                tools.expect(lookupGetRegExp("some text to search for", "test_table")).toBe("");
            } finally {
                delete _lookups;
            }
        });

        tools.it('will use key and value columns if not specified', () => {
            const row = {
                get: (columnName) => {
                    if (columnName === 'key') {
                        return ".*for$"
                    } else if (columnName === 'value') {
                        return "matchedByRegex";
                    }
                    return `${columnName} not found`;
                }
            }
            const rows = {
                hasNext: () => true,
                getNext: () => row
            }
            const lookupTable = {
                getAllEntries: () => rows
            }

            try {
                _lookups = {
                    getLookup: (lookupName, matchingRegExpColumn, columnToRetrieveValueFrom) => lookupTable
                };

                tools.expect(lookupGetRegExp("some text to search for", "test_table")).toBe("matchedByRegex");
            } finally {
                delete _lookups;
            }
        });

        tools.it('will use a specified key and value if specified', () => {
            const row = {
                get: (columnName) => {
                    if (columnName === 'regexColumn') {
                        return ".*for$"
                    } else if (columnName === 'valueColumn') {
                        return "matchedByRegex";
                    }
                    return `${columnName} not found`;
                }
            }
            const rows = {
                hasNext: () => true,
                getNext: () => row
            }
            const lookupTable = {
                getAllEntries: () => rows
            }


            try {
                _lookups = {
                    getLookup: (lookupName, matchingRegExpColumn, columnToRetrieveValueFrom) => lookupTable
                };

                tools.expect(lookupGetRegExp("some text to search for", "test_table", "regexColumn", "valueColumn")).toBe("matchedByRegex");
            } finally {
                delete _lookups;
            }

        });
    }
})


function lookupReplaceRegExp(valueToMatch, lookupTableName, columnContainingRegex, columnToRetrieveValueFrom) {
    if (typeof _lookups === 'undefined') {
        return "";
    }

    if (!columnContainingRegex) {
        columnContainingRegex = 'key';
    }

    if (!columnToRetrieveValueFrom) {
        columnToRetrieveValueFrom = 'value';
    }

    const rows = _lookups.getLookup(lookupTableName, columnContainingRegex, columnToRetrieveValueFrom).getAllEntries();
    while (rows.hasNext()) {
        const row = rows.getNext();
        const regex = new RegExp(row.get(columnContainingRegex), 'ig');
        if (valueToMatch.match && valueToMatch.match(regex)) {
            return valueToMatch.replace(regex, row.get(columnToRetrieveValueFrom));
        }

    }

    return "";
}

tools.add({
    id: "lookupReplaceRegExp",
    impl: lookupReplaceRegExp,
    aliases: {
        en: "lookupReplaceRegExp",
        de: "sucheUndErsetzeRegExp"
    },
    simpleDescription: {
        de: "Ersetze mit Wert aus Datentabelle",
        en: "Replace with value from lookup table"
    },
    argsOld: {
        en: "matchingValue, lookupName, matchingRegExpColumn, columnToRetrieveValueFrom",
        de: "passenderWert, gesuchterWert, passendeRegExpSpalte, zuHolenderWertSpalte"
    },
    args: [
        {
            "key": "matchingValue",
            "label_en": "Input text",
            "label_de": "Eingabetext",
            "type": "text",
            "desc_en": "Text to be searched",
            "desc_de": "Text, in dem gesucht wird"
        },
        {
            "key": "lookupName",
            "label_en": "Datatable name",
            "label_de": "Datentabellenname",
            "type": "data_table",
            "desc_en": "Name of the data table to search in",
            "desc_de": "Name der Datentabelle, in der gesucht wird"
        },
        {
            "key": "matchingRegExpColumn",
            "label_en": "Pattern column",
            "label_de": "Suchmuster-Spalte",
            "type": "data_table_column",
            "desc_en": "Column name containing RegExp patterns to search with",
            "desc_de": "Spaltenname mit RegExp-Mustern, zur Suche"
        },
        {
            "key": "columnToRetrieveReplacementFrom",
            "label_en": "Replace column",
            "label_de": "Ersatzspalte",
            "type": "data_table_column",
            "desc_en": "Column name to return the replacement value from",
            "desc_de": "Spaltenname der Datentabelle, mit Rückgabewert"
        }
    ],
    tags: ["TAGS.LOOKUP"],
    hideInToolbox: false,
    hideOnSimpleMode: false,
    tests: () => {
        {
            tools.it('will return a default value if _lookups is not defined', () => {
                tools.expect(lookupReplaceRegExp("test", "test", "test", "test")).toBe("");
            });

            tools.it('will return an empty string if no match is found', () => {
                const row = {
                    get: (columnName) => {
                        if (columnName === 'key') {
                            return ".*notMatchingRegex.*"
                        }
                    }
                }
                let firstRun = true;
                const rows = {
                    hasNext: () => {
                        const hasNext = firstRun;
                        firstRun = false;
                        return hasNext;
                    },
                    getNext: () => row
                }
                const lookupTable = {
                    getAllEntries: () => rows
                }

                try {
                    _lookups = {
                        getLookup: (lookupName, matchingRegExpColumn, columnToRetrieveValueFrom) => lookupTable
                    };

                    tools.expect(lookupReplaceRegExp("some text to search for", "test_table")).toBe("");
                } finally {
                    delete _lookups;
                }
            });

            tools.it('will use key and value columns if not specified', () => {
                const row = {
                    get: (columnName) => {
                        if (columnName === 'key') {
                            return ".*for$"
                        } else if (columnName === 'value') {
                            return "matchedByRegex";
                        }
                        return `${columnName} not found`;
                    }
                }

                const rows = {
                    hasNext: () => true,
                    getNext: () => row
                }

                const lookupTable = {
                    getAllEntries: () => rows
                }

                try {
                    _lookups = {
                        getLookup: (lookupName, matchingRegExpColumn, columnToRetrieveValueFrom) => lookupTable
                    };

                    tools.expect(lookupReplaceRegExp("some text to search for", "test_table")).toBe("matchedByRegex");
                } finally {
                    delete _lookups;
                }
            });

            tools.it('will use a specified key and value if specified', () => {
                const row = {
                    get: (columnName) => {
                        if (columnName === 'regexColumn') {
                            return ".*for$"
                        } else if (columnName === 'valueColumn') {
                            return "matchedByRegex";
                        }
                        return `${columnName} not found`;
                    }
                }

                const rows = {
                    hasNext: () => true,
                    getNext: () => row
                }

                const lookupTable = {
                    getAllEntries: () => rows
                }

                try {
                    _lookups = {
                        getLookup: (lookupName, matchingRegExpColumn, columnToRetrieveValueFrom) => lookupTable
                    };

                    tools.expect(lookupReplaceRegExp("some text to search for", "test_table", "regexColumn", "valueColumn")).toBe("matchedByRegex");
                } finally {
                    delete _lookups;
                }
            });
        }
    }
})

function lookupGetAllRegExp(valueToMatch, lookupTableName, columnContainingRegex, columnToRetrieveValueFrom) {
    if (typeof _lookups === 'undefined') {
        return "";
    }

    if (!columnContainingRegex) {
        columnContainingRegex = 'key';
    }

    if (!columnToRetrieveValueFrom) {
        columnToRetrieveValueFrom = 'value';
    }

    const results = [];
    const rows = _lookups.getLookup(lookupTableName, columnContainingRegex, columnToRetrieveValueFrom).getAllEntries();
    while (rows.hasNext()) {
        const row = rows.getNext();
        const regex = row.get(columnContainingRegex);

        if (regex && valueToMatch.match && valueToMatch.match(new RegExp(regex, 'ig'))) {
            results.push(row.get(columnToRetrieveValueFrom));
        }
    }

    return results;
}

tools.add({
    id: "lookupGetAllRegExp",
    impl: lookupGetAllRegExp,
    aliases: {
        en: "lookupGetAllRegExp",
        de: "sucheUndNimmAlleRegExp"
    },
    simpleDescription: {
        de: "Nutze alle Werte aus Datentabelle mit Musterspalte",
        en: "Use all values from lookup table with pattern column"
    },
    argsOld: {
        en: "matchingValue, lookupName, matchingRegExpColumn, columnToRetrieveValueFrom",
        de: "suchWert, datentabelle, suchRegExpSpalte, zuHolenderWertSpalte"
    },
    args: [
        {
            "key": "matchingValue",
            "label_en": "Input text",
            "label_de": "Eingabetext",
            "type": "text",
            "desc_en": "Text to be searched",
            "desc_de": "Text, in dem gesucht wird"
        },
        {
            "key": "lookupName",
            "label_en": "Datatable name",
            "label_de": "Datentabellenname",
            "type": "data_table",
            "desc_en": "Name of the data table to search in",
            "desc_de": "Name der Datentabelle, in der gesucht wird"
        },
        {
            "key": "matchingRegExpColumn",
            "label_en": "Pattern column",
            "label_de": "Suchmuster-Spalte",
            "type": "data_table_column",
            "desc_en": "Column name containing RegExp patterns to search with",
            "desc_de": "Spaltenname mit RegExp-Mustern, zur Suche"
        },
        {
            "key": "columnToRetrieveValueFrom",
            "label_en": "Return column",
            "label_de": "Rückgabespalte",
            "type": "data_table_column",
            "desc_en": "Column name to return the value from",
            "desc_de": "Spaltenname der Datentabelle, mit Rückgabewert"
        }
    ],
    tags: ["TAGS.LOOKUP"],
    hideInToolbox: false,
    hideOnSimpleMode: false,
    tests: () => {
        {
            tools.it('will return a default value if _lookups is not defined', () => {
                tools.expect(lookupGetRegExp("test", "test", "test", "test")).toBe("");
            });

            tools.it('will return null if no match is found', () => {
                const row = {
                    get: (columnName) => {
                        if (columnName === 'key') {
                            return ".*notMatchingRegex.*"
                        }
                    }
                }
                let firstRun = true;
                const rows = {
                    hasNext: () => {
                        const hasNext = firstRun;
                        firstRun = false;
                        return hasNext;
                    },
                    getNext: () => row
                }
                const lookupTable = {
                    getAllEntries: () => rows
                }

                try {
                    _lookups = {
                        getLookup: (lookupName, matchingRegExpColumn, columnToRetrieveValueFrom) => lookupTable
                    };

                    tools.expect(lookupGetAllRegExp("some text to search for", "test_table")).listToBe([]);
                } finally {
                    delete _lookups;
                }
            });

            tools.it('will use key and value columns if not specified', () => {
                const row = {
                    get: (columnName) => {
                        if (columnName === 'key') {
                            return ".*for$"
                        } else if (columnName === 'value') {
                            return "matchedByRegex";
                        }
                        return `${columnName} not found`;
                    }
                }

                let firstRun = true;
                const rows = {
                    hasNext: () => firstRun,
                    getNext: () => {
                        firstRun = !firstRun;
                        return row
                    }
                }
                const lookupTable = {
                    getAllEntries: () => rows
                }


                try {
                    _lookups = {
                        getLookup: (lookupName, matchingRegExpColumn, columnToRetrieveValueFrom) => lookupTable
                    };

                    tools.expect(lookupGetAllRegExp("some text to search for", "test_table")).listToBe(["matchedByRegex"]);
                } finally {
                    delete _lookups;
                }
            });

            tools.it('will use a specified key and value if specified', () => {

                const row = {
                    get: (columnName) => {
                        if (columnName === 'regexColumn') {
                            return ".*for$"
                        } else if (columnName === 'valueColumn') {
                            return "matchedByRegex";
                        }
                        return `${columnName} not found`;
                    }
                }

                let firstRun = true;
                const rows = {
                    hasNext: () => firstRun,
                    getNext: () => {
                        firstRun = !firstRun;
                        return row
                    }
                }
                const lookupTable = {
                    getAllEntries: () => rows
                }

                try {
                    _lookups = {
                        getLookup: (lookupName, matchingRegExpColumn, columnToRetrieveValueFrom) => lookupTable
                    };

                    tools.expect(lookupGetAllRegExp("some text to search for", "test_table", "regexColumn", "valueColumn")).listToBe(["matchedByRegex"]);
                } finally {
                    delete _lookups;
                }

            });
            tools.it('will return every value for multiple matches', () => {
                const firstRow = {
                    get: (columnName) => {
                        if (columnName === 'key') {
                            return "^some text.*"
                        }
                        return "firstMatch";
                    }
                }
                const secondRow = {
                    get: (columnName) => {
                        if (columnName === 'key') {
                            return ".*search for$"
                        }
                        return "secondMatch";
                    }
                }

                let runCount = 0;
                const rows = {
                    hasNext: () => runCount < 2,
                    getNext: () => {
                        runCount++;
                        return runCount === 1 ? firstRow : secondRow;
                    }
                }
                const lookupTable = {
                    getAllEntries: () => rows
                }

                try {
                    _lookups = {
                        getLookup: (lookupName, matchingRegExpColumn, columnToRetrieveValueFrom) => lookupTable
                    };

                    tools.expect(lookupGetAllRegExp("some text to search for", "test_table")).listToBe(['firstMatch', 'secondMatch']);
                } finally {
                    delete _lookups;
                }
            });
        }

    }
})


function formatAsHtmlBulletpoints() {
    if (arguments.length < 1) {
        return '';
    }

    return '<ul><li>' + Array.from(arguments).flat().join('</li><li>') + '</li></ul>';
}

tools.add({
    id: "formatAsHtmlBulletpoints",
    impl: formatAsHtmlBulletpoints,
    aliases: {
        en: "formatAsHtmlBulletpoints",
        de: "formatiereAlsHtmlAufzählung"
    },
    simpleDescription: {
        de: "Formatiere Text als HTML-Aufzählung",
        en: "Format text as HTML bullet points"
    },
    argsOld: {
        en: "something1, something2, ...",
        de: "argument1, argument2, ..."
    },
    args: [
        {
            "key": "input+",
            "label_en": "Row",
            "label_de": "Zeile",
            "type": "text",
            "desc_en": "Text to be formatted as a bullet point",
            "desc_de": "Text, der als Aufzählung formatiert werden soll"
        }
    ],
    tags: ["TAGS.FORMAT"],
    hideInToolbox: false,
    hideOnSimpleMode: true,
    tests: () => {
        tools.expect(formatAsHtmlBulletpoints("a", "b", "c")).toBe("<ul><li>a</li><li>b</li><li>c</li></ul>");
        tools.expect(formatAsHtmlBulletpoints("a")).toBe("<ul><li>a</li></ul>");
        tools.expect(formatAsHtmlBulletpoints()).toBe('');
        tools.expect(formatAsHtmlBulletpoints(true)).toBe("<ul><li>true</li></ul>");
        tools.expect(formatAsHtmlBulletpoints("a", ["b", "c"], "d")).toBe("<ul><li>a</li><li>b</li><li>c</li><li>d</li></ul>");
    }
})


function formatAsNumber(value, overrideLocale) {
    if (typeof _locale === 'undefined') {
        _locale = "de-DE";
    }

    let locale = overrideLocale;
    if (!locale && typeof _locale !== 'undefined') {
        locale = _locale;
    }

    if (!locale) {
        locale = 'de-DE';
    }

    return new Intl.NumberFormat(locale).format(value);
}

tools.add({
    id: "formatAsNumber",
    impl: formatAsNumber,
    aliases: {
        en: "formatAsNumber",
        de: "formatiereAlsZahl"
    },
    simpleDescription: {
        de: "Formatiere Text als Zahl",
        en: "Format text as number"
    },
    argsOld: {
        en: "value, locale",
        de: "wert, länderFormat"
    },
    args: [
        {
            "key": "value",
            "label_en": "Value",
            "label_de": "Wert",
            "type": "text",
            "desc_en": "Value to format as a number",
            "desc_de": "Wert, der als Zahl formatiert werden soll"
        },
        {
            "key": "locale",
            "label_en": "Locale",
            "label_de": "Länderformat",
            "type": "text",
            "desc_en": "Locale to use/override (leave empty for default)",
            "desc_de": "Das zu verwendende Länderformat (leer lassen für Standard)"
        }
    ],
    tags: ["TAGS.FORMAT"],
    hideInToolbox: false,
    hideOnSimpleMode: false,
    tests: () => {
        tools.expect(formatAsNumber("8.8")).toBe("8,8");
        tools.expect(formatAsNumber(8.8)).toBe("8,8");
        tools.expect(formatAsNumber(1234)).toBe("1.234");
        tools.expect(formatAsNumber(1234.567)).toBe("1.234,567");
        tools.expect(formatAsNumber("1.223.3")).toBe("NaN");
        tools.expect(formatAsNumber("12233", 'en-US')).toBe("12,233");
    }
})


function textToNumber(value, overrideLocale) {
    if (typeof _locale === 'undefined') {
        _locale = "de-DE";
    }

    let locale = overrideLocale;
    if (!locale && typeof _locale !== 'undefined') {
        locale = _locale;
    }

    if (!locale) {
        locale = 'de-DE';
    }

    return _numberParser(value, locale);
}

tools.add({
    id: "textToNumber",
    impl: textToNumber,
    aliases: {
        en: "textToNumber",
        de: "textAlsZahl"
    },
    simpleDescription: {
        de: "Text zu Zahl umwandeln",
        en: "Convert text to number"
    },
    argsOld: {
        en: "value, locale",
        de: "wert, länderFormat"
    },
    args: [
        {
            "key": "value",
            "label_en": "Input text",
            "label_de": "Eingabetext",
            "type": "text",
            "desc_en": "Text to be converted to a number",
            "desc_de": "Text, der in eine Zahl umgewandelt werden soll"
        },
        {
            "key": "locale",
            "label_en": "Locale",
            "label_de": "Länderformat",
            "type": "text",
            "desc_en": "Locale to use/override (leave empty for default)",
            "desc_de": "Das zu verwendende Länderformat (leer lassen für Standard)"
        }
    ],
    tags: ["TAGS.FORMAT"],
    hideInToolbox: false,
    hideOnSimpleMode: false,
    tests: () => {
        tools.expect(textToNumber("1,223.3", 'en-US')).toBe(1223.3);
        tools.expect(textToNumber("1.223,3")).toBe(1223.3);
        tools.expect(textToNumber("1234")).toBe(1234);
        tools.expect(textToNumber("1.234,567")).toBe(1234.567);
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
    id: "_numberParser",
    impl: _numberParser,
    aliases: {
        en: "_numberParser",
        de: "_numberParser"
    },
    argsOld: {
        en: "value, locale, ...",
        de: "wert, länderFormat, ..."
    },
    args: [
        {
            "key": "value",
            "label_en": "Value",
            "label_de": "Wert",
            "type": "text",
            "desc_en": "Number to format",
            "desc_de": "Zahl, die formatiert werden soll"
        },
        {
            "key": "locale",
            "label_en": "Locale",
            "label_de": "Länderformat",
            "type": "text",
            "desc_en": "Locale to use/override (leave empty for default)",
            "desc_de": "Das zu verwendende Länderformat (leer lassen für Standard)"
        },
        {
            "key": "...",
            "label_en": "",
            "label_de": "",
            "type": "text",
            "desc_en": "",
            "desc_de": ""
        }
    ],
    tags: ["TAGS.FORMAT"],
    hideInToolbox: true,
    hideOnSimpleMode: true,
    tests: () => {
        tools.expect(_numberParser("1,223.3", 'en-US')).toBe(1223.3);
        tools.expect(_numberParser("1,223.3")).toBe(1223.3);
        tools.expect(_numberParser("1234")).toBe(1234);
        tools.expect(_numberParser("1.234,567")).toBe(1.234567);
    }
})


function regExpMatch(input, match, fallback) {
    const matched = stringOf(input).match(match);
    if (matched !== null) {
        return matched[0];
    }

    return fallback !== undefined ? fallback : input;
}

tools.add({
    id: "regExpMatch",
    impl: regExpMatch,
    aliases: {
        en: "regExpMatch",
        de: "regExpMatch"
    },
    argsOld: {
        en: "input, match, fallback",
        de: "input, match, fallback"
    },
    args: [
        {
            "key": "input",
            "label_en": "Input text",
            "label_de": "Eingabetext",
            "type": "text",
            "desc_en": "Text to be searched",
            "desc_de": "Text, in dem gesucht wird"
        },
        {
            "key": "match",
            "label_en": "Search",
            "label_de": "Suche",
            "type": "text",
            "desc_en": "The RegExp pattern to search for",
            "desc_de": "Das RegExp-Muster nach dem gesucht wird"
        },
        {
            "key": "fallback",
            "label_en": "Fallback",
            "label_de": "Ersatzwert",
            "type": "text",
            "desc_en": "Value to return if nothing was found",
            "desc_de": "Rückgabetext, wenn die Suche nichts ergeben hat"
        }
    ],
    tags: ["TAGS.TEXT"],
    hideInToolbox: true,
    hideOnSimpleMode: true,
    tests: () => {
        tools.expect(regExpMatch("some words", "some")).toBe("some");
        tools.expect(regExpMatch("some words", "another")).toBe("some words");
        tools.expect(regExpMatch("some words", "some", "fallback")).toBe("some");
        tools.expect(regExpMatch("some words", "another", "fallback")).toBe("fallback");
    }
})


function regExpReplace(input, search, replace) {
    return replaceInText(input, search, replace);
}

tools.add({
    id: "regExpReplace",
    impl: regExpReplace,
    aliases: {
        en: "regExpReplace",
        de: "regExpReplace"
    },
    argsOld: {
        en: "input, search, replace",
        de: "input, search, replace"
    },
    args: [
        {
            "key": "input",
            "label_en": "Input text",
            "label_de": "Eingabetext",
            "type": "text",
            "desc_en": "Text to be searched",
            "desc_de": "Text, in dem gesucht wird"
        },
        {
            "key": "search",
            "label_en": "Search",
            "label_de": "Suche",
            "type": "text",
            "desc_en": "The RegExp pattern to search for",
            "desc_de": "Das RegExp-Muster nach dem gesucht wird"
        },
        {
            "key": "replace",
            "label_en": "Replace",
            "label_de": "Ersetze",
            "type": "text",
            "desc_en": "The text to replace the match with",
            "desc_de": "Text, durch den der Treffer ersetzt wird"
        }
    ],
    tags: ["TAGS.TEXT"],
    hideInToolbox: true,
    hideOnSimpleMode: true,
    tests: () => {
        tools.expect(regExpReplace("some words", "some", "another")).toBe("another words");
    }
})


function matches(input, expr) {
    return stringOf(input).search(expr) >= 0;
}

tools.add({
    id: "matches",
    impl: matches,
    aliases: {
        en: "matches",
        de: "matches"
    },
    argsOld: {
        en: "input, expr",
        de: "input, expr"
    },
    args: [
        {
            "key": "input",
            "label_en": "Input text",
            "label_de": "Eingabetext",
            "type": "text",
            "desc_en": "Text to be searched",
            "desc_de": "Text, in dem gesucht wird"
        },
        {
            "key": "expr",
            "label_en": "Expression",
            "label_de": "Ausdruck",
            "type": "text",
            "desc_en": "The RegExp pattern to search for",
            "desc_de": "Das RegExp-Muster nach dem gesucht wird"
        }
    ],
    tags: ["TAGS.TEXT"],
    hideInToolbox: true,
    hideOnSimpleMode: true,
    tests: () => {
        tools.expect(matches("some words", "some")).toBe(true);
        tools.expect(matches("some words", "another")).toBe(false);
        tools.expect(matches("some some some", "some")).toBe(true);
    }
})


function addCloudinaryTransformation(cloudinaryUrl, publicId, transformation) {
    return replaceInText(cloudinaryUrl, publicId, transformation + "/" + publicId);
}

tools.add({
    id: "addCloudinaryTransformation",
    impl: addCloudinaryTransformation,
    aliases: {
        en: "addCloudinaryTransformation",
        de: "hinzufügenCloudinaryTransformation"
    },
    simpleDescription: {
        de: "Füge eine Cloudinary-Transformation hinzu",
        en: "Add a Cloudinary transformation"
    },
    argsOld: {
        en: "cloudinaryUrl, publicId, transformation",
        de: "cloudinaryUrl, publicId, transformation"
    },
    args: [
        {
            "key": "cloudinaryUrl",
            "label_en": "Url",
            "label_de": "Adresse",
            "type": "text",
            "desc_en": "Url to be used",
            "desc_de": "Adresse, die angepasst werden soll"
        },
        {
            "key": "publicId",
            "label_en": "Public id",
            "label_de": "Public ID",
            "type": "text",
            "desc_en": "ID to use",
            "desc_de": "ID, die verwendet werden soll"
        },
        {
            "key": "transformation",
            "label_en": "Transformations",
            "label_de": "Transformationen",
            "type": "text",
            "desc_en": "Transformations to perform with cloudinary",
            "desc_de": "Transformationen durch Cloudinary"
        }
    ],
    tags: ["TAGS.CLOUDINARY"],
    hideInToolbox: false,
    hideOnSimpleMode: false,
    tests: () => {
        tools.expect(addCloudinaryTransformation("https://res.cloudinary.com/ecubede/bekleidung/4029051623453.jpeg", "bekleidung/4029051623453", "cx32x44"))
            .toBe("https://res.cloudinary.com/ecubede/cx32x44/bekleidung/4029051623453.jpeg");
    }
})


function addCloudinaryNamedTransformation(cloudinaryUrl, publicId, transformation) {
    return addCloudinaryTransformation(cloudinaryUrl, publicId, "t_" + transformation);
}

tools.add({
    id: "addCloudinaryNamedTransformation",
    impl: addCloudinaryNamedTransformation,
    aliases: {
        en: "addCloudinaryNamedTransformation",
        de: "hinzufügenCloudinaryNamedTransformation"
    },
    simpleDescription: {
        de: "Füge eine benannte cloudinary-Transformation hinzu",
        en: "Add a Cloudinary transformation via it's name"
    },
    argsOld: {
        en: "cloudinaryUrl, publicId, named_transformation",
        de: "cloudinaryUrl, publicId, named_transformation"
    },
    args: [
        {
            "key": "cloudinaryUrl",
            "label_en": "Url",
            "label_de": "Adresse",
            "type": "text",
            "desc_en": "The url to be used",
            "desc_de": "Adresse, die angepasst werden soll"
        },
        {
            "key": "publicId",
            "label_en": "Public id",
            "label_de": "Public ID",
            "type": "text",
            "desc_en": "The ID to use",
            "desc_de": "ID, die verwendet werden soll"
        },
        {
            "key": "named_transformation",
            "label_en": "Transformation",
            "label_de": "Transformation",
            "type": "text",
            "desc_en": "The named transformation to use",
            "desc_de": "Die benannte Transformation, die verwendet werden soll"
        }
    ],
    tags: ["TAGS.CLOUDINARY"],
    hideInToolbox: false,
    hideOnSimpleMode: false,
    tests: () => {
        tools.expect(addCloudinaryNamedTransformation("https://res.cloudinary.com/ecubede/bekleidung/4029051623453.jpeg", "bekleidung/4029051623453", "josef"))
            .toBe("https://res.cloudinary.com/ecubede/t_josef/bekleidung/4029051623453.jpeg");
    }
})


function convertUnit(value, factor, oldUnit, newUnit, deciPlaces) {
    if (!value) {
        return value;
    }

    if (!oldUnit) {
        oldUnit = '';
    }

    if (!newUnit) {
        newUnit = '';
    }

    if (deciPlaces == null) {
        deciPlaces = 0;
    }

    let result = "";
    const toFactor = (wert) => {
        if (deciPlaces === 0) {
            return Decimal(wert).mul(factor).toString();
        } else {
            return Decimal(wert).mul(factor).toNumber().toFixed(deciPlaces);
        }
    }

    let rest = [];
    let werte = value.match(/-?\d*[,.]?\d+/g);
    if (!werte) {
        return value;
    }

    for (let i = 0; i < (werte.length); i++) {
        rest[i] = value.slice(0, value.indexOf(werte[i]));
        value = value.slice(value.indexOf(werte[i]) + werte[i].length, value.length);
    }

    result = result + rest[0];
    rest[werte.length] = value;
    let realDecimalSeparator = '.';
    for (let i = 0; i < werte.length; i++) {
        let wert = werte[i];

        if (wert.includes(',')) {
            realDecimalSeparator = ',';
        }

        wert = wert.replace(',', '.');
        const unit = rest[i + 1].match(/\w*/g)

        if (oldUnit && newUnit) {
            if (unit[1] && unit[1] === oldUnit) {
                wert = toFactor(wert);
                rest[i + 1] = rest[i + 1].replace(oldUnit, newUnit);
            }
        } else if (!oldUnit && newUnit) {
            if (unit[1] && newUnit !== unit[1]) {
                wert = toFactor(wert);
                rest[i + 1] = " " + newUnit + rest[i + 1];
            }
        } else if (!oldUnit && !newUnit) {
            wert = toFactor(wert);
        }

        wert = wert.replace(',', realDecimalSeparator);
        wert = wert.replace('.', realDecimalSeparator);
        result = result + wert + rest[i + 1];
    }

    return result;
}

tools.add({
    id: "convertUnit",
    impl: convertUnit,
    aliases: {
        en: "convertUnit",
        de: "rechneEinheitUm"
    },
    simpleDescription: {
        de: "Einheiten im Text umrechnen und ersetzen",
        en: "Convert and replace units in the text"
    },
    argsOld: {
        en: "value, factor, oldUnit, newUnit, decimalPlaces",
        de: "wert, faktor, alteEinheit, neueEinheit, dezimalStellen"
    },
    args: [
        {
            "key": "value",
            "label_en": "Value",
            "label_de": "Wert",
            "type": "text",
            "desc_en": "Value to convert",
            "desc_de": "Wert, der umgerechnet werden soll"
        },
        {
            "key": "factor",
            "label_en": "Factor",
            "label_de": "Factor",
            "type": "text",
            "desc_en": "Factor to multiply the value with",
            "desc_de": "Faktor, mit dem der Wert multipliziert wird"
        },
        {
            "key": "oldUnit",
            "label_en": "Old unit",
            "label_de": "Alte Einheit",
            "type": "text",
            "desc_en": "Old unit to replace",
            "desc_de": "Einheit, die ersetzt werden soll"
        },
        {
            "key": "newUnit",
            "label_en": "New unit",
            "label_de": "Neue Einheit",
            "type": "text",
            "desc_en": "New unit to use",
            "desc_de": "Einheit, die eingesetzt werden soll"
        },
        {
            "key": "decimalPlaces",
            "label_en": "Decimal Places",
            "label_de": "Dezimalstellen",
            "type": "text",
            "desc_en": "Decimal places to use for the conversion",
            "desc_de": "Dezimalstellen, die für die Umrechnung verwendet werden"
        }
    ],
    tags: ["TAGS.UNIT"],
    hideInToolbox: false,
    hideOnSimpleMode: false,
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
        tools.expect(convertUnit("2.3 m", 100, 'm', 'cm')).toBe("230 cm");
        tools.expect(convertUnit("2.3 m", 100, 'm', 'cm', 2)).toBe("230.00 cm");
        tools.expect(convertUnit("2,3 m", 100, 'm', 'cm')).toBe("230 cm");
    }
})


function normalizeValues(value, deciSeparator, deciPlaces) {
    if (deciPlaces == null) {
        deciPlaces = 0;
    }

    if (!value) {
        return value;
    }

    const rest = [];
    const werte = value.match(/-?\d*[,.]?\d+/g);
    if (werte == null) {
        return value;
    }

    for (let i = 0; i < (werte.length); i++) {
        rest[i] = value.slice(0, value.indexOf(werte[i]));
        value = value.slice(value.indexOf(werte[i]) + werte[i].length, value.length);
    }

    let result = "";
    result = result + rest[0];
    rest[werte.length] = value;
    for (let i = 0; i < (werte.length); i++) {
        let realDecimalSeparator = '.';
        let wert = werte[i];

        if (wert.includes(',')) {
            realDecimalSeparator = ',';
        }

        wert = wert.replace(',', '.');

        if (deciPlaces !== 0) {
            wert = String((parseFloat(wert)).toFixed(deciPlaces));
        }

        if (deciSeparator) {
            wert = wert.replace('.', deciSeparator);
        } else {
            wert = wert.replace('.', realDecimalSeparator);
        }

        result = result + wert + rest[i + 1];
    }

    return result;
}

tools.add({
    id: "normalizeValues",
    impl: normalizeValues,
    aliases: {
        en: "normalizeValues",
        de: "normalisiereWerte"
    },
    simpleDescription: {
        de: "Vereinheitliche Zahlen im Text",
        en: "Normalize numbers in the text"
    },
    argsOld: {
        en: "value, decimalSeparator, decimalPlaces",
        de: "wert, dezimalTrennzeichen, dezimalStellen"
    },
    args: [
        {
            "key": "value",
            "label_en": "Value",
            "label_de": "Wert",
            "type": "text",
            "desc_en": "Text containing numeric values to normalize",
            "desc_de": "Text, der zu normalisierende numerische Werte enthält"
        },
        {
            "key": "decimalSeparator",
            "label_en": "Decimal separator",
            "label_de": "Decimaltrennzeichen",
            "type": "text",
            "desc_en": "Decimal separator",
            "desc_de": "Dezimaltrennzeichen"
        },
        {
            "key": "decimalPlaces",
            "label_en": "Decimal places",
            "label_de": "Dezimalstellen",
            "type": "text",
            "desc_en": "Decimal places",
            "desc_de": "Anzahl, der Dezimalstellen"
        }
    ],
    tags: ["TAGS.UNIT"],
    hideInToolbox: false,
    hideOnSimpleMode: false,
    tests: () => {
        tools.expect(normalizeValues("23.1 and 23.22", '.', 1)).toBe("23.1 and 23.2");
        tools.expect(normalizeValues("23 and 23.225 and some", '.', 1)).toBe("23.0 and 23.2 and some");
        tools.expect(normalizeValues("etwa 2,3 megawatts", '.')).toBe("etwa 2.3 megawatts");
        tools.expect(normalizeValues("etwa 2,3 megawatts", ',', 1)).toBe("etwa 2,3 megawatts");
        tools.expect(normalizeValues("etwa 2,3 megawatts", ',', 2)).toBe("etwa 2,30 megawatts");
        tools.expect(normalizeValues("etwa 2,3 megawatts", ',', 3)).toBe("etwa 2,300 megawatts");
    }
})


function extractValueBeforeText(value, text) {
    if (value.includes(text)) {
        let werte = new RegExp('(?<value>-?\\d*[,.]?\\d+)(\\s)*?' + escapeRegExp(text), 'g').exec(value);
        if (werte && werte.groups.value) {
            return werte.groups.value;
        }
    }
    return value;
}

tools.add({
    id: "extractValueBeforeText",
    impl: extractValueBeforeText,
    aliases: {
        en: "extractValueBeforeText",
        de: "extrahiereWertVorText"
    },
    simpleDescription: {
        de: "Zahl vor Suchtreffer aus Text auslesen",
        en: "Extract number before search hit from the text"
    },
    argsOld: {
        en: "value, text",
        de: "wert, text"
    },
    args: [
        {
            "key": "value",
            "label_en": "Input text",
            "label_de": "Eingabetext",
            "type": "text",
            "desc_en": "Text to search in",
            "desc_de": "Text, in dem gesucht wird"
        },
        {
            "key": "text",
            "label_en": "Text after value",
            "label_de": "Text nach Wert",
            "type": "text",
            "desc_en": "Text to search for to extract the value before",
            "desc_de": "Text, der nach dem zu extrahierenden Wert steht"
        }
    ],
    tags: ["TAGS.EXTRACT"],
    hideInToolbox: false,
    hideOnSimpleMode: false,
    tests: () => {
        tools.expect(extractValueBeforeText("some 23.1 mangos and 4 apples ", 'mangos')).toBe("23.1");
        tools.expect(extractValueBeforeText("Dimensions of 25cm and ", 'cm')).toBe("25");
        tools.expect(extractValueBeforeText("range of 3..5 ", '..')).toBe("3");
        tools.expect(extractValueBeforeText("21,3     text blabla", 'text')).toBe("21,3");
        tools.expect(extractValueBeforeText('74-77', '-')).toBe("74");
    }
})


function extractValueAfterText(value, text) {
    if (value.includes(text)) {
        let werte = new RegExp(escapeRegExp(text) + '(\\s)*?(?<value>-?\\d*[,.]?\\d+)', 'g').exec(value);
        if (werte && werte.groups.value) {
            return werte.groups.value;
        }
    }

    return value;
}

tools.add({
    id: "extractValueAfterText",
    impl: extractValueAfterText,
    aliases: {
        en: "extractValueAfterText",
        de: "extrahiereWertNachText"
    },
    simpleDescription: {
        de: "Zahl nach Suchtreffer aus Text auslesen",
        en: "Extract number after search hit from the text"
    },
    argsOld: {
        en: "value, text",
        de: "wert, text"
    },
    args: [
        {
            "key": "value",
            "label_en": "Input text",
            "label_de": "Eingabetext",
            "type": "text",
            "desc_en": "Text to search in",
            "desc_de": "Text, in dem gesucht wird"
        },
        {
            "key": "text",
            "label_en": "Text before value",
            "label_de": "Text vor Wert",
            "type": "text",
            "desc_en": "Text to search for to extract the value after",
            "desc_de": "Text, der vor dem zu extrahierenden Wert steht"
        }
    ],
    tags: ["TAGS.EXTRACT"],
    hideInToolbox: false,
    hideOnSimpleMode: false,
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
    id: "escapeRegExp",
    impl: escapeRegExp,
    aliases: {
        en: "escapeRegExp",
        de: "escapeRegExp"
    },
    argsOld: {
        en: "text",
        de: "text"
    },
    args: [
        {
            "key": "text",
            "label_en": "Text",
            "label_de": "Text",
            "type": "text",
            "desc_en": "Text to escape",
            "desc_de": "Text"
        }
    ],
    tags: ["TAGS.EXTRACT"],
    hideInToolbox: true,
    hideOnSimpleMode: false,
    tests: () => {
        tools.expect(escapeRegExp("a.b")).toBe("a\\.b");
        tools.expect(escapeRegExp("a.b*")).toBe("a\\.b\\*");
        tools.expect(escapeRegExp('\\')).toBe('\\\\');
    }
})


function splitText(text, separator) {
    if (!separator) {
        separator = ",";
    }

    if (text != null && text.split) {
        return text.split(separator).map(v => v.trim());
    }

    return null;
}

tools.add({
    id: "splitText",
    impl: splitText,
    aliases: {
        en: "splitText",
        de: "trenneText"
    },
    simpleDescription: {
        de: "Text in mehrere Teile trennen",
        en: "Split the text into multiple parts"
    },
    argsOld: {
        en: "text, separator",
        de: "text, separator"
    },
    args: [
        {
            "key": "text",
            "label_en": "Input text",
            "label_de": "Eingabetext",
            "type": "text",
            "desc_en": "Text to split",
            "desc_de": "Text, der getrennt werden soll"
        },
        {
            "key": "separator",
            "label_en": "Separator",
            "label_de": "Trennzeichen",
            "type": "text",
            "desc_en": "Text to split the text by",
            "desc_de": "Text, anhand dessen der Text getrennt werden soll"
        }
    ],
    tags: ["TAGS.TEXT"],
    hideInToolbox: false,
    hideOnSimpleMode: false,
    tests: () => {
        tools.expect(splitText("a,b,c")).jsonToBe(['a', 'b', 'c']);
        tools.expect(splitText("a, b,  c")).jsonToBe(['a', 'b', 'c']);
        tools.expect(splitText("a|b|c", '|')).jsonToBe(['a', 'b', 'c']);
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
    if (typeof _source === 'undefined') {
        return [];
    }

    return Object.keys(JSON.parse(_source)).filter(k => !k.startsWith("_"));
}

tools.add({
    id: "attributes",
    impl: attributes,
    aliases: {
        en: "attributes",
        de: "attribute"
    },
    argsOld: {
        en: "text, separator",
        de: "text, separator"
    },
    args: [
        {
            "key": "text",
            "label_en": "Text",
            "label_de": "Text",
            "type": "text",
            "desc_en": "",
            "desc_de": ""
        },
        {
            "key": "separator",
            "label_en": "Separator",
            "label_de": "Separator",
            "type": "text",
            "desc_en": "",
            "desc_de": ""
        }
    ],
    tags: ["TAGS.TEXT"],
    hideInToolbox: true,
    hideOnSimpleMode: false,
    tests: () => {
        tools.expect(attributes()).jsonToBe([]);

        tools.it('will extract all attributes without _ prefix from the _source object', () => {
            try {
                _source = JSON.stringify({attr1: 1, _attr2: 2, attr3: 3});
                tools.expect(attributes()).jsonToBe(['attr1', 'attr3']);
            } finally {
                delete _source;
            }
        });
    }
})


function startsWith(text, search) {
    if (search instanceof RegExp) {
        const obj = {flags: search.flags, source: search.source};
        if (!obj.source.startsWith("^")) {
            obj.source = "^" + obj.source;
            search = new RegExp(obj.source, obj.flags);
        }

        if (search.test(stringOf(text))) {
            return true;
        }
    } else if (text != null && text.startsWith && text.startsWith(search)) {
        return true;
    }

    return false;
}

tools.add({
    id: "startsWith",
    impl: startsWith,
    aliases: {
        en: "startsWith",
        de: "beginntMit"
    },
    simpleDescription: {
        de: "Beginnt der Text mit Suchwort?",
        en: "Does the text start with the search term?"
    },
    argsOld: {
        en: "text, search",
        de: "text, suchwert"
    },
    args: [
        {
            "key": "text",
            "label_en": "Input text",
            "label_de": "Eingabetext",
            "type": "text",
            "desc_en": "Text that is checked",
            "desc_de": "Text, der geprüft wird"
        },
        {
            "key": "search",
            "label_en": "Start with",
            "label_de": "Beginnt mit",
            "type": "text",
            "desc_en": "Text that the input text should start with",
            "desc_de": "Text, mit dem der Eingabetext beginnen soll"
        }
    ],
    tags: ["TAGS.TEXT"],
    hideInToolbox: false,
    hideOnSimpleMode: false,
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
            search = new RegExp(obj.source, obj.flags);
        }

        if (search.test(stringOf(text))) {
            return true;
        }
    } else if (text != null && text.endsWith && text.endsWith(search)) {
        return true;
    }

    return false;
}

tools.add({
    id: "endsWith",
    impl: endsWith,
    aliases: {
        en: "endsWith",
        de: "endetMit"
    },
    simpleDescription: {
        de: "Endet der Text mit Suchwort?",
        en: "Does the text end with the search term?"
    },
    argsOld: {
        en: "text, search",
        de: "text, suchwert"
    },
    args: [
        {
            "key": "text",
            "label_en": "Input text",
            "label_de": "Eingabetext",
            "type": "text",
            "desc_en": "Text that is checked",
            "desc_de": "Text, der geprüft wird"
        },
        {
            "key": "search",
            "label_en": "End with",
            "label_de": "Endet mit",
            "type": "text",
            "desc_en": "Text that the input text should end with",
            "desc_de": "Text, mit dem der Eingabetext enden soll"
        }
    ],
    tags: ["TAGS.TEXT"],
    hideInToolbox: false,
    hideOnSimpleMode: false,
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
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] === true) {
            return true;
        }
    }

    return false;
}

tools.add({
    id: "someOf",
    impl: someOf,
    aliases: {
        en: "someOf",
        de: "istEinElementWahr"
    },
    simpleDescription: {
        de: "Ist ein Element in der Liste wahr? ",
        en: "Is any element in the list true?"
    },
    argsOld: {
        en: "something1, something2, ...",
        de: "argument1, argument2, ..."
    },
    args: [
        {
            "key": "input+",
            "label_en": "Value",
            "label_de": "Wert",
            "type": "text",
            "desc_en": "Value or condition, that could be true or false",
            "desc_de": "Wert oder Bedingung, die wahr oder falsch sein kann"
        }
    ],
    tags: ["TAGS.CONDITIONAL"],
    hideInToolbox: true,
    hideOnSimpleMode: true,
    tests: () => {
        tools.expect(someOf(true)).toBe(true);
        tools.expect(someOf(true, false)).toBe(true);
        tools.expect(someOf(false, true)).toBe(true);
        tools.expect(someOf([], {})).toBe(false);
        tools.expect(someOf([], true, false)).toBe(true);
        tools.expect(someOf()).toBe(false);
        tools.expect(someOf(false, false, false, true)).toBe(true);
    }
})


function allOf() {
    if (arguments.length === 0) {
        return false;
    }

    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] !== true) {
            return false;
        }
    }

    return true;
}

tools.add({
    id: "allOf",
    impl: allOf,
    aliases: {
        en: "allOf",
        de: "sindAlleElementeWahr"
    },
    simpleDescription: {
        de: "Sind alle Elemente in der Liste wahr?",
        en: "Are all elements in the list true?"
    },
    argsOld: {
        en: "something1, something2, ...",
        de: "argument1, argument2, ..."
    },
    args: [
        {
            "key": "input+",
            "label_en": "Value",
            "label_de": "Wert",
            "type": "text",
            "desc_en": "Value or condition, that could be true or false",
            "desc_de": "Wert oder Bedingung, die wahr oder falsch sein kann"
        }
    ],
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

    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] !== false) {
            return false;
        }
    }

    return true;
}

tools.add({
    id: "noneOf",
    impl: noneOf,
    aliases: {
        en: "noneOf",
        de: "istKeinElementWahr"
    },
    simpleDescription: {
        de: "Ist kein Element in der Liste wahr?",
        en: "Is no element in the list true?"
    },
    argsOld: {
        en: "something1, something2, ...",
        de: "argument1, argument2, ..."
    },
    args: [
        {
            "key": "input+",
            "label_en": "Value",
            "label_de": "Wert",
            "type": "text",
            "desc_en": "Value or condition, that could be true or false",
            "desc_de": "Wert oder Bedingung, die wahr oder falsch sein kann"
        }
    ],
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
    if (isBoolean(value)) {
        return !value;
    }

    return false;
}

tools.add({
    id: "not",
    impl: not,
    aliases: {
        en: "not",
        de: "nicht"
    },
    simpleDescription: {
        de: "Drehe den Wahrheitswert um",
        en: "Negate a boolean value"
    },
    argsOld: {
        en: "value",
        de: "wert"
    },
    args: [
        {
            "key": "value",
            "label_en": "Value",
            "label_de": "Wert",
            "type": "text",
            "desc_en": "Boolean value to negate",
            "desc_de": "Boolscher Wert, der negiert werden soll"
        }
    ],
    tags: ["TAGS.CONDITIONAL"],
    hideInToolbox: false,
    hideOnSimpleMode: false,
    tests: () => {
        tools.expect(not(true)).toBe(false);
        tools.expect(not(false)).toBe(true);
        tools.expect(not([])).toBe(false);
        tools.expect(not({})).toBe(false);
        tools.expect(not()).toBe(false);
    }
})


function date(formatting, initialDate) {
    if (isUndefined(initialDate) || !initialDate) {
        initialDate = new Date();
    }

    if (isUndefined(formatting) || !formatting) {
        return format(initialDate, "dd.MM.yyyy");
    }

    return format(initialDate, formatting);
}

tools.add({
    id: "date",
    impl: date,
    aliases: {
        en: "date",
        de: "datum"
    },
    simpleDescription: {
        de: "Das aktuelle Datum ausgeben",
        en: "Return the current date"
    },
    argsOld: {
        en: "formatting, dateToProcess",
        de: "formatierung, datum"
    },
    args: [
        {
            "key": "formatting",
            "label_en": "Date format",
            "label_de": "Datumsformat",
            "type": "text",
            "desc_en": "Target format (empty for default e.g. yyyy-MM-dd hh:mm:ss)",
            "desc_de": "Datumsformat (leer für Standard z.B. yyyy-MM-dd hh:mm:ss)"
        },
        {
            "key": "dateToProcess",
            "label_en": "Date",
            "label_de": "Datum",
            "type": "text",
            "desc_en": "Date to use (empty for current date)",
            "desc_de": "Zu formatierendes Datum (leer für aktuelles Datum)"
        }
    ],
    tags: ["TAGS.UTIL"],
    hideInToolbox: false,
    hideOnSimpleMode: false,
    tests: () => {
        tools.expect(date('dd.MM.yyyy', Date.parse("1980/01/01"))).toBe("01.01.1980");
        tools.expect(date('dd.MM.yyyy', Date.parse("01.01.1980"))).toBe("01.01.1980");
        tools.expect(date('dd.MM.yyyy', Date.parse("01.01.1980 12:00:00"))).toBe("01.01.1980");
        tools.expect(date('dd.MM.yyyy', Date.parse("1980-01.01"))).toBe("01.01.1980");
        tools.expect(date('yyyy-MM-dd hh:mm:ss', Date.parse("1980-01-01 01:02:03"))).toBe("1980-01-01 01:02:03");
        tools.expect(date('yyyy-MM-dd hh:mm:ss', Date.parse("1980-01-01"))).toBe("1980-01-01 01:00:00");
    }
})

function timestamp(formatting, initialDate) {
    if (isUndefined(initialDate) || !initialDate) {
        initialDate = new Date();
    }

    if (isUndefined(formatting) || !formatting) {
        return format(initialDate, "yyyyMMddhhmm");
    }

    return format(initialDate, formatting);
}

tools.add({
    id: "timestamp",
    impl: timestamp,
    aliases: {
        en: "timestamp",
        de: "zeitstempel"
    },
    simpleDescription: {
        de: "Den aktuellen Zeitstempel ausgeben",
        en: "Return the current timestamp"
    },
    argsOld: {
        en: "formatting, dateToProcess",
        de: "formatierung, datum"
    },
    args: [
        {
            "key": "formatting",
            "label_en": "Date format",
            "label_de": "Datumsformat",
            "type": "text",
            "desc_en": "Target format (empty for default e.g. yyyy-MM-dd hh:mm:ss)",
            "desc_de": "Datumsformat (leer für Standard z.B. yyyy-MM-dd hh:mm:ss)"
        },
        {
            "key": "dateToProcess",
            "label_en": "Date",
            "label_de": "Datum",
            "type": "text",
            "desc_en": "Date to use (empty for current date)",
            "desc_de": "Zu formatierendes Datum (leer für aktuelles Datum)"
        }
    ],
    tags: ["TAGS.UTIL"],
    hideInToolbox: false,
    hideOnSimpleMode: false,
    tests: () => {
        tools.expect(timestamp('yyyyMMddhhmm', Date.parse("1980/01/01"))).toBe("198001011200");
        tools.expect(timestamp('yyyyMMddhhmm', Date.parse("01.01.1980"))).toBe("198001011200");
        tools.expect(timestamp('yyyyMMddhhmm', Date.parse("01.01.1980 12:00:00"))).toBe("198001011200");
        tools.expect(timestamp('yyyyMMddhhmm', Date.parse("1980-01-01"))).toBe("198001010100");
        tools.expect(timestamp('yyyyMMddhhmmss', Date.parse("1980-01-01 01:02:03"))).toBe("19800101010203");
    }
})

function roundAllNumbers(value) {
    if (!value) {
        return null;
    }

    const round = v => {
        if (isString(v)) {
            const listOfNumbersFromString = extractAllNumbersFromText(v);
            listOfNumbersFromString.forEach(number => {
                v = v.replace(number, Math.round(parseFloat(number.replace(',', '.'))));
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

        return value;
    }

    if (isObject(value)) {
        Object.keys(value).forEach(key => {
            value[key] = round(value[key]);
        });

        return value;
    }

    return round(value);
}

tools.add({
    id: "roundAllNumbers",
    impl: roundAllNumbers,
    aliases: {
        en: "roundAllNumbers",
        de: "rundeAlleZahlen"
    },
    simpleDescription: {
        de: "Runde alle Zahlen im Text",
        en: "Round all numbers in the text"
    },
    argsOld: {
        en: "value",
        de: "wert"
    },
    args: [
        {
            "key": "value",
            "label_en": "Input text",
            "label_de": "Eingabetext",
            "type": "text",
            "desc_en": "Text with numbers that should be rounded",
            "desc_de": "Text mit Zahlen, die gerundet werden sollen"
        }
    ],
    tags: ["TAGS.CONDITIONAL"],
    hideInToolbox: false,
    hideOnSimpleMode: false,
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
    if (typeof _globalContext === 'undefined') {
        _globalContext = {};
    }

    if (typeof value !== 'undefined') {
        _globalContext[key] = value;
    }

    return _globalContext[key];
}

tools.add({
    id: "$global",
    impl: $global,
    aliases: {
        en: "$global",
        de: "$global"
    },
    argsOld: {
        en: "key,value",
        de: "schlüssel,wert"
    },
    args: [
        {
            "key": "key",
            "label_en": "Key",
            "label_de": "Schlüssel",
            "type": "text",
            "desc_en": "Key",
            "desc_de": "Schlüssel"
        },
        {
            "key": "value",
            "label_en": "Value",
            "label_de": "Wert",
            "type": "text",
            "desc_en": "Value",
            "desc_de": "Wert"
        }
    ],
    tags: ["TAGS.UTIL"],
    hideInToolbox: true,
    hideOnSimpleMode: false,
    tests: () => {
        try {
            tools.expect($global('test_key', 'test_value')).toBe('test_value');
            tools.expect($global('test_key')).toBe('test_value');
        } finally {
            delete _globalContext;
        }

        tools.expect($global('test_key')).toBe(undefined);
    }
})

function defaultValue(param, def) {
    if (isBlank(param)) {
        return def;
    }

    return param;
}

tools.add({
    id: "default",
    impl: defaultValue,
    aliases: {
        en: "defaultValue",
        de: "standardWert"
    },
    simpleDescription: {
        de: "Nutze einen Ersatzwert wenn die Eingabe leer ist",
        en: "Use a fallback value for an empty input value"
    },
    argsOld: {
        en: "argument, default",
        de: "argument, standard wert "
    },
    args: [
        {
            "key": "argument",
            "label_en": "Input text",
            "label_de": "Eingabetext",
            "type": "text",
            "desc_en": "Text or object to check for emptiness",
            "desc_de": "Text oder Objekt, das auf Leerheit geprüft wird"
        },
        {
            "key": "defaultValue",
            "label_en": "Fallback",
            "label_de": "Ersatzwert",
            "type": "text",
            "desc_en": "Value to return if input is empty",
            "desc_de": "Wert, der zurückgegeben wird wenn Eingabe leer ist"
        }
    ],
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
