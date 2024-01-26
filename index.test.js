require('./index')(global);

describe('number$', () => {
	test('string -> number (valid integer)', () => {
		for (const [str, num] of Array.from(Array(100).keys()).map(num => [String(num), num]))
			expect(number$(str)).toBe(num);
	});

	test('string -> number (valid decimal)', () => {
		for (const [str, num] of Array.from(Array(100).keys()).map(() => {
			const num = Math.random();
			return [num.toFixed(5), num];
		}))
			expect(number$(str)).toBeCloseTo(num);
	});

	test('string -> number (invalid)', () => {
		for (const str of ['S0m3 1nv4l1d str1n6', 'Th1s 1s 4n0th3r 1nv4l1d t3xt', 'ddFnG221'])
			expect(number$(str)).toBeNaN();
	});

	test('function(string) -> number (valid integer)', () => {
		for (const [str, num] of Array.from(Array(100).keys()).map(num => [String(num), num]))
			expect(number$(() => str)).toBe(num);
	});

	test('function(string) -> number (valid decimal)', () => {
		for (const [str, num] of Array.from(Array(100).keys()).map(() => {
			const num = Math.random();
			return [num.toFixed(5), num];
		}))
			expect(number$(() => str)).toBeCloseTo(num);
	});

	test('function(string) -> number (invalid)', () => {
		for (const str of ['S0m3 1nv4l1d str1n6', 'Th1s 1s 4n0th3r 1nv4l1d t3xt', 'ddFnG221'])
			expect(number$(() => str)).toBeNaN();
	});
});

describe('string$', () => {
	test('number -> string (integer)', () => {
		for (const [num, str] of Array.from(Array(100).keys()).map(num => [num, num.toString()]))
			expect(string$(num)).toBe(str);
	});

	test('number -> string (NaN)', () => {
		expect(string$(NaN)).toBe('NaN');
	});

	test('function(number) -> string (integer)', () => {
		for (const [num, str] of Array.from(Array(100).keys()).map(num => [num, num.toString()]))
			expect(string$(() => num)).toBe(str);
	});

	test('function(number) -> string (NaN)', () => {
		expect(string$(() => NaN)).toBe('NaN');
	});
});

describe('object$', () => {
	test('number -> object (integer)', () => {
		for (const num of Array.from(Array(100).keys()))
			expect(object$(num)).toMatchObject({ value: num, num });
	});

	test('string -> object', () => {
		for (const str of ['S0m3 str1n6', 'Th1s is us3ful for t3sts', 'ddFnG221'])
			expect(object$(str)).toMatchObject({ value: str, str });
	});
});
