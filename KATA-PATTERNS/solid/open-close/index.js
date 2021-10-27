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
    // sobre escritura de imprimir
    imprime() {
        console.log('se imprime en el navegador');
    }
    convert(){
        
    }

}

class Word extends Media {
    // aqui no se sobreescribe
    convert(){
        
    }
}

class Svg extends Media {
    
}

const obj = new Word();
obj.imprime();


