/**
 * @param {string} filename - The filename to decode.
 * @returns {string} The decoded filename.
 */
function decodeFilename(filename) {
    let [first, sec] = filename.slice(filename.indexOf('_')+1).split('.')
    return `${first}.${sec}`
}

console.log(decodeFilename('2023122512345678_sleighDesign.png.grinchwa'))
// ➞ "sleighDesign.png"

// decodeFilename('42_chimney_dimensions.pdf.hack2023')
// ➞ "chimney_dimensions.pdf"

// decodeFilename('987654321_elf-roster.csv.tempfile')
// ➞ "elf-roster.csv"