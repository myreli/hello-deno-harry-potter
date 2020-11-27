export default async (student: string, house: string): Promise<void> => {
    console.debug('registrando', student, house, Date.now())
    return Deno.writeTextFile(
        "./app.log",
        `${new Date().toISOString()} | ${student} nomeado para ${house}\n`,
        { append: true }
    )
}