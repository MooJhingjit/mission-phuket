<template>
  <div ref="report" class="page" v-if="local.programLists">
    <header>
      <h2>โรงพยาบาลมิชชั่นภูเก็ต</h2>
      <h3>รายงานอุบัติการณ์ (Hospital Risk Profile)</h3>
      <!-- <h4>ผู้ออกรายงาน: {{USER.name}} วันที่ {{moment().format('DD-MM-YYYY HH:mm')}}</h4> -->
    </header>
    <br/>
    <hr>
    <section>
      <section class="title-section">
        <table width="100%">
          <tr>
            <td>
              <label>วันที่เกิดเหตุ</label>: {{moment(report.incidentDate).format('DD-MM-YYYY HH:mm:ss')}}
            </td>
            <td>
              <label>ผู้ที่ได้รับผลกระทบ</label>: {{report.affectedPerson}}
            </td>
            <td>
            </td>
          </tr>
          <tr>
            <td>
              <label>HN</label>: {{report.hn}}
            </td>
            <td>
              <label>ชื่อ-นามสกุล</label>: {{report.name}}
              <!-- <label>แผนกบริเวณที่พบเหตุ</label>: {{report.area}} -->
            </td>
            <td>
              <label>อายุ</label>: {{report.age}}
              <!-- <label>ผู้ที่ได้รับผลกระทบ</label>: {{report.affectedPerson}} -->
            </td>
          </tr>
          <tr>
            <td>
              <label>วันที่รายงาน</label>: {{moment(report.reportDate).format('DD-MM-YYYY')}}
            </td>
            <td>
              <template v-if="IS_ADMIN"><label>ผู้รายงาน</label>: {{report.reporter}}</template>
              
            </td>
            <td>
              <!-- <label>สถานะ</label>: {{getReportStatusTrans(report.status).value}} -->
            </td>
          </tr>
          <tr>
            <td colspan="3">
              <label>แผนกบริเวณที่พบเหตุ</label>: {{report.area}}
            </td>
          </tr>
        </table>
      </section>
      <hr>
      <!-- <section>
        <label>รูปแบบของเหตุการณ์ที่เกิด:  </label>
      </section>
      <hr> -->
      <section>
        <div><label>เหตุการณ์ที่เกิดขึ้นของอุบัติการณ์ครั้งนี้ ({{(report.programType === 'non-clinical') ? 'Non Clinical': 'Clinical'}})</label></div>
        <br/>
        <section class="section" v-if="report.programType === 'non-clinical'">
          <!-- <p>หมวดเหตุการณ์: Non Clinical</p> -->
          <table width="100%" border="1" class="border">
            <tr>
              <td>
                <label>{{nonClinicalProgram.env.title}}</label>: {{getNonClinicalValue('env', report.program.env)}}
              </td>
              <td>
                <label>{{nonClinicalProgram.facilities.title}}</label>: {{getNonClinicalValue('facilities', report.program.facilities)}}
              </td>
            </tr>
            <tr>
              <td>
                <label>{{nonClinicalProgram.im.title}}</label>: {{getNonClinicalValue('im', report.program.im)}}
              </td>
              <td>
                <label>{{nonClinicalProgram.hrd.title}}</label>: {{getNonClinicalValue('hrd', report.program.hrd)}}
              </td>
            </tr>
            <tr>
              <td>
                <label>{{nonClinicalProgram.budget.title}}</label>: {{getNonClinicalValue('budget', report.program.budget)}}
              </td>
              <td>
                <label>{{nonClinicalProgram.rights.title}}</label>: {{getNonClinicalValue('rights', report.program.rights)}}
              </td>
            </tr>
          </table>
        </section>
        <section class="section" v-else>
          <!-- <p>หมวดเหตุการณ์: Clinical</p> -->
          <label>ความเสี่ยงทางคลินิกทั่วไป (Common Clinical Risk)</label>
          <table width="100%" border="1" class="border">
            <tr>
              <td>
                <label>{{clinicalProgram.common.IC.title}}</label>: {{getClinicalValue('common', 'IC', report.program.common.IC)}}
              </td>
              <td>
                <label>{{clinicalProgram.common.PCT.title}}</label>: {{getClinicalValue('common', 'PCT', report.program.common.PCT)}}
              </td>
            </tr>
            <tr>
              <td>
                <label>{{clinicalProgram.common.PTC.title}}</label>: {{getClinicalValue('common', 'PTC', report.program.common.PTC)}}
              </td>
              <td>
                <label>{{clinicalProgram.common.operation.title}}</label>: {{getClinicalValue('common', 'operation', report.program.common.operation)}}
              </td>
            </tr>
            <tr>
              <td>
                <label>{{clinicalProgram.common.review.title}}</label>: {{getClinicalValue('common', 'review', report.program.common.review)}}
              </td>
              <td></td>
            </tr>
          </table>
          <br/>
          <label>ความเสี่ยงทางคลินิกเฉพาะโรค (Disease-Specific Clinical Risk)</label>
          <table width="100%" border="1" class="border">
            <tr>
              <td>
                <label>{{clinicalProgram.spacific.anesthesiology.title}}</label>: {{getClinicalValue('spacific', 'anesthesiology', report.program.spacific.anesthesiology)}}
              </td>
              <td>
                <label>{{clinicalProgram.spacific.dental.title}}</label>: {{getClinicalValue('spacific', 'dental', report.program.spacific.dental)}}
              </td>
            </tr>
            <tr>
              <!-- <td>
                <label>{{clinicalProgram.spacific.generalEnt.title}}</label>: {{getClinicalValue('spacific', 'generalEnt', report.program.spacific.generalEnt)}}
              </td> -->
              <td>
                <label>{{clinicalProgram.spacific.gynecology.title}}</label>: {{getClinicalValue('spacific', 'gynecology', report.program.spacific.gynecology)}}
              </td>
              <td>
                <label>{{clinicalProgram.spacific.medicine.title}}</label>: {{getClinicalValue('spacific', 'medicine', report.program.spacific.medicine)}}
              </td>
            </tr>
            <tr>
              <td>
                <label>{{clinicalProgram.spacific.optic.title}}</label>: {{getClinicalValue('spacific', 'optic', report.program.spacific.optic)}}
              </td>
              <td>
                <label>{{clinicalProgram.spacific.orthopedic.title}}</label>: {{getClinicalValue('spacific', 'orthopedic', report.program.spacific.orthopedic)}}
              </td>
            </tr>
            <tr>
              <td>
                <label>{{clinicalProgram.spacific.pediatrics.title}}</label>: {{getClinicalValue('spacific', 'pediatrics', report.program.spacific.pediatrics)}}
              </td>
              <td>
                <label>{{clinicalProgram.spacific.radiology.title}}</label>: {{getClinicalValue('spacific', 'radiology', report.program.spacific.radiology)}}
              </td>
            </tr>
            <tr>
              <td>
                <label>{{clinicalProgram.spacific.surgery.title}}</label>: {{getClinicalValue('spacific', 'surgery', report.program.spacific.surgery)}}
              </td>
              <td></td>
            </tr>
          </table>
          <br/>
          <label>Sentinel Event</label>
          <table width="100%" border="1" class="border">
            <tr>
              <td>
                <label>{{clinicalProgram.event.event.title}}</label>: {{getClinicalValue('event', 'event', report.program.event.event)}}
              </td>
            </tr>
          </table>
        </section>
        <br/>
        <div>ระดับความรุนแรง: {{getViolence()}}</div>
      </section>
      <hr>
      <label>สรุปเหตุการณ์ (ใคร ทำอะไร เมื่อไหร่ และผลจากเหตุการณ์เป็นอย่างไร)</label>
      <section class="section border" style="min-height: 30px; margin-bottom: 10px">
        {{report.eventBriefing}}
      </section>
      <label>กิจกรรมที่ควรทำ / การแก้ไขปัญหาเบื้องต้น</label>
      <section class="section border" style="min-height: 30px; margin-bottom: 10px">
        {{report.causeAnalysis}}
      </section>
      <label>ความเห็นหัวหน้างาน / ฝ่าย</label>
      <section class="section border" style="min-height: 30px; margin-bottom: 10px">
        {{report.comment}}
      </section>
    </section>
    <br/>
    <hr>
    <footer>
      <p>ผู้ออกรายงาน: {{USER.name}}</p>
      <p>วันที่ {{moment().format('DD-MM-YYYY HH:mm')}}</p>
    </footer>
  </div>
