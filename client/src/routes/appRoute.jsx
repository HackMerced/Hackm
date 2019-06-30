import login from '../pages/login/mainLogin/login.jsx'
import signUp from '../pages/signUp/signUp.jsx'
import Home from '../pages/home/home.jsx'
import adminDash from '../pages/login/adminDash/admin.jsx'
import applicantDash from '../pages/login/applicantDash/applicant.jsx'
import judgingDash from '../pages/login/judgingDash/judging.jsx'
import volDash from '../pages/login/volDash/volDash.jsx'

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
	path: '/judge',
	component: judgingDash,
},
{
	path: '/volunteer',
	component: volDash,
}
];

export default routes;