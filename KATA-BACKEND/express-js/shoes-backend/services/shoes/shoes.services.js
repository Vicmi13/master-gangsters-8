/*

*/

class ShoesService {
    constructor() {
        this.shoes = [];
        this.createData();
    }

    createData() {
        this.shoes = [
            { id: 1, marca: 'noke', price: 200, color: 'red' },
            { id: 2, marca: 'edidas', price: 100, color: 'white' },
            { id: 3, marca: 'glexi', price: 300, color: 'black' },
        ];
    }

    create(shoe) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.shoes.push(shoe);
                resolve(shoe);
            }, 5000);
        })
    }

    find() {
        const allShoes = this.shoes;
        return allShoes;
    }
      
    findOne(id) {
        const shoe = this.shoes.find(shoe => shoe.id === parseInt(id));
        if(shoe) {
            return shoe;
        // 1 SELECCIONAR A QUIEN HACERLE UN MIDDLEWARE
        // 2 AGREGAMOS UN THROW ERROR, PARA QUE PUEDA LANZAR UNA EXCEPCIO
        } else {
            throw new Error('ese elemento no se pudo encontrar');
        }
    }

    delete(id) {
        const index = this.shoes.findIndex(shoe => shoe.id === parseInt(id));
        if(index !== -1) {
            if(id == 1) {
                throw new Error('ese elemento no se puede eliminar');
            }
            this.shoes.splice(index, 1);
        } else {
            status = 404;
            throw new Error('id not found!');
        }
        return { id };
    }

    
    editPartial(id, body) {
        const index = this.shoes.findIndex(shoe => shoe.id === parseInt(id));
        let message = '';
        if(index !== -1) {
            const shoeCopy = this.shoes[index];
            this.shoes[index] = { ...shoeCopy, ...body };
            message = 'edited ok!';
        } else {
            message = 'error'
        }
        return message;
    }

    editFull(id, body) {
        const index = this.shoes.findIndex(shoe => shoe.id === parseInt(id));
        let message = '';
        if(index !== -1) {
            const shoeCopy = this.shoes[index];
            this.shoes[index] = { ...shoeCopy, ...body };
            message = 'edited ok!';
        } else {
            message = 'error'
        }
        return message;
    }

}

module.exports = ShoesService;