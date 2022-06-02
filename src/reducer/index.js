//create reducer
import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import {UPDATE_FORM_STATE} from '../action/index';

// const movieReducer=()=>{
//     return[
//         {title:"Iron Man",year:"2008",lead:"Robert Downey junior"},
//         {title:"Captain America",year:"2009",lead:"Chris Evans"},
//         {title:"Thor",year:"2010",lead:"Chris Hemsworth"},
//         {title:"Hulk",year:"2011",lead:"Mark Ruffalo"}
//     ]
// }

// const selectedDataReducer=(selectedMovie={},action)=>{
//     if(action.type==='SELECT_MOVIE')
//     {
//         return action.payload;
//     }
//     else if(action.type==='SELECT_EMPLOYEE')
//     {
//         return action.payload;
//     }
//     return selectedMovie;
// }
const fetchUserReducer=(state=[],action)=>{
    if(action.type==="FETCH_USER"){
        return action.payload
    }
    return state;

}

const finalFormReducer=(state = {}, action = {})=> {
    switch (action.type) {
      case UPDATE_FORM_STATE:
        return {
          ...state,
          [action.form]: action.payload
        }
      default:
        return state
    }
  }

const allCategoriesReducer=(state=[],action)=>{
    if(action.type==="FETCH_CATEGORIES")
    {
        return action.payload;
    }
    return state;
}

const combineReducer=combineReducers({
    // movies:movieReducer,
    // selectedData:selectedDataReducer,
    auth:authReducer,
    userData:fetchUserReducer,
    finalForm:finalFormReducer,
    allCategories:allCategoriesReducer
})

export default combineReducer