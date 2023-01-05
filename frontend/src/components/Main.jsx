import { useHistory } from "react-router-dom";
import "../App.css";

export const Main = () => {
  const history = useHistory();

  return (
    <div className="main">
      <div className="outer-border">
        <img
          src={require("../images/1667766999717.jpg")}
          className="profile-pic"
          alt="pfp"
        />
      </div>
      <p className="fullname">Yong Kim</p>
      <ul className="links">
        <li
          id="1"
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/yong-kim-645902178/",
              "_blank"
            );
          }}
        >
          <div className="linked-in">LinkedIn</div>
        </li>
        <li
          id="2"
          onClick={() => {
            history.push("/projects");
          }}
        >
          <div className="projects">Projects</div>
        </li>
        <li
          id="3"
          onClick={() => {
            history.push("/about");
          }}
        >
          <div className="about">About</div>
        </li>
        <li
          id="4"
          onClick={() => {
            history.push("/contact");
          }}
        >
          <div className="contact">Contact</div>
        </li>
        <li id="5">
          <div
            className="resume"
            onClick={() => {
              history.push("/resume");
            }}
          >
            Resume
          </div>
        </li>
      </ul>
    </div>
  );
};
