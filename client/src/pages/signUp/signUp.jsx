import React from 'react';
import './signUp.css'; // css for this file

class SignUp extends React.Component {
	
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
        // this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
	render() {
		return ( 
			<div>
				<form>
					{/* First Name */}
					<div>
						<label>First Name</label><label style={{color:"#ff0000"}}>*</label>
						<input required type="text" name="FirstName" ref="name" placeholder="First Name"></input>
					</div>

					{/* Last Name */}
					<div>
						<label>Last Name</label><label style={{color:"#ff0000"}}>*</label>
						<input type="text" name="LastName" ref="name" placeholder="Last Name"></input>
					</div>

					{/* Email */}
					<div>
						<label>Email</label><label style={{color:"#ff0000"}}>*</label>
						<input type="email" name="myEmail" ref="name" placeholder="name@example.com"></input>
					</div>

					{/* Phone Number */}
					<div>
						<label>Phone Number</label><label style={{color:"#ff0000"}}>*</label>
						<input type="number" name="phoneNumber" ref="name" placeholder="123-456-5432"></input>
					</div>

					{/* University */}
					<div>
						<label>University</label>
						<input type="text" name="University" ref="name" placeholder="University of..."></input>
					</div>

					{/* High School */}
					<div>
						<label>High School</label>
						<input type="text" name="HighSchool" ref="name" placeholder="High School"></input>
					</div>

					{/* Birthday npm install react-datepicker --save*/}
					<div>
						<label>Date of Birth</label><label style={{color:"#ff0000"}}>*</label>
						<input type="date" name="Birthday" ref="name" placeholder="Last Name"></input>
					</div>

					{/* Gender */}
					<div>
						<label>Gender</label><label style={{color:"#ff0000"}}>*</label>
						{/* <input type="text" name="Gender" ref="name" placeholder="Male/Female/Other"></input> */}
						<select>
							<option value ="Male">Male</option>
							<option value ="Female">Female</option>
							<option value ="Other">Other</option>
							<option value ="Prefer Not To Answer">Prefer not to Answer</option>
						</select>
					</div>

					{/* Race/Ethnicity */}
					<div>
						<label>Race/Ethnicity</label><label style={{color:"#ff0000"}}>*</label>
						{/* <input type="text" name="Ethnicity" ref="name" placeholder="Race"></input> */}
						
						<select>
							<option value ="American Indian or Alaskan Native">American Indian or Alaskan Native</option>
							<option value ="Asian/Pacific Islander">Asian/Pacific Islander</option>
							<option value = "Black or African American">Black or African American</option>
							<option value ="Hispanic">Hispanic</option>
							<option value ="White/Caucasion">White/Caucasion</option>
							<option value ="Prefer Not To Answer">Prefer Not To Answer</option>
							<option value ="Other">Other</option>
						</select>
					</div>

					{/* Major */}
					<div>
						<label>College Major</label>
						<input type="text" name="CollegeMajor" ref="name" placeholder="Major"></input>
					</div>

					{/* College Year */}
					<div>
						<label>Year In College</label>
						{/* <input type="text" name="CollegeYear" ref="name" placeholder="Freshman"></input> */}
						<select>
							<option value ="Freshman">Freshman</option>
							<option value ="Sophmore">Sophmore</option>
							<option value ="Junior">Junior</option>
							<option value ="Senior">Senior</option>
						</select>
					</div>

					{/* T-Shirt Size */}
					<div>
						<label>T-Shirt Size</label><label style={{color:"#ff0000"}}>*</label>
						{/* <input type="text" name="ShirtSize" ref="name" placeholder="XS/S/M/L/XL"></input> */}
						<select>
							<option value ="XS">XS</option>
							<option value ="S">S</option>
							<option value ="M">M</option>
							<option value ="L">L</option>
							<option value ="XL">XL</option>
						</select>
					</div>

					{/* Dietary Restrictions */}
					<div>
						<label>Dietary Restrictions</label><label style={{color:"#ff0000"}}>*</label>
						<input type="text" name="myDiet" ref="name" placeholder="No meat, no animal produce"></input>
					</div>

					{/* Allergies */}
					<div>
						<label>Allergies</label><label style={{color:"#ff0000"}}>*</label>
						<input type="text" name="myAllergies" ref="name" placeholder="Grass..."></input>
					</div>

					{/* Resume */}
					<div>
						<label>Résumé</label><label style={{color:"#ff0000"}}>*</label>
						<input type="file" name="resume" ref="name" placeholder=""></input>
						<button type="button" onClick="">Upload</button>
					</div>

					{/* GitHub */}
					<div>
						<label>GitHub</label>
						<input type="url" name="gitHub" ref="name" placeholder="github.com/yourusernamehere"></input>
					</div>

					{/* LinkedIn */}
					<div>
						<label>LinkedIn</label>
						<input type="text" name="LinkedIn" ref="name" placeholder="LinkedIn"></input>
					</div>

					{/* Devpost */}
					<div>
						<label>Devpost</label>
						<input type="text" name="Devpost" ref="name" placeholder="Idk"></input>
					</div>

					{/* MLH Code of Conduct  */}
					<div>
						<h5>I have read and agree to the MLH Code of Conduct. </h5><label style={{color:"#ff0000"}}>*</label>
						<a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">Code of Conduct</a>
						<input required type="checkbox" placeholder="Yes"></input>
						<span>Yes</span>
					</div>

					{/* {authorize to share} */}
					<div>
						<h5>I authorize you to share my application/registration information for event administration, ranking, MLH administration, pre- and post-event informational e-mails, and occasional messages about hackathons in-line with the MLH Privacy Policy. I further agree to the terms of both the MLH Contest Terms and Conditions and the MLH Privacy Policy.</h5><label style={{color:"#ff0000"}}>*</label>
						<a href ="https://mlh.io/privacy, https://github.com/MLH/mlh-policies/tree/master/prize-terms-and-conditions">Privacy Policies</a>
						<input required type="checkbox" placeholder="Yes"></input>
						<span>Yes</span>
					</div>

					{/* Video and Photo Permission */}
					<div>
						<h5>I give permission to HackMerced to photograph and video-graph me for the purposes of promoting HackMerced in the future</h5>
						<input required type="radio" placeholder="Yes"></input>
						<span>Yes</span>
						<input required type="radio"></input>
						<span>No</span>
					</div>

					{/* Apply Button */}
					<button class="popup" onclick="myFunction()"> Submit!
					</button>
				</form>
			</div>
	  	);
	}
}

export default SignUp;