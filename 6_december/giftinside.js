/** @param {string[]} gifts
 *  @returns {boolean} True if the gift is inside the box
 */
function inBox(box) {
    return box.slice(1, -1).some(row => row.slice(1, -1).includes('*'));
}

let gifts = inBox([
    "###",
    "# #*",
    "# #",
    "###",
  ]) // ➞ true

console.log(gifts)
