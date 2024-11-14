// import { createServer } from 'http'

// const server = createServer( (req, res) => {
//     res.writeHead(200,  {'Content-type': 'text/plain'});
//     res.end('Hello, World! Hello, Youniverses!');
// })

// const PORT = 3000;

// server.listen(PORT, () => {
//     console.log(`Server running at http://localhost: ${PORT}`)
// })

/*
jenavista
QRIFjTfHaqnC9j6b
mongodb+srv://jenavista:QRIFjTfHaqnC9j6b@cluster0.yrxv3.mongodb.net/
*/

import express from 'express' 
import cors from 'cors'
import logRequest from './middleware/loginMiddleware.js';
import userRouter from './routes/userRouter.js';
import connectDB  from './connectDatabase.js'

const app = express()
const PORT = 3000;

await connectDB()
app.set('port', PORT)
app.use(logRequest)
app.use(express.json())
app.use(cors())

app.use('/api/v1/users', userRouter)
// app.use('/api/profile', profileRouter)

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello from the server side'})
})

app.listen(PORT, () => {
    console.log(`App is listening to port ${PORT}`)
})