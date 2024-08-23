const serverless = require("serverless-http");
require('./config/dotenv.js')
require('./databases/dbConnection1.js')
const app = require('./app.js')

const PORT = process.env.PORT || 4000;

app.use('/', (req, res) => {
    res.send("Your server loaded successfully!");
})

app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`)
})

module.exports.handler = serverless(app);