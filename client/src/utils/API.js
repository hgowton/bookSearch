import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=AIzaSyC2oiIbEanxSDxPaqNmUvgrVUV9b4SOQY8";

export default {
    //Gets all books
  searchBooks: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  },
  //Gets selected book based on id
  getBook: function(id) {
      return axios.get("/api/books/" + id);
  },
  //Deletes selected book based on id
  deleteBook: function(id) {
      return axios.delete("/api/books/" + id);
  },
  //Saves selected book from search to database
  saveBook: function(bookData) {
      return axios.post("/api/books" + bookData);
  }
};
