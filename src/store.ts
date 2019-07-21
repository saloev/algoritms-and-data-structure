import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import {RootState} from './types';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
      firebaseConfig: {
        apiKey: 'AIzaSyBNR-JWrQ-uK2hB8PvcpKEXjrrNQBuM-ws',
        authDomain: 'algoritms-928b4.firebaseapp.com',
        databaseURL: 'https://algoritms-928b4.firebaseio.com',
        projectId: 'algoritms-928b4',
        storageBucket: 'algoritms-928b4.appspot.com',
        messagingSenderId: '178998590811',
        appId: '1:178998590811:web:55597965dc7a69ee',
      },
  },
};

export default new Vuex.Store<RootState>(store);
