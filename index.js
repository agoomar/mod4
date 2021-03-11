require('dotenv').config()
const express = require('express')
// const path = require('path')

const server = express()
server.use(express.json())

if (process.env.NODE_ENV === 'development') { 
    const cors = require('cors')
    server.use(cors())
}

server.get('/api/hello', (req, res) => {
    res.json({ message: 'Testing' })
})

const PORT = process.env.PORT || 4000

server.listen(PORT, () => {
    console.log (`Listening on http://localhost:${PORT}`)
})
