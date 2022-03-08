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
    user: {},
    item: {},
  },
  getters: {
    // computed와 동일한 속성이지만 store에 저장된다.
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
