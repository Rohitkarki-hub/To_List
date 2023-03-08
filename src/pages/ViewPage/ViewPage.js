import { useHistory, useParams, Link } from "react-router-dom";
import AuthCheckBoolean from "../../Middleware/AuthCheckBoolean";
import NavBar from "../NavBar";

const ViewPage = () => {
  const history = useHistory();

  const getParams = useParams();

  const getId = getParams.id;

  const getStorage = localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo"))
    : [];
  const getData = getStorage[getId];

  //Query parse
  // const getLocation = useLocation();

  // const getURLParams = new URLSearchParams(getLocation.search);

  // const getID = getURLParams.get("id");
  // const getData = getStorage[getID];
  // console.log(getID);

  const deleteTodo = () => {
    getStorage.splice(getId, 1);

    localStorage.setItem("todo", JSON.stringify(getStorage));

    history.replace("/");
  };

  return (
    <>
      <NavBar />

      <div className="todo_container">
        <button
          onClick={() => {
            history.push("/");
          }}
          style={{ background: "#e7e7e7", color: "#666" }}
        >
          Go Back
        </button>

        <div
          style={{
            background: "#e7e7e7",
            padding: "20px",
            fontSize: "20px",
            margin: "20px",
          }}
        >
          {getData}
        </div>

        {AuthCheckBoolean() ? (
          <>
            <button style={{ background: "red" }} onClick={deleteTodo}>
              Delete TO-DO
            </button>
          </>
        ) : (
          <>
            <p>
              {" "}
              login to see more <Link to="/login">Login now</Link>
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default ViewPage;
