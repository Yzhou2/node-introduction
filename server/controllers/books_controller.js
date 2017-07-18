let books = [];
let id = 0;

module.exports = {
  create: (req, res) => {
    books.push({
      title: req.body.title,
      author: req.body.author,
      id: id++
    })
    res.send(books);
  },

  read: (req, res) => {
      res.send(books);
  },
  update:(req,res) => {
    let id = req.params.id * 1;
    let bookToUpdate = books.find((e)=>{
      return e.id === id;
    })
    if(!bookToUpdate) {
      res.status(404).send(books);
    }

    bookToUpdate.title = req.body.title;
    bookToUpdate.title = req.body.author;
    res.send(books);
  },
  delete: (req, res) => {
    let id = req.params.id * 1;
    books = books.filter((e)=>{
      return e.id !== id
    });
    res.send(books)
  }
}
