import { createStore } from 'vuex';

export default createStore({
  state: {
    books: [],
    user: null,
  },
  mutations: {
    setBooks(state, books) {
      state.books = books;
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    fetchBooks({ commit }) {
      // Make API call to fetch books and commit to state
      commit('getBooks')
    },
    login({ commit }, user) {
      commit('setUser', user);
    },
  },
  getters: {
    getBooks(state) {
      return state.books;
    },
    getUser(state) {
      return state.user;
    },
  },
});