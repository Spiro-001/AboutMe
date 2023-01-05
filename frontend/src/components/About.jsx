import { useHistory } from "react-router-dom";

export const About = () => {
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
      <div className="about-div">Projects</div>
    </>
  );
};
