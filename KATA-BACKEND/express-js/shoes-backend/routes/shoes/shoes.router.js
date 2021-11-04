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

router.get('/:id', (req, res, next) => {
    const { id } = req.params;
    // 3 CAMBIAMOS EL MANEJO DEL ERROR PARA USAR TRY/CATCH Y SI
    // SE PRESENTABA EL ERROR OBTENER EL THROW NEW ERROR DEL SERVICE
    try {
        const shoe = serviceShoeObject.findOne(id);
        res.json(shoe);
    } catch (error) {
        // 4 USAR EL MIDDLEWARE DE ERRORES, PARA QUE GESTIONE ESE ERROR QUE QUEREMOS DEVOLVER
        next(error);
    }
});

router.post('/', async (req, res) => {
    const body = req.body;
    const createdShoe = await serviceShoeObject.create(body);
    const response = { message: 'created!', createdShoe };
    res.status(201).json(response);
});

// http://localhost:8080/shoes/3
// DELETE
router.delete('/:id', (req, res, next) => {
    const { id } = req.params;
    try {
        const deleteId = serviceShoeObject.delete(id);
        const response = { id: deleteId };
        res.json(response);
    } catch(error) {
        next(error);
;    }
});

// PARTIAL EDITION
router.patch('/:id', (req, res) => {
    const body = req.body;
    const { id } = req.params;
    const message = serviceShoeObject.editPartial(id, body);
    const response = { message, body }
    res.json(response);
});

// COMPLETE EDITION
router.put('/:id', (req, res) => {
    const body = req.body;
    const { id } = req.params;
    const message = serviceShoeObject.editFull(id, body);
    const response = { message, body }
    res.json(response);
});

module.exports = router;