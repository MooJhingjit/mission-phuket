<template>
  <div class="container">
    <header class="columns">
      <div class="column d-flex col-sm-12">
        <div class="columns col-oneline item-center c-hand" @click="GO_TOPAGE('Report')">
          <div class="column col-3 item-center">
            <img src="https://walktalkwellness.files.wordpress.com/2017/02/cropped-hospital-phuket-mission-logo1.jpg" width="80" height="80">
          </div>
          <div class="column col-9">
            <h4>รายงานอุบัติการณ์</h4>
            <h6>โรงพยาบาลมิชชั่นภูเก็ต </h6>
          </div>
        </div>
        
      </div>
      <div class="column user-profile col-sm-12">
        <p class="text-bold">Pokkrong Jhingjit</p>
        <p>ฝ่าย IT</p>
        <div>
          <button class="btn btn-action s-circle m-1 tooltip" data-tooltip="ตั้งค่าระบบ" @click="GO_TOPAGE('Settings')"> <i class="fas fa-cogs"></i> </button>
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
  // computed: {
  //   routeLists () {
  //     return this.$route.matched.filter((route) => route.meta.label)
  //   }
  // },
  methods: {
    logout() {
      this.GO_TOPAGE('Login')
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
</style>
