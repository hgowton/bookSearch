import React, { Component } from "react";
import { ViewBtn, DeleteBtn } from "../components/Buttons";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import { Col, Row, Container } from "../components/Grid";
import {List, ListItem} from "../components/List";
import API from "../utils/API";

class Saved extends Component {
    state={
        books: []
    }
    
    componentDidMount() {
        this.savedBooks(this.state.books)
    }

    savedBooks = () => {
        API.returnBooks()
        .then(res => this.setState({ 
            books: res.data,
            id: "",
            title: "",
            authors: "",
            synopsis: "",
            image: "",
            link: ""
        })
        )
        .catch(err => console.log(err))
    }

    deleteBook = id => {
        API.deleteBook(id)
        .then(res => this.savedBooks())
        .catch(err => console.log(err))
    }

    render() {
        return(<div>
            <Nav />
            <Jumbotron>
                <h1>Google Books Search</h1>
                <h3>Review your books of interest below.</h3>
            </Jumbotron>
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        {this.state.books.length > 0 ?
                        <div>
                            <h3>Saved Books</h3>
                            <List>
                                {this.state.books.map(book =>
                                    <ListItem key ={book._id}>
                                        <Row>
                                            <Col size="md-8">
                                                <p className="book-title">{book.title}</p>
                                                <p className="author">{book.authors}</p>
                                            </Col>
                                            <Col size="md-4">
                                                <ViewBtn href={book.link} />
                                                <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col size="md-3">
                                                <img src={book.image} alt={book.title} className="img-fluid book-image" />
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
                            <h3>Return to the Search page to find and Save books to your list.</h3>
                        </div>    
                    }
                    </Col>
                </Row>
            </Container>
        </div>
        )
    }
}

export default Saved;