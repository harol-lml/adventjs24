/**
 * @param {boolean[][]} grid
 * @returns {number[][]}
 */
function detectBombs(grid) {
    let table = []
    for (let i = 0; i < grid.length; i++) {
        let rows = []
        let isSqu = grid[i].length == grid.length

        for (let j = 0; j < grid[i].length; j++) {
            let count = 0
            if(grid[i][j+1]) count ++  // Siguiente
            if(((grid[i].length >i+1 && isSqu) || (grid[i].length >=i+1 && !isSqu)) && grid[i+1][j]) count ++ // Debajo
            if(((grid[i].length >i+1 && isSqu) || (grid[i].length >=i+1 && !isSqu)) && grid[i+1][j+1]) count ++ // Diagonal inferior derecha

            if(grid[i][j-1]) count ++ // Anterior
            if(i-1 >= 0 && grid[i-1][j]) count ++ // Arriba
            if(i-1 >= 0 && j-1 >= 0 && grid[i-1][j-1]) count ++ //diagonal super inf izqui
            if(((grid[i].length > i+1 && isSqu) || (grid[i].length >=i+1 && !isSqu)) && j-1 >= 0 && grid[i+1][j-1]) count ++ //diagonal inf izqui
            if(i-1 >= 0  && j+1 < grid[i].length && grid[i-1][j+1]) count ++ //diagonal super dere

            rows.push(count)
        }
        table.push(rows)
    }
    return table
}

let bombs1 = detectBombs([
    [true, false, false],
    [false, true, false],
    [false, false, false]
])
console.log(bombs1);
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

let bombs2 = detectBombs([
    [true, true],
    [false, false],
    [true, true]
  ])
console.log(bombs2);

  // [
//   [1, 1],
//   [4, 4],
//   [1, 1]
// ]
