<template>
  <div class="container columns">
    <div class="column col-12 item-center">
      <div class="empty">
        <img src="https://walktalkwellness.files.wordpress.com/2017/02/cropped-hospital-phuket-mission-logo1.jpg" width="70" height="70">
        <p class="h5">ระบบรายงานอุบัติการณ์</p>
        <div class="columns">
          <div class="column col-8 col-xs-12">
            <div class="input-group m-2">
              <span class="input-group-addon"><i class="fas fa-user"></i> </span>
              <my-input
                :config="{
                  type: 'text',
                  key: 'username',
                  placeholder: 'ชื่อผู้ใช้',
                  rules: 'required',
                  validator: $validator
                }"
                :value="local.username"
                @input="value => {local.username = value}"
              ></my-input>
              <!-- <input type="text" class="form-input input-lg" v-model="local.username" v-validate="'required'" placeholder="ชื่อผู้ใช้"> -->
            </div>
            <div class="input-group m-2">
              <span class="input-group-addon"><i class="fas fa-key"></i> </span>
              <my-input
                :config="{
                  type: 'password',
                  key: 'password',
                  placeholder: 'รหัสผ่าน',
                  rules: 'required',
                  validator: $validator
                }"
                :value="local.password"
                @input="value => {local.password = value}"
              ></my-input>
              <!-- <input type="password" class="form-input input-lg" v-model="local.password" v-validate="'required'" placeholder="รหัสผ่าน"> -->
            </div>
          </div>
          <div class="column col-4 col-xs-12 item-center submit-btn">
            <!-- <button class="btn btn-primary" @click="login">เข้าสู่ระบบ <i class="fas fa-sign-in-alt"></i></button> -->
            <my-button
              :config="{
                icon: 'fas fa-sign-in-alt',
                btnClass: 'btn btn-primary',
                doConfirm: false,
                text: 'เข้าสู่ระบบ'
              }"
              @submit="(tf) => login()"></my-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapActions } from 'vuex'
import MyInput from '@Components/Form/myInput'
import MyButton from '@Components/Form/myButton'
import config from '@Config/app.config'
import service from '@Services/app.service'
import to from 'await-to-js';
import Helper from '@Libraries/common.helpers'

export default {
  components: {
    MyInput,
    MyButton
  },
  data () {
    return {
      local: {
        username: null,
        password: null
      }
    }
  },
  methods: {
    ...mapActions([
      'SET_USER_STORE'
    ]),
    async fetchData() {
      let err, res;
      let resourceName = config.api.user.profile;
      [ err, res ] = await to(service.getResource({ resourceName, queryString: []}))
      if(err) return
      return res.data.user
    },
    async login () {
      // console.log(config);
      let isPass = await this.$validator.validate()
      if (isPass) {
        let err, res
        [err, res] = await to(service.postResource({ resourceName: config.api.login, data: {
          username: this.local.username,
          password: this.local.password
        }}))
        if(err) return
        // console.log(res);
        this.initAppData(res.data)
      }
    },
    async initAppData (data) {
      Helper.SET_STORAGEITEM(config.variable.tokenStorage, data.token)
      Helper.SET_STORAGEITEM(config.variable.authStorage, 1)
      let userData = await this.fetchData()
      this.SET_USER_STORE({data: userData})
      this.GO_TOHOMEPAGE()
      // GOTOHOME
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: -webkit-fill-available;
}
.input-group-addon{
  display: inline-table;
}
.empty{
  background: white;
  padding: 3em;
  -webkit-box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.75);
  .submit-btn{
    padding: 10px;
    button{
      flex:1;
      height: 100%;
    }
  }
}
</style>

