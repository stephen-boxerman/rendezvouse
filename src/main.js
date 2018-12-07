import Vue from "vue";
Vue.config.productionTip = false;

import Vuetify from "vuetify";

Vue.use(Vuetify);
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";

import Home from "./pages/Home.vue";
import SignUp from "./pages/SignUp.vue";
import About from "./pages/About.vue";
import Accounts from "./pages/Accounts.vue";

//My Own additions
import LogIn from "./pages/LogIn.vue";
import MyTeams from "./pages/MyTeams.vue";
import Team from "./pages/Team.vue";
import Schedule from "./pages/Schedule.vue";
import NewTeam from "./pages/NewTeam.vue";

import VueRouter from "vue-router";

Vue.use(VueRouter);
const router = new VueRouter({
    mode: "history",
    routes: [
        {name: "home-page", path: "/", component: Home},
        {name: "sign-up", path: "/sign-up", component: SignUp},
        {name: "about-us", path: "/about-us", component: About},
        {name: "accounts", path: "/accounts", component: Accounts},

	//My Own additions
	{name: "login", path: "/login", component: LogIn},
	{name: "my-teams", path: "/my-teams", component: MyTeams},
	{name: "team-page", path: "/team-page", component: Team},
	{name: "schedule-page", path: "/schedule-page", component: Schedule},
	{name: "new-team", path: "/new-team", component: NewTeam}
    ]
});

import App from "./App.vue";

new Vue({
    el: "#app",
    router,
    data: { currentUser: null },
    render: h => h(App)
});