</template>

<script>
import moment from 'moment';
import config from '@Config/app.config'
import service from '@Services/app.service'
import to from 'await-to-js';

export default {
  props: {
    reportObj: {
      type: Object,
      required: true
    },
    responsibilities: {
      type: Array,
      required: true
    },
  },
  components: {
  },
  name: 'reportTemplate',
  created () {
    this.fetchConfigReport()
  },
  data () {
    return {
      moment,
      local: {
        programLists: null
      }
      // local: null
    }
  },
  computed: {
    report () {
      if (this.reportObj) {
        return this.reportObj;
      }
      return {};
    },
    clinicalProgram () {
      if (this.local.programLists && this.local.programLists.clinical) {
        return this.local.programLists.clinical;
      }
      return {}
    },
    nonClinicalProgram () {
      if (this.local.programLists && this.local.programLists.nonClinical) {
        return this.local.programLists.nonClinical;
      }
      return {}
    },
  },
  methods: {
    async fetchConfigReport () {
      let err, res;
      [ err, res ] = await to(service.getResource({ resourceName: config.api.report.config }));
      if(err) return;
      this.local.programLists = res.data.reportConfig
      // console.log(this.local.programLists);
      // setTimeout( async() => {
       
      // }, 1000)
    },
    print () {
      // console.log('report.program', this.report.program);
      // console.log('programLists trans', this.local.programLists.clinical);
      let html = this.$refs.report
      var win = window.open('', 'Title', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=950,height=600,top=0,left=0')
      let style = document.createElement('style')
      style.type = 'text/css'
      let css = '@media print {@page { margin: 0; }body { margin: 1.5cm 1cm; }}'
      // let css = ''
      if (style.styleSheet) {
        // This is required for IE8 and below.
        style.styleSheet.cssText = css
      } else {
        style.appendChild(document.createTextNode(css))
        style.appendChild(document.createTextNode(`.page{margin: 0 auto;width: 1000px;border: 1px solid #ccc;padding: 15px;color: #595959;}
html{font-size: 14px}
hr{margin: 15px 0}
header {text-align: center;}
table {border-collapse: collapse;}
table, td {border: 0px solid #ccc; word-wrap: break-word;}
table, td, label {font-size: 14px;}
table.border td {border: 1px solid #ccc; word-wrap: break-word; padding: 3px;}
table.border td label {font-weight: bold;}
.section.border{padding: 10px;border: 1px solid #ccc;}
label, p {}
footer{text-align: right;}`) )
      }
      win.document.getElementsByTagName('head')[0].appendChild(style)
      win.document.body.innerHTML = html.innerHTML
      // win.focus()
      win.print()
    },
    getReportStatusTrans (status) {
      return config.reportStatus.filter((item) => {
        return item.key === status
      })[0]
    },
    getViolence () {
      // console.log(this.local.programLists);
      let type = (this.reportObj.programType === 'non-clinical') ? 'general' : 'clinical';
      let data = this.local.programLists.violence[type].options.filter((item) => {
        return item.value === this.reportObj.violence[type]
      })[0]
      if (data) {
        return data.title;
      }
      return '';
    },
    getNonClinicalValue (key, value) {
      let data = this.local.programLists.nonClinical[key].options.filter((item) => {
        return item.value === value
      })[0]
      if (data) {
        return data.title;
      }
      return '';
    },
    getClinicalValue (group, key, value) {
      if (value === null) return '';
      let data = this.local.programLists.clinical[group][key].options.filter((item) => {
        return item.value === value
      })[0]
      if (data) {
        return data.title;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// .test {
//   color: 'red'
// }
</style>