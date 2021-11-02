const express = require('express');

const shoesRoutes = require('./shoes/shoes.router');
// const usersRoutes = require('./users/users.router');
// const newRoutes = require('./news/new.router');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/shoes', shoesRoutes);
    // router.use('/users', usersRoutes);
    // app.use('/news', newsRoutes);
}

module.exports = routerApi;