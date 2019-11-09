import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './Title.css';
import axios from 'axios';

class Title extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        name: '',
        email: ''
        };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleChange(event) {
    const target = event.target;
    const value = target.value;
    const object = target.name;

    this.setState({
      [object]: value
    });
  }
    handleSubmit(event) {
    axios({
      method: 'post',
      url: 'http://localhost:3852/api/mailing',
      data: {
        "name": this.state.name,
        "email": this.state.email
        }
    }).then((response) => {
    console.log(response);
    }, (error) => {
    console.log(error);
});
  }
  
    render() {
        return (
            <article className="App-title" id="Title">

                <section className="container">
                    {/* Headers */}
                    <h2>HACKMERCED V</h2>
                    <h1>February 28th - March 1st 2020</h1>
                    {/* popup button trigger */}
                    <div className="box">
                        <a class="button" href="#popup1">Join the E-mail list</a>
                    </div>
                    {/* Inside popup */}
                    <div id="popup1" class="overlay">
                        <div class="popup">
                            <h2>Join our E-Mail list</h2>
                            <form onSubmit={this.handleSubmit}>
                                <input type="text" name="name" placeholder="Your Name" value={this.state.value} onChange={this.handleChange}></input>
                                <input type="text" name="email" placeholder="Email" value={this.state.value} onChange={this.handleChange} ></input>
                                <button type="submit" a="sendEmail">submit</button>
                            </form>
                            <a class="close" href="#">&times;</a>

                        </div>
                    </div>
                </section>
            </article>
        )
    }
}
export default Title;