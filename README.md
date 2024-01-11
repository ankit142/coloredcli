<h1 align="center">
	<br>
	<br>
	<img width="320" src="https://github.com/ankit142/ColoredCLI/blob/main/coloredCLIBanner.jpg" alt="coloredCLI">
	<br>
	<br>
	<br>
</h1>

# ColoredCLI.js
A npm package written on node to make your command line colorful


ColoredCLI is a Node.js package designed to enhance the appearance of text on the command line by adding colors and styles. This package provides easy-to-use functions for applying various colors, background colors, and styles to your text output.

# Installation
You can install ColoredCLI using npm:

`npm i coloredcli`

or

`npm install coloredcli`

# Usage
# Basic Usage (Examples)

```javascript
import * as colorPackage from 'coloredcli/src/index.mjs';

const colorText = 'Hello, this is a colored text!';
const bgColorText = 'This text has a colored background!';
const successText = 'Success message';
const errorText = 'Error message';
const warningText = 'Warning message';

// Apply colors
console.log(colorPackage.applyColor(colorText, 'green'));
console.log(colorPackage.applyBackground(bgColorText, 'bgBlue'));

// Apply styles
console.log(colorPackage.applyStyle(successText, 'bold'));
console.log(colorPackage.applyStyle(errorText, 'italic'));
console.log(colorPackage.applyStyle(warningText, 'underline'));

// Apply color and style in the same console.log
console.log(colorPackage.applyStyle(colorPackage.applyColor(successText, 'green'), 'bold'));
```
# Output 

![OutputImage](https://github.com/ankit142/ColoredCLI/blob/main/ExampleOutput.png)


# Test: Playing with loops, exploring all the colors available in the list


![OutputImage1](https://github.com/ankit142/ColoredCLI/blob/main/media/testCase3.png)

# Output:

![OutputImage12](https://github.com/ankit142/ColoredCLI/blob/main/media/testOutput3.png)

# Test: A story expressing messages to your loved ones

![OutputImageStory](https://github.com/ankit142/ColoredCLI/blob/main/media/ExampleStory.png)

# Running Tests
In your test script (test.mjs), you can use the runTest function to test different color and style combinations:

```javascript
import { runTest } from 'coloredcli/test-runner';

runTest();
```
# Constants
You can create a separate file (constants.mjs) to store your text constants and use them in your tests:

```javascript
// constants.mjs
export const colorText = 'Hello, this is a colored text!';
export const bgColorText = 'This text has a colored background!';
export const successText = 'Success message';
export const errorText = 'Error message';
export const warningText = 'Warning message';
export const boldText = 'Ankit Guria says Hi';
```
Then, in your test script (test.mjs), you can import and use these constants:
```javascript
import * as varPackage from './constants.mjs';
import { runTest } from 'coloredcli/test-runner';

runTest(varPackage);
```

# Steps for a layman(Playground)
1. Create a new project: 

`npm init -y`

This command will create a package.json dependencies for your test file.

# Note: 
Add the 'module' type in your package.json.
It should look something like this.

```json
//package.json
{
    "name": "exampleCLI",
    "version": "1.0.0",
    "description": "An example CLI using coloredcli",
    "main": "example.js",
    "type": "module",
    "scripts": {
        "start": "node example.js"
    },
    "keywords": [],
    "author": "Ankit Guria",
    "license": "ISC",
    "dependencies": {
        "coloredcli": "^1.0.4",
        "coloredcli.js": "^1.0.14"
    }
}
```

2. A new file like - "example.js" to be created. 
Here is the sample code:

```javascript
// example.js
import * as colorPackage from 'coloredcli/src/index.mjs';
const text = 'This is a colorful story on CLI!';
// a normal console log statement
console.log(text)
// a console log statement equipped with ColoredCLI.js
console.log(colorPackage.applyBackground(colorPackage.applyColor(text, 'cyan'), 'bgBrightYellow'));
```
3. Now run this file, and here you go.
`node example.js`

4. Play and enjoy more with custom console log statements or something else.

# Contributing
Feel free to contribute by opening issues or submitting pull requests on [GitHub](https://github.com/ankit142/ColoredCLI).

# License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/ankit142/ColoredCLI/blob/main/LICENSE) file for details.




