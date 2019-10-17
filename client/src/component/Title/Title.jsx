import React from 'react';
import 'font-awesome/css/font-awesome.min.css'
import './Title.css'

const Title = () => {
    return (
        <article className="Title" id="Header">
            <section className="container">
                <header>HACKMERCED V</header>
                <div>20/20/2020</div>

                <div class="box">
                    <a class="button" href="#popup1">Join the E-mail list</a>
                </div>

                <div id="popup1" class="overlay">
                    <div class="popup">
            <h2>Join our E-Mail list</h2>
            <form>
                 <input type = "text" id = "name" placeholder = "Your Name"></input>
                 <input type = "text" id = "email" placeholder = "Email"></input>
                 <button type = "submit" id = "sendEmail">submit</button>
            </form>
                        <a class="close" href="#">&times;</a>

                    </div>
                </div>
            </section>
        </article>
    )
}
export default Title;