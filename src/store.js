import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
//const initialState = {};

/* Function to save data in local db */
function saveToLocalStorage(state){
    try{
        const serializesState=JSON.stringify(state);
        localStorage.setItem('state',serializesState)
    }
    catch(e){
        console.log(e)
    }
}

/* Function to get data from local db */
function loadFromLocalStorage(){
    try{
        const serializesState=localStorage.getItem('state')
        if(serializesState===null) return undefined
        return JSON.parse(serializesState)
    }catch(e){
             return undefined
            }
}

const persistState =loadFromLocalStorage()

const store = createStore(
  rootReducer,
  persistState,
 // initialState,
  applyMiddleware(thunk)
);

store.subscribe(()=> saveToLocalStorage(store.getState()))

export default store;
