
/**
 * 1- Create connection
 * 2- Create channel
 * 3- Assser queue
 * 4- Send message to queue
 * 
 * 
 * Consumer also known as producer
 *
 */

const amqp = require("amqplib/callback_api")

// step 1 create connection
amqp.connect("amqp://localhost", (errorConnection, connection) => {
    if (errorConnection) {
         throw errorConnection
        // const obj = { name: 'falla'}
        // const objError = { mmsg: 'Algo anda mal'}    
        // if (obj.name === 'falla') throw objError
    }

    //step 2 create channel
    connection.createChannel( (errorChannel, channel) => {
        if (errorChannel) throw errorChannel

        //step 3 assert queue
        const QUEUE_NAME = 'generacion8'
        channel.assertQueue(QUEUE_NAME)

        //step 4 Send message to queue

        channel.sendToQueue(QUEUE_NAME, Buffer.from('hola mundo desde mi primer cola') )

        console.log(`message send to queue ${QUEUE_NAME} 📝`)


    })
})