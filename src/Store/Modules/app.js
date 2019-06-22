const state = {
  app: {},
  user: null
}

const mutations = {
  SET_APPDATA (state, payload) {
    state.app = payload
  },
  SET_USERDATA (state, payload) {
    state.user = payload
  }
}

const actions = {
  SET_USER_STORE: ({ commit }, obj) => {
    commit('SET_USERDATA', obj.data)
  },
  SET_APP_STORE: ({ commit }, obj) => {
    commit('SET_APPDATA', obj.data)
  }
}

const getters = {
  GET_USERDATA_STORE: state => state.user,
  GET_APPDATA_STORE: state => state.app.appData
}

export default {
  state,
  getters,
  mutations,
  actions
}
