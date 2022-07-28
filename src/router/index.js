import Vue from 'vue';

import VueRouter from 'vue-router';

import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children: [ {
      path: '',  // default view
      name: 'Main',
      // meta: { requiresAuth: true },
      component: () =>
        import(
          /* webpackChunkName: "profile" */ '@/components/Home/index'
        ),
    },
    {
      path: "/register",
      name: "register",
      component: () =>
        import(/* webpackChunkName: "register" */ "../views/RegisterView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "register" */ "../views/LoginView.vue"),
    },
  ]
  },
  
  
  {
    path: "/registration_form",
    name: "registrationform",
    component: () =>
      import(/* webpackChunkName: "register-form" */ "../views/FormView.vue"),
  },
  {
    path: "/dashboard",
    name: "userprofile",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/ProfileView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
