class Rectangulo {
    
    constructor(largo, alto) {
        this.largo = largo;
        this.alto = alto;
    }
    
    imprime() {
        console.log(`Rectangulo : largo: ${this.largo} alto:${this.alto}`);
    }
};

class RectanguloProto {
    
    constructor(proto) {
        this.proto = proto;
    }
    
    clone() {
        var rectangulo = new Rectangulo();
        rectangulo.largo = this.proto.largo;
        rectangulo.alto = this.proto.alto;
        return rectangulo;
    }
}

function run() {
    
    var a = window.prompt('Dimension A');
    var b = window.prompt('Dimension B');

    console.log("ejecutando prototipos...");
    var rectanguloProto = new Rectangulo(a, b);
    var rectangulo_vacio = new RectanguloProto(rectanguloProto);
    var rectangulo_copia = rectangulo_vacio.clone();
    rectangulo_copia.imprime();
}

run();