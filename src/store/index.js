import { createStore } from 'vuex'

export default createStore({
  state: {
    navbarVisible: true
  },
  getters: {
  },
  mutations: {
    setNavbarVisible(state,visible){
      state.navbarVisible = visible
    }
  },
  actions: {
  },
  modules: {
  }
})
