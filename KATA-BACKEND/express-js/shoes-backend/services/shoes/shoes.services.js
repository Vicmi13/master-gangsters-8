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
        this.shoes.push(shoe);
        return shoe;
    }

    find() {
        const allShoes = this.shoes;
        return allShoes;
    }
      
    findOne(id) {
        const shoe = this.shoes.find(shoe => shoe.id === parseInt(id));
        if(shoe) {
            return shoe;
        }
        // const error = { message: 'elmento no encontrado' };
    }

    
    delete(id) {
        console.log('entrada', id, typeof id)
        const index = this.shoes.findIndex(shoe => shoe.id === parseInt(id));
        console.log('index', index)
        let message = '';
        if(index !== -1) {
            this.shoes.splice(index, 1);
            message = 'deleted';
        } else {
            message = 'error'
        }
        return message;
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