<template>
  <div>
    <list-item></list-item>
      
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
// import bus from '../utils/bus.js';
import ListMixin from '../mixins/ListMixin.js';

export default {
  components: {
    ListItem,
  },
  mixins: [ListMixin],
  // created() {
  //   bus.$emit('start:spinner');
  //   this.$store.dispatch('FETCH_ASK')
  //     .then(() => {
  //       console.log('fetched');
  //       bus.$emit('end:spinner');
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }
    // computed: {
    //   ...mapGetters([
    //     'fetchedAsk'
    //   ]),
    //   // ...mapState({
    //   //   ask: state => state.ask
    //   // }),
    //   // ask() {
    //   //   return this.$store.state;
    //   // }
    // },
    // created() {
    //   this.$store.dispatch('FETCH_ASK');
    // },
}
</script>

<style scoped>
/* .ask-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.ask-title {
  margin: 0;
}
.link-test {
  color: #828282;
} */
</style>