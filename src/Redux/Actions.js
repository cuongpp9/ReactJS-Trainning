import *as types from './types';

export const answerSelected = (answer) =>{
    return{
        type: types.ANSWER_SELECTED,
        answer
    }
}

export const continueAuthorQuiz = () =>{
    return{
        type: types.CONTINUE_AUTHOR
    }
}

export const addAuthor = (author) =>{
    return{
        type: types.ADD_AUTHOR,
        author
    }
}