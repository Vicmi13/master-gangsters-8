var GuanteleteSingleton = (function() {
    
    var instance;

    function createGuante() {
        var guante = new Object('yo soy un guante');
        return guante;
    }

    return {
        getGuante: function() {
            if(!guante) {
                instance = createGuante();
            }
            return instance;
        }
    }

})();

var guante = GuanteleteSingleton.getGuante();
var guante2 = GuanteleteSingleton.getGuante();

console.log('guante => ', guante);
console.log('comparando =>', guante === guante2);
