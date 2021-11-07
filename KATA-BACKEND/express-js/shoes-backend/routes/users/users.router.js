const express = require('express');
const usersRouter = express.Router();
const UsersServices = require('../../services/users/users.services')

const userService = new UsersServices();

usersRouter.get('/', async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const msj = await userService.auth(email, password);
        res.json({ message: msj });
    } catch(error) {
        next(error);
   }

});

module.exports = usersRouter;