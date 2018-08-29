import getTurnData from './../utilities/getTurnData';
import authors from './../utilities/Authors';
import *as types from './types';

const initialState = {
    authors, 
    turnData: getTurnData(authors),
    highlight: '' 
}

const reducer = (
    state = initialState,
    action) => {
      switch (action.type) {
        case types.ANSWER_SELECTED:
          const isCorrect = state.turnData.author.books.some((book) => book === action.answer);
          return Object.assign(
            {}, 
            state, {
              highlight: isCorrect ? 'correct' : 'wrong'
            });
        case types.CONTINUE_AUTHOR:
            return Object.assign({}, state, {
              highlight: '',
              turnData: getTurnData(state.authors)
            });
        case types.ADD_AUTHOR:
        console.log(action.author);
            return Object.assign({}, state, {
              authors: state.authors.concat([action.author])
            });
        default:
          return state;
      }
}
export default reducer;