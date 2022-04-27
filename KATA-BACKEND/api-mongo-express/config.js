const { NODE_ENV, ATLAS_USER, ATLAS_PASSWORD } = process.env;

const databases = {
  dev: {
    // mongodb://localhost:27017
    mongo_uri: "mongodb+srv://27017:mi_base_local",
  },
  stage: {  
             // mongodb+srv://vicman:<password>@cluster0.jq3nd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
    mongo_uri: `mongodb+srv://${ATLAS_USER}:${ATLAS_PASSWORD}@cluster0.jq3nd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  },
  prod: {
    mongo_uri: `mongodb+srv://${ATLAS_USER}:${ATLAS_PASSWORD}@cluster0.xjjjt.mongodb.net/api-g8-v1?retryWrites=true&w=majority`,
  },
};

//NODE_ENV = stage
module.exports = databases[NODE_ENV]; // ES LO MISMO databases.stage
