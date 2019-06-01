<template>
  <div class="container columns">
    <div class="column col-12 item-center">
      <div class="empty">
        <img src="https://walktalkwellness.files.wordpress.com/2017/02/cropped-hospital-phuket-mission-logo1.jpg" width="70" height="70">
        <p class="h5">ระบบรายงานอุบัติการณ์</p>
        <div class="columns">
          <div class="column col-8 col-xs-12">
            <div class="input-group m-2">
              <span class="input-group-addon addon-lg"><i class="fas fa-user"></i> </span>
              <input type="text" class="form-input input-lg" placeholder="ชื่อผู้ใช้">
            </div>
            <div class="input-group m-2">
              <span class="input-group-addon addon-lg"><i class="fas fa-key"></i> </span>
              <input type="text" class="form-input input-lg" placeholder="รหัสผ่าน">
            </div>
          </div>
          <div class="column col-4 col-xs-12 item-center submit-btn">
            <button class="btn btn-primary" @click="login">เข้าสู่ระบบ <i class="fas fa-sign-in-alt"></i></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      local: {
      }
    }
  },
  methods: {
    login () {
      this.GO_TOPAGE('Report')
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: -webkit-fill-available;
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

