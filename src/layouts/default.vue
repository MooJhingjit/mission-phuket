<template>
  <div class="container">
    <header class="columns">
      <div class="column d-flex col-sm-12">
        <div class="columns col-oneline item-center">
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
        <p>
          <button class="btn btn-action s-circle tooltip" data-tooltip="ตั้งค่าระบบ"> <i class="fas fa-cogs"></i> </button>
          <button class="btn btn-action s-circle tooltip" data-tooltip="ตั้งค่าบัญชีผู้ใช้"> <i class="fas fa-user-cog"></i> </button>
          <button class="btn btn-action s-circle tooltip btn-error" data-tooltip="ออกจากระบบ"> <i class="fas fa-sign-out-alt"></i> </button>
        </p>
      </div>
    </header>
    <div class="columns navigation-bar">
      <div class="column col-6  col-sm-12">
        <ul class="breadcrumb">
          <li class="breadcrumb-item" :key="list" v-for="(list) in routeLists">
            <router-link :to="{ name: list.name }">{{list.name}}</router-link>
          </li>
        </ul>
      </div>
      <div class="column col-6  col-sm-12">
        <div class="columns col-12">
          <div class="column col-5 item-right"><button class="btn"> <i class="fas fa-plus-circle"></i> สร้างใหม่</button></div>
          <div class="column col-7">
            <div class="has-icon-right">
              <input type="text" class="form-input main-input" placeholder="...">
              <i class="form-icon fas fa-search"></i>
            </div>
            <div class="search-options p-1 text-right c-hand">ตัวเลือกเครื่องมือค้นหา <i class="fas fa-chevron-circle-down"></i></div>
          </div>
          <div class="column col-12 d-none">
            <div class="card ">
              <div class="card-body">
                <div class="columns">
                  <div class="column">
                    <div class="form-group">
                      <label class="form-label" for="input-example-1">วันที่เริ่ม</label>
                      <input class="form-input" type="text" id="input-example-1" placeholder="">
                    </div>
                  </div>
                  <div class="column">
                    <div class="form-group">
                      <label class="form-label" for="input-example-1">วันที่สิ้นสุด</label>
                      <input class="form-input" type="text" id="input-example-1" placeholder="">
                    </div>
                  </div>
                </div>
                <div class="columns">
                  <div class="column col-12">
                    <div class="form-group">
                      <label class="form-label" for="input-example-1">สถานะ</label>
                      <select class="form-select">
                        <option>1. ยังไม่ส่งแบบติดตาม</option>
                        <option>Slack</option>
                        <option>Skype</option>
                        <option>Hipchat</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="columns">
                  <div class="column col-6">
                    <div class="form-group">
                      <label class="form-label" for="input-example-1"></label>
                      <label class="form-radio form-inline">
                        <input type="radio" name="gender" checked=""><i class="form-icon"></i> Clinical
                      </label>
                      <label class="form-radio form-inline">
                        <input type="radio" name="gender"><i class="form-icon"></i> Non Clinical
                      </label>
                    </div>
                  </div>
                  <div class="column col-6 text-right">
                      <label class="form-label" for="input-example-1"></label>
                      <button class="btn btn-primary"><i class="form-icon fas fa-search"></i> ค้นหา</button>
                  </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
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
    routeLists () {
      return this.$route.matched.filter((route) => route.name || route.meta.label )
    }
  }
}
</script>
