import React, {Component} from "react";
import API from "../utils/API";


class bookContainer extends Component {
    state = {
        result: {},
        search: ""
    };

    //When this component mounts, query "Hunger Games"
    componentDidMount() {
        this.searchBooks("Hunger Games");
    }

    searchBooks = query => {
        API.search(query)
        .then(res => this.setState({result: res.data}))
        .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    //When user submits form, search Google Books API for the value of 'this.state.searchBooks'
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBooks(this.state.search);
    };

    render() {
        
    }
}