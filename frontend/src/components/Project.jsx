import { useHistory } from "react-router-dom";
import "../App.css";

export const Project = () => {
  const history = useHistory();

  return (
    <>
      <div
        className="back"
        onClick={() => {
          history.push("/");
        }}
      >
        Main
      </div>
      <div className="project-div">Projects</div>
    </>
  );
};
