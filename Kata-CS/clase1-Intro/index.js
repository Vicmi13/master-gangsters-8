// PSEUDOCODIGO palindromo
/**
 * eye
 * ana
 */

/* 
Paso 1. Definir funcion palindrome (valor) 
  Paso 2  Convertir el valor a string, y guardarlo  palindromeText =  valor
  paso 3  Con palindromeText.separarloPor("") [g, a, t, o, s, J, u, n, t, o, s]
  paso 4  palindromeText.aplicarReversaPalabra() [s,o,t,n,u,J,s,o,t,a,g]
  paso 5  palindromeText.unirPor('')  sotnuJsota
  paso 6  si (valor === palindromeText) 
            regresa verdadero
        else regresa falso   
      
paso 7 cierra funcion
*/
function palindrome(valor) {
  let palindromeText = valor.toString();

  let result = palindromeText.split(""); // [g, a, t, o, s, J, u, n, t, o, s]

  let reverseText = result.reverse(); //Se aplica el reverse [s, o, t, n, u, J, s, o, t, a, g]

  let joinText = reverseText.join(""); // [sotnuJsotag]
  if (joinText == valor) {
    return true;
  } else {
    return false;
  }
}

palindrome("ana");

