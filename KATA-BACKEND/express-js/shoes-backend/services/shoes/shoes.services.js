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

    /*
    delete(id) {

    }

    editPartial(id) {

    }

    editFull(id) {

    }
    */

}

module.exports = ShoesService;