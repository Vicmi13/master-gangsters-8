/**Cambiar en el html
 * countLetter.js
 *  o
 * exerciseSaturday.js
 */

const countLetter = (word) => {
  const lettersObject = {};
  /**
   * separamos cada letra de la palabra
   * iteramos
   */
  word.split("").forEach((element) => {
    /**
     * si ya existe un atributo con esa letra)
     */
    if (lettersObject[element]) {
      lettersObject[element] = lettersObject[element] + 1;
    } else {
      /**
       * Es la primera vez
       * por tanto crea el par key: value
       * ejemplo { e: 1 }
       */
      lettersObject[element] = 1;
    }
    /**con ternario 
     lettersObject[element] 
     ? lettersObject[element] = lettersObject[element] + 1
     : lettersObject[element] = 1
    */
  });
  return lettersObject;
};

console.log("contador de letras", countLetter("ewomew"));
