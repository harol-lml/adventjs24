/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
    let track = (pos, ind, desp) => {
        let tr = ' '.repeat(desp-ind)
        let ps = pos < 0 ? (length + pos) : pos
        let resp = ps != 0 ? '~'.repeat(ps)+'r'+'~'.repeat(length-ps-1): '~'.repeat(length)

        return `${tr}${resp} /${ind}`
    }

    return indices.map((racer, i) => track(racer, i + 1, indices.length)).join('\n')
}

let rece = drawRace([0, 5, -3], 10)

console.log(rece)

/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/