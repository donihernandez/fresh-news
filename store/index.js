import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '~/plugins/fireinit'

export const state = () => ({
  token: '',
  user: null
})

export const mutations = {
  setToken (state, token) {
    state.token = token
  },
  setUser (state, user) {
    state.user = user
  }
}
export const actions = {
  setUser ({ commit }, payload) {
    commit('setUser', payload.email)
    commit('setToken', payload.accessToken)
  },
  registerUser ({ commit }, userPayload) {
    createUserWithEmailAndPassword(auth, userPayload.email, userPayload.password)
      .then((userCredential) => {
        const user = userCredential.user
        commit('setUser', user.email)
        commit('setToken', user.accessToken)
        this.$router.push('/')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        // eslint-disable-next-line no-console
        console.log(errorCode, errorMessage)
      })
  },
  loginUser ({ commit }, userPayload) {
    signInWithEmailAndPassword(auth, userPayload.email, userPayload.password).then((userCredential) => {
      const user = userCredential.user
      commit('setUser', user.email)
      commit('setToken', user.accessToken)
      this.$router.push('/')
    }).catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      // eslint-disable-next-line no-console
      console.log(errorCode, errorMessage)
    })
  },
  signOut ({ commit }) {
    signOut(auth).then(() => {
      commit('setUser', null)
      commit('setToken', null)
      this.$router.push('/login')
    })
  }
}
export const getters = {
  authenticated: state => !!state.token,
  user: state => state.user
}
