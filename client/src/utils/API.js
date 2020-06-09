import axios from "axios";
require('dotenv').config();

export default {
    //Searched for books based on user's search query
  searchBooks: function(search) {
    console.log("utils api")
    return axios.get("/api/books", {
      params: {search: search}
    });
  },
  //Removes selected book from saved list based on id
  deleteBook: function(id) {
      return axios.delete("/api/books/" + id);
  },
  //Saves selected book from search to database
  saveBook: function(bookData) {
    console.log("in API save")
      return axios.post("/api/books", bookData);
  }, 
  savedBooks: function() {
    return axios.get("/api/books")
  }
};
