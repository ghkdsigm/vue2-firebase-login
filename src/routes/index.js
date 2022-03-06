import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Login from '../components/LoginItem.vue'
import SignUp from '../components/SignUp.vue'
import firebase from 'firebase'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/signup',
      component: SignUp
    },
    {
      path: '/hello',
      component: HelloWorld,
      meta: {
        authRequired: true,
      },
    },
  ],  
})


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
    if (firebase.auth().currentUser) {
      next();
    } else {
      alert('로그인을해야 해당 페이지를 확인하실수있습니다.');
      next({
        path: '/',
      });
    }
  } else {
    next();
  }
});