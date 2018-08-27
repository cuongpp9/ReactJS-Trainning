import React from 'react';
import './stypes/bootstrap.min.css';
import './stypes/AuthorQuiz.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Hero from './Layouts/Header';
import Footer from './Layouts/Footer';
import Turn from './Layouts/Turn';
import Continute from './Layouts/Continute';

function AuthorQuiz ({turnData, highlight, onAnswerSelected, onContinue}){
  console.log(turnData);
    return (
      <div className="container-fluid">
        <Hero/>
        <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected}/>
        <Continute show={highlight === 'correct'} onContinue ={onContinue}/>
        <p><Link to ="add">Add an Author</Link></p>
        <Footer/>
      </div>
    );
}

function mapStateToProps(state){
  return {
    turnData: state.turnData,
    highlight: state.highlight
  };
}

function mapDispatchToProps(dispatch){
  return {
    onAnswerSelected: (answer) =>{
      dispatch({type: 'ANSWER_SELECTED', answer})
    },
    onContinute: () =>{
      dispatch({type : 'CONTINUTE'})
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (AuthorQuiz);