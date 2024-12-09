/** @param {string} packages
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
    let stack = [];
    let result = '';
    for (let char of packages) {
      if (char === ')') {
        // Si encontramos un paréntesis de cierre, resolvemos el último grupo.
        let temp = '';
        while (stack.length > 0 && stack[stack.length - 1] !== '(') {
          temp = stack.pop() + temp;  // Colocamos el contenido en orden inverso.

        }

        stack.pop();  // Eliminamos el paréntesis de apertura '('.
        stack.push(temp.split('').reverse().join(''));  // Añadimos el resultado invertido a la pila.
      } else {
        // Si no es un paréntesis, lo agregamos a la pila.
        stack.push(char);
      }
    }
    // Al final, unimos el contenido de la pila y lo retornamos.
    return stack.join('');
  }

let packages = fixPackages('a(bc(def)g)h')

console.log(packages)