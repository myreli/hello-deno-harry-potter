export default async (student: string) => {
  console.debug("selecionando casa para", student);

  const response = await fetch("https://www.potterapi.com/v1/sortingHat/");
  
  const house = await response.json();
  
  return house;
};
