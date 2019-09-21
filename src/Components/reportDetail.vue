
<template>
 <div class="panel" v-if="
    clinicalProgram
    && programReport.program
    && nonClinicalProgram
    && violenceProgram">
      <!-- <div class="panel-header">
        <div class="panel-title h6 text-bold">รายละเอียด: xxxxx</div>
      </div> -->
      <div class="panel-body">
        <div class="chip" v-if="local.items && local.items.status">
          <i :class="['fas fa-circle', getReportStatusTrans(this.local.items.status).color]" style="margin-right: 5px"></i>
          {{getReportStatusTrans(this.local.items.status).value}}
        </div>
        <details class="accordion" open>
          <summary class="accordion-header">
            รายละเอียดเบื้องต้น
          </summary>
          <div class="accordion-body empty">
            <div class="tile tile-centered m-1">
              <div class="tile-content">
                <div class="tile-title" :title="moment(initialReport.incidentDate).format('DD-MM-YYYY')">วันที่เกิดเหตุ: {{moment(initialReport.incidentDate).format('DD-MM-YYYY')}}</div>
                <!-- <div class="tile-subtitle"></div> -->
              </div>
            </div>
            <div class="tile tile-centered m-1">
              <div class="tile-content">
                <div class="tile-title" :title="initialReport.hn">HN: {{initialReport.hn}}</div>
                <!-- <div class="tile-subtitle"></div> -->
              </div>
            </div>
            <div class="tile tile-centered m-1">
              <div class="tile-content">
                <div class="tile-title" :title="initialReport.name">ชื่อ-นามสกุล: {{initialReport.name}}</div>
                <!-- <div class="tile-subtitle"></div> -->
              </div>
            </div>
            <div class="tile tile-centered m-1">
              <div class="tile-content">
                <div class="tile-title" :title="initialReport.age">อายุ: {{initialReport.age}}</div>
                <!-- <div class="tile-subtitle"></div> -->
              </div>
            </div>
            <div class="tile tile-centered m-1">
              <div class="tile-content">
                <div class="tile-title" :title="initialReport.area">แผนกบริเวณที่พบเหตุ: {{initialReport.area}}</div>
                <!-- <div class="tile-subtitle"></div> -->
              </div>
            </div>
            <div class="tile tile-centered m-1">
              <div class="tile-content">
                <div class="tile-title" :title="initialReport.affectedPerson">ผู้ที่ได้รับผลกระทบ: {{initialReport.affectedPerson}}</div>
                <!-- <div class="tile-subtitle"></div> -->
              </div>
            </div>
            <div class="tile tile-centered m-1">
              <div class="tile-content">
                <div class="tile-title" :title="moment(initialReport.reportDate).format('DD-MM-YYYY')">วันที่รายงาน: {{moment(initialReport.reportDate).format('DD-MM-YYYY')}}</div>
                <!-- <div class="tile-subtitle"></div> -->
              </div>
            </div>
            <div class="tile tile-centered m-1" v-if="IS_ADMIN">
              <div class="tile-content">
                <div class="tile-title" :title="initialReport.reporter">ผู้รายงาน: {{initialReport.reporter}}</div>
                <!-- <div class="tile-subtitle"></div> -->
              </div>
            </div>
          </div>
        </details>
        <details class="accordion" open>
          <summary class="accordion-header">
            รูปแบบของเหตุการณ์ ({{programReport.programType}})
          </summary>
          <div class="accordion-body empty" v-if="programReport.programType === 'clinical'">
            <div class="tile tile-centered m-1" :key="`common${index}`" v-for="(item, index) in getClinicalKeys('common')">
              <div class="tile-content">
                <div class="tile-title" :title="clinicalProgram.common[item].title">{{clinicalProgram.common[item].title}}</div>
                <div class="tile-subtitle">{{getClinicalProgramRes('common', item, programReport.program.common[item])}}</div>
              </div>
            </div>
            <div class="tile tile-centered m-1" :key="`spacific${index}`" v-for="(item, index) in getClinicalKeys('spacific')">
              <div class="tile-content">
                <div class="tile-title" :title="clinicalProgram.spacific[item].title">{{clinicalProgram.spacific[item].title}}</div>
                <div class="tile-subtitle">{{getClinicalProgramRes('spacific' ,item, programReport.program.spacific[item])}}</div>
              </div>
            </div>
            <div class="tile tile-centered m-1" :key="`event${index}`" v-for="(item, index) in getClinicalKeys('event')">
              <div class="tile-content">
                <div class="tile-title" :title="clinicalProgram.event[item].title">{{clinicalProgram.event[item].title}}</div>
                <div class="tile-subtitle">{{getClinicalProgramRes('event' ,item, programReport.program.event[item])}}</div>
              </div>
            </div>
          </div>
          <div class="accordion-body empty" v-else>
            <div class="tile tile-centered m-1" :key="`NonClinical${index}`" v-for="(item, index) in getNonClinicalKeys()">
              <div class="tile-content">
                <div class="tile-title" :title="nonClinicalProgram[item].title">{{nonClinicalProgram[item].title}}</div>
                <div class="tile-subtitle">{{getNonClinicalProgramRes(item, programReport.program[item])}}</div>
              </div>
            </div>
          </div>
        </details>

        <details class="accordion" open v-if="violenceReport && violenceReport.violence">
          <summary class="accordion-header">
            ระดับความรุนแรง
          </summary>
          <div class="accordion-body empty">
            <div class="tile tile-centered m-1" v-if="violenceReport.violence.clinical">
              <div class="tile-content">
                <div class="tile-title">ระดับความรุนแรงทางคลินิก:</div>
                <div class="tile-subtitle">{{getViolenceRes('clinical', violenceReport.violence.clinical)}}</div>
              </div>
            </div>
            <div class="tile tile-centered m-1" v-if="violenceReport.violence.general">
              <div class="tile-content">
                <div class="tile-title">ระดับความรุนแรงทั่วไป:</div>
                <div class="tile-subtitle">{{getViolenceRes('general', violenceReport.violence.general)}}</div>
              </div>
            </div>
          </div>
        </details>

        <details class="accordion" open>
          <summary class="accordion-header">
            การวิเคราะห์และการอธิบาย
          </summary>
          <div class="accordion-body empty">
            <div class="tile tile-centered m-1">
              <div class="tile-content">
                <div class="tile-title">สรุปเหตุการณ์ (ใคร ทำอะไร ที่ไหน อย่างไร):</div>
                <div class="tile-subtitle">{{analysisReport.eventBriefing}}</div>
              </div>
            </div>
            <div class="tile tile-centered m-1">
              <div class="tile-content">
                <div class="tile-title">ความเห็นหัวหน้างาน/ฝ่าย:</div>
                <div class="tile-subtitle">{{analysisReport.comment}}</div>
              </div>
            </div>
            <div class="tile tile-centered m-1">
              <div class="tile-content">
                <div class="tile-title">กิจกรรมที่ควรทำ/แนวทางการแก้ไข:</div>
                <div class="tile-subtitle">{{analysisReport.causeAnalysis}}</div>
              </div>
            </div>
            <div class="tile tile-centered m-1">
              <div class="tile-content">
                <div class="tile-title">หมายเหตุ:</div>
                <div class="tile-subtitle">{{analysisReport.note}}</div>
              </div>
            </div>
          </div>
        </details>
      </div>
      <!-- <div class="panel-footer">
        <div class="input-group">
          <input class="form-input" type="text" placeholder="Hello">
          <button class="btn btn-primary input-group-btn">Send</button>
        </div>
      </div> -->
    </div>
