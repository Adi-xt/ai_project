import { useState } from "react";

import Login from "./Login";
import Signup from "./Signup";
import GoogleLoginButton from "./GoogleLoginButton";

import "./App.css";


function App() {

  const [isSignup, setIsSignup] = useState(false);

  return (

    <div className="container">

      {isSignup ? (

        <>
          <Signup />

          <div className="switch">

            <p>
              Already have an account?
            </p>

            <button
              onClick={() => setIsSignup(false)}
            >
              Login
            </button>

          </div>
        </>

      ) : (

        <>
          <Login />

          <div className="google-section">

            <p>OR</p>

            <GoogleLoginButton />

          </div>

          <div className="switch">

            <p>
              Don't have an account?
            </p>

            <button
              onClick={() => setIsSignup(true)}
            >
              Signup
            </button>

          </div>

        </>

      )}

    </div>

  );
}

export default App;