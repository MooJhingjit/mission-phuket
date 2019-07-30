<template>
  <div class="card">
    <div class="card-body">
      <div class="columns">
        <div class="column col-sm-12 col-2 item-center">
          <button @click="GO_TOPAGE('CreateReport')" class="btn"> <i class="fas fa-plus-circle"></i> สร้างใหม่</button>
        </div>
        <div class="column col-sm-12">
          <div class="columns">
            <div class="column col-sm-12 col-5">
              <div class="form-group">
                <!-- <label class="form-label" for="input-example-1">ค้นหา</label> -->
                <!-- <input class="form-input" type="text" id="input-example-1" placeholder="คำค้นหา"> -->
                <my-input
                  :config="{
                    type: 'text',
                    key: 'mainSearch',
                    placeholder: 'ค้นหา ชื่อ-นามสกุล, ผู้รายงาน',
                    rules: ''
                  }"
                  :value="local.mainSearch"
                  @input="value => {local.mainSearch = value}"
                ></my-input>
              </div>
            </div>
            <div class="column col-sm-12">
              <div class="form-group">
                <!-- <label class="form-label" for="input-example-1">วันที่เริ่ม</label> -->
                <my-date-picker
                  :config="{
                    key: 'incidentDateStart',
                    placeholder: 'วันที่เกิดเหตุตั้งแต่',
                    rules: ''
                  }"
                  :value="local.incidentDateStart"
                  @input="val => {local.incidentDateStart = val}"
                ></my-date-picker>
              </div>
            </div>
            <div class="column col-sm-12">
              <div class="form-group">
                <!-- <label class="form-label" for="input-example-1">วันที่สิ้นสุด</label> -->
                <my-date-picker
                  :config="{
                    key: 'incidentDateEnd',
                    placeholder: 'ถึงวันที่',
                    rules: ''
                  }"
                  :value="local.incidentDateEnd"
                  @input="val => {local.incidentDateEnd = val}"
                ></my-date-picker>
              </div>
            </div>
          </div>
          <div class="columns mt-2">
            <div class="column col-sm-12 col-5">
              <div class="form-group">
                <!-- <label class="form-label" for="input-example-1">สถานะ</label> -->
                <select class="form-select" v-model="local.reportStatus">
                  <option :value="item.key" :key="index" v-for="(item, index) in reportStatus">{{item.value}}</option>
                </select>
              </div>
            </div>
            <div class="column col-sm-12  col-5">
              <div class="form-group">
                <!-- <label class="form-label" for="input-example-1"></label> -->
                <label class="form-radio form-inline">
                  <input type="radio" name="reportType" value="all" v-model="local.reportType"><i class="form-icon"></i> ทั้งหมด
                </label>
                <label class="form-radio form-inline">
                  <input type="radio" name="reportType" value="clinical" v-model="local.reportType"><i class="form-icon"></i> Clinical
                </label>
                <label class="form-radio form-inline">
                  <input type="radio" name="reportType" value="non-clinical" v-model="local.reportType"><i class="form-icon"></i> Non Clinical
                </label>
                
              </div>
            </div>
            <div class="column">
              <!-- <label class="form-label" for="input-example-1"></label> -->
              <button class="btn btn-primary" @click="search()"><i class="form-icon fas fa-search"></i> ค้นหา</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import MyDatePicker from '@Components/Form/myDatePicker'
import MyInput from '@Components/Form/myInput'
import config from '@Config/app.config'

export default {
  components: {
    MyDatePicker,
    MyInput
  },
  props: {
    searchParams: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      local: {}
    }
  },
  created () {
    this.local = this.searchParams
  },
  computed: {
    reportStatus () {
      return config.reportStatus
    }
  },
  methods: {
    search() {
      // console.log(this.local);
      this.$emit('search', this.local)
    }
  },
  watch: {
    // searchParams () {
    //   console.log('test');
    //   this.local = this.searchParams
    // }
  }
}
</script>

<style lang="scss" scoped>

</style>
