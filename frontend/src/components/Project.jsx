import { useEffect, useState } from "react";
import { Route, useHistory } from "react-router-dom";
import "../App.css";
import "./Project.css";

export const Project = () => {
  const history = useHistory();
  const [description, setDescription] = useState();
  const [clickButton, onClickButton] = useState(0);

  const expressDescription = "A POS system built with React and ExpressJS";
  const coffeeChatDescription =
    "A social media application created with Rails on Ruby and React";
  const zeroVisualizerDescription =
    "An audio visualizer with a parametric EQ built with JavaScript and Canvas";

  return (
    <>
      <div
        className="back"
        onClick={() => {
          setDescription("");
          history.goBack();
        }}
      >
        Back
      </div>
      <div className="main-project">
        <div className="about-project">
          <h1>Live Link</h1>
          <div className="express-about">
            <a className="text-a" href="https://expresspos.onrender.com/">
              ExpressPOS
            </a>
          </div>
          <div className="coffeechat-about">
            <a className="text-a" href="https://coffee-chat.onrender.com/">
              Coffee Chat
            </a>
          </div>
          <div className="zerovisualizer-about">
            <a
              className="text-a"
              href="https://spiro-001.github.io/Zero-Visualizer/"
            >
              Zero Visualizer
            </a>
          </div>
        </div>
        <div className="project-div">
          <Route exact path="/projects">
            <div className="buttons">
              <ul className="routes">
                <li
                  className="route"
                  onClick={(e) => {
                    setDescription(expressDescription);
                    history.push("/projects/expresspos");
                  }}
                >
                  ExpressPOS
                </li>
                <li
                  className="route"
                  onClick={(e) => {
                    setDescription(coffeeChatDescription);
                    history.push("/projects/coffeechat");
                  }}
                >
                  Coffee Chat
                </li>
                <li
                  className="route"
                  onClick={(e) => {
                    setDescription(zeroVisualizerDescription);
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
            <h1 className="header-title">Coffee Chat</h1>
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
              <img
                className="thumbnail"
                src="https://github.com/Spiro-001/coffee-chat/raw/main/cc04.png"
                alt="thumb"
              />
              <img
                className="thumbnail"
                src="https://github.com/Spiro-001/coffee-chat/raw/main/cc06.png"
                alt="thumb"
              />
            </div>
          </Route>
          <Route exact path="/projects/zerovisualizer">
            <h1 className="header-title">Zero Visualizer</h1>
            <div className="project-3">
              <img
                className="thumbnail"
                src="https://github.com/Spiro-001/Zero-Visualizer/raw/main/images/screenshot4.png"
                alt="vis"
              />
              <img
                className="thumbnail"
                src="https://github.com/Spiro-001/Zero-Visualizer/raw/main/images/screenshot1.png"
                alt="vis"
              />
              <img
                className="thumbnail"
                src="https://github.com/Spiro-001/Zero-Visualizer/raw/main/images/screenshot3.png"
                alt="vis"
              />
            </div>
          </Route>
        </div>
        <div className="right-side">
          <h1>Description</h1>
          <div className="description">{description}</div>
        </div>
      </div>
    </>
  );
};
