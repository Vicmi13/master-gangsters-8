const root = document.getElementById("div-root");
const element = document.createElement("div");

element.textContent = "Hello world DOM";
element.className = "container";
root.appendChild(element);


/** APLICADO CON REACT */

/* 
 *
 * SINTAXIS React.createElement(typo_de_elemento, { children },  valor)
*/
// const elemenReact = React.createElement('div', null, 'Hello world React primero')

const elemenReact = React.createElement('div', {
  children:  React.createElement('span', {
    // children: 'Este es mi span dentro de div'
    className: "span-style"
  }, 'Este es mi span dentro de div'),
  className: 'div-element'
})

/**
 * SINTAXIS ReactDOM.render(elemenReactQueSeRenderiza, elemento)
 */
ReactDOM.render(elemenReact, root)
console.log('elemenReact', elemenReact)


