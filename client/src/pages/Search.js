import React, { Component } from "react";
import { ViewBtn, SaveBtn } from "../components/Buttons";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
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
        API.search(query)
        .then(res => {
            const booksArray = []
            for (var i=0; i < res.data.items.length; i++) {
                booksArray.push(
                    {id: res.data.items[i].volumeInfo.title,
                        title: res.data.items[i].volumeInfo.description,
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
            <Jumbotron />
            <Container fluid>
                <Row>
                    <Col size="md-12">
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
                    </Col> 
                </Row>
            </Container>
            <Container fluid>

                    {this.state.books.map(book => (
                        <Row>
                        <Col size="md-12">
                            {this.state.results.items[book].volumeInfo.title}
                            <ViewBtn onClick={(this.state.results.items[i].volumeInfo.infoLink)}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-12">
                            {this.state.results.items[i].volumeInfo.author}
                            <SaveBtn onClick={() => this.saveBook({
                                title: this.state.results.items[i].volumeInfo.title,
                                author: [this.state.results.items[i].volumeInfo.author[0]],
                                synopsis: this.state.results.items[i].volumeInfo.description,
                                image: this.state.results.items[i].volumeInfo.imageLink.thumbnail,
                                link: this.state.results.items[i].volumeInfo.infoLink
                            })} />
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-4">
                            {}
                        </Col>
                    </Row>
                
                ))}

            </Container>
        )
    }
}