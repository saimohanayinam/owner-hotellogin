import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom';
import "./Form.css";

const SimpleInput = () => {
  const dispatch = useDispatch();

  const enteredNamesignup = useSelector((state) => state.signup.signupName);
  console.log(`hello ${enteredNamesignup}`);

  const enteredName = useSelector((state) => state.login.enteredName);
  const enteredPassword = useSelector((state) => state.login.enteredPassword);
  const enteredNameTouched = useSelector(
    (state) => state.login.enteredNameTouched
  );
  console.log(enteredName);

  const enteredNameIsValid = enteredName.includes("@gmail.com");
  const enteredPasswordIsValid = enteredPassword.trim().length > 5;
  const nameInputIsInvalid =
    !enteredPasswordIsValid && !enteredNameIsValid && enteredNameTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    dispatch({ type: "loginname", amount: event.target.value });
  };

  const PassInputChangeHandler = (event) => {
    dispatch({ type: "loginpassword", amount: event.target.value });
  };

  const nameInputBlurHandler = (event) => {
    dispatch({ type: "logintouched", amount: true });
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    dispatch({ type: "logintouched", amount: true });

    if (!enteredNameIsValid) {
      return;
    }
    if (!enteredPasswordIsValid) {
      return;
    }

    console.log(enteredName === enteredNamesignup);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <>
      <div className="cen">
        <i className="fas fa-hotel fa-5x"></i>
      </div>
      <br />
      <form onSubmit={formSubmissionHandler}>
        <div className={nameInputClasses}>
          <label htmlFor="name">Email id</label>
          <input
            type="text"
            id="name"
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlurHandler}
            value={enteredName}
          />
          {nameInputIsInvalid && (
            <p className="error-text">Email id should include @gmail.com</p>
          )}
          <label htmlFor="name">password</label>
          <input
            type="password"
            id="pass"
            onChange={PassInputChangeHandler}
            onBlur={nameInputBlurHandler}
            value={enteredPassword}
          />
          {nameInputIsInvalid && (
            <p className="error-text">
              Password should have atleast 5 characters{" "}
            </p>
          )}
        </div>
        <div className="form-actions">
          <Link to="/home">
            <button disabled={!formIsValid}> login </button>
          </Link>
        </div>
      </form>
      <br />
      <picture>
        <source media="(min-width: )" />
        <img src="" alt="" />
      </picture>

      <div className="cen">
        <h5> &copy; sai mohan hotles 2021 </h5>
      </div>
    </>
  );
};

export default SimpleInput;
