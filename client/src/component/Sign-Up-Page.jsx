import React, { Component } from 'react';

class SignUpHacker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FirstName: '',
            LastName: '',
            myEmail: '',
            phoneNumber: '',
            University: '',
            HighSchool: '',
            Birthday: '',
            Gender: '',
            Ethnicity: '',
            Major: '',
            CollegeYear: '',
            ShirtSize: '',
            myDiet: '',
            myAllergies: '',
            resume: '',
            gitHub: '',
            LinkedIn: '',
            Devpost: '',
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
}

<form>
    {/* First Name */}
    <div>
        <label>First Name</label>
        <input type="text" name="FirstName" ref="name" placeholder="First Name" />
    </div>
{/* Last Name */}
    <div>
        <label>Last Name</label>
        <input type="text" name="LastName" ref="name" placeholder="Last Name" />
    </div>
    {/* Email */}
    <div>
        <label>Email</label>
        <input type="email" name="myEmail" ref="name" placeholder="something@example.com" />
    </div>
    {/* Phone Number */}
    <div>
        <label>Phone Number</label>
        <input type="number" name="phoneNumber" ref="name" placeholder="My Phone number is..." />
    </div>
    {/* University */}
    <div>
        <label>University</label>
        <input type="text" name="University" ref="name" placeholder="University of..." />
    </div>
    {/* High School */}
    <div>
        <label>High School</label>
        <input type="text" name="HighSchool" ref="name" placeholder="Something High School" />
    </div>
    {/* Birthday npm install react-datepicker --save*/}
    <div>
        <label>Date of Birth</label>
        <input type="date" name="Birthday" ref="name" placeholder="Last Name" />
    </div>
    {/* Gender */}
    <div>
        <label>Gender</label>
        <input type="text" name="Gender" ref="name" placeholder="Male/Female/Other" />
    </div>
    {/* Race/Ethnicity */}
    <div>
        <label>Race/Ethnicity</label>
        <input type="text" name="Ethnicity" ref="name" placeholder="Race" />
    </div>
    {/* Major */}
    <div>
        <label>College Major</label>
        <input type="text" name="CollegeMajor" ref="name" placeholder="Major" />
    </div>
    {/* College Year */}
    <div>
        <label>Year In Colleg</label>
        <input type="text" name="CollegeYear" ref="name" placeholder="1st..." />
    </div>
    {/* T-Shirt Size */}
    <div>
        <label>T-Shirt Size</label>
        <input type="text" name="ShirtSize" ref="name" placeholder="S..." />
    </div>
    {/* Dietary Restrictions */}
    <div>
        <label>Dietary Restrictions</label>
        <input type="text" name="myDiet" ref="name" placeholder="No meat, no animal produce" />
    </div>
    {/* Allergies */}
    <div>
        <label>Allergies</label>
        <input type="text" name="myAllergies" ref="name" placeholder="Grass..." />
    </div>
    {/* Resume */}
    <div>
        <label>Last Name</label>
        <input type="file" name="resume" ref="name" placeholder="" />
        <button type="button" onClick={}>Upload</button>
    </div>
    {/* GitHub */}
    <div>
        <label>Last Name</label>
        <input type="url" name="gitHub" ref="name" placeholder="github.com/yourusernamehere" />
    </div>
    {/* LinkedIn */}
    <div>
        <label>LinkedIn</label>
        <input type="text" name="LinkedIn" ref="name" placeholder="LinkedIn" />
    </div>
    {/* Devpost */}
    <div>
        <label>Devpost</label>
        <input type="text" name="Devpost" ref="name" placeholder="Idk" />
    </div>
    {/* Apply Button */}
    <button>Apply</button>
</form>