/**
  * @param {Array<Object>} data
  * @returns {string}
  */
function drawTable(data) {
  if (!data.length) return '';

  // Obtener los títulos de las columnas
  const headers = Object.keys(data[0]);

  // Calcular la longitud máxima de cada columna
  const maxLengths = headers.map(header =>
    Math.max(
      header.length, 
      ...data.map(item => item[header]?.toString().length || 0)
    )
  );

  // Función para generar una fila
  const createRow = (items) =>
    `| ${items.map((item, i) => item.toString().padEnd(maxLengths[i])).join(' | ')} |`;

  // Generar la cabecera
  const headerRow = createRow(headers.map(header => header[0].toUpperCase() + header.slice(1)));

  // Generar las filas de datos
  const dataRows = data.map(item => createRow(headers.map(header => item[header])));

  // Generar la línea separadora
  const separator = `+${maxLengths.map(len => '-'.repeat(len + 2)).join('+')}+`;

  // Combinar todo en la tabla final
  return [separator, headerRow, separator, ...dataRows, separator].join('\n');
}

let data1 = drawTable([
    { name: 'Alice', city: 'London' },
    { name: 'Bob', city: 'Paris' },
    { name: 'Charlie', city: 'New York' }
  ])
console.log(data1);
  // +---------+-----------+
  // | Name    | City      |
  // +---------+-----------+
  // | Alice   | London    |
  // | Bob     | Paris     |
  // | Charlie | New York  |
  // +---------+-----------+

let data = drawTable([
    { gift: 'Doll', qt: 10 },
    { gift: 'Book', qt: 5 },
    { gift: 'Music CD', qt: 1 }
  ])
console.log(data);
  // +----------+----------+
  // | Gift     | Quantity |
  // +----------+----------+
  // | Doll     | 10       |
  // | Book     | 5        |
  // | Music CD | 1        |
  // +----------+----------+