<template>
  <div class="container columns">
    <navigation-bar />
    <div class="column col-4 col-md-12">
      <report-detail v-if="local.report" :report="local.report"/>
    </div>
    <div class="column col-8 col-md-12">
      <div class="panel">
        <div class="panel-header">
          <div class="panel-title text-bold">ส่วนงานที่ต้องแก้ไข</div>
        </div>
        <div class="panel-body">
          <div class="card m-2" :key="index" v-for="(item, index) in local.responsibilities">
            <div class="card-header">
              <div class="card-title">แผนก {{item.department.name}}</div>
              <!-- <div class="card-subtitle text-gray">...</div> -->
            </div>
            <div class="card-body p-1">
              <table class="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>สาเหตุ</th>
                    <th>ป้องกัน</th>
                    <th>ผู้รับผิดชอบ</th>
                  </tr>
                </thead>
                <tbody v-if="item.answers.length">
                  <tr class="" :key="index" v-for="(anwser, index) in item.answers">
                    <td>{{anwser.cause}}</td>
                    <td>{{anwser.prevention}}</td>
                    <td>{{anwser.responsible}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="column col-12 text-right">
      <button class="m-2 btn" v-if="USER_RIGHT.includes('ReportAction') && local.reportStatus === 'hadAllAnswer'" @click="event('updateStatus', 'approved')"><i class="fas fa-check-circle"></i> Approve</button>
      <button class="m-2 btn btn-link" @click="printReport()"><i class="fas fa-print"></i> Print Report</button>
      <button class="m-2 btn btn-error" v-if="USER_RIGHT.includes('ReportAction')" @click="event('remove')"><i class="fas fa-trash-alt"></i> Delete</button>
    </div>
    <report-template class="report-template" ref="reportTemplate" v-if="local.report" :reportObj="local.report"></report-template>
  </div>
</template>

<script>
import NavigationBar from '@Components/navigation'
import reportDetail from '@Components/reportDetail';
import to from 'await-to-js';
import service from '@Services/app.service'
import config from '@Config/app.config'
import reportTemplate from './report'
export default {
  components: {
    NavigationBar,
    reportDetail,
    reportTemplate
  },
  data () {
    return {
      local: {
        report: null,
        responsibilities: []
        // isReportApproved: false
      }
    }
  },
  async created () {
    await this.fetchReportData()
    await this.fetchData()
  },
  methods: {
    async fetchReportData () {
      let err, res;
      [ err, res ] = await to(service.getResource({ resourceName: `${config.api.report.index}/${this.$route.params.key}`}));
      if(err) return;
      this.local.report = res.data.report
      // this.local.isReportApproved = (res.data.report.status === 'approved')
      this.local.reportStatus = res.data.report.status
    },
    async fetchData () {
      let err, res;
      [ err, res ] = await to(service.getResource({ resourceName: `${config.api.overview.index}/${this.$route.params.key}`}));
      if(err) return;
      this.local.responsibilities = res.data.responsibilities
    },
    printReport () {
      this.$refs.reportTemplate.print()
    },
    async event (type, data = null) {
      let err, res, resourceName;
      let queryString = {};
      let tf = false;
      switch(type) {
        case 'remove':
          tf = await this.$swal({
            text: "ลบรายงานนี้!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'ตกลง',
            cancelButtonText: 'ยกเลิก',
            reverseButtons: true
          });
          if (!tf.value) return;
          resourceName = config.api.report.index;
          queryString = { id: this.$route.params.key };
          [ err, res ] = await to(service.deleteResource({ resourceName, queryString }));
          if(err) return;
          break;
        case 'updateStatus':
          tf = await this.$swal({
            text: "ยืนยันการทำรายการ",
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'ตกลง',
            cancelButtonText: 'ยกเลิก',
            reverseButtons: true
          });
          if (!tf.value) return;
          resourceName = `${config.api.report.approve}/${this.$route.params.key}`;
          [ err, res ] = await to(service.putResource({ resourceName, data: {
            status: 'approved'
          }}))
          if(err) return;
          // this.local.isReportApproved = true
          await this.fetchReportData()
          break;
      }
      this.$notify({
        group: 'default',
        text: 'ทำรายการสำเร็จ',
        type: 'success',
      });
      if (type === 'remove') {
        this.GO_TOPAGE('Report')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.report-template{
  display: none
}
</style>