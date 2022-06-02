const INITIAL_STATE={
    isSiggnedIn:null,
    userId:null
}

export const authReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type)
    {
        case 'SIGN_IN':
            return {...state,isSiggnedIn:true,userId:action.payload};
        case 'SIGN_OUT':
            return {...state,isSiggnedIn:false,userId:null};
        default:
            return state;
    }
}