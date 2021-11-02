const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

let shoes = [
    { id: 1, marca: 'noke', price: 200, color: 'red' },
    { id: 2, marca: 'edidas', price: 100, color: 'white' },
    { id: 3, marca: 'glexi', price: 300, color: 'black' },
];

app.get('/', (req, res) => {
    res.send('Hello World!');
})

/* QUERY PARAMS */
/* FILTRAR UN SET DE DATOS */
/* http://localhost:8080/shoes?limit=10&page=1 */
app.get('/shoes', (req, res) => {
    const { limit, page } = req.query;
    const allShoes = shoes;
    const response = {
        data: allShoes,
        page,
        limit
    }
    res.json(response);
});

/* REQUEST PARAM */
/* SELECCIONAR ALGO EN ESPECIFICO */
/* http://localhost:8080/1 */
app.get('/shoes/:id', (req, res) => {
    const { id } = req.params;
    const shoe = shoes.find(shoe => shoe.id === parseInt(id));
    if(shoe) {
        res.json(shoe);
    }
    const error = { message: 'elmento no encontrado' };
    res.status(404).json(error);
});

app.post('/shoes', (req, res) => {
    const body = req.body;
    console.log('body', body);
    shoes.push(body);
    const response = { message: 'created!', body };
    res.status(201).json(response);
});

// http://localhost:8080/shoes/3
// DELETE

app.delete('/shoes/:id', (req, res) => {
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

app.patch('/shoes', (req, res) => {

});

app.put('/shoes', (req, res) => {

});

app.listen(port, () => {
    console.log(`SERVIDOR OK en puerto: ${port}`)
})