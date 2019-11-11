import React from "react";
import './Schedule.css'

class Schedule extends React.Component {
  render() {
    return (
      <div id="Schedule-Title">
        <h1>Event Schedule</h1>
        <div>
          <table id="schedule">
            <tr>
              <th>Event</th>
              <th>Time</th>
            </tr>
            <tr>
              <td>Opening Ceremony</td>
              <td>8:00 AM</td>
            </tr>
            <tr>
              <td>Hacking Begins</td>
              <td>9:00 AM</td>
            </tr>
            <tr>
              <td>Lunch</td>
              <td>12:00 AM</td>
            </tr>
            <tr>
              <td>Dinner</td>
              <td>5:00 PM</td>
            </tr>
            <tr>
              <td>Hacking Ends</td>
              <td>9:00 PM</td>
            </tr>
            <tr>
              <td>Closing Ceremony</td>
              <td>9:00 PM - 10:00 PM</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default Schedule; //rending Main webpage
