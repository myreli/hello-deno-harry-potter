export default async (student: String, house: String): Promise<void> => {
    console.debug('registrando', student, house, Date.now())
    return Deno.writeTextFile(
        "./app.log",
        `${new Date().toISOString()} | ${student} nomeado para ${house}\n`,
        { append: true }
    )
}