/*
    It's time to put up the Christmas tree at home! 🎄 But this year we want it to be special. We're going to create a function that receives the height of the tree (a positive integer between 1 and 100) and a special character to decorate it.

    The function should return a string that represents the Christmas tree, constructed as follows:

    The tree is made up of triangles of special characters.
    The spaces on the sides of the tree are represented with underscores _.
    All trees have a trunk of two lines, represented by the # character.
    The tree should always have the same length on each side.
    You must ensure the tree has the correct shape using line breaks \n for each line.
 */

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