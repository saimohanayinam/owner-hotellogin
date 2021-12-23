import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Form.css";

const Signup = () => {
  const enteredName = useSelector((state) => state.signup.signupName);
  const enteredPassword = useSelector((state) => state.signup.signupPassword);
  const enteredNameTouched = useSelector(
    (state) => state.signup.signupNameTouched
  );
  console.log(enteredName);

  const dispatch = useDispatch();

  const enteredNameIsValid = enteredName.includes("@gmail.com");
  const enteredPasswordIsValid = enteredPassword.trim().length > 5;
  const nameInputIsInvalid =
    !enteredPasswordIsValid && !enteredNameIsValid && enteredNameTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    dispatch({ type: "name", amount: event.target.value });
  };

  const PassInputChangeHandler = (event) => {
    dispatch({ type: "password", amount: event.target.value });
  };

  const nameInputBlurHandler = (event) => {
    dispatch({ type: "touched", amount: true });
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    dispatch({ type: "touched", amount: true });

    if (!enteredNameIsValid) {
      return;
    }
    if (!enteredPasswordIsValid) {
      return;
    }

    dispatch({ type: "name", amount: "" });
    dispatch({ type: "password", amount: "" });

    dispatch({ type: "touched", amount: false });

    console.log(enteredName);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <>
      <div className="cen">
        <i class="fas fa-hotel fa-5x"></i>
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
          <Link to="/Done">
            {" "}
            <button disabled={!formIsValid}> Signup </button>
          </Link>
        </div>
        <br /> <br />
        <Link to="/login">login </Link>
      </form>
      <br />
      <picture>
        <source media="(min-width: )" srcset="" />
        <img src="" alt="" />
      </picture>

      <div className="cen">
        <h5> &copy; sai mohan hotles 2021 </h5>
      </div>
    </>
  );
};

export default Signup;
