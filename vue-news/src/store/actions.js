import { fetchAskList, fetchJobsList, fetchNewsList, fetchUserInfo, fetchCommentItem, fetchList} from "../api/index.js";

export default {
      async FETCH_NEWS(context) {
        const response = await fetchNewsList();
        context.commit("SET_NEWS", response.data);
        return response;
      },
      async FETCH_JOBS(context) {
        const response = await fetchJobsList();
        context.commit('SET_JOBS', response.data);
        return response;
      },
      async FETCH_ASK(context) {
        const response = await fetchAskList();
        context.commit('SET_ASK', response.data);
        return response;
      },
      async FETCH_USER(context, name) {
        const response = await fetchUserInfo();
        context.commit('SET_USER', response.data);
        return response;
      },
      async FETCH_ITEM(context, id) {
        const response = await fetchCommentItem();
        context.commit('SET_ITEM', response.data);
        return reseponse;
      },
      async FETCH_LIST({ commit }, pageName) {
        const reseponse = await fetchList();
        context.commit('SET_LIST', reseponse.data);
        return response;
      },
}