const mongoose = require('mongoose');
require('dotenv').config();

async function connect(){
    await mongoose.connect(process.env.MONGODB_LOGIN, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoReconnect: true,
        autoCreate: true,
    },
        (err) => {
            if (err){
                throw err;
            }
            else {
                console.log('connected to mongodb');
            }
        }  
    )
}

module.exports = connect;