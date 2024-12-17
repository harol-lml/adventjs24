 /** @param {string} moves
 * @returns {true|[number, number]} Return true if robot returns or position
 */
function isRobotBack(moves) {
    const mods = ['*','!','?']
    const opposites = {
        L: "R",
        D: "U",
        R: "L",
        U: "D"
    };

    let pos = [0,0] // x, y
    moves = moves.split('')
    for (let i = 0; i < moves.length; i++) {

        if(moves[i+1] && mods.includes(moves[i])){
            if(moves[i] == '!'){
                if (moves[i + 1] in opposites) {
                    moves[i + 1] = opposites[moves[i + 1]];
                }
            }else if(moves[i] == "*"){
                if(moves[i+1] == "L"){
                    pos[0] = pos[0] - 2
                }else if(moves[i+1] == "D"){
                    pos[1] = pos[1] - 2
                }else if(moves[i+1] == "R"){
                    pos[0] = pos[0] + 2
                }else if(moves[i+1] == "U"){
                    pos[1] = pos[1] + 2
                }
                i = i+1

            }else if (moves[i] == '?'){
                let copy = moves.slice(0,  i)
                if(copy.includes(moves[i+1])) i = i+1
            }

        } else {
            if(moves[i] == "L"){
                pos[0] = pos[0] - 1
            }else if(moves[i] == "D"){
                pos[1] = pos[1] - 1
            }else if(moves[i] == "R"){
                pos[0] = pos[0] + 1
            }else if(moves[i] == "U"){
                pos[1] = pos[1] + 1
            }
        }
    }

    return pos[0] == 0 && pos[1] == 0 ? true : pos
}

// console.log (isRobotBack('R'))   // [1, 0]
// console.log (isRobotBack('RL'))    // true
// console.log (isRobotBack('RLUD'))  // true
// console.log (isRobotBack('*RU')  ) // [2, 1]
// console.log (isRobotBack('R*U')   )// [1, 2]
// console.log (isRobotBack('LLL!R') )// [-4, 0]
// console.log (isRobotBack('R?R')   )// [1, 0]
// console.log (isRobotBack('U?D')   )// true
// console.log (isRobotBack('R!L')   )// [2,0]
// console.log (isRobotBack('U!D')   )// [0,2]
// console.log (isRobotBack('R?L')   )// true
// console.log (isRobotBack('U?U')   )// [0,1]
// console.log (isRobotBack('*U?U')  )// [0,2]
console.log (isRobotBack('U?D?U') )// true
