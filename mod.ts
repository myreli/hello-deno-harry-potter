import identifyStudent from "./core/student.ts";
import saveSortingHatDecision from "./services/log.service.ts";
import identifyHouse from "./services/sorting_hat.service.ts";

const args = Deno.args;

try {
  const student: string = identifyStudent(args);
  console.info(`Olá, ${student}! Vamos começar?`);

  const house: string = await identifyHouse(student);
  console.info(`${student}... Você é de ${house}!`);

  await saveSortingHatDecision(student, house);
  console.info(`Tudo certo, ${student}. Pode ir :)`);
} catch (error) {
  console.error(
    `Um erro impediu que a seleção fosse concluída: ${error.message}`,
  );
  throw error;
}