import { useHistory } from "react-router-dom";
import "./About.css";
export const About = () => {
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
      <div className="about-div">
        <div className="center-about">
          "Always an excitement in learning from the unknown".
          <br></br>
          <br></br>Found myself to have a continuous strive to test myself
          academically in the science field. The best solution for me was to
          pick up coding as its versatility is endless and can be used
          practically in anything. From the beginning I've picked up C++ as my
          first language as it was best suited for robotics, real-time and
          real-world applications. Simple robotics were fun projects but always
          felt like it was not enough. In order to further myself into
          industries I wanted to get into I continued to study more papers and
          get myself comfortable with the material. I've built a strong
          understanding on how data is formed and streaming data with logic.
          Managing databases with logical structures from its foundations.
          Strengthen my ability to synthesize quantitative and qualitative data
          and interact with them effectively. Obtained debugging practices and
          created many test for the software I've built. Become proficient in an
          asssortment of technologies, including JavaScript, Ruby, and Python.
          Learned management skills on production teams and development teams in
          a collaborative team setting.
        </div>
      </div>
    </>
  );
};
