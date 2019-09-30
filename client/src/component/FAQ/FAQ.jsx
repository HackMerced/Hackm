import React from 'react';
import 'font-awesome/css/font-awesome.min.css'
import './FAQ.css'

const FAQ = () => {
    return (
        <article className="App-FAQ" id="Footer">
            <section className="container">
                <header>FREQUENTLY ASKED QUESTION</header>
                <div>
                    <h3>Who can attend?</h3>
                    <p>All undergraduate and graduate students of any major or high school students are welcome! High school students and those under the age of 18 are required to fill out a liability waiver and have it sent to general@hackmerced.com</p>
                </div>

                <div>
                    <h3>How do teams work?</h3>
                    <p>You can be in teams of up to 4 people and it is highly encouraged to find at least one other person to participate with! If you need help forming a team, we'll help set you up with others who are looking for teammates.</p>
                </div>

                <div>
                    <h3>What can I build?</h3>
                    <p>You and your team can build a project towards a theme of your choosing!</p>
                </div>

                <div>
                    <h3>What if I have no coding background?</h3>
                    <p>We encourage you to attend as it will be a great experience for you to learn and compete! You will work with a team and can ask any of our volunteers for help! There will also be workshops during the event to help you learn how to code.</p>
                </div>

                <div>
                    <h3>Is there anythingI should bring?</h3>
                    <p>Bring your ID, computer, and necessary cables! If you plan on spending the night, bring extra clothes, deodorant, toiletries, and a sleeping bag (optional)! We'll have a hardware lab in case you need hardware.</p>
                </div>

                <div>
                    <h3>Where can I sleep on campus?</h3>
                    <p>In any HackMerced designated rooms! Just make sure you're comfy so you get proper rest!</p>
                </div>

                <div>
                    <h3>Are there any rules?</h3>
                    <p>All attendees must follow the Major League Hacking’s code of conduct.</p>
                </div>

                <div>
                    <h3>Have any other quesitons?</h3>
                    <p></p>
                </div>
            </section>
        </article>
    )
}