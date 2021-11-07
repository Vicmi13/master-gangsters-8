const express = require('express');
const usersRouter = express.Router();
const UsersServices = require('../../services/users/users.services')

const userService = new UsersServices();

// get de prueba :  consulta todos los usuarios
usersRouter.get('/', (req, res) => {
    const response = userService.getData();
    res.json(response);
});

// auth
usersRouter.get('/', async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const msj = await userService.auth(email, password);
        res.json({ message: msj });
    } catch(error) {
        next(error);
   }
});

// sign on
usersRouter.post('/', async (req, res, next) => {
    const user = req.body;    
    try {
        const msj = await userService.create(user);
        res.json({ message: msj });
    } catch(error) {
        next(error);
   }
});

// edit
usersRouter.patch('/:id', async (req, res, next) => {
    const { id } = req.params;
    const user = req.body;
    try {
        const msj = await userService.edit(id, user);
        res.json({ message: msj });
    } catch(error) {
        next(error);
   }
});

// delete
usersRouter.delete('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        const msj = await userService.delete(id);
        res.json({ message: msj });
    } catch(error) {
        next(error);
   }
});




module.exports = usersRouter;