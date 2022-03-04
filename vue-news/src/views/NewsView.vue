<template>
  <div>
      <div v-for="user in this.$store.state.news" v-bind:key="user">{{ user.title }}</div>
  </div>
</template>

<script>

export default {
  created() {
    this.$store.dispatch('FETCH_NEWS');


    // let vm = this;
    // fetchNewsList()
    //   .then(function(response) {
    //     vm.users = response.data;
    //   })
    //   .catch((error)=> {
    //     console.log(error);
    //   })
  },
}
</script>

<style>

</style>