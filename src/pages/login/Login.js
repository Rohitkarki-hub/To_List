import { Link, Route, useHistory } from "react-router-dom";
import NavBar from "../NavBar";

const Login = () => {
  const history = useHistory();
  return (
    <>
      <NavBar />
      <div className="todo_container">
        {localStorage.getItem("loggedIn") ? (
          <>
            You are already logged in!
            <b
              onClick={() => {
                localStorage.removeItem("loggedIn");
                history.push("/");
              }}
              style={{ color: "red", cursor: "pointer" }}
            >
              Logout
            </b>
          </>
        ) : (
          <>
            <button
              onClick={() => {
                alert("Logged in successfully!");
                localStorage.setItem("loggedIn", true);
                history.replace("/");
              }}
            >
              Login
            </button>
            <br />
            <br />
            <Link to="/login/showInfo">Nested Route | Show Info</Link>
            <br /> <br />
            <br />
            {/*nested routing */}
            <Route path="/login/ShowInfo">
              <div>This is dummy login and doesnt communciate with server</div>
            </Route>
          </>
        )}
      </div>
    </>
  );
};

export default Login;
