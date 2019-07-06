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
      <button class="m-2 btn"><i class="fas fa-check-circle"></i> Approve</button>
      <button class="m-2 btn btn-link"><i class="fas fa-print"></i> Print Report</button>
      <button class="m-2 btn btn-error"><i class="fas fa-trash-alt"></i> Delete</button>
    </div>
  </div>
</template>

<script>
import NavigationBar from '@Components/navigation'
import reportDetail from '@Components/reportDetail';
import to from 'await-to-js';
import service from '@Services/app.service'
import config from '@Config/app.config'

export default {
  components: {
    NavigationBar,
    reportDetail
  },
  data () {
    return {
      local: {
        report: null,
        responsibilities: []
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
    },
    async fetchData () {
      let err, res;
      [ err, res ] = await to(service.getResource({ resourceName: `${config.api.overview.index}/${this.$route.params.key}`}));
      if(err) return;
      this.local.responsibilities = res.data.responsibilities
    }
  }
}
</script>
