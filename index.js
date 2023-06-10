const express = require('express')
const { myServer } = require('./configs/db')
const { userRoutes } = require('./routes/User.routes')
const { emiRoutes } = require('./routes/Emi.routes')
const cors = require('cors');
require('dotenv').config()

const app = express()
const PORT = process.env.PORT
app.use(cors())

app.use(express.json())

app.use('/users', userRoutes)
app.use('/emi', emiRoutes)




app.listen(PORT, async()=> {

try {
    await myServer
    console.log('Connected to db')
} catch (error) {
    console.log(error)
}

    console.log(`server started at` +' '+PORT);
})