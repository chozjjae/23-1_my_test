const a = 0;
a = 1; // Uncaught TypeError: Assignment to constant variable.
let b = 0;
b = 1; // 1
const c = 2; // Uncaught SyntaxError: Missing initializer in const declaration
c = 3;