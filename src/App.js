import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import New from "./components/New";

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path={"/new"}>
            <New />
          </Route>
          <Route path={"/"}>
            <Body />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
