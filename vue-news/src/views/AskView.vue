<template>
  <div>
      <p v-for="item in this.$store.state.ask" v-bind:key="item">
        <router-link :to="`item/${item.id}`">{{ item.title }}</router-link>
        <small>{{ item.time_ago }} by
          <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
           
           </small>
      </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
      ...mapGetters([
        'fetchedAsk'
      ]),
      // ...mapState({
      //   ask: state => state.ask
      // }),
      // ask() {
      //   return this.$store.state;
      // }
    },
    created() {
      this.$store.dispatch('FETCH_ASK');
    },
}
</script>

<style>

</style>