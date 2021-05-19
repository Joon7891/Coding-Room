import "./App.css";
import React from "react";
import DocumentPage from "./components/pages/DocumentPage";
import CodeCanvas from "./components/CodeCanvas";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {" "}
            <CodeCanvas />
          </Route>
          <Route path="/document/:uid">
            <DocumentPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
