import React, { Component } from "react";
import { ViewBtn, SaveBtn } from "../Buttons";
import Jumbotron from "../Jumbotron";
import API from "../../utils/API";
import Nav from "../Nav";
import { Col, Row, Container } from "../Grid";
import {List, ListItem} from "../List";
import {Input, FormBtn} from "../Form";
import { Header1, Header3, Title, Subtitle, BookImage, Wrapper } from "../Styled";



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
                <Header1>Google Books Search</Header1>
                <Header3>Search for and save books of interest...</Header3>
            </Jumbotron>
            <Container fluid>
                    <form>
                <Row>
                    <Col size="md-10">
                        <Input 
                        value={this.state.search}
                        handleInputChange={this.handleInputChange}
                        name="search"
                        placeholder="Search for a book by author, subject, or title (Required)" 
                        />
                    </Col>
                    <Col size="md-2">
                        <FormBtn 
                        disabled={!(this.state.search)}
                        onClick={this.handleFormSubmit} 
                        required />
                    </Col> 
                </Row>
                    </form>
            </Container>
            <Container fluid>
                <Row>
                <Col size="md-12">
                    {this.state.books.length ? 
                    <div>
                        <Subtitle>Results</Subtitle>
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
                        <Wrapper> 
                            <Subtitle> Use the search feature to create a list of possible reading suggestions!</Subtitle>
                        </Wrapper>
                    }
                </Col>
                </Row>
            </Container>
            </div>

        )
    }
}

export default Search;