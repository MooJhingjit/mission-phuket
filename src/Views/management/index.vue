<template>
  <div class="container columns">
    <navigation-bar />
    <div class="column col-4 col-md-12">
      <report-detail v-if="local.report" :report="local.report"/>
    </div>
    <div class="column col-8 col-md-12">
      <div class="panel">
        <div class="panel-header columns">
          <div class="form-group column col-6">
            <!-- <label class="form-label">ส่วนงาน</label> -->
            <select class="form-select" v-model="local.departmentInput" name="departmentInput" v-validate="'required'">
              <option :value="null">เลือกส่วนงาน</option>
              <option :key="index" v-for="(item, index) in local.departmentOptions" :value="item._id">{{item.name}}</option>
            </select>
            <!-- <p class="form-input-hint text-error" v-if="errors.first('departmentInput')">กรุณาตรวจสอบข้อมูลข้างต้น</p> -->
          </div>
          <div class="column col-6">
            <div class="column col-md-4">
              <div class="form-group">
                <button class="btn btn-primary" @click="event('add')">บันทึกข้อมูล</button>
              </div>
            </div>
          </div>
        </div>
        <div class="panel-body">
          <div class="card">
            <div class="card-header">
              <div class="card-title">ตารางแสดงรายชื่อส่วนงานที่ต้องลงบันทึกและดำเนินการ</div>
              <!-- <div class="card-subtitle text-gray">...</div> -->
            </div>
            <div class="card-body">
              <table class="table table-striped table-hover">
                <tbody>
                  <tr class="" :key="index" v-for="(item, index) in local.managementLists">
                    <td>{{getDepartmentName(item.departmentId)}}</td>
                    <td><button class="btn btn-error" @click="event('remove', {key: item.departmentId})">ลบข้อมูล</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBar from '@Components/navigation'
import to from 'await-to-js';
import service from '@Services/app.service'
import config from '@Config/app.config'
import reportDetail from '@Components/reportDetail';
export default {
  components: {
    NavigationBar,
    reportDetail
  },
  data () {
    return {
      local: {
        idSelected: null,
        departmentOptions: [],
        departmentOptionsDefault: [],
        departmentInput: null,
        managementLists: null,
        report: null,
        reportTrans: {}
      }
    }
  },
  async created () {
    await this.fetchReportTransData()
    await this.fetchReportData()
    await this.fetchData()
    this.fetchDepartmentData();
  },
  methods: {
    async fetchReportData () {
      let err, res;
      [ err, res ] = await to(service.getResource({ resourceName: `${config.api.report.index}/${this.$route.params.key}`}));
      if(err) return;
      this.local.report = this.adjustData(res.data.report)
      if (this.local.report.status === 'approved') {
        this.GO_TOPAGE('Report')
      }
      // console.log(this.local.report);
    },
    async fetchReportTransData () { // translation data
      let err, res;
      [ err, res ] = await to(service.getResource({ resourceName: config.api.report.translation }));
      if(err) return;
      this.local.reportTrans = res.data.trans
    },
    adjustData (data) {
      let affectedPersonArr = data.affectedPerson.split('|');
      let affectedPersonStr = affectedPersonArr.map((item) => {
        return this.local.reportTrans.affectedPerson[item]
      }).join(', ')
      data.affectedPerson = affectedPersonStr;
      return data
    },
    async fetchData () {
      let err, res;
      [ err, res ] = await to(service.getResource({ resourceName: `${config.api.management.index}/${this.$route.params.key}` }));
      if(err) return;
      this.local.managementLists = res.data.management
    },
    async fetchDepartmentData () {
      let err, res;
      [ err, res ] = await to(service.getResource({ resourceName: config.api.department.index }));
      if(err) return;
      this.local.departmentOptions = res.data.department;
      this.local.departmentOptionsDefault = res.data.department;
      this.filterOutDepartment()
    },
    filterOutDepartment () {
      let departmentSelected = this.local.managementLists.map((item) => {
        return item.departmentId
      })
      this.local.departmentOptions = this.local.departmentOptions.filter((item) => {
        return !departmentSelected.includes(item._id)
      })
    },
    async event (type, data = null) {
      let err, res, resourceName, queryString, tf;
      switch(type) {
        case 'add':
          [ err, res ] = await to(this.$validator.validate());
          if(err || !res) return
          [ err, res ] = await to(service.postResource(
            { 
              resourceName: config.api.management.index,
              data: {
                departmentId: this.local.departmentInput,
                reportId: this.$route.params.key
              }
            }
          ))
          if(err) return;
          await this.fetchData()
          this.filterOutDepartment()
          break;
        case 'remove':
          tf = await this.$swal({
            text: "ลบข้อมูลนี้!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'ตกลง',
            cancelButtonText: 'ยกเลิก',
            reverseButtons: true
          });
          if (!tf.value) return;
          resourceName = config.api.management.index;
          data.managementId = this.$route.params.key
          // console.log(data);
           queryString = { departmentId: data.key, reportId: this.$route.params.key };
          [ err, res ] = await to(service.deleteResource({ resourceName, queryString}));
          if(err) return;
          await this.fetchData()
          this.fetchDepartmentData();
          break;
      }
      this.local.departmentInput = null
      
      this.$notify({
        group: 'default',
        text: 'ทำรายการสำเร็จ',
        type: 'success',
      });
      this.fetchReportData()
    },
    getDepartmentName (departmentId) {
      let item = this.local.departmentOptionsDefault.filter((item) => {
        return item._id === departmentId
      });
      if (item.length) {
        return item[0].name
      }
      return '';
    }
  }
}
</script>
