import React from "react";
import './schedule.css'

class Schedule extends React.Component {
  render() {
    return (
      <article>
        <div>
          <table id="schedule">
            <tr>
              <th>Event</th>
              <th>Time</th>
              <th>Location</th>
            </tr>
            <tr>
              <td>Introductory Ceremony</td>
              <td>8:00 PM - 9:00 PM</td>
              <td>COB 102</td>
            </tr>
            <tr>
              <td>Team Mixer</td>
              <td>9:00 PM - 10:30 PM</td>
              <td>COB 102</td>
            </tr>
            <tr>
              <td>Dinner</td>
              <td>9:00 PM - 10:00 PM</td>
              <td>Outside</td>
            </tr>
            <tr>
              <td>Python Flask Workshop</td>
              <td>11:00 PM - 12:30 AM</td>
              <td>SSB 170</td>
            </tr>
            <tr>
              <td>React.js Workshop</td>
              <td>7:00 AM - 9:00 AM</td>
              <td>COB2 130</td>
            </tr>
            <tr>
              <td>Breakfast</td>
              <td>8:00 AM - 9:00 AM</td>
              <td>COB 102</td>
            </tr>
            <tr>
              <td>Cupstack</td>
              <td>11:00 AM - 12:00 PM</td>
              <td>SSB 130</td>
            </tr>
            <tr>
              <td>Lunch</td>
              <td>1:00 PM - 3:00 PM</td>
              <td>COB 102</td>
            </tr>
            <tr>
              <td>Creating Alexa App with AWS Tools</td>
              <td>5:00 PM - 7:00 PM</td>
              <td>SSB 171</td>
            </tr>
            <tr>
              <td>Closing Ceremony</td>
              <td>11:00 AM - 12:00 PM</td>
              <td>COB 102</td>
            </tr>
          </table>
        </div>
      </article>
    );
  }
}

export default Schedule; //rending Main webpage