</template>

<script>
import moment from 'moment';
import config from '@Config/app.config'
import service from '@Services/app.service'
import to from 'await-to-js';
export default {
  props: {
    report: {
      type: Object,
      required: true
    }
  },
  components: {},
  name: 'ReportDetailComponent',
  data () {
    return {
      moment,
      local: {
        programLists: null,
        items: null,
        ordering: {
          initialReport: [
            'age',
            'affectedPerson',
            'area',
            'hn',
            'incidentDate',
            'name',
            'reportDate',
            'reporter'
          ],
          eventReport: [
            'programType',
            'program'
          ],
          violenceReport: [
            'violence'
          ],
          analysisReport: [
            'causeAnalysis',
            'eventBriefing',
            'note',
            'comment'
          ]
        }
        
      }
    }
  },
  computed: {
    initialReport () {
      return this.selectObjByKey(this.local.ordering.initialReport)
    },
    programReport () { // get real value from db
      return this.selectObjByKey(this.local.ordering.eventReport)
    },
    violenceReport () {
      return this.selectObjByKey(this.local.ordering.violenceReport)
    },
    analysisReport () {
      return this.selectObjByKey(this.local.ordering.analysisReport)
    },
    clinicalProgram () { // get key, title, selections
      if (this.local.programLists && this.local.programLists.clinical) {
        return this.local.programLists.clinical;
      }
      return null
    },
    nonClinicalProgram () { // get key, title, selections
      if (this.local.programLists && this.local.programLists.nonClinical) {
        return this.local.programLists.nonClinical;
      }
      return null
    },
    violenceProgram () {
      if (this.local.programLists && this.local.programLists.violence) {
        return this.local.programLists.violence;
      }
      return null
    },
    programType () {
      return this.local.programType;
    }
  },
  async created () {
    await this.fetchConfigReport();
    this.local.items = this.report
  },
  methods: {
    async fetchConfigReport () {
      // console.log('do');
      let err, res;
      [ err, res ] = await to(service.getResource({ resourceName: config.api.report.config }));
      if(err) return;
      this.local.programLists = res.data.reportConfig
      // setTimeout( async() => {
       
      // }, 1000)
    },
    selectObjByKey (keyArray) {
      let items = {}
      if (this.local.items) {
         keyArray.map((item) => {
        let newItem = this.local.items[item];
        items[item] = newItem
      })
      }
      return items;
    },
    getViolenceRes  (type, key) {
      let res =  this.violenceProgram[type].options.filter((item) => {
        return item.value === key
      })[0]
      if(res) return res.title;
      return '-'
    },
    getClinicalProgramRes (groupName, type, key) {
      let res = this.clinicalProgram[groupName][type].options.filter((item) => {
        return item.value === key
      })[0]
      if(res) return res.title;
      return '-'
    },
    getNonClinicalProgramRes (type, key) {
      let res = this.nonClinicalProgram[type].options.filter((item) => {
        return item.value === key
      })[0]
      if(res) return res.title;
      return '-'
    },
    getReportStatusTrans (status) {
      return config.reportStatus.filter((item) => {
        return item.key === status
      })[0]
    },
    getClinicalKeys (formKey) {
      let filterItems = Object.keys(this.clinicalProgram[formKey]).filter((item) => {
        return this.getClinicalProgramRes(formKey, item, this.programReport.program[formKey][item]) !== '-'
      })
      return filterItems;
    },
    getNonClinicalKeys (formKey) {
      let filterItems = ['budget', 'env', 'facilities', 'hrd', 'im', 'rights'].filter((item) => {
        return this.getNonClinicalProgramRes(item, this.programReport.program[item]) !== '-'
      })
      return filterItems;
    },
  },
  watch: {
    report: {
        handler: function() {
          this.local.items = this.report
        },
        deep: true
    }
  }
   
}
</script>

<style lang="scss" scoped>
.accordion .accordion-header{
  padding: 5px 0px !important;
}
.empty{
  padding: 10px 5px !important;
  text-align: left !important;
}
.tile-title{
  font-weight: bold;
}
.tile-subtitle{
  margin-left: 10px;
  white-space: unset !important;
}
</style>
