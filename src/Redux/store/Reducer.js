const initialState = {
    age : 21,
    users: [],
    email : null,
    password: null,
    submitValues : {}
};
const reducer = (state = initialState, action)=> {
    const newState = {...state};
   if(action.type === "AGE_UP"){
       newState.age++;
   } if(action.type === "AGE_DOWN"){
        newState.age--;
   }  if(action.type === "LIST_USERS"){
        //console.log(action.payload);

        newState.users = action.payload;
        //console.log(newState.users);

    }if(action.type === "HANDLE_CHANGE_PASSWORD"){
        //console.log(action.payload);
        newState.password = action.payload;
    }
    if(action.type === "HANDLE_CHANGE_EMAIL"){
        //console.log(action.payload);
        newState.email = action.payload;
    } if(action.type === "SUBMIT_USERS"){
        newState.submitValues=action.payload;
        console.log((action.payload))
    }
    return newState;
};

export default  reducer;