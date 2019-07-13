<template>
  <div id="myApp">
    <nprogress-container></nprogress-container>
    <router-view></router-view>
    <notifications group="default" position="bottom left"/>
  </div>
</template>

<script>
import NprogressContainer from 'vue-nprogress/src/NprogressContainer'

import { mapActions } from 'vuex'
import config from '@Config/app.config'
import service from '@Services/app.service'
import to from 'await-to-js';

export default {
  components: {
    NprogressContainer
  },
  data () {
    return {
      local: {
        username: null,
        password: null
      }
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    ...mapActions([
      'SET_USER_STORE'
    ]),
    async fetchData() {
      // console.log(this.$route.name);
      if (this.$route.name === 'Login') return
      let err, res;
      let resourceName = config.api.user.profile;
      [ err, res ] = await to(service.getResource({ resourceName, queryString: []}))
      // console.log(res.data.user);
      if(err) return
      this.SET_USER_STORE({data: {
        ...res.data.user,
        departmentName: res.data.department.name,
        ...res.data.department
      }})
      return 
    }
  },
  watch: {
   async '$route'  (to, from) {
      if (!this.HAD_AUTH()) {
        this.GO_TOPAGE('Login')
        return
      }
      if (from.name === 'Login') {
        await this.fetchData()
      }
      if (!this.HAS_PRIVILEGE(to.name) || to.name === 'Login') {
        this.GO_TOPAGE('Report')
        return
      }
    }
  }
}
</script>


<style lang="scss">
@import '@/assets/scss/my-style.scss';
@import '../node_modules/spectre.css/dist/spectre.min';
@import '../node_modules/spectre.css/dist/spectre-exp.min';

</style>
