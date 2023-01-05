import { useHistory } from "react-router-dom";
import "./Contact.css";

export const Contact = () => {
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
      <div className="contact-div">
        <div className="scorecard-contact">
          <span>Yong Kim</span>
          <span>347 295 9154</span>
          <span>yhkim4573@gmail.com</span>
        </div>
      </div>
    </>
  );
};
