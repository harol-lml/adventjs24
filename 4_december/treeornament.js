function createXmasTree(height, ornament) {
    const createRow = (spaces, content) => '_'.repeat(spaces) + content + '_'.repeat(spaces);

    // Construir las partes del árbol
    const tree = Array.from({ length: height }, (_, i) => 
      createRow(height - i - 1, ornament.repeat(2 * i + 1))
    ).join('\n');

    const trunk = createRow(height - 1, '#');

    // Combinar el árbol con el tronco
    return `${tree}\n${trunk}\n${trunk}`;
}

console.log(createXmasTree(5, '·'))