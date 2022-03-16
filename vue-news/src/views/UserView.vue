<template>
  <div>
      <user-profile :info="userInfo">
        <div slot="username">{{ userInfo.id }}</div>
        <span slot="time">{{'Joined ' +  userInfo.created }}, </span>
        <span slot="karma">{{ userInfo.karma }}</span>
      </user-profile>
  </div>
</template>

<script>
// import axios from 'axios';
import UserProfile from '../components/UserProfile.vue';

export default {
    components: {
        UserProfile,
    },
    computed: {
        userInfo() {
            return this.$store.state.user;
            // 그리고 가져온 유저의 정보를 이렇게 불러온다.
            // 만약에 vuex의 저장소를 여러개 만들려면? main.js에서 다른 이름으로 저장소를 여러 개 만든 후에 접근한다.
            // 예를 들어 store 외에도 store2를 main.js에서 만들었으면 this.$store2.state.변수 로 접근하면 된다.
        },
    },
    created() {
        const userName = this.$route.params.id;
        this.$store.dispatch('FETCH_USER', userName);
        // 이것을 실행하면 비동기 함수를 호출하여 store의 state에다가 유저의 정보를 저장하게 된다.
    }
}
</script>

<style>

</style>