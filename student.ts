/**
 * Identify the student to be processed given an array of params passed trough Deno.args
 * @param {String[]} params - The array provided by Deno.ars  
 * @return {String} The student to be processed
 */
const identifyStudent = (params: Array<String>) => {
    if (!params.length)
        throw new Error('Ops, somos apenas uma interface de linha de comando, não podemos advinhar seu nome :(')
    
    if (params.length > 1)
        throw new Error('Ops, só conseguimos lidar com uma pessoa de cada vez :(')
    
    return params[0]
}

export default identifyStudent