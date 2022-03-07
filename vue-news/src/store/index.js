import Vue from "vue";
import Vuex from "vuex";
import mutations from './mutation.js';
import actions from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
    item: []
  },
  getters: {
    fetchedAsk(state) {
        return state.ask;
    },
    fetchedItem(state) {
      return state.item;
    } 
  },
  mutations,
  actions,
});
