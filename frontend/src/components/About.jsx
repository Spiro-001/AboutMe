import { useHistory } from "react-router-dom";
import "./About.css";
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
        Back
      </div>
      <div className="about-div">
        <div className="center-about">
          <img
            alt="dog"
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=640:*"
          ></img>
        </div>
      </div>
    </>
  );
};
