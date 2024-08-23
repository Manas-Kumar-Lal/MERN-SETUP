const mongoose = require('mongoose');

(async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI)
        console.log("Mongo connection successfull!!...on host : " + connectionInstance.connection.host)
    } catch (error) {
        console.error("db :: connection :: error : " + error)
    }
})();