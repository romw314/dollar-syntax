# dollar-syntax
Use the dollar syntax in JavaScript. No dependencies.

## Installation
### npm
```sh
npm install dollar-syntax --save
```
### yarn
```sh
yarn add dollar-syntax
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
			// with a lnumberer, this will not cause a warning
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
