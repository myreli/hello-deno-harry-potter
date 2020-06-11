const args = Deno.args

if (!args.length)
    throw new Error('Oops... I am just a CLI, I can not guess your name :(')

if (args.length > 1)
    throw new Error('Oops... I can only handle one student at a time :(')

const student: String = args[0]

console.info(`Hello, ${student}! Shall we?`)