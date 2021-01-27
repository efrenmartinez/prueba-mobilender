const state = () => ({
  authenticated: false
});

// getters
const getters = {};

// actions
const actions = {
  login({ commit }) {
    try {
      commit("login", true);
      return true;
    } catch (error) {
      return false;
    }
  },
  logout({ commit }) {
    try {
      commit("login", false);
      return true;
    } catch (error) {
      return false;
    }
  }
};

// mutations
const mutations = {
  login(state, authenticated) {
    state.authenticated = authenticated;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
