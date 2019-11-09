import login from '../pages/login/mainLogin/login'
import signUp from '../pages/signUp/signUp'
import Home from '../pages/home/home'
import adminDash from '../pages/login/adminDash/admin'
import applicantDash from '../pages/login/applicantDash/applicant'
import judgingDash from '../pages/login/judgingDash/judging'
import volDash from '../pages/login/volDash/volDash'
import events from '../pages/events/Events'
import NeonHeart from '../pages/NeonHeart/heart';

const routes = [ 			// JSON array of objects having characteristics of respective components and paths
{				 			// This is how the app is pulling the routing data dynamically
	path: '/login',
	component: login, 
},
{
	path: '/signup',
	component: signUp,
},
{
	path: '/',
	component: Home,
},
{
	path: '/admin',
	component: adminDash,
},
{
	path: '/applicant',
	component: applicantDash,
},
{
	path: '/events',
	component: events,
},

{
	path: '/judge',
	component: judgingDash,
},
{
	path: '/volunteer',
	component: volDash,
},
{
	path: '/neon',
	component: NeonHeart,
}
];

export default routes;