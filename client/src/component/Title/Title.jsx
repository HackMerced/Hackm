import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './Title.css';
import axios from 'axios';

class Title extends React.Component {

      state = {
    name: '',
  }

    handleChange = event => {
    this.setState({ name: event.target.value });
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
                                <input type="text" id="name" placeholder="Your Name" onChange={this.handleChange}></input>
                                <input type="text" id="email" placeholder="Email" onChange={this.handleChange}></input>
                                <button type="submit" id="sendEmail">submit</button>
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