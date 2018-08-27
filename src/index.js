import React from 'react';
import ReactDOM from 'react-dom';
import *as Redux from 'redux';
import *as ReactRedux from 'react-redux';
import './index.css';
import {BrowserRouter, Route } from 'react-router-dom';
import AuthorQuiz from './AuthorQuiz';
import registerServiceWorker from './registerServiceWorker';
import { shuffle, sample } from 'underscore';
import AddAuthorForm from './Layouts/AddAuthorForm';
import DemoExamples from './DemoExamples';


const authors = [
    {
        name: 'Mark Twain',
        imageUrl: '/assets/MarkTwain.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['The Adventures of Huckleberry Finn']
    },
    {
        name: 'Joseph Conrad',
        imageUrl: '/assets/JosephConrad.png',
        imageSource: 'Wikimedia Commons',
        books: ['Heart of Darkness']
    },
    {
        name: 'J.K. Rowling',
        imageUrl: '/assets/J._K._Rowling.jpg',
        imageSource: 'Wikimedia Commons',
        imageAttribution: 'Daniel Ogren',
        books: ['Harry Potter and the Sorcerers Stone']
    },
    {
        name: 'Stephen King',
        imageUrl: '/assets/Stephen_King.jpg',
        imageSource: 'Wikimedia Commons',
        imageAttribution: 'Pinguino',
        books: ['The Shining', 'IT']
    },
    {
        name: 'Charles Dickens',
        imageUrl: '/assets/charlesDickens.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['David Copperfield', 'A Tale of Two Cities']
    },
    {
        name: 'William Shakespeare',
        imageUrl: '/assets/williamShakespeare.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['Hamlet', 'Macbeth', 'Romeo and Juliet']
    }
];

function getTurnData(authors) {
    //console.log("authors", authors);
    const allBooks = authors.reduce(function (p, c, i) { //p=book, c= array, i = index
        // console.log("P",p);
        // console.log("c",c);
        // console.log("i",i);
        return p.concat(c.books); //concat: join array
    }, []);
    const fourRandomBooks = shuffle(allBooks).slice(0, 4);
    //console.log("fourRandomBooks",fourRandomBooks); //random book
    const answer = sample(fourRandomBooks);
    //console.log("answer",answer);

    return {
        books: fourRandomBooks,
        author: authors.find((authors) =>
            authors.books.some((title) =>
                title === answer))
    }
}



function reducer(
    state = { authors, turnData: getTurnData(authors), highlight: '' }, 
    action) {
      switch (action.type) {
        case 'ANSWER_SELECTED':
          const isCorrect = state.turnData.author.books.some((book) => book === action.answer);
          return Object.assign(
            {}, 
            state, { 
              highlight: isCorrect ? 'correct' : 'wrong'
            });
        case 'CONTINUE': 
            return Object.assign({}, state, { 
              highlight: '',
              turnData: getTurnData(state.authors)
            });
        case 'ADD_AUTHOR':
            return Object.assign({}, state, {
              authors: state.authors.concat([action.author])
            });
        default: return state;
      }
}

let store = Redux.createStore(reducer);


//Author Quiz
ReactDOM.render(
    <BrowserRouter>
        <ReactRedux.Provider store={store}>
            <React.Fragment>
                <Route exact path = "/" component = {AuthorQuiz}/>
                <Route path = "/add" component = {AddAuthorForm}/>
                <Route path = "/demo" component = {DemoExamples}/>
            </React.Fragment>
        </ReactRedux.Provider>
    </BrowserRouter>, document.getElementById('root'));

registerServiceWorker();

///DemoExample
// ReactDOM.render(<DemoExamples/>, document.getElementById('root'));
// registerServiceWorker();