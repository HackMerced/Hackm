import React from 'react';
import './contact-us.css'; //import css for this page
class ContactUs extends React.Component {
    render() {
        return (
            <div className="App-contact"> 
                <article className="center-the-contact" id="Contact-Us">
                    <section className = "contact-title">
                    <h2>Contact US</h2>
                    </section>
                    <main>
                        <form action="mailto:someone@example.com" method="GET">
                             <section className="contact-name">          {/*name Section */}
                                <p>First and Last Name</p>
                            </section>
                             <input type="text" style={{width:200}} name="subject"></input>         {/*first and last name */}
                             <section className="contact-email">          {/*email Section */}
                                <p>Your E-Mail Please:</p>
                            </section>
                             <input type="text" style={{width:200}} name="email"></input>         {/*email section */}
                             <section className="contact-message">          {/*email Section */}
                                <p>Your Message:</p>
                            </section>
                             <textarea style={{width:400, height:150}} name ="body"></textarea>      {/*email section */}
                             <br></br>
                             <input type="submit" value="Send"></input>
                        </form>


                    </main>
                </article>
            </div>

            
        )
    }
}

export default ContactUs;