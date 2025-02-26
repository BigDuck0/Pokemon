const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParse = require('body-parser')
const connectDB = require('./Config/db')
const { readdirSync} = require('fs');
const app = express();


connectDB()
app.use(morgan('dev'))
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(bodyParse.json({ limit: '10mb'}))

app.use('/api/user', require('./Routes/user'));
readdirSync('./Routes').map((r) => app.use('/api', require('./Routes/' + r)))

app.listen(5000,()=> console.log("Server Running on port 5000"))