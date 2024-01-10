# ColoredCLI
A npm package written on node to make your command line colorful


ColoredCLI is a Node.js package designed to enhance the appearance of text on the command line by adding colors and styles. This package provides easy-to-use functions for applying various colors, background colors, and styles to your text output.

# Installation
You can install ColoredCLI using npm:

`npm start`

# Usage
# Basic Usage

```javascript
import * as colorPackage from 'coloredcli';

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
# Contributing
Feel free to contribute by opening issues or submitting pull requests on [GitHub](https://github.com/ankit142/ColoredCLI).



