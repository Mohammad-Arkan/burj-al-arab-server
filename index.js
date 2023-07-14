const express = require('express');
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

const books = require('./data/books.json')
app.use(cors());
app.get('/', (req, res) => {
    res.send('Burj is running')
})
app.get('/books', (req, res)=> {
    res.send(books)
})

app.listen(port, ()=> {
    console.log(`Burj API is running on port:${port}`)
})