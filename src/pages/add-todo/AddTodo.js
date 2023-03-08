import { useRef } from "react";
import { useHistory } from "react-router-dom";
import AuthCheck from "../../Middleware/AuthCheck";
import NavBar from "../NavBar";

const AddTodo = () => {
  const todoText = useRef();

  const history = useHistory();

  //Auth chcek...
  AuthCheck();

  const addToDo = (e) => {
    e.preventDefault();
    const todoString = todoText.current.value;

    const initialTodo = localStorage.getItem("todo")
      ? JSON.parse(localStorage.getItem("todo"))
      : [];

    initialTodo.push(todoString);

    localStorage.setItem("todo", JSON.stringify(initialTodo));
    history.push("/");
  };
  return (
    <>
      <NavBar />
      <div className="todo_container">
        <h1>Add to-do:</h1>
        <br />
        <form onSubmit={addToDo}>
          <input type="text" ref={todoText} />
          <button>save to-do</button>
        </form>
      </div>
    </>
  );
};

export default AddTodo;
