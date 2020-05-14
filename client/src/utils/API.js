import axios from "axios";
// import {baseurl, apikey} from "../keys"
// const baseurl = "https://www.googleapis.com/books/v1/volumes?q=";
// const apikey = "&key=AIzaSyC2oiIbEanxSDxPaqNmUvgrVUV9b4SOQY8";

export default {
    //Searched for books based on user's search query
  searchBooks: function(query) {
    let url = "https://www.googleapis.com/books/v1/volumes?q=" + query + "&key=" + process.env.API_KEY
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
