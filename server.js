const express = require('express')
const path = require('path')
require('./db/connect')
require('dotenv').config()
const app = express()
const connectDB = require('./db/connect')
const tasks = require('./routes/tasks')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

app.get('/express_backend', (req, res)=>{
    res.send({express: 'backend is connected'})
})

app.use(express.json())
app.use('/api/v1/tasks', tasks)
app.use(express.static(
    path.join(__dirname,'../client/build')));

app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(app.listen(port, console.log(`server listening on port ${port}...`)))
    } catch (error) {
        console.log(error)
    }
}

start()