/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {
    let response = ''
    board.forEach((row, y, arr) => {
        let coordx = row.indexOf('@') != -1 ? row.indexOf('@') : null
        if (coordx == null) return

        let mv = mov == 'U' ? [coordx, y-1] :
                 mov == 'D' ? [coordx, y+1] :
                 mov == 'R' ? [coordx+1, y] :
                              [coordx-1, y]

        if(mv[0] < 0 ||  mv[1] < 0 || mv[1] >= arr.length || mv[0] >= row.length) {
            response = 'crash'
            return
        }
        else if(arr[mv[1]].at(mv[0]) == 'o') response = 'crash'
        else if(arr[mv[1]].at(mv[0]) == '*') response = 'eat'
        else if(arr[mv[1]].at(mv[0]) == '·') response = 'none'
    })
    return response
}


const board = [
    '····',
    '*····',
    '@····',
    'o····',
    'o····'
  ]
console.log(moveTrain(board, 'L'))