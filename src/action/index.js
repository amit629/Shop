import axios from "axios"

export const UPDATE_FORM_STATE = 'final-form-redux-example/finalForm/UPDATE_FORM_STATE'
export const signIn=(userId)=>{
    return {
        type:"SIGN_IN",
        payload:userId
    }
}
export const signOut=()=>{
    return {
        type:"SIGN_OUT",
    }
}

export const fetchUser=()=>async (dispatch)=>{
    const response = await axios.get("http://localhost:5001/user")
    return dispatch({
        type:"FETCH_USER",
        payload:response.data
    })
}



// Action Creators
export const updateFormState = (form, state) => ({
    type: UPDATE_FORM_STATE,
    form,
    payload: state
  })
  
  // Selectors
  export const getFormState = (state, form) =>
    (state && state.finalForm && state.finalForm[form]) || {}
  
export const fetchCategories=()=>async(dispatch)=>{
    const response=await axios.get("http://localhost:5000/categories")
    return dispatch({
        type:"FETCH_CATEGORIES",
        payload:response.data
    })
 }