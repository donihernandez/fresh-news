import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '~/plugins/fireinit'

export default function ({ store, route, redirect }) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      store.dispatch('setUser', user)
    } else {
      redirect('/login')
    }
  })
}
