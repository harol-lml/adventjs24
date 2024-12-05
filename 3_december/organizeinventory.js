function organizeInventory(inventory) {
    return inventory.reduce((acc, { name, quantity, category }) => {
        acc[category] ??= {}; // Inicializa la categoría si no existe
        acc[category][name] = (acc[category][name] || 0) + quantity; // Suma cantidades
        return acc;
    }, {});
}

const inventory = [
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' },
    { name: 'ball', quantity: 1, category: 'sports' }
];

console.log(organizeInventory(inventory));