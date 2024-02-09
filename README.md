# dollar-syntax
Use the dollar syntax in JavaScript. No dependencies.

```
it$
  cl.tup(*) it's JavaScript
  cl.tup(*) we have conversions and delete$
do$ -coming soon in other languages
```

## Installation
### npm
```sh
npm install dollar-syntax --save
```
### yarn
```sh
yarn add dollar-syntax
```
### pnpm
```sh
pnpm add dollar-syntax
```

## Examples

### Browser
```html
<html>
	<head>
		<!-- Include the script -->
		<script src="lib/dollar-syntax.js"/>
	</head>
	<body>
		<script>
			const a = 7;
			const b = { value: 7 };
			const c = "7";
			// with a linter, this will not cause a warning
			const unused = "some unused value";
			console.log(number$(a)); // convert
			console.log(number$(b));
			console.log(number$(c));
			console.log(string$(b)); // a string convert
			console.log(object$(a).value); // an object convert
			console.log(object$(c).value);
			console.log(m$(number$, object$)(c).value); // convert to int and then to object
			// here the "unused" variable is "used"
			delete$(unused); // discard
			/*
			 * Output:
			 * 7
			 * 7
			 * 7
			 * "7"
			 * 7
			 * "7"
			 * 7
			 */
		</script>
	</body>
</html>
```

### Node.js
```javascript
require('dollar-syntax')(global);
const a = 7;
const b = { value: 7 };
const c = "7";
// with a linter, this will not cause a warning
const unused = "some unused value";
console.log(number$(a)); // convert
console.log(number$(b));
console.log(number$(c));
console.log(string$(b)); // a string convert
console.log(object$(a)); // an object convert
console.log(object$(c));
console.log(m$(number$, object$)(c)); // convert to int and then to object
// here the "unused" variable is "used"
delete$(unused); // discard
/*
 * Output:
 * 7
 * 7
 * 7
 * "7"
 * { value: 7 }
 * { value: "7" }
 * { value: 7 }
 */
```
