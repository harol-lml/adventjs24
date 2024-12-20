/**
 * @param {string} s
 * @returns {string}
 */
function removeSnow(s) {
    while (true) {
        let next = s.replace(/(.)\1/g, ''); // Elimina pares consecutivos de caracteres
        if (next === s) break; // Si no hay cambios, termina
        s = next; // Actualiza la cadena para la próxima iteración
    }
    return s;
}
removeSnow('zxxzoz') // -> "oz"
// 1. Eliminamos "xx", quedando "zzoz"
// 2. Eliminamos "zz", quedando "oz"