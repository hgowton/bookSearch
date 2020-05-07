import axios from "axios";
import {baseurl, apikey} from "../../../keys.js"
// const baseurl = "https://www.googleapis.com/books/v1/volumes?q=";
// const apikey = "&key=AIzaSyC2oiIbEanxSDxPaqNmUvgrVUV9b4SOQY8";

export default {
    //Searched for books based on user's search query
  searchBooks: function(query) {
    let url = baseurl + query + apikey
    console.log("Search URL : " + url)
    return axios.get(url);
  },
  //Removes selected book from saved list based on id
  deleteBook: function(id) {
      return axios.delete("/api" + id);
  },
  //Saves selected book from search to database
  saveBook: function(bookData) {
      return axios.post("/api", 
      {
        "id": bookDate.id,
        "title": bookData.title,
        "authors": bookData.authors,
        "image": bookData.image,
        "description": bookData.description,
        "link": bookData.link
      });
  }, 
  savedBook: function() {
    return axios.get("/api")
  }
};
