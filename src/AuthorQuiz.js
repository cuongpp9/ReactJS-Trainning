import React from 'react';
import './stypes/bootstrap.min.css';
import './stypes/AuthorQuiz.css';
import {Link} from 'react-router-dom';
import Hero from './Layouts/Header';
import Footer from './Layouts/Footer';
import Turn from './Layouts/Turn';

function AuthorQuiz ({turnData, highlight, onAnswerSelected, onContinue}){
  console.log(turnData);
    return (
      <div className="container-fluid">
        <Hero/>
        <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected}/>
        <Continue show={highlight === 'correct'} onContinue ={onContinue}/>
        <p><Link to ="add">Add an Author</Link></p>
        <Footer/>
      </div>
    );
}

function Continue ({show, onContinue}){
  return (
    <div className = "row continue">
      {
        show ?
        <button className = "btn btn-primary btn-lg float-right" onClick={onContinue}>Continue</button>
        : null
      }
    </div>
  )
}

export default AuthorQuiz;
