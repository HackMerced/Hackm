import Home from "../pages/home/home";
import adminDash from "../pages/login/adminDash/admin";
import applicantDash from "../pages/login/applicantDash/applicant";
import judgingDash from "../pages/login/judgingDash/judging";
import volDash from "../pages/login/volDash/volDash";
import NeonHeart from "../pages/NeonHeart/heart";

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/admin",
    component: adminDash
  },
  {
    path: "/applicant",
    component: applicantDash
  },
  {
    path: "/judge",
    component: judgingDash
  },
  {
    path: "/volunteer",
    component: volDash
  },
  {
    path: "neon",
    component: NeonHeart
  }
];

export default routes;
