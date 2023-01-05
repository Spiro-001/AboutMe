import { useHistory } from "react-router-dom";
import "./Resume.css";
export const Resume = () => {
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
      <div className="resume-div">
        <iframe className="cover-letter" src="https://docs.google.com/document/d/e/2PACX-1vT4wWMK1GOBJRjdiXRFdh6DdP9CxJtgWDfNGFUXly4SocRbShBUPcHyAu9VpnSWR2NHP5oQzAoBryWz/pub?embedded=true"></iframe>
        <iframe className="cover-letter" src="https://docs.google.com/document/d/e/2PACX-1vSQGMVSQamx9ptMnntD5ctG20mdLis8kXQG_jdvyGnzHaSzOZtwQVCAzckI9539wXbszXtqlcsQaCkK/pub?embedded=true"></iframe>
      </div>
    </>
  );
};
