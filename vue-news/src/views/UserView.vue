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