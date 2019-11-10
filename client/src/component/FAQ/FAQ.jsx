import React from "react";
import 'font-awesome/css/font-awesome.min.css'
import './faq.css'

const Faqs = () => (
  <div className="Faqs" id="Faqs">
      <h2>
        <u>Frequently Asked Questions</u>
      </h2>
      <div className="container">
        <div className="column-left">
          <div className="question">
            <h3>Who can attend?</h3>
            <p>
              All undergraduate and graduate students of any major or high
              school students are welcome! High school students and those under
              the age of 18 are required to fill out a{" "}
              <a
                href="https://risk.ucmerced.edu/sites/risk.ucmerced.edu/files/documents/waiver-voluntary.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#fff" }}
              >
                liability waiver
              </a>{" "}
              and have it sent to{" "}
              <a
                href="mailto:general@hackmerced.com?subject=HackMerced Questions&body=Dear HackMerced,"
                style={{ textDecoration: "none", color: "#D7AA27" }}
              >
                general@hackmerced.com
              </a>
            </p>
          </div>
          <div className="question">
            <h3>How do teams work?</h3>
            <p>
              You can be in teams of up to 4 people and it is highly encouraged
              to find at least one other person to participate with! If you need
              help forming a team, we'll help set you up with others who are
              looking for teammates.
            </p>
          </div>
          <div className="question">
            <h3>How much will it cost me?</h3>
            <p>
              Admission, food and drinks are absolutely free! However, we cannot
              cover any travel costs.
            </p>
          </div>
          <div className="question">
            <h3>What can I build?</h3>
            <p>
              You and your team can build a project towards a theme of your
              choosing!
            </p>
          </div>
        </div>
        <div className="column-left">
          <div className="question">
            <h3>What if I have no coding background?</h3>
            <p>
              We encourage you to attend as it will be a great experience for
              you to learn and compete! You will work with a team and can ask
              any of our volunteers for help! There will also be workshops
              during the event to help you learn how to code.
            </p>
          </div>
          <div className="question">
            <h3>Is there anything I should bring?</h3>
            <p>
              Bring your ID, computer, and necessary cables! If you plan on
              spending the night, bring extra clothes, deodorant, toiletries,
              and a sleeping bag (optional)! We'll have a hardware lab in case
              you need hardware.
            </p>
          </div>
          <div className="question">
            <h3>Where can I sleep on campus?</h3>
            <p>
              In any HackMerced designated rooms! Just make sure you're comfy so
              you get proper rest!
            </p>
          </div>
          <div className="question">
            <h3>Are there any rules?</h3>
            <p>
              All attendees must follow the{" "}
              <a
                rel="noopener noreferrer"
                href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                target="_blank"
                style={{ color: "#fff" }}
              >
                Major League Hacking’s code of conduct
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <div className="prompt">
        <h3>Any other questions?</h3>
        <p>
          Feel free to message us at:{" "}
          <a
            href="mailto:general@hackmerced.com?subject=HackMerced Questions&body=Dear HackMerced,"
            style={{ textDecoration: "none", color: "#D7AA27" }}
          >
            general@hackmerced.com
          </a>
          .
        </p>
      </div>
   
  </div>
);

export default Faqs;