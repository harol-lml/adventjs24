/**
 * @param {string[]} instructions - The instructions to execute
 * @returns {number | undefined} The value of the register A
 */
function compile(instructions) {
    const registers = new Map();

    // Helper function to get a register value or 0 if not defined
    const getValue = (key) => (isNaN(key) ? (registers.get(key) || 0) : Number(key));

    for (let index = 0; index < instructions.length; index++) {
        const [cmd, arg1, arg2] = instructions[index].split(' ');

        switch (cmd) {
            case 'MOV':
                registers.set(arg2, getValue(arg1));
                break;

            case 'INC':
                registers.set(arg1, getValue(arg1) + 1);
                break;

            case 'DEC':
                registers.set(arg1, getValue(arg1) - 1);
                break;

            case 'JMP':
                if (getValue(arg1) === 0) {
                    index = Number(arg2) - 1; // Jump to the instruction (0-based index)
                }
                break;
        }
    }

    // Return the value of register A or undefined if it's not present
    return registers.has('A') ? registers.get('A') : undefined;
}


const instructions = [
    "MOV 5 A",
    "INC A",
    "DEC A",
    "DEC A",
    "JMP A 1",
    "MOV 10 B",
    "MOV B A"
];

console.log(compile(instructions)); // Resultado: 10