exports.getEditBookById = (req, res) => {
    const id = req.params.id;
    Book.findById(id)
      .then(([row]) => {
        console.log(row);
        res.render("edit", { model: row[0] });
      })
      .catch((err) => console.error(err.message));
  };
  
  exports.postEditBookById = (req, res) => {
    const id = req.params.id;
    const { Title, Author, Comments } = req.body;
  
    const dataToUpdate = { id, Title, Author, Comments };
  
    Book.updateOne(dataToUpdate).then(() => {
      res.redirect("/books/all")
    }).catch((err) => console.error(err.message));
  };
  
  exports.deleteBook = (req, res) => {
    const id = req.params.id;
  
    Book.deleteOne(id).then(() => {
      res.redirect("/index/all")
    }).catch((err) => console.error(err.message));
  };