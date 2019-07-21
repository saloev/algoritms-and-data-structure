import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

import { FirebaseApp } from '@firebase/app-types';

const firebaseConfig = {
  apiKey: 'AIzaSyBNR-JWrQ-uK2hB8PvcpKEXjrrNQBuM-ws',
  authDomain: 'algoritms-928b4.firebaseapp.com',
  databaseURL: 'https://algoritms-928b4.firebaseio.com',
  projectId: 'algoritms-928b4',
  storageBucket: 'algoritms-928b4.appspot.com',
  messagingSenderId: '178998590811',
  appId: '1:178998590811:web:55597965dc7a69ee',
};

firebase.initializeApp(firebaseConfig);

declare module 'vue/types/vue' {
  interface VueConstructor {
      $firebase: FirebaseApp; // define real typings here if you want
  }
}

Vue.prototype.$firebase = firebase;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
