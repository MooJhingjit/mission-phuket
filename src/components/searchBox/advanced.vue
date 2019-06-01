<template>
  <div class="columns column col-12">
    
    <div class="column col-12 search-options p-1 text-right c-hand">
      <div class="dropdown">
        <a href="#" class="btn btn-link dropdown-toggle" tabindex="0">
          ตัวเลือกเครื่องมือค้นหา <i class="fas fa-chevron-circle-down"></i>
        </a>
        <!-- menu component -->
        <div class="menu">
             <div class="card">
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
    <!-- <div :class="['advanced-searchbox column col-12 p-absolute', {'d-none': local.isHide}]">
      <div class="card">
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
    </div> -->
  </div>
</template>

<script>
export default {
  computed: {
    routeLists () {
      return this.$route.matched.filter((route) => route.meta.label)
    }
  },
  data () {
    return {
      local: {
        isHide: true,
      }
    }
  },
  methods: {
    setDisplay() {
      this.local.isHide = !this.local.isHide
    }
  }
}
</script>

<style lang="scss" scoped>
.dropdown{
  width: 100%;
  .menu{
    right: 0;
  }
}
</style>
