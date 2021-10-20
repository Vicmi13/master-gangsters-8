var FactoryFiguras = function() {
// function FactoryFiguras() {
    this.createFigura = function(type) {
        let newFigura = null;
        // validar que tipo de figura me pidieron, instanciarla y devolverla
        if(type === 'cuadrado') {
            newFigura = new Cuadrado();
        } else if (type === 'rectangulo') {
            newFigura = new Rectangulo();
        } else if (type === 'triangulo') {
            newFigura = new Triangulo();
        }
        return newFigura;
    }
}

function Rectangulo() {
    this.name = 'soy un rectangulo';
}

function Cuadrado() {
    this.name = 'soy un cuadrado';
}

function Triangulo() {
    this.name = 'soy un triangulo';
}

function run() {
    console.log('ejecutando run...')
    var factory = new FactoryFiguras();
    const c = factory.createFigura('cuadrado');
    const r = factory.createFigura('rectangulo');
    const t = factory.createFigura('triangulo');
    console.log('c => ', c.name);
    console.log('r => ', r.name);
    console.log('t => ', t.name);
}

run();
