/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes
 */
function organizeShoes(shoes) {
    const sizeMap = new Map();

    // Contar botas izquierdas ('I') y derechas ('R') por tamaño
    for (const { type, size } of shoes) {
        if (!sizeMap.has(size)) {
            sizeMap.set(size, { I: 0, R: 0 });
        }
        sizeMap.get(size)[type]++;
    }

    const result = [];

    // Calcular pares y agregarlos al resultado
    for (const [size, counts] of sizeMap) {
        const pairs = Math.min(counts.I, counts.R); // Contar los pares disponibles
        result.push(...Array(pairs).fill(size));
    }

    return result;
}

const shoes = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'I', size: 38 },
    { type: 'I', size: 38 },
    { type: 'R', size: 38 }
]

console.log(organizeShoes(shoes))