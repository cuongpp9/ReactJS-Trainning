import React, { Component } from 'react';
import './../stypes/AddAuthorsForm.css'


class AuthorForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            imageUrl: '',
            books: [],
            bookTemp: ''
        };
    }

    onFieldChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onAddAuthor(this.state);
    }

    handleAddBook = (event) =>{
        this.setState({
            books: this.state.books.concat([this.state.bookTemp]),
            bookTemp: ''
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="AddAuthorForm_input">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.onFieldChange} />
                </div>
                <div className="AddAuthorForm_input">
                    <label htmlFor="imageUrl">Image URL</label>
                    <input type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.onFieldChange} />
                </div>
                <div className="AddAuthorForm_input">
                    <label htmlFor="bookTemp">Books</label>
                    {this.state.books.map((book, index) => <p key ={index}>{book}</p>)}
                    <input type = "text" name ="bookTemp" value = {this.state.bookTemp} onChange={this.onFieldChange}/>
                    <input type = "button" value = "+" onClick = {this.handleAddBook}/>
                </div>
                <input type="submit" value="Add" />
            </form>);
    }
}

function AddAuthorsForm({ match, onAddAuthor }) {
    return <div className="AddAuthorForm">
        <h1>Add Author</h1>
        <AuthorForm onAddAuthor={onAddAuthor} />
    </div>;
}

export default AddAuthorsForm;