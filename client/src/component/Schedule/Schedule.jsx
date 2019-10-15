import React from "react";

class Schedule extends React.Component {
  render() {
    return (
      <article>
        <div>
          <table>
            <tr className="row">
              <td className="Event">Event 1</td>
              <td className="Time">Time</td>
              <td className="Location">Location</td>
            </tr>
            <tr className="row">
              <td className="Event">Event 2</td>
              <td className="Time">Time</td>
              <td className="Location">Location</td>
            </tr>
            <tr className="row">
              <td className="Event">Event 3</td>
              <td className="Time">Time</td>
              <td className="Location">Location</td>
            </tr>
          </table>
        </div>
      </article>
    );
  }
}

export default Schedule; //rending Main webpage
