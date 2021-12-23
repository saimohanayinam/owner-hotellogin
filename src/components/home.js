import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import "./Home.css";
import Loading from "./loading";

function Home() {
  const [state, setstate] = useState([]);
  const [loading, setLoading] = useState(true);

  const enteredNames = useSelector((state) => state.login.enteredName);
  const dispatch = useDispatch();

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/"
      );
      const data = await response.json();
      setLoading(false);
      setstate(data);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const enteredNamelogin = useSelector((state) => state.login.enteredName);
  const enteredPasswordlogin = useSelector(
    (state) => state.login.enteredPassword
  );
  console.log(enteredNamelogin);

  const enteredName = useSelector((state) => state.signup.signupName);
  const enteredPassword = useSelector((state) => state.signup.signupPassword);
  console.log(enteredName);

  const logOut = () => {
    dispatch({ type: "name", amount: "" });
    dispatch({ type: "password", amount: "" });

    dispatch({ type: "touched", amount: false });
  };

  const remove = (id) => {
    const removeit = state.filter((item) => item.id !== id);
    setstate(removeit);
  };

  if (!loading) {
    if (
      enteredNamelogin === enteredName &&
      enteredPasswordlogin === enteredPassword
    ) {
      return (
        <>
          <div className="gap">
            <div className="in">
              <table>
                <tr>
                  <td>
                    <h3>welcome home {enteredNames} </h3>
                  </td>
                  &nbsp; &nbsp;&nbsp;&nbsp;
                  <td>
                    <Link to="/">
                      {" "}
                      <button onClick={logOut}>logout</button>
                    </Link>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <br />
          <br />

          <div>
            <div>
              <h1>Todo List</h1>
            </div>

            {state.map((list) => {
              return (
                <>
                  <div key={list.id} id={list.id} {...list} className="lin">
                    <div className="lik">
                      <div>
                        <div>
                          <h4>{list.id}</h4>
                        </div>

                        <div>
                          <h3>{list.title}</h3>
                        </div>

                        <div className="mar">
                          <h4>
                            {list.completed === true ? (
                              <h3 style={{ color: "green" }}> done </h3>
                            ) : (
                              <h3 style={{ color: "red" }}> pending </h3>
                            )}
                          </h4>
                        </div>

                        <div>
                          <button
                            className="button"
                            onClick={() => remove(list.id)}
                          >
                            remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="app">
            <h4>your password or gmail is incorrect </h4>

            <Link to="/">
              {" "}
              <button onClick={logOut}>signin</button>
            </Link>
          </div>
        </>
      );
    }
  }

  if (loading) {
    return <Loading />;
  }
}

export default Home;
