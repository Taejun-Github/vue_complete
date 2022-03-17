export default {
  SET_NEWS(state, news) {
    // response.data가 news라는 이름으로 넘어온 것이다.
    state.news = news;
  },
  SET_JOBS(state, jobs) {
    state.jobs = jobs;
  },
  SET_ASK(state, ask) {
    state.ask = ask;
  },
  SET_USER(state, user) {
    state.user = user;
  },
  SET_ITEM(state, item) {
    state.item = item;
  },
  SET_LIST(state, list) {
    state.list = list;
  },
};
