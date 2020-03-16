import firebase from 'firebase/app';
import 'firebase/messaging';
import * as admin from 'firebase-admin';
import serviceAccount from '/Users/bmontalvo/Documents/Vixens/firebase-adminsdk.json';


export const Firebase = {
  init() {
    const config = {
      apiKey: "AIzaSyDBRBj0L5qUGmtSopVim_VUsfFIuWns4Hk",
      authDomain: "vuevixens-pwa.firebaseapp.com",
      databaseURL: "https://vuevixens-pwa.firebaseio.com",
      projectId: "vuevixens-pwa",
      storageBucket: "vuevixens-pwa.appspot.com",
      messagingSenderId: "1056270913057",
      appId: "1:1056270913057:web:91d0626bf1607917d55d60",
      measurementId: "G-XG602G5TGZ",
      credential: admin.credential.cert(serviceAccount),
    };
    
    firebase.initializeApp(config);
    console.log('initialized firebase')
  },

  messaging() {
    const msg = firebase.messaging();
  
    msg.usePublicVapidKey("BFVCdJCcqctSUqTRaIW11kvUKb3iTCwBVTYoc7AHdIlKMyBZvPE_VZV2dLKxk0PyjGGveM9r59gGy-SGienLboI");

    console.log('Set firebase messaging config')

    return msg;
  }
}

export default Firebase