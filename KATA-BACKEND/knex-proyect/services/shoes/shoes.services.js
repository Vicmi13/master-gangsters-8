/*

*/
const boom = require('@hapi/boom');

class ShoesService {
    constructor() {
        this.shoes = [];
        this.createData();
    }

    createData() {
        this.shoes = [
            { id: 1, marca: 'noke', price: 200, color: 'red', isDeleted: false },
            { id: 2, marca: 'edidas', price: 100, color: 'white', isDeleted: true },
            { id: 3, marca: 'glexi', price: 300, color: 'black', isDeleted: true },
            { id: 4, marca: 'juuma', price: 111, color: 'black', isDeleted: true },
            { id: 5, marca: 'pamu', price: 111, color: 'black', isDeleted: true },
            { id: 6, marca: 'pamu 2', price: 111, color: 'black', isDeleted: true },
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
            throw boom.notFound('ese elemento no se pudo encontrar');
        }
    }

    delete(id) {
        // 1. not found
        // 2. forbiden
        // 3. ok => si se elimina
        const index = this.shoes.findIndex(shoe => shoe.id === parseInt(id));
        if(index !== -1) {
            if(!this.shoes[index].isDeleted) {  
                throw boom.conflict('Hubo un conflicto');
            }
            this.shoes.splice(index, 1);
        } else {
            throw boom.notFound('id not found!');
        }
        return id;
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