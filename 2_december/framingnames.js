function createFrame(names) {
    const maxLength = Math.max(...names.map(name => name.length));
    const border = '*'.repeat(maxLength + 4);

    const frame = names.map(
        name => `* ${name.padEnd(maxLength)} *`
    ).join('\n');

    return `${border}\n${frame}\n${border}`;
}

console.log(createFrame(['midu', 'madeval', 'educalvolpz']))