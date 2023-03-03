const Book = require("../models/books");
const fs = require('fs');

module.exports = class API {
  static async fetchAllbook(req, res) {
    // res.send("Hello from API")

    try {
      const books = await Book.find();
      res.status(200).json(books);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  static async fetchbookByID(req, res) {
    // res.send("Hello from fetchbookByID")
    const id = req.params.id;

    try {
      const books = await Book.findById(id);
      res.status(200).json(books);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  static async createbook(req, res) {
    // res.send("Hello from createbook")

    const book = req.body;
    // const imagename = req.file.filename;
    // book.image = imagename;

    try {
      await Book.create(book);
      res.status(201).json({ message: "book added successfully!" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  static async updatebook(req, res) {
    // res.send("Hello from updatebook");

    const id = req.params.id;
    let new_image = "";

    if(req.file) {
        new_image = req.file.filename;
        try {
        fs.unlinkSync("./uploads/" + req.body.old_image);
        } catch (error) {
            console.log(error);
        }
    }else {
        new_image = req.body.old_image;
    }
    
    const newbook = req.body;
    newbook.image = new_image;

    try {
        await Book.findByIdAndUpdate(id, newbook);
        res.status(200).json({message: "book updated successfully!"})
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

  }
  static async deletebook(req, res) {
    // res.send("Hello from deletebook");

    const id = req.params.id;

    try {
       const result = await Book.findByIdAndDelete(id);
       if(result.image != "")
       {
        try {
            fs.unlinkSync('./uploads/'+result.image)
        } catch (error) {
            console.log(error);
        }
       }
       res.status(200).json({message: 'book deleted successfully!'})
    } catch (error) {

        res.status(404).json({ message: error.message });
    }
  }

};
