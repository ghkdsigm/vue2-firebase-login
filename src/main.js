import Vue from 'vue'
import App from './App.vue'
import { router } from './routes/index.js'
import firebase from 'firebase'


Vue.config.productionTip = false

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUEYWYixrjY-FKI5nYYf7irEsfLkq2bkE",
  authDomain: "vue-login-logout.firebaseapp.com",
  projectId: "vue-login-logout",
  storageBucket: "vue-login-logout.appspot.com",
  messagingSenderId: "353562279515",
  appId: "1:353562279515:web:bfac66af10407b5247497e",
  measurementId: "G-4DNTS1Z73S"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
