async function runTest() {
  const colorPackage = await import('../src/index.mjs');
  const varPackage = await import('../src/constants.mjs')
  colorPackage.allColors().forEach(color => {
    console.log(colorPackage.applyColor(varPackage.colorText, color));
  });

  colorPackage.allBgColors().forEach(bgColor => {
    console.log(colorPackage.applyBackground(varPackage.bgText, bgColor));
  });

  console.log(colorPackage.success(varPackage.successText));
  console.log(colorPackage.error(varPackage.errorText));
  console.log(colorPackage.warning(varPackage.warningText));

  // Apply bold style
  console.log(colorPackage.applyStyle(`${varPackage.boldText} in Bold!`, 'bold'));

  // Apply italic style
  console.log(colorPackage.applyStyle(`${varPackage.boldText} in Italics!`, 'italic'));

  // Apply underlined style
  console.log(colorPackage.applyStyle(`${varPackage.boldText} and is Underlined!`, 'underline'));

  // Apply color and style in the same console.log
  console.log(colorPackage.applyStyle(colorPackage.applyColor(varPackage.successText, 'green'), 'bold'));

  // You can also chain multiple styles
  console.log(colorPackage.applyStyle(colorPackage.applyStyle(colorPackage.applyColor(varPackage.errorText, 'red'), 'italic'), 'underline'));
}

runTest();
