
<template>
 <div class="panel" v-if="
    clinicalProgram
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
                <div class="tile-title">วันที่เกิดเหตุ: {{moment(initialReport.incidentDate).format('DD-MM-YYYY')}}</div>
                <!-- <div class="tile-subtitle"></div> -->
              </div>
            </div>
            <div class="tile tile-centered m-1">
              <div class="tile-content">
                <div class="tile-title">HN: {{initialReport.hn}}</div>
                <!-- <div class="tile-subtitle"></div> -->
              </div>
            </div>
            <div class="tile tile-centered m-1">
              <div class="tile-content">
                <div class="tile-title">ชื่อ-นามสกุล: {{initialReport.name}}</div>
                <!-- <div class="tile-subtitle"></div> -->
              </div>
            </div>
            <div class="tile tile-centered m-1">
              <div class="tile-content">
                <div class="tile-title">อายุ: {{initialReport.age}}</div>
                <!-- <div class="tile-subtitle"></div> -->
              </div>
            </div>
            <div class="tile tile-centered m-1">
              <div class="tile-content">
                <div class="tile-title">แผนกบริเวณที่พบเหตุ: {{initialReport.area}}</div>
                <!-- <div class="tile-subtitle"></div> -->
              </div>
            </div>
            <div class="tile tile-centered m-1">
              <div class="tile-content">
                <div class="tile-title">ผู้ที่ได้รับผลกระทบ: {{initialReport.affectedPerson}}</div>
                <!-- <div class="tile-subtitle"></div> -->
              </div>
            </div>
            <div class="tile tile-centered m-1">
              <div class="tile-content">
                <div class="tile-title">วันที่รายงาน: {{moment(initialReport.reportDate).format('DD-MM-YYYY')}}</div>
                <!-- <div class="tile-subtitle"></div> -->
              </div>
            </div>
            <div class="tile tile-centered m-1" v-if="IS_ADMIN">
              <div class="tile-content">
                <div class="tile-title">ผู้รายงาน: {{initialReport.reporter}}</div>
                <!-- <div class="tile-subtitle"></div> -->
              </div>
            </div>
          </div>
        </details>
        <!-- <details class="accordion" open>
          <summary class="accordion-header">
            รูปแบบของเหตุการณ์ ({{programReport.programType}})
          </summary>
          <div class="accordion-body empty" v-if="programReport.programType === 'clinical'">
            <div class="tile tile-centered m-1">
              <div class="tile-content">
                <div class="tile-title">การทบทวนเวชระเบียน</div>
                <div class="tile-subtitle">{{getClinicalProgramTitle('review', programReport.program.common.review)}}</div>
              </div>
            </div>
            <div class="tile tile-centered m-1">
              <div class="tile-content">
                <div class="tile-title">โปรแกรมความเสี่ยงด้านการดูแลผู้ป่วย (PCT)</div>
                <div class="tile-subtitle">{{getClinicalProgramTitle('PCT', programReport.program.common.PCT)}}</div>
              </div>
            </div>
            <div class="tile tile-centered m-1">
              <div class="tile-content">
                <div class="tile-title">โปรแกรมความเสี่ยงด้านการป้องกันและควบคุมการติดเชื้อ (IC)</div>
                <div class="tile-subtitle">{{getClinicalProgramTitle('IC', programReport.program.common.IC)}}</div>
              </div>
            </div>
            <div class="tile tile-centered m-1">
              <div class="tile-content">
                <div class="tile-title">โปรแกรมความเสี่ยงด้านระบบยา/ความคลาดเคลื่อนทางยา(PTC)</div>
                <div class="tile-subtitle">{{getClinicalProgramTitle('PTC', programReport.program.common.PTC)}}</div>
              </div>
            </div>
            <div class="tile tile-centered m-1">
              <div class="tile-content">
                <div class="tile-title">โปรแกรมความเสี่ยงด้านการผ่าตัด/วิสัญญี</div>
                <div class="tile-subtitle">{{getClinicalProgramTitle('operation', programReport.program.common.operation)}}</div>
              </div>
            </div>
          </div>
          <div class="accordion-body empty" v-else>

          </div>
        </details> -->

        <details class="accordion" open v-if="violenceReport && violenceReport.violence">
          <summary class="accordion-header">
            ระดับความรุนแรง
          </summary>
          <div class="accordion-body empty">
            <div class="tile tile-centered m-1" v-if="violenceReport.violence.clinical">
              <div class="tile-content">
                <div class="tile-title">ระดับความรุนแรงทางคลินิก:</div>
                <div class="tile-subtitle">{{getViolenceTitle('clinical', violenceReport.violence.clinical)}}</div>
              </div>
            </div>
            <div class="tile tile-centered m-1" v-if="violenceReport.violence.general">
              <div class="tile-content">
                <div class="tile-title">ระดับความรุนแรงทั่วไป:</div>
                <div class="tile-subtitle">{{getViolenceTitle('general', violenceReport.violence.general)}}</div>
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
    programReport () {
      return this.selectObjByKey(this.local.ordering.eventReport)
    },
    violenceReport () {
      return this.selectObjByKey(this.local.ordering.violenceReport)
    },
    analysisReport () {
      return this.selectObjByKey(this.local.ordering.analysisReport)
    },

    clinicalProgram () {
      if (this.local.programLists && this.local.programLists.clinical) {
        return this.local.programLists.clinical;
      }
      return null
    },
    nonClinicalProgram () {
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
    // console.log(this.programReport);
  },
  methods: {
    async fetchConfigReport () {
      // console.log('do');
      let err, res;
      [ err, res ] = await to(service.getResource({ resourceName: config.api.report.config }));
      if(err) return;
      this.local.programLists = res.data.reportConfig
      // console.log(this.local.programLists);
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
    getViolenceTitle  (type, key) {
      return this.violenceProgram[type].options.filter((item) => {
        return item.value === key
      })[0].title
    },
    getClinicalProgramTitle (type, key) {
      return this.clinicalProgram.common[type].options.filter((item) => {
        return item.value === key
      })[0].title
    },
    getReportStatusTrans (status) {
      return config.reportStatus.filter((item) => {
        return item.key === status
      })[0]
    }
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
