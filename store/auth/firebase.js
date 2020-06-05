export const state = () => ({
  authUser: null,
  errors: null
})

export const getters = {
  isLoggedIn: (state) => {
    try {
      return state.authUser.id !== null
    } catch {
      return false
    }
  },
  loggedEmail: (state) => {
    try {
      return state.authUser.email !== null ? state.authUser.email : null
    } catch {
      return false
    }
  },
  hasErrors: (state) => {
    try {
      return state.errors !== null ? state.errors : null
    } catch {
      return false
    }
  }
}

export const mutations = {
  SET_AUTH_USER: (state, { authUser }) => {
    state.authUser = {
      uid: authUser.uid,
      email: authUser.email
    }
  },
  RESET_STORE: (state) => {
    state.authUser = null,
    state.errors = null
  },
  SET_LOGIN_ERRORS: (state, payload) => {
    state.errors = payload.error
  },
}

export const actions = {
  onAuthStateChanged({ commit }, { authUser }) {
    if (!authUser) {
      commit('RESET_STORE')
      return
    } 
    commit('SET_AUTH_USER', { authUser })
  }
}