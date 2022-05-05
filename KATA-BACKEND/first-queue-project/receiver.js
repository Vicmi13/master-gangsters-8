
/**
 * 1- Create connection
 * 2- Create channel
 * 3- Assser queue
 * 4- Receive message
 * 
 * 
 * Receiver also known as consumer
 *
 */

 const amqp = require("amqplib/callback_api")

 // step 1 create connection

 amqp.connect("amqp://localhost", (errorConnection, connection) => {
     if (errorConnection) {
          throw errorConnection
     }
 
     //step 2 create channel
     connection.createChannel( (errorChannel, channel) => {
         if (errorChannel) throw errorChannel
 
         //step 3 assert queue
         const QUEUE_NAME = 'generacion8'
         channel.assertQueue(QUEUE_NAME)
 
        //step 4 Receive messages
        channel.consume(QUEUE_NAME, (msg) => {
            console.log('message received', msg.content.toString())
        })
 
 
     })
 })