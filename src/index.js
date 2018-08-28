import React from 'react';
import ReactDOM from 'react-dom';
import *as ReactRedux from 'react-redux';
import './index.css';
import {BrowserRouter, Route } from 'react-router-dom';
import AuthorQuiz from './AuthorQuiz';
import registerServiceWorker from './registerServiceWorker';
import AddAuthorForm from './Layouts/AddAuthorForm';
import DemoExamples from './DemoExamples';
import store from './Redux/store';

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