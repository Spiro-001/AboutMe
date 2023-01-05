import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Main } from "./components/Main";
import { Project } from "./components/Project";
import { Resume } from "./components/Resume";
import "./App.css";
import { useEffect } from "react";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/AboutMe">
          <Main />
        </Route>
        <Route path="/projects">
          <Project />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/resume">
          <Resume />
        </Route>
      </Switch>
      <div className="background"></div>
    </BrowserRouter>
  );
}

export default App;
