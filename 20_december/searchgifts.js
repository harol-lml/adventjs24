/**
 * @typedef {Record<string, number>} GiftsCount
 */

/**
 * @typedef {{ missing: GiftsCount, extra: GiftsCount }} Result
 */

/**
 * @param {string[]} received
 * @param {string[]} expected
 * @returns {Result}
 */
function fixGiftList(received, expected) {
    const cont = array => array.reduce((acc, valor) => {
        acc[valor] = (acc[valor] || 0) + 1;
        return acc;
    }, {})
    let rece = received.map( re => {
        const index =expected.indexOf(re)
        if(index >=0){
            expected.splice(index, 1)
            return []
        }else{
            return re
        }
    })

    return {
      missing: cont(expected),
      extra: cont(rece.flat())
    }
}

  let cont = fixGiftList(
    ['bear', 'bear', 'car'],
    ['bear', 'car', 'puzzle', 'bear', 'car', 'car']
  )
  console.log(cont)
  // Devuelve:
  // {
  //   missing: { puzzle: 1, car: 2 },
  //   extra: {}
  // }
