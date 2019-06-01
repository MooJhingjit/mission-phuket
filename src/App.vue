<template>
  <div id="myApp">
    <nprogress-container></nprogress-container>
    <router-view></router-view>
  </div>
</template>

<script>
import NprogressContainer from 'vue-nprogress/src/NprogressContainer'
export default {
  name: 'app',
  components: {
    NprogressContainer
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/my-style.scss';
@import '../node_modules/spectre.css/dist/spectre.min';
@import '../node_modules/spectre.css/dist/spectre-exp.min';

</style>
