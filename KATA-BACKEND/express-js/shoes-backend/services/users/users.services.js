const boom = require('@hapi/boom');

class UsersServices {
    
    constructor() {
        this.users = [];
        this.createData();
    }


    createData() {
        this.users = [
            { id: 1, name: 'josem', email: 'montoya@gmail.com', password: '1234' },
            { id: 2, name: 'victort', email: 'vic@gmail.com', password: '5678' }
        ];
    }

    auth(email, password) {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const user = this.users.find(ele => ele.email === email);
                if(user) {
                    if(user.email === email && user.password === password) {
                        resolve('auth exitoso!');
                    } else {
                        reject(boom.conflict('Usuario y contraseña no coinciden'));
                    }
                } else {
                    reject(boom.badRequest('Favor de crearse una cuenta'));
                    
                }
            }, 2000);
        })
    }

    create() {

    }

    edit() {

    }

    delete() {

    }

}

module.exports = UsersServices;