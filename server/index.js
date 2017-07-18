const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bc = require('./controllers/books_controller');

app.use(bodyParser.json());
app.user(express.static(__dirname + '/../public/build'));

app.get('/api/books',bc.read)
app.post('/api/books',bc.create)
app.put('/api/books/:id',bc.update)
app.delete('/api/books/:id',bc.delete)

app.listen(3000, ()=>{
  console.log('Listening on port 3000');
})
