const arrayName = ["Christian", "Isaac", "Carlos", "Julio", "Rodrigo"];

const objetoMaterias = {
  name1: "POO",
  name2: "DB",
  name3: "Infraestructura",
  name4: "IA",
};

const greetings = arrayName.map((item) => `Hola ${item}`);

// Forma en que exportamos con Node
// module.exports = {
//   greetings, // array
//   materias: objetoMaterias
// }

// Forma babel, ECMA2015, JS viejito, common JS ¿?
export default {
  greetingsArray: greetings,
  objetoMaterias,
};
