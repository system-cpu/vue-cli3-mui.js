import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const routes = [
  {
    path: "/navigation",
    name: "navigation",
    component: () =>import( "../views/navigation.vue")
  },
  {
    path: "/HelloWorld",
    name: "HelloWorld",
    component: () =>import( "../views/HelloWorld.vue")
  },
  {
    path: "/",
    name: "home",
    component: () =>import( "../components/home.vue"),
    meta: {
      requiresAuth:true
    }
  },
  
  {
    path: '/community',
    name: 'community',
    component: () => import('../components/community.vue')
  },
  {
    path: '/me',
    name: 'me',
    component: () => import('../components/me.vue')
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import('../components/shop.vue')
  },
  {
    path: '/friend',
    name: 'friend',
    component: () => import('../components/friend.vue')
  },
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
