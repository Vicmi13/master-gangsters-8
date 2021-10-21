function Click(){
    this.handlers = [];
}

Click.prototype = {
    subscribe: function (fn) {
        this.handlers.push(fn);
    },

    unsubscribe: function (fn) {
        this.handlers = this.handlers.filter(
            function (item) {
                if (item !== fn) {
                    return item;
                }
            }
        );
    },

    // 2 en fire se recibe el mensaje y una referencia para
    // ejecurat funciones
    fire: function (message, thisObj) {
        // 3 sino se recibe la referencia se usa window(objeto global del navegador)
        var scope = thisObj || window; 
        // 4 Iteramos el this.handlers existentente
        this.handlers.forEach((item) => {
            // 5 llamamos a la funcion aux que lanza el mensaje
            item.call(scope, message);
            // NOTA: No podemos ejectutar la funcion asi por el alcance
            // item();
            // NOTA: 
        });
    }
}

function run() {

    var aux = function (message) {
        console.log("fired: " + message);
    };

    var click = new Click();

    click.subscribe(aux);
    // 1 llamar a fire
    click.fire('lanza primer evento');

    click.unsubscribe(aux);
    click.fire('event #2');

    click.subscribe(aux);
    click.fire('event #3');
}

run();