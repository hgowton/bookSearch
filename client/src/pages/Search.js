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
        this.searchBooks();
    };

    searchBooks = query => {
        API.search(query)
        .then(res => {
            const booksArray = []
            for (var i=0; i < res.data.items.length; i++) {
                booksArray.push(
                    {id: res.data.items[i].id,
                        title: res.data.items[i].volumeInfo.title,
                        synopsis: res.data.items[i].volumeInfo.description,
                        authors: res.data.items[i].volumeInfo.authors,
                        image: res.data.items[i].volumeInfo.imageLinks.thumbnail,
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

    render() {
        return (
            <Nav />
            <Jumbotron />
            <Container fluid>
                <Row>
                    <Col size="md-12">
                    <form>
                        <Input 
                        value={this.state.search}
                        onChange={this.handleInputChange}
                        name="query"
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
                                    <Col size="md-12">
                                        <h3>{book.title}</h3>
                                        <ViewBtn href={book.link} />
                                    </Col>
                                </Row>

                                <Row>
                                    <Col size="md-12">
                                        <h3>Author(s): {book.authors}</h3>
                                        <SaveBtn onClick={() => this.saveBook(book)} />
                                    </Col>
                                </Row>

                                <Row>
                                    <Col size="md-4">
                                        {/* image for book if no thumbnail, show no cover image */}
                                        ? <img src={book.image} alt={book.title} className="img-fluid" /> :
                                        <img src={missing.image} alt="no cover image" className="img-fluid" />

                                    </Col>
                                    <Col size="md-8">
                                        <p>{book.description}</p>
                                    </Col>
                                </Row>
                            </ListItem>
                        </List>
                    </div> :
                        <div> 
                            <h2> Use the search feature to create a list of possible reading suggestions!</h2>
                        </div>
                    }
                </Col>
                </Row>
            </Container>
        )
    }
}