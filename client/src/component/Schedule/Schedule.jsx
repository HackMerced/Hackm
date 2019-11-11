import React from "react";
import "./Schedule.css";

class Schedule extends React.Component {
  render() {
    return (
      <div id="grad">
        <div id="Schedule-Title">
          <h1>Schedule</h1>
          <div id="Schedule-Body">
            <table id="Schedule">
              <tr>
                <td>8:00 - 9:00</td>
                <td>-- Opening Ceremony</td>
              </tr>
              <tr>
                <td>9:00 - 9:30</td>
                <td>-- Hacking Begins</td>
              </tr>
              <tr>
                <td>12:00 - 1:00</td>
                <td>-- Lunch</td>
              </tr>
              <tr>
                <td>5:00 - 6:00</td>
                <td>-- Dinner</td>
              </tr>
              <tr>
                <td>9:00 - 9:30</td>
                <td>-- Hacking Ends</td>
              </tr>
              <tr>
                <td>9:00 - 10:00</td>
                <td>-- Closing Ceremony</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Schedule; //rending Main webpage
