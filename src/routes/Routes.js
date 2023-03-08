import { Redirect, Route, BrowserRouter, Switch } from "react-router-dom";
import AddTodo from "../pages/add-todo/AddTodo";
import Login from "../pages/login/Login";
import MainPage from "../pages/mainpage/MainPage";
import NotFound from "../pages/notfound/NotFound";
import ViewPage from "../pages/ViewPage/ViewPage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={MainPage} exact></Route>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/add" component={AddTodo}></Route>
        <Route path="/view/:id" component={ViewPage}></Route>

        <Route path="/login" component={Login}></Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
