<template>
  <div class="container" v-if="USER && USER_RIGHT">
    <header class="columns">
      <div class="column d-flex col-sm-12">
        <div class="columns item-center c-hand" @click="GO_TOPAGE('Report')">
          <div class="column col-4 item-center logo">
            <img src="@/Assets/logo.png">
          </div>
          <div class="column col-8">
            <h4>รายงานอุบัติการณ์</h4>
            <h6>โรงพยาบาลมิชชั่นภูเก็ต </h6>
          </div>
        </div>
        
      </div>
      <div class="column user-profile col-sm-12">
        <p class="text-bold">{{USER.name}}</p>
        <p>{{USER.departmentName}}</p>
        <div>
          <button class="btn btn-action s-circle m-1 tooltip" v-if="USER_RIGHT.includes('Settings')" data-tooltip="ตั้งค่าระบบ" @click="GO_TOPAGE('Settings')"> <i class="fas fa-cogs"></i> </button>
          <!-- <button class="btn btn-action s-circle m-1 tooltip" data-tooltip="ตั้งค่าบัญชีผู้ใช้"> <i class="fas fa-user"></i> </button> -->
          <button class="btn btn-action s-circle m-1 tooltip btn-error" @click="logout" data-tooltip="ออกจากระบบ"> <i class="fas fa-sign-out-alt"></i> </button>
        </div>
      </div>
    </header>
    <div class="content">
      <transition
        name="fade"
        mode="out-in"
      >
        <router-view></router-view>
      </transition>
    </div>
    <footer class="item-center text-gray">
      <p> Mission Hospital Phuket 4/1 Moo 3. Thepkasatri Rd. Rasada District. Ampur Meaung. Phuket Province 83000</p>
      <p>Tel: (076) 237220-6  Fax: (076) 212149, 237250</p>
      <p>Created by pokkrong jhingjit 2019</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  computed: {
    // logo () {
    //   return '@/assets/logo.png'
    // }
  },
  methods: {
    logout() {
      this.LOGOUT()
    }
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
.logo {
   img{
    width: 130px;
    height: 130px;
  }
}
</style>
