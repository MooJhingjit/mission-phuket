<template>
  <div class="card">
    <div class="card-body">
      <div class="columns">
        <div class="column col-sm-12 col-2 item-center">
          <button @click="GO_TOPAGE('CreateReport')" class="btn"> <i class="fas fa-plus-circle"></i> สร้างใหม่</button>
        </div>
        <div class="column col-sm-12">
          <div class="columns">
            <div class="column col-sm-12  col-5">
              <div class="form-group">
                <!-- <label class="form-label" for="input-example-1">ค้นหา</label> -->
                <!-- <input class="form-input" type="text" id="input-example-1" placeholder="คำค้นหา"> -->
                <my-input
                  :config="{
                    type: 'text',
                    key: 'mainSearch',
                    placeholder: 'ค้นหา ชื่อ-นามสกุล',
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
              <!-- <div class="form-group" v-if="USER.childDepartments.length">
                <select class="form-select" v-model="local.departmentGroup">
                  <option :value="item.key" :key="index" v-for="(item, index) in departmentGroup">{{item.value}}</option>
                </select>
              </div> -->
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
              <div class="form-group" v-if="!IS_ADMIN">
                <!-- <label class="form-label" for="input-example-1"></label> -->
                <label class="form-radio form-inline">
                  <input type="radio" name="reportAssociated" value="waitForAnswer" v-model="local.reportAssociated"><i class="form-icon"></i> ที่ต้องตอบกลับ
                </label>
                <label class="form-radio form-inline">
                  <input type="radio" name="reportAssociated" value="all" v-model="local.reportAssociated"><i class="form-icon"></i> ทั้งหมด
                </label>
              </div>
            </div>
            <div class="column columns">
              <div class="column col-12"><button class="btn btn-primary" @click="search()"><i class="form-icon fas fa-search"></i> ค้นหา</button></div>
            </div>
          </div>
          <div class="columns mt-2" v-if="IS_ADMIN">
            <div class="column col-sm-12 col-5">
              <div class="form-group">
                <select class="form-select" v-model="local.department">
                  <option :value="'all'">ทุกแผนก</option>
                  <option :value="item.key" :key="index" v-for="(item, index) in departmentSearchOptions">{{item.value}}</option>
                </select>
              </div>
            </div>
            <div class="column col-6"><button class="btn btn-primary" @click="printReport()"><i class="fas fa-print"></i> ออกรายงาน</button></div>              
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
import service from '@Services/app.service'
import to from 'await-to-js';

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
      local: {},
      departments: []
    }
  },
  created () {
    this.local = this.searchParams
    this.fetchDepartmentData()
  },
  computed: {
    reportStatus () {
      return config.reportStatus
    },
    departmentGroup () {
      return this.USER.childDepartments.map((item) => {
        return {
          key: item,
          value: item
        }
      })
    },
    departmentSearchOptions () {
      return this.departments.map((item) => {
        return {
          key: item._id,
          value: item.name
        }
      })
    }
  },
  methods: {
    async fetchDepartmentData() {
      let err, res;
      let resourceName = config.api.department.index;
      [ err, res ] = await to(service.getResource({ resourceName }));
      if(err) return;
      this.departments = res.data.department
    },
    search() {
      // console.log(this.local);
      this.$emit('search', this.local)
    },
    printReport() {
      this.$emit('printReport', this.local)
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
