import React, { Component } from "react";
import { ViewBtn, SaveBtn } from "../Buttons";
import Jumbotron from "../Jumbotron";
import API from "../../utils/API";
import Nav from "../Nav";
import { Col, Row, Container } from "../Grid";
import {List, ListItem} from "../List";
import {Input, FormBtn} from "../Form";
import styled from "styled-components";

const Title = styled.p `
color: blue;
font-size: 1.8rem;
margin-bottom: -.5rem;`

const BookImage = styled.img `
display: block;
margin-left: auto;
margin-right: auto;
`

class Search extends Component {
    state={
        books: [],
        search: "",
    };

    searchBooks = search => {
        API.searchBooks(search)
        .then(res => {
            this.setState({ books: res.data})
        })
        .catch(err => console.log(err))
    }

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
        console.log(book)
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
                    {this.state.books.length ? 
                    <div>
                        <h3>Results</h3>
                        <List>
                            {this.state.books.map(book => 

                                <ListItem key={book.id}>
                                <Row>
                                    <Col size="md-8">
                                        <Title>{book.title}</Title>
                                        <p className="author">Author(s): {book.authors || "No Author found"} </p>
                                    </Col>
                                    <Col size="md-4">
                                        <ViewBtn href={book.link} />
                                        <SaveBtn onClick={() => this.saveBook(book)} />
                                    </Col>
                                </Row>

                                <Row>
                                    <Col size="md-3 book-image">
                                        <BookImage src={book.image || "http://i.imgur.com/J5LVHEL.jpg"} alt={book.title} className="img-fluid" />

                                    </Col>
                                    <Col size="md-9">
                                        <p>{book.synopsis || "No Synopsis Available"}</p>
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