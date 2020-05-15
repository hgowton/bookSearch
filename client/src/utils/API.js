import axios from "axios";
require('dotenv').config();

export default {
    //Searched for books based on user's search query
  searchBooks: function(query) {
    let url = "https://www.googleapis.com/books/v1/volumes?q=" + query + "&key=" + process.env.REACT_APP_API_KEY
    console.log("Search URL : " + url)
    return axios.get(url);
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
