<template>
  <div class="container columns">
    <div class="column col-12 item-center">
      <div class="empty">
        <p class="empty-title h2">ระบบรายงานอุบัติการณ์</p>
        <p class="empty-title h5">โรงพยาบาลมิชชั่นภูเก็ต</p>
        <div>
          <div class="input-group m-2">
            <span class="input-group-addon addon-lg">ชื่อผู้ใช้</span>
            <input type="text" class="form-input input-lg" placeholder="">
          </div>
          <div class="input-group m-2">
            <span class="input-group-addon addon-lg">รหัสผ่าน</span>
            <input type="text" class="form-input input-lg" placeholder="">
          </div>
        </div>
        <div class="empty-action">
          <button class="btn btn-primary">เข้าสู่ระบบ <i class="fas fa-sign-in-alt"></i></button>
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
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: -webkit-fill-available;
}
</style>

