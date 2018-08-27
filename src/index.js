import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route, withRouter } from 'react-router-dom';
//import DemoExamples from './DemoExamples';
import AuthorQuiz from './AuthorQuiz';
import registerServiceWorker from './registerServiceWorker';
import { shuffle, sample } from 'underscore';
import AddAuthorsForm from './Layouts/AddAuthorForm';


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

let state = resetState();
function onAnswerSelected(answer){
    const isCorrect = state.turnData.author.books.some((book) => book === answer); //find books
    //console.log("isCorrect",isCorrect);
    state.highlight = isCorrect? 'correct': 'wrong';
    render();
}

function resetState(){
    return {
        turnData: getTurnData(authors),
        highlight: '',
    }
}


function App(){
    return (<AuthorQuiz {...state} 
        onAnswerSelected= {onAnswerSelected}
        onContinue = {()=>{
            state = resetState();
            render();
        }}/>);
}

const AuthorWrapper = withRouter (({history})=>
    <AddAuthorsForm onAddAuthor = {(author) =>{
        authors.push(author);
        history.push('/');
    }}/>
);

//Author Quiz
function render(){
    ReactDOM.render(
        <BrowserRouter>
            <React.Fragment>
                <Route exact path = "/" component = {App}/>
                <Route path = "/add" component = {AuthorWrapper}/>
            </React.Fragment>
        </BrowserRouter>, document.getElementById('root'));
}
render();
registerServiceWorker();

///DemoExample
// ReactDOM.render(<DemoExamples/>, document.getElementById('root'));
// registerServiceWorker();