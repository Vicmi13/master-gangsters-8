class Media {
    constructor(nombre) {
        this.nombe = nombre;
    }
    imprime() {
        console.log('se imprime en la impresora');
    }
    show() {

    }
}

class Pdf extends Media {
    imprime() {
        console.log('se imprime en el navegador');
    }
    convert(){
        
    }

}

class Word extends Media {
    convert(){
        
    }
}

class Svg extends Media {
    
}


