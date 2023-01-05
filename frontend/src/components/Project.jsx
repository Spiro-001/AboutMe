import { Route, useHistory } from "react-router-dom";
import "../App.css";
import "./Project.css";

export const Project = () => {
  const history = useHistory();

  return (
    <>
      <div
        className="back"
        onClick={() => {
          history.goBack();
        }}
      >
        Back
      </div>
      <div className="main-project">
        <div className="about-project">About</div>
        <div className="project-div">
          <Route exact path="/projects">
            <div className="buttons">
              <ul className="routes">
                <li
                  className="route"
                  onClick={(e) => {
                    history.push("/projects/expresspos");
                  }}
                >
                  ExpressPOS
                </li>
                <li
                  className="route"
                  onClick={(e) => {
                    history.push("/projects/coffeechat");
                  }}
                >
                  Coffee Chat
                </li>
                <li
                  className="route"
                  onClick={(e) => {
                    history.push("/projects/zerovisualizer");
                  }}
                >
                  Zero Visualizer
                </li>
              </ul>
            </div>
          </Route>
          <Route exact path="/projects/expresspos">
            <h1 className="header-title">ExpressPOS</h1>
            <div className="project-1">
              <img
                className="thumbnail"
                src="https://github.com/ArnobDam/Express/raw/main/frontend/public/img/Express%20Menu%20Screenshot.png"
                alt="thumb"
              />
            </div>
          </Route>
          <Route exact path="/projects/coffeechat">
            <h1 className="header-title">ExpressPOS</h1>
            <div className="project-2">
              <img
                className="thumbnail"
                src="https://github.com/Spiro-001/coffee-chat/raw/main/cc01.png"
                alt="thumb"
              />
              <img
                className="thumbnail"
                src="https://github.com/Spiro-001/coffee-chat/raw/main/cc03.png"
                alt="thumb"
              />
            </div>
          </Route>
          <Route exact path="/projects/zerovisualizer">
            <div className="project-3"></div>
          </Route>
        </div>
        <div className="right-side">Code</div>
      </div>
    </>
  );
};
