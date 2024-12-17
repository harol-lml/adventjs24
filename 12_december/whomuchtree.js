/** @param {string} ornaments
 * @return {number} - The price of the tree
 */
function calculatePrice(ornaments) {
    let result = 0
    let map = new Map()
    map.set('*',1)
    map.set('o',5)
    map.set('^',10)
    map.set('#',50)
    map.set('@',100)

    ornaments.split('').forEach((element, i, array) => {
        let val = map.get(element)
        if(array[i+1] && (map.get(element) < map.get(array[i+1]))){
          val = -(val)
        }
        result = val + result
    });
    return result ? result : undefined
}

console.log(calculatePrice('***'))  // 3   (1 + 1 + 1)
console.log(calculatePrice('*o*'))  // 5  (-1 + 5 + 1),