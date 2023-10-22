(function () {
	const syntax = {
		number$: value => {
			if (value.value !== undefined)
				return syntax.number$(value.value);
			if (value.number !== undefined)
				return syntax.number$(value.number);
			if (value.num !== undefined)
				return syntax.number$(value.num);
			if (value.integer !== undefined)
				return syntax.number$(value.integer);
			if (value.int !== undefined)
				return syntax.number$(value.int);
			if (typeof(value) === 'string')
				return parseInt(value);
			if (typeof(value) === 'function')
				return syntax.number$(value());
			return Number(value);
		},
		string$: value => {
			if (value.value !== undefined)
				return syntax.string$(value.value);
			if (value.string !== undefined)
				return syntax.string$(value.string);
			if (value.str !== undefined)
				return syntax.string$(value.str);
			if (value.text !== undefined)
				return syntax.string$(value.text);
			if (typeof(value) === 'function')
				return syntax.string$(value());
			return String(value);
		},
		object$: (value, internal, prev, childName) => {
			if (value.value !== undefined)
				return syntax.object$(value.value, true, value);
			if (value.result !== undefined)
				return syntax.object$(value.result, true, value);
			if (value.object !== undefined)
				return syntax.object$(value.object, true, value);
			if (value.obj !== undefined)
				return syntax.object$(value.obj, true, value);
			if (typeof(value) === 'function')
				return syntax.object$(value(), true, value);
			let obj = { value, result: value };
			if (typeof(prev) === 'object')
				obj = { ...obj, ...prev };
			if (typeof(value) === 'object' && value.__proto__.__proto__ === null) {
				if (internal) {
					obj = { ...obj, ...value };
				}
				else
					return value;
			}
			if (typeof(value) === 'number')
				obj = { ...obj, number: value, num: value };
			if (typeof(value) === 'string')
				obj = { ...obj, string: value, str: value, text: value };
			return obj;
		},
		delete$: () => {},
		m$: (...methods) => value => {
			for (const method of methods)
				value = method(value);
			return value;
		}
	};

	function enable(glob) {
		for (const name in syntax)
			glob[name] = syntax[name];
	}

	// Node.js
	if (typeof(module) === 'object')
		module.exports = enable;

	// Browser
	if (typeof(window) === 'object')
		enable(window);
})()
