const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  underscore: '\x1b[4m',
  blink: '\x1b[5m',
  reverse: '\x1b[7m',
  hidden: '\x1b[8m',
  black: '\x1b[30m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  brightBlack: '\x1b[90m',
  brightRed: '\x1b[91m',
  brightGreen: '\x1b[92m',
  brightYellow: '\x1b[93m',
  brightBlue: '\x1b[94m',
  brightMagenta: '\x1b[95m',
  brightCyan: '\x1b[96m',
  brightWhite: '\x1b[97m',
};

const bgColors = {
  bgBlack: '\x1b[40m',
  bgRed: '\x1b[41m',
  bgGreen: '\x1b[42m',
  bgYellow: '\x1b[43m',
  bgBlue: '\x1b[44m',
  bgMagenta: '\x1b[45m',
  bgCyan: '\x1b[46m',
  bgWhite: '\x1b[47m',
  bgBrightBlack: '\x1b[100m',
  bgBrightRed: '\x1b[101m',
  bgBrightGreen: '\x1b[102m',
  bgBrightYellow: '\x1b[103m',
  bgBrightBlue: '\x1b[104m',
  bgBrightMagenta: '\x1b[105m',
  bgBrightCyan: '\x1b[106m',
  bgBrightWhite: '\x1b[107m',
};

function allColors() {
  return Object.keys(colors);
}

const styles = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  italic: '\x1b[3m',
  underline: '\x1b[4m',
};

function applyStyle(text, style) {
  const styleCode = styles[style] || styles.reset;
  return `${styleCode}${text}${styles.reset}`;
}

function allBgColors() {
  return Object.keys(bgColors);
}

function applyColor(text, color) {
  const colorCode = colors[color] || colors.reset;
  return `${colorCode}${text}${colors.reset}`;
}

function success(text) {
  const greenColor = colors.green; 
  return `${greenColor}${text}${colors.reset}`;
}
function error(text) {
  const redColor = colors.red; 
  return `${redColor}${text}${colors.reset}`;
}
function warning(text) {
  const yellowColor = colors.yellow; 
  return `${yellowColor}${text}${colors.reset}`;
}

function applyBackground(text, bgColor) {
  const bgColorCode = bgColors[bgColor] || '';
  return `${bgColorCode}${text}${colors.reset}`;
}

export {
  applyStyle,
  success,
  error,
  warning,
  allColors,
  allBgColors,
  applyColor,
  applyBackground,
};
