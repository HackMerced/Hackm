import React from 'react';
import './events.css';   {/* css for this file */}

class Events extends React.Component {
	render() {
	  return (
	  	<div className="App-events">   {/* this code just puts the words "Events Page" */}
		  	<section className="container">				 {/* in the middle of the page */}
			  	<article className="events">
			  	<h1>Events Page</h1>
			  	</article>
		  	</section>
	  	</div>
	  );
	}
}

export default Events;