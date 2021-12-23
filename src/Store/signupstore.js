const initialStatesignup = {
  signupName: "",
  signupNameTouched: false,
  signupPassword: "",
};

const signUpReducer = (state = initialStatesignup, action) => {
  if (action.type === "name")
    return {
      signupName: action.amount,
      signupNameTouched: state.signupNameTouched,
      signupPassword: state.signupPassword,
    };
  if (action.type === "touched")
    return {
      signupNameTouched: action.amount,
      signupName: state.signupName,
      signupPassword: state.signupPassword,
    };
  if (action.type === "password")
    return {
      signupNameTouched: state.signupNameTouched,
      signupName: state.signupName,
      signupPassword: action.amount,
    };
  return state;
};

export default signUpReducer;
