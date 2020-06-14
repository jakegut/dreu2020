const mongoose = require('mongoose');

const db_url = process.env.DB_URL || "mongodb://mongo:27017/dreu_db"

const connectWithRetry = () => {
    console.log("DB connection with retry");
    return mongoose.connect(db_url, { useNewUrlParser: true});
}

mongoose.connection.on('error', err => {
    console.log(`Mongoose connection error: ${err}`);
    setTimeout(connectWithRetry, 1000);
});

mongoose.connection.on('connected', () => {
    console.log("MongoDB connected!");
});

if(process.env.NODE_DEV === true){
    mongoose.set('debug', true);
}

const connect = () => {
    connectWithRetry();
}

module.exports = {
    connect: connect
}


