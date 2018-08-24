import React from 'react';
import './stypes/bootstrap.min.css';
import './stypes/AuthorQuiz.css';

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

function Book({title}){
  return (<div className= "answer">
  <h4>{title}</h4>
  </div>);
}

function Turn({author, books}){
  console.log(author);
  return(<div className="row turn" style = {{backgroundColor: "white"}}>
    
    <div className="col-4 offset-1">
      <img src = {author.imageUrl} className = "authorImage" alt="Author"/>
    </div>
    <div className="col-6">
    {books.map((title, index) => <Book title = {title} key ={index}></Book>)}
    </div>
  </div>);
}

function AuthorQuiz ({turnData}){
  console.log(turnData);
    return (
      <div className="container-fluid">
        <Hero/>
        <Turn {...turnData}/>
        <Footer/>
      </div>
    );
}

export default AuthorQuiz;
