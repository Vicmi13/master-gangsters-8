const root = document.getElementById("div-root");

const firstName = "Vic";
const lastName = "Torres";

const className = "div-wrapper";

const baby = false;
const age = 10;

let numbTemp = 0;
let stringName = "";
// if (stringName) {}

const tastySection = (
  <ul>
    {/* Como se agregan comentarios */}

    <li>Applesauce</li>
    {/* si baby es contrario de verdadero mostrará elemento <li>  </li> */}
    {!baby && <li>Pizza</li>}
    {/* si age es mayor  mostrará elemento <li>  </li> */}
    {age > 15 && <li>Brussels Sprouts</li>}
    {age > 20 && <li>Oysters</li>}
  </ul>
);

/**
 *  { valor && elemento}
 *  { valor ? elemento1 : elemento2}
 */
const isWednesday = false;
const showDay = (
  <div>
    {isWednesday ? (
      <h5>Hoy es Miercoles en la noche</h5>
    ) : (
      <h5>Quien sabe que dia es</h5>
    )}
  </div>
);

const elementJSX = (
  // <React.Fragment> tambien funciona AQUI
  <>
    {/* comentario */}
    <div className={className}>
      Hello world react, hoy es un día genial {firstName} {lastName}
      <h6>Titulo dentro de mi div</h6>
      <section>{tastySection}</section>
    </div>
    {showDay}
  </>
);

/**
 * const elementJSX = React.createElement('div', {
 *  children: React.createElement('span', ...)
 *  className: "div-wrapper"
 * })
 */

ReactDOM.render(elementJSX, root);
