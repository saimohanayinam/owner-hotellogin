
const initialStatelogin ={enteredName: '', enteredNameTouched: false, enteredPassword: ''}


const loginReducer=(state= initialStatelogin, action) =>{
    if(action.type === 'loginname')
    return{
        enteredName: action.amount,
        enteredNameTouched: state.enteredNameTouched,
        enteredPassword: state.enteredPassword
    }
    if(action.type === 'logintouched')
    return{
        enteredNameTouched: action.amount,
        enteredName: state.enteredName,
        enteredPassword: state.enteredPassword

    }
    if(action.type === 'loginpassword')
    return{
        enteredNameTouched: state.enteredNameTouched,
        enteredName: state.enteredName,
        enteredPassword: action.amount

    }
    return state;
    
}

export default loginReducer;