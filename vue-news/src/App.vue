<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>

    <spinner-test :loading="loadingStatus"></spinner-test>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import SpinnerTest from './components/SpinnerTest.vue';
import bus from './utils/bus.js';

export default {
 components: {
   ToolBar,
   SpinnerTest
 },
 data() {
   return {
     loadingStatus: false,
   }
 },
 methods: {
   startSpinner() {
     this.loadingStatus = true;
   },
   endSpinner() {
     this.loadingStatus = false;
   }
 },
 created() {
   bus.$on('start:spinner', this.startSpinner); // 첫번째 인자는 하위 컴포넌트에서 받은 이벤트 이름, 두번째 인자는 실행할 함수
   bus.$on('end:spinner', this.endSpinner)
 },
 beforeDestroy() {
   bus.$off('start:spinner', this.startSpinner);
   bus.$off('end:spinner', this.endSpinner);
 }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
a {
  color: #34495e;
  text-decoration: none;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}

a.router-link-exact-active {
  text-decoration: underline;
}
/* Router Transition */
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
</style>
