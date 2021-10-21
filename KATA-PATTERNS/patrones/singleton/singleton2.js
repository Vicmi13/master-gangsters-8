function Guante() {
    this.name = 'soy el guantele y no hay otro como yo!!'
}

var GuanteleteSingleton = function() {
    this.createGuante = function createGuante() {
        if(!guante) {
            return new Guante();
        }
        return guante;
    }
};

var instanciador = new GuanteleteSingleton();
var guante = instanciador.createGuante();
var guante2 = instanciador.createGuante();

console.log('guante => ', guante);
console.log('guante2 => ', guante2);
console.log('comparando =>', guante === guante2);