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
                        <form>
                             <section className="name">          {/*name Section */}
                                <p>First and Last Name</p>
                            </section>
                             <input type="text" style={{width:200}} name="name"></input>         {/*first and last name */}
                        </form>

                        <form>
                             <section className="email">          {/*email Section */}
                                <p>Your E-Mail Please:</p>
                            </section>
                             <input type="text" style={{width:200}} name="email"></input>         {/*email section */}
                        </form>

                        <form>
                             <section className="message">          {/*email Section */}
                                <p>Your Message:</p>
                            </section>
                             <textarea style={{width:400, height:150}} name ="message"></textarea>      {/*email section */}
                        </form>


                    </main>
                </article>
            </div>

            
        )
    }
}

export default ContactUs;