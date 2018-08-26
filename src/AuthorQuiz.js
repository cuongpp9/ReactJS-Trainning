import React from 'react';
import './stypes/bootstrap.min.css';
import './stypes/AuthorQuiz.css';
import PropTypes from 'prop-types';

function Hero(){
  return (
    <div className = "row">
      <div className="jumbotron col-10 offset-1">
        <div className="container">
          <h1>Author Quiz</h1>
          <p>Select the book written by the author shown</p>
        </div>
      </div>
    </div>
  )
}

function Footer(){
  return (
    <div className = "row" id = "footer">
      <div className="col-112">
        <div className="container">
          <p className= "text-muted credit">All image are from <a href="https://commons.wikimedia.org/wiki/Main_Page">Wikimedia Commons</a>
          </p>
        </div>
      </div>
    </div>
  )
}

function Book({title, onClick}){
  return (<div className= "answer" onClick = {() =>{onClick(title)}}>
  <h4>{title}</h4>
  </div>);
}

function Turn({author, books, highlight, onAnswerSelected}){
  function highlightToBgColor(highlight){
    const mapping = {
      'none' : '',
      'correct': 'green',
      'wrong' : 'red'
    }
    return mapping[highlight];
  }
  console.log(author);
  return(<div className="row turn" style = {{backgroundColor: highlightToBgColor(highlight)}}>
    
    <div className="col-4 offset-1">
      <img src = {author.imageUrl} className = "authorImage" alt="Author"/>
    </div>
    <div className="col-6">
    {books.map((title, index) => <Book title = {title} key ={index} onClick={onAnswerSelected}/>)}
    </div>
  </div>);
}

function AuthorQuiz ({turnData, highlight, onAnswerSelected}){
  console.log(turnData);
    return (
      <div className="container-fluid">
        <Hero/>
        <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected}/>
        <Footer/>
      </div>
    );
}

Turn.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(PropTypes.string).isRequired
  }),
  books: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  highlight: PropTypes.string.isRequired
};

export default AuthorQuiz;
