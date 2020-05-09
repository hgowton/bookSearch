import React, { Component } from "react";
import { ViewBtn, SaveBtn } from "../components/Buttons";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import Nav from "../components/Nav";
import { Col, Row, Container } from "../components/Grid";
import {List, ListItem} from "../components/List";
import {Input, FormBtn} from "../components/Form";

class Search extends Component {
    state={
        books: [],
        search: ""
    };

    componentDidMount() {
        this.searchBooks("Hunger Games");
    };

    searchBooks = query => {
        API.searchBooks(query)
        .then(res => {
            const booksArray = []
            for (var i=0; i < res.data.items.length; i++) {
                booksArray.push(
                    {id: res.data.items[i].id,
                        title: res.data.items[i].volumeInfo.title,
                        authors: res.data.items[i].volumeInfo.authors,
                        image: res.data.items[i].volumeInfo.imageLinks.thumbnail,
                        synopsis: res.data.items[i].volumeInfo.description,
                        link: res.data.items[i].volumeInfo.infoLink
                    })
                }
                this.setState({ books: booksArray, search : ""});
                console.log(this.state.books)
            })
        .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBooks(this.state.search);
    };

    saveBook = (book) => {
        // console.log("Search component saveBook")
        API.saveBook(book)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    render() {
        return (<div>

            <Nav />
            <Jumbotron>
                <h1>Google Books Search</h1>
                <h3>Search for and save books of interest...</h3>
            </Jumbotron>
            <Container fluid>
                <Row>
                    <Col size="md-12">
                    <form>
                        <Input 
                        value={this.state.search}
                        handleInputChange={this.handleInputChange}
                        name="search"
                        placeholder="Search for a book by author, subject, or title (Required)" 
                        />
                        <FormBtn 
                        disabled={!(this.state.search)}
                        onClick={this.handleFormSubmit} 
                        />
                    </form>
                    </Col> 
                </Row>
            </Container>
            <Container fluid>
                <Row>
                <Col size="md-12">
                    {this.state.books.length > 0 ? 
                    <div>
                        <h3>Results</h3>
                        <List>
                            {this.state.books.map(book => 

                                <ListItem key={book.id}>
                                <Row>
                                    <Col size="md-8">
                                        <p className="book-title">{book.title}</p>
                                        <p className="author">Author(s): {book.authors}</p>
                                    </Col>
                                    <Col size="md-4">
                                        <ViewBtn href={book.link} />
                                        <SaveBtn onClick={() => this.saveBook(book)} />
                                    </Col>
                                </Row>

                                <Row>
                                    <Col size="md-3 book-image">
                                        <img src={book.image} alt={book.title} className="img-fluid" />
                                        {/* image for book if no thumbnail, show no cover image */}
                                        {/* ? <img src={book.image} alt={book.title} className="img-fluid" /> :
                                        <img src={missing.image} alt="no cover image" className="img-fluid" /> */}

                                    </Col>
                                    <Col size="md-9">
                                        <p>{book.synopsis}</p>
                                    </Col>
                                </Row>
                            </ListItem>)} 
                        </List>
                        </div> 
                        :
                        <div> 
                            <h2> Use the search feature to create a list of possible reading suggestions!</h2>
                        </div>
                    }
                </Col>
                </Row>
            </Container>
            </div>

        )
    }
}

export default Search;