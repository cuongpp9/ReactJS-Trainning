import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DemoExamples from './DemoExamples';
import AuthorQuiz from './AuthorQuiz';
import registerServiceWorker from './registerServiceWorker';
import {shuffle, sample} from 'underscore'; 

const authors =[
    {
        name: 'Mark Twain',
        imageUrl: 'assets/MarkTwain.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['The Adventures of Huckleberry Finn',
                'Life on the Mississippi',
                'Roughing It'
        ],
    },
    {
        name: 'Joseph Conrad',
        imageUrl: 'assets/JosephConrad.PNG',
        imageSource: 'Wikimedia Commons',
        books: ['hihi',
                'haha',
                'doumama'
        ],
    },
    {
        name: 'J.K Rowling',
        imageUrl: 'assets/J._K._Rowling.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['abc',
                '123',
                '333'
        ],
    },
    {
        name: 'Stephen King',
        imageUrl: 'assets/Stephen_King.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['a11',
                'b12',
                'cc112'
        ],
    },
    {
        name: 'williamShakespeare',
        imageUrl: 'assets/williamShakespeare.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['aasdd',
                'aaasdsddd',
                'caaaaa'
        ],
    }
];

function getTurnData(authors){
    console.log("authors",authors);
    const allBooks = authors.reduce(function (p, c, i){
        return p.concat(c.books);
    },[]);
    const fourRandomBooks = shuffle(allBooks).slice(0,4);
    const answer = sample(fourRandomBooks);
    return{
        books: fourRandomBooks,
        author: authors.find((authors) =>
                authors.books.some((title)=>
                title === answer))
    }
}

const state = {
    turnData : getTurnData(authors)
}

//Author Quiz
// ReactDOM.render(<AuthorQuiz {...state}/>, document.getElementById('root'));
// registerServiceWorker();

///DemoExample
ReactDOM.render(<DemoExamples/>, document.getElementById('root'));
registerServiceWorker();