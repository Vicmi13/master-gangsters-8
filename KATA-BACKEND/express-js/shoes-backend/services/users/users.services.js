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

    create(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const users = [ ...this.users];
                users.push(user);
                this.users = [ ...users ];
                resolve('new user created!');
            }, 2000);
        })
    }

    edit(id, changes) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {  
                const userIndex = this.users.findIndex(ele => ele.id === parseInt(id));
                let user = this.users[userIndex];
                if(user) {
                    // { id: 1, name: 'jose', app: 'montoya' }
                    // { name: 'Pepe', apm: 'guzman' }
                    // { id: 1, name: 'Pepe', app: 'montoya', apm: 'guzman' }
                    user = { ...user, ...changes };
                    this.users[userIndex] = user;
                    resolve('edited OK!');
                } else {
                    reject(boom.notFound('No se encontro tu informacion'));
                }
            }, 2000);
        })
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const userIndex = this.users.findIndex(ele => ele.id === parseInt(id));
                const user = this.users[userIndex];
                if(user) {
                    const auxUsers = [ ...this.users ];
                    auxUsers.splice(userIndex, 1);
                    this.users = [ ... auxUsers ];
                    resolve('deleted OK!');
                } else {
                    reject(boom.notFound('No se encontro tu informacion'));
                }
            }, 2000);
        })
    }

    getData(){
        return this.users;
    }

}

module.exports = UsersServices;