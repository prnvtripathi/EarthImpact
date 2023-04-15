import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
  // your Firebase configuration object
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export const auth = firebase.auth()
