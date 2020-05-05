const mongoos = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {type: String, required: true},
    author: { type: String,
    required: true},
    bookImage: String, 
    synothsis: String, 
    date: {type: Date, default: Date.now}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;