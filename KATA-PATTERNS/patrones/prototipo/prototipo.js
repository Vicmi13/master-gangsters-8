// 4 Abstrar ena funcion proto la instanciacion de Rectangulo
function RectanguloProto(proto) {
    this.proto = proto;
    this.clone = function() {
        var rectangulo = new Rectangulo();
        rectangulo.largo = proto.largo;
        rectangulo.alto = proto.alto;
        return rectangulo;
    }
}

// 2 Tener una funciona que cree rectangulos con valores
function Rectangulo(largo, alto) {
    this.largo = largo;
    this.alto = alto;
    this.imprime = function() {
        console.log(`Rectangulo : largo: ${this.largo} alto:${this.alto}`);
    }
};

function run() {
    console.log("ejecutando prototipos...");
    // 1 Crear un rectanglo con dimensiones
    var rectanguloProto = new Rectangulo(0, 0);
    // 3 Que pasa si conozoco las dimensiones al instanciar mi rectangulo??
    // 5 Creamos un nuevo rectangulo de clase RectanguloProto pasandole un objeto de Rectangulo
    var rectangulo_vacio = new RectanguloProto(rectanguloProto);
    // 6 Llamamos al metodo clone de RectanguloProto para instancias
    var rectangulo_copia = rectangulo_vacio.clone();
    // 7 Validar que el rectangulo de copia se cree igual al rectangulo base
    rectangulo_copia.imprime();
}

run();