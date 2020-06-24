# bookSearch
A MERN App, where users can search the Google Books API to find and save books to a reading list.  

Develop a reading list based on the Google Books API by searching, saving, and deleting books of interest.

Active Link: https://google-booksearch-react.herokuapp.com/

## Tech Used
* MongoDB
* Express
* React.js
   * Styled-Components
* Node.js
   * axios
   * .env
   * mongoose
   * react-dom
   * react-scripts
   * react-router-dom
* HTML
* CSS
* Bootstrap
* JavaScript

## Directions
1. Access the **Google Books List Homepage**: https://google-booksearch-react.herokuapp.com/
1. Use the input field to search for a book based on author name, subject, or title. 
1. Click on the search button to reveal 10 book matches.  Each match will include book title, author(s), synopsis, book jacket thumbnail.  Plus user can click on:
   1. View Book: to access Google Book's API page for the book of interest
   1. Save Book: adds book to reading list by saving information for book of interest to MongoDB
1. Access your Reading List by clicking on Saved Books in Nav Bar.
1. Your Reading List will display the same information as on the Search page.  
1. Click on Delete Book, once you have finished reading a book to remove it from your Reading List.
