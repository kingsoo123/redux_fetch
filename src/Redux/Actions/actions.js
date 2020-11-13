export const loginEmailAsync = (input)=>{
    return{
        type: "HANDLE_CHANGE_EMAIL",
        payload: input
    }
};

export const loginEmail = (input)=>{
    return dispatch=>{
        setTimeout(()=>{
            dispatch(loginEmailAsync(input))
        })
    }
};

export const listUsersAsync = (obj)=>{
    return{
        type: "LIST_USERS",
        payload: obj
    }
};


export const submitAsync = (obj)=>{
    return{
        type: "SUBMIT_USERS",
        payload: obj
    }
};
export const submit = (obj)=>{
    return dispatch =>{
          fetch('https://jsonplaceholder.typicode.com/posts', {
              method:'POST',
              headers:{
                  'content-type': 'application/json'
              },
              body: JSON.stringify(obj)
          })
              .then(res=>res.json())
              .then(post=>{
                  console.log(post);
                      dispatch(submitAsync(obj))
              }
              );
    }
};

export const listUsers = (obj)=>{
    return dispatch=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json =>  {
                console.log(json);
            }
            )
    }
};

