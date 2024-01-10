declare module 'coloredcli' {
    function applyStyle(text: string, style: string): string;
    function success(text: string): string;
    function error(text: string): string;
    function warning(text: string): string;
    function applyColor(text: string, color: string): string;
    function applyBackground(text: string, bgColor: string): string;
    function allColors(): string[];
    function allBgColors(): string[];
  
    export {
      applyStyle,
      success,
      error,
      warning,
      applyColor,
      applyBackground,
      allColors,
      allBgColors,
    };
  }
  