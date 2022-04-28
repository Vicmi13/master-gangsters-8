const { NODE_ENV, ATLAS_USER, ATLAS_PASSWORD } = process.env;

const databases = {
  dev: {  
    // "mongodb://mongodb:27017/TodoApp",
    mongo_uri: "mongodb://mongo:27017/docker-node-mongo",
  },
  stage: {  
    mongo_uri: `mongodb+srv://${ATLAS_USER}:${ATLAS_PASSWORD}@cluster0.tfhsi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  },
  prod: {
    mongo_uri: `mongodb+srv://${ATLAS_USER}:${ATLAS_PASSWORD}@cluster0.xjjjt.mongodb.net/api-g8-v1?retryWrites=true&w=majority`,
  },
};

//NODE_ENV = stage
module.exports = databases[NODE_ENV]; // ES LO MISMO databases.stage
