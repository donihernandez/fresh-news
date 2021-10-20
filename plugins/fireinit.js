import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCvh-NwTezWft61-oPLZ2okJuG--6qT11I',
  authDomain: 'fresh-news-1f397.firebaseapp.com',
  projectId: 'fresh-news-1f397',
  storageBucket: 'fresh-news-1f397.appspot.com',
  messagingSenderId: '136693703564',
  appId: '1:136693703564:web:59a40ebf0af62d650a2ca9',
  measurementId: 'G-G1CW2CSDRL'
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
