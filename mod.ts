import identifyStudent from "./student.ts";
import saveSortingHatDecision from "./log.service.ts";
import identifyHouse from "./sorting_hat.service.ts";

const args = Deno.args;

try {
  const student: String = identifyStudent(args);
  console.info(`Olá, ${student}! Vamos começar?`);

  const house: String = await identifyHouse(student);
  console.info(`${student}... Você é de ${house}!`);

  await saveSortingHatDecision(student, house);
  console.info(`Tudo certo, ${student}. Pode ir :)`);
} catch (error) {
  console.error(
    `Um erro impediu que a seleção fosse concluída: ${error.message}`,
  );
  throw error;
}
