import {
    combineReducers
} from 'redux';
import factsReducer from './factsReducer';




export default combineReducers({
    facts: factsReducer,
});