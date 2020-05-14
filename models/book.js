const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    id: {type: String, required: true, unique: true},
    title: {type: String, required: true},
    authors: { type: String, required: true},
    image: String, 
    synopsis: String, 
    link: String
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;