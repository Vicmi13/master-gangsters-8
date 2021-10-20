function Guante() {
    this.name = 'soy el guantele y no hay otro como yo!!';
}

var GuanteleteSingleton = (function() {
    function createGuante() {
        if(!guante) {
            return new Guante();
        }
    }
})();

var guante = GuanteleteSingleton.createGuante();
var guante2 = GuanteleteSingleton.createGuante();

console.log('guante => ', guante);
console.log('comparando =>', guante === guante2);