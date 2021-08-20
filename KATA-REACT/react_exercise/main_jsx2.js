// recuperar el elemento creado en el .html
const root = document.getElementById("div-root");

// JS = HTML
const divElement = <div> Este es el div 10 </div>
const divElement2 = <div> Este es el div 2 </div>

const fragmentElement = (
  <React.Fragment>
    {divElement}
    {divElement2}
  </React.Fragment>
)


ReactDOM.render(fragmentElement, root)