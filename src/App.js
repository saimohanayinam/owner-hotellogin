import SimpleInput from "./components/SimpleInput";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Signup from "./components/signup";
import Done from "./components/done";

function App() {
  return (
    <>
      <div className="cen">
        <Routes>
          <Route
            path="/login"
            element={
              <div className="app">
                <SimpleInput />
              </div>
            }
          />
          <Route path="/home" element={<Home />} />
          <Route path="/Done" element={<Done />} />

          <Route
            path="/"
            element={
              <div className="app">
                <Signup />
              </div>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
