export default async (student: String) => {
  console.debug("selecionando casa para", student);

  const response = await fetch("https://www.potterapi.com/v1/sortingHat/");
  
  const house = await response.text();

  return house;
};
