<template>
  <div ref="report" v-if="reportData && searchData">
    <div style="text-align: center">
      <p><strong>ประเภท:</strong> {{reportType}} <strong>สถานะ:</strong> {{reportStatus}} <strong>คำค้นหา:</strong> {{mainSearch}}</p>
      <p><strong>ตั้งแต่วันที่:</strong> {{moment(incidentDateStart).format('DD/MM/YYYY HH:mm:ss')}}  <strong>ถึงวันที่:</strong> {{moment(incidentDateEnd).format('DD/MM/YYYY HH:mm:ss')}}</p>
      <p></p>
    </div>
    <table class="table table-scroll" style="overflow-x: auto;display: block;white-space: normal;width: auto">
      <thead>
        <tr>
          <th></th>
          <th>วันที่รายงาน</th>
          <th>วันที่เกิดเหตุ</th>
          <th>ชื่อ-นามสกุล</th>
          <th style="min-width: 100px">ผู้แจ้ง</th>
          <th style="min-width: 100px">type</th>
          <th style="min-width: 100px">ความรุนแรง</th>
          <th colspan="2" style="min-width: 1000px; text-align: center;">โปรแกรม/ผลกระทบ</th>
          <th style="min-width: 200px">ผู้ที่ได้รับผลกระทบ</th>
          <th colspan="3" style="min-width: 1000px; text-align: center;">การตอบ (สาเหตุ/วิธีป้องกัน/ผู้รับผิดชอบ)</th>
          <th style="min-width: 100px">แผนกที่รับผิดชอบ</th>
          <!-- <th>สาเหตุ</th>
          <th>วิธีป้องกัน</th>
          <th>ผู้รับผิดชอบ</th> -->
          <th style="min-width: 250px">สรุปเหตุการณ์</th>
          <th style="min-width: 250px">การแก้ปัญหาเบื้องต้น</th>
          <th style="min-width: 250px">ความเห็นหัวหน้างาน/ฝ่าย</th>
          <th style="min-width: 250px">หมายเหตุ</th>
          <th style="min-width: 250px">สถานะ</th>
          <!-- <th>ประเภท</th> -->
        </tr>
      </thead>
      <tbody>
        <tr :key="index" v-for="(item, index) in reportData">
          <td>{{index+1}}</td>
          <td>{{moment(item.reportDate).format('DD/MM/YYYY HH:mm:ss')}}</td>
          <td>{{moment(item.incidentDate).format('DD/MM/YYYY HH:mm:ss')}}</td>
          <!-- <td></td> เลขที่-->
          <td>{{item.name}}</td>
          <td>{{item.reporter}}</td>
          <!-- <td>xxxxxxxxxxx</td> -->
          <td>{{item.programType}}</td>
          <td>{{(item.violence.clinical || item.violence.general)}}</td>
          <td colspan="2">
            <table class="table" style="text-align: left;" > 
              <tr :key="index" v-for="(e, index) in item.program">
                <td :style="{'min-width': '500px', 'border-bottom': (item.program.length <= 1) ? '0': '.05rem solid #dadee4'}">{{e.key}}</td>
                <td :style="{'min-width': '500px', 'border-bottom': (item.program.length <= 1) ? '0': '.05rem solid #dadee4'}">{{e.value}}</td>
              </tr>
            </table>
          </td>
          <td>{{getAffectedPerson(item.affectedPerson)}}</td>
          <td colspan="3">
            <table class="table" style="text-align: left;">
              <tr :key="index" v-for="(e, index) in item.responsibilities">
                <!-- <td>{{item.department.name}}</td> -->
                <td :style="{'border-bottom': (item.responsibilities.length <= 1) ? '0': '.05rem solid #dadee4'}">
                  <div v-if="!e.answers.length" style="text-align: right;"></div> <!-- {{e.department.name}} -->
                  <table class="table" v-else>
                    <tr :key="index" v-for="(itemAns, index) in e.answers">
                      <td  :style="{'min-width': '400px', 'border-bottom': (e.answers.length <= 1) ? '0': '.05rem solid #dadee4'}">{{itemAns.cause}}</td>
                      <td  :style="{'min-width': '400px', 'border-bottom': (e.answers.length <= 1) ? '0': '.05rem solid #dadee4'}">{{itemAns.prevention}}</td>
                      <td  :style="{'min-width': '200px', 'border-bottom': (e.answers.length <= 1) ? '0': '.05rem solid #dadee4'}">{{itemAns.responsible}}</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
          <td>
            <table class="table" style="text-align: left;">
              <tr :key="index" v-for="(e, index) in item.responsibilities">
                <td :style="{'border-bottom': (item.responsibilities.length <= 1) ? '0': '.05rem solid #dadee4'}">
                  <div v-if="!e.answers.length" style="text-align: right;">{{e.department.name}}</div>
                  <table class="table" v-else>
                    <tr :key="index" v-for="(itemAns, index) in e.answers">
                      <td  :style="{'min-width': '200px', 'text-align': 'right', 'border-bottom': (e.answers.length <= 1) ? '0': '.05rem solid #dadee4'}">{{e.department.name}}</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
          <td>{{item.eventBriefing}}</td>
          <td>{{item.causeAnalysis}}</td>
          <td>{{item.comment}}</td>
          <td>{{item.note}}</td>
          <td>{{item.status}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import to from 'await-to-js';
import service from '@Services/app.service'
import config from '@Config/app.config'
import moment from 'moment';

export default {
  props: {
    searchData: {
      type: Object,
      required: true
    },
    reportData: {
      type: Array,
      required: true
    }
  },
  components: {
  },
  name: 'reportTemplate',
  created () {
    // this.fetchConfigReport()
  },
  data () {
    return {
      local: {},
      moment: moment
      // local: null
    }
  },
  computed: {
    incidentDateStart () {
      if (this.searchData.incidentDateStart) {
        return this.searchData.incidentDateStart
      }
    },
    incidentDateEnd () {
      if (this.searchData.incidentDateEnd) {
        return this.searchData.incidentDateEnd
      }
    },
    mainSearch () {
      if (this.searchData.mainSearch) {
        return this.searchData.mainSearch
      }
    },
    reportStatus () {
      if (this.searchData.reportStatus) {
        return config.reportStatus.filter((item) => {
          return item.key === this.searchData.reportStatus
        })[0].value
      }
    },
    reportType () {
      if (this.searchData.reportType) {
        if (this.searchData.reportType === 'all') return 'ทั้งหมด'
        return this.searchData.reportType
      }
    }
  },
  methods: {
    print () {
      // console.log('reportData', this.reportData);
      let win = window.open('', 'Title', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=950,height=600,top=0,left=0')
      let html = this.$refs.report
      // win.document.header = ''
      // win.document.body.innerHTML = html.innerHTML
      win.document.write(`<html><head><link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre.min.css"></head><body>
      ${html.innerHTML}
      </body></html>`); 
      win.document.close();
    },
    getAffectedPerson (persons) {
      let affectedPerson = { // from server's config
        patient: 'ผู้ป่วย',
        relative: 'ญาติ',
        authorities: 'เจ้าหน้าที่',
        environment: 'สิ่งแวดล้อม'
      }
      return persons.split('|').map((item) => {
        return affectedPerson[item]
      }).join(', ')
    }
  },
  watch: {
    reportData: {
        handler: function() {
          setTimeout(() => {
            this.print();
          }, 500)
        }
    }
  }
}
</script>

<style lang="scss" scoped>
// .page {
//   color: 'red'
// }
</style>