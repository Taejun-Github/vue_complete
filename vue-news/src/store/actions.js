import { fetchAskList, fetchJobsList, fetchNewsList, fetchUserInfo, fetchCommentItem, fetchList} from "../api/index.js";

export default {
    FETCH_NEWS(context) {
      return fetchNewsList()
          .then((response) => {
            //    console.log(response.data);
            context.commit("SET_NEWS", response.data);
            return response;
          })
          .catch((error) => {
            console.log(error);
          });
      },
      FETCH_JOBS(context) {
        return fetchJobsList()
          .then((response) => {
            // console.log(response.data);
            context.commit("SET_JOBS", response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      },
      FETCH_ASK(context) {
        return fetchAskList()
          .then((response) => {
            context.commit("SET_ASK", response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      },
      FETCH_USER(context, name) {
        return fetchUserInfo(name)
          .then((response) => {
            context.commit("SET_USER", response.data);
          })
          .catch((error)=> {
            console.log(error);
          });
      },
      FETCH_ITEM(context, id) {
        return fetchCommentItem(id)
          .then((response) => {
            context.commit("SET_ITEM", response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      },
      FETCH_LIST({ commit }, pageName) {
        return fetchList(pageName) 
          .then((response) => {
            commit('SET_LIST', response.data);
            return response;
          })
          .catch(error => console.log(error));
      },
}