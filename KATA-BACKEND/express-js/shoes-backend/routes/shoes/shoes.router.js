const express = require('express');
const router = express.Router();
const ShoesServices = require('../../services/shoes/shoes.services')

const serviceShoeObject = new ShoesServices();

/* QUERY PARAMS */
/* FILTRAR UN SET DE DATOS */
/* http://localhost:8080/shoes?limit=10&page=1 */
router.get('/', (req, res) => {
    const { limit, page } = req.query;
    const shoes = serviceShoeObject.find();
    const response = {
        data: shoes,
        page,
        limit
    }
    res.json(response);
});

/* REQUEST PARAM */
/* SELECCIONAR ALGO EN ESPECIFICO */
/* http://localhost:8080/1 */

router.get('/:id', (req, res) => {
    const { id } = req.params;
    console.log('entrando', id)
    const shoe = serviceShoeObject.findOne(id);
    res.json(shoe);
    // res.status(404).json(error);
});

router.post('/', (req, res) => {
    const body = req.body;
    const createdShoe = serviceShoeObject.create(body);
    const response = { message: 'created!', createdShoe };
    res.status(201).json(response);
});

// http://localhost:8080/shoes/3
// DELETE
/*
router.delete('/shoes/:id', (req, res) => {
    const { id } = req.params;
    const index = shoes.findIndex(shoe => shoe.id === parseInt(id));
    let message = '';
    if(index !== -1) {
        shoes.splice(index, 1);
        message = 'deleted';
    } else {
        message = 'error'
    }
    const response = { message, id }
    res.json(response);
});

// PARTIAL EDITION
router.patch('/shoes/:id', (req, res) => {
    const body = req.body;
    const { id } = req.params;
    //
    const index = shoes.findIndex(shoe => shoe.id === parseInt(id));
    let message = '';
    if(index !== -1) {
        const shoeCopy = shoes[index];
        shoes[index] = { ...shoeCopy, ...body };
        message = 'edited ok!';
    } else {
        message = 'error'
    }
    const response = { message, body }
    res.json(response);

});

// COMPLETE EDITION
router.put('/shoes/:id', (req, res) => {
    const body = req.body;
    const { id } = req.params;
    //
    const index = shoes.findIndex(shoe => shoe.id === parseInt(id));
    let message = '';
    if(index !== -1) {
        const shoeCopy = shoes[index];
        shoes[index] = { ...shoeCopy, ...body };
        message = 'edited ok!';
    } else {
        message = 'error'
    }
    const response = { message, body }
    res.json(response);
});
*/

module.exports = router;