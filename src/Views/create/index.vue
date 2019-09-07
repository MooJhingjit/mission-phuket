<template>
  <div class="container columns" v-if="clinicalProgram
  && nonClinicalProgram 
  && violenceProgram">
    <navigation-bar/>
    <div class="column col-12">
      <div class="card">
        <div class="card-header columns">
          <div class="column col-4 col-sm-12">
            <div class="form-group">
              <label class="form-label require">วันที่เกิดเหตุ</label>
              <my-date-picker
                :config="{
                  key: 'incidentDate',
                  placeholder: '',
                  rules: 'required',
                  validator: $validator
                }"
                :value="local.incidentDate"
                @input="val => {local.incidentDate = val}"
              ></my-date-picker>
            </div>
          </div>
          <div class="column col-4 col-sm-12">
            <div class="form-group">
              <label class="form-label">HN</label>
              <my-input
                :config="{
                  type: 'text',
                  key: 'hn',
                  placeholder: '',
                  rules: '',
                  validator: $validator
                }"
                :value="local.hn"
                @input="value => {local.hn = value}"
              ></my-input>
            </div>
          </div>
          <div class="column col-4 col-sm-12">
            <div class="form-group">
              <label class="form-label">ชื่อ-นามสกุล</label>
              <my-input
                :config="{
                  type: 'text',
                  key: 'name',
                  placeholder: '',
                  rules: '',
                  validator: $validator
                }"
                :value="local.name"
                @input="value => {local.name = value}"
              ></my-input>
            </div>
          </div>
          <div class="column col-4 col-sm-12">
            <div class="form-group">
              <label class="form-label">อายุ</label>
              <my-input
                :config="{
                  type: 'text',
                  key: 'age',
                  placeholder: '',
                  rules: '',
                  validator: $validator
                }"
                :value="local.age"
                @input="value => {local.age = value}"
              ></my-input>
            </div>
          </div>
          <div class="column col-4 col-sm-12">
            <div class="form-group">
              <label class="form-label require">วันที่รายงาน</label>
              <my-input
                :config="{
                  type: 'text',
                  key: 'reportDate',
                  placeholder: '',
                  rules: 'required',
                  validator: $validator,
                  isDisable: true
                }"
                :value="local.reportDate"
                @input="value => {local.reportDate = value}"
              ></my-input>
            </div>
          </div>
          <div class="column col-4 col-sm-12" v-if="this.IS_ADMIN">
            <div class="form-group">
              <label class="form-label require">ผู้รายงาน</label>
              <my-input
                :config="{
                  type: 'text',
                  key: 'reporter',
                  placeholder: '',
                  rules: 'required',
                  validator: $validator,
                  isDisable: (this.IS_ADMIN) ? false : true
                }"
                :value="local.reporter"
                @input="value => {local.reporter = value}"
              ></my-input>
            </div>
          </div>
          <div class="column col-4 col-sm-12">
            <div class="form-group">
              <label class="form-label require">แผนกบริเวณที่พบเหตุ</label>
              <my-input
                :config="{
                  type: 'text',
                  key: 'area',
                  placeholder: '',
                  rules: 'required',
                  validator: $validator
                }"
                :value="local.area"
                @input="value => {local.area = value}"
              ></my-input>
            </div>
          </div>
          <!-- <div class="column col-4 col-sm-12">
            <div class="form-group">
              <label class="form-label require">ผู้ที่ได้รับผลกระทบ</label>
              <label class="form-radio form-inline">
                <input type="radio" name="affectedPerson" v-validate="'required'" value="patient" v-model="local.affectedPerson"><i class="form-icon"></i> ผู้ป่วย
              </label>
              <label class="form-radio form-inline">
                <input type="radio" name="affectedPerson" v-validate="'required'" value="relative" v-model="local.affectedPerson"><i class="form-icon"></i> ญาติ
              </label>
              <label class="form-radio form-inline">
                <input type="radio" name="affectedPerson" v-validate="'required'" value="authorities" v-model="local.affectedPerson"><i class="form-icon"></i> เจ้าหน้าที่
              </label>
              <label class="form-radio form-inline">
                <input type="radio" name="affectedPerson" v-validate="'required'" value="environment" v-model="local.affectedPerson"><i class="form-icon"></i> สิ่งแวดล้อม
              </label>
            </div>
            <p class="form-input-hint text-error" v-if="errors.first('affectedPerson')">กรุณาตรวจสอบข้อมูลข้างต้น</p>
          </div> -->
          <div class="column col-4 col-sm-12">
            <div class="form-group">
              <label class="form-label require">ผู้ที่ได้รับผลกระทบ</label>
              <label class="form-checkbox form-inline">
                <input type="checkbox" name="affectedPerson" v-validate="'required'" value="patient" v-model="local.affectedPerson"><i class="form-icon"></i> ผู้ป่วย
              </label>
              <label class="form-checkbox form-inline">
                <input type="checkbox" name="affectedPerson" v-validate="'required'" value="relative" v-model="local.affectedPerson"><i class="form-icon"></i> ญาติ
              </label>
              <label class="form-checkbox form-inline">
                <input type="checkbox" name="affectedPerson" v-validate="'required'" value="authorities" v-model="local.affectedPerson"><i class="form-icon"></i> เจ้าหน้าที่
              </label>
              <label class="form-checkbox form-inline">
                <input type="checkbox" name="affectedPerson" v-validate="'required'" value="environment" v-model="local.affectedPerson"><i class="form-icon"></i> สิ่งแวดล้อม
              </label>
            </div>
            <p class="form-input-hint text-error" v-if="errors.first('affectedPerson')">กรุณาตรวจสอบข้อมูลข้างต้น</p>
          </div>
        </div>
        <div class="card-body">
            <div class="card p-2">
              <div class="form-group">
                <label class="form-label text-bold">รูปแบบของเหตุการณ์ที่เกิด</label>
                <label class="form-radio form-inline">
                  <input type="radio" value="clinical" v-model="local.programType"><i class="form-icon"></i> Clinical 
                </label>
                <label class="form-radio form-inline">
                  <input type="radio" value="non-clinical" v-model="local.programType"><i class="form-icon"></i> Non Clinical 
                </label>
              </div>
              <template v-if="local.programType === 'clinical'">
                <div class="card p-2">
                  <div class="panel-title h6 text-primary">ความเสี่ยงทางคลินิกทั่วไป (Common Clinical Risk) </div>
                  <div class="columns p-2">
                    <div class="form-group column col-6">
                      <label class="form-label">{{clinicalProgram.common.review.title}}</label>
                      <select class="form-select" v-model="local.program.common.review">
                        <option :value="null">กรุณาเลือก</option>
                        <option :key="index" v-for="(item, index) in clinicalProgram.common.review.options" :value="item.value">{{item.title}}</option>
                      </select>
                    </div>
                    <div class="form-group column col-6">
                      <label class="form-label">{{clinicalProgram.common.PCT.title}}</label>
                      <select class="form-select" v-model="local.program.common.PCT">
                      <option :value="null">กรุณาเลือก</option>
                        <template v-for="(items, index) in clinicalProgram.common.PCT.options">
                          <option v-if="!items.child.length" :key="index" :value="items.value">{{items.title}}</option>
                          <optgroup v-else :key="index" :label="items.title">
                            <option v-for="(subItems, subIndex) in items.child" :key="subIndex" :value="items.value">{{subItems.title}}</option>
                          </optgroup>
                        </template>
                      </select>
                    </div>
                    <div class="form-group column col-6">
                      <label class="form-label">{{clinicalProgram.common.IC.title}}</label>
                      <select class="form-select" v-model="local.program.common.IC">
                      <option :value="null">กรุณาเลือก</option>
                       <template v-for="(items, index) in clinicalProgram.common.IC.options">
                          <option v-if="!items.child.length" :key="index" :value="items.value">{{items.title}}</option>
                          <optgroup v-else :key="index" :label="items.title">
                            <option v-for="(subItems, subIndex) in items.child" :key="subIndex" :value="items.value">{{subItems.title}}</option>
                          </optgroup>
                        </template>
                      </select>
                    </div>
                    <div class="form-group column col-6">
                      <label class="form-label">{{clinicalProgram.common.PTC.title}}</label>
                      <select class="form-select" v-model="local.program.common.PTC">
                      <option :value="null">กรุณาเลือก</option>
                        <option :key="index" v-for="(item, index) in clinicalProgram.common.PTC.options" :value="item.value">{{item.title}}</option>
                      </select>
                    </div>
                    <div class="form-group column col-6">
                      <label class="form-label">{{clinicalProgram.common.operation.title}}</label>
                      <select class="form-select" v-model="local.program.common.operation">
                      <option :value="null">กรุณาเลือก</option>
                        <option :key="index" v-for="(item, index) in clinicalProgram.common.operation.options" :value="item.value">{{item.title}}</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="card p-2 mt-2">
                  <div class="panel-title h6 text-primary">ความเสี่ยงทางคลินิกเฉพาะโรค (Disease-Specific  Clinical Risk)</div>
                  <div class="columns p-2">
                    <div class="form-group column col-6">
                      <label class="form-label">{{clinicalProgram.spacific.gynecology.title}}</label>
                      <select class="form-select" v-model="local.program.spacific.gynecology">
                      <option :value="null">กรุณาเลือก</option>
                        <option :key="index" v-for="(item, index) in clinicalProgram.spacific.gynecology.options" :value="item.value">{{item.title}}</option>
                      </select>
                    </div>
                    <div class="form-group column col-6">
                      <label class="form-label">{{clinicalProgram.spacific.surgery.title}}</label>
                      <select class="form-select" v-model="local.program.spacific.surgery">
                      <option :value="null">กรุณาเลือก</option>
                        <option :key="index" v-for="(item, index) in clinicalProgram.spacific.surgery.options" :value="item.value">{{item.title}}</option>
                      </select>
                    </div>
                    <div class="form-group column col-6">
                      <label class="form-label">{{clinicalProgram.spacific.medicine.title}}</label>
                      <select class="form-select" v-model="local.program.spacific.medicine">
                      <option :value="null">กรุณาเลือก</option>
                        <option :key="index" v-for="(item, index) in clinicalProgram.spacific.medicine.options" :value="item.value">{{item.title}}</option>
                      </select>
                    </div>
                    <div class="form-group column col-6">
                      <label class="form-label">{{clinicalProgram.spacific.pediatrics.title}}</label>
                      <select class="form-select" v-model="local.program.spacific.pediatrics">
                      <option :value="null">กรุณาเลือก</option>
                        <option :key="index" v-for="(item, index) in clinicalProgram.spacific.pediatrics.options" :value="item.value">{{item.title}}</option>
                      </select>
                    </div>
                    <div class="form-group column col-6">
                      <label class="form-label">{{clinicalProgram.spacific.orthopedic.title}}</label>
                      <select class="form-select" v-model="local.program.spacific.orthopedic">
                      <option :value="null">กรุณาเลือก</option>
                        <option :key="index" v-for="(item, index) in clinicalProgram.spacific.orthopedic.options" :value="item.value">{{item.title}}</option>
                      </select>
                    </div>
                    <div class="form-group column col-6">
                      <label class="form-label">{{clinicalProgram.spacific.generalEnt.title}}</label>
                      <select class="form-select" v-model="local.program.spacific.generalEnt">
                      <option :value="null">กรุณาเลือก</option>
                        <option :key="index" v-for="(item, index) in clinicalProgram.spacific.generalEnt.options" :value="item.value">{{item.title}}</option>
                      </select>
                    </div>
                    <div class="form-group column col-6">
                      <label class="form-label">{{clinicalProgram.spacific.optic.title}}</label>
                      <select class="form-select" v-model="local.program.spacific.optic">
                      <option :value="null">กรุณาเลือก</option>
                        <option :key="index" v-for="(item, index) in clinicalProgram.spacific.optic.options" :value="item.value">{{item.title}}</option>
                      </select>
                    </div>
                    <div class="form-group column col-6">
                      <label class="form-label">{{clinicalProgram.spacific.anesthesiology.title}}</label>
                      <select class="form-select" v-model="local.program.spacific.anesthesiology">
                      <option :value="null">กรุณาเลือก</option>
                        <option :key="index" v-for="(item, index) in clinicalProgram.spacific.anesthesiology.options" :value="item.value">{{item.title}}</option>
                      </select>
                    </div>
                    <div class="form-group column col-6">
                      <label class="form-label">{{clinicalProgram.spacific.radiology.title}}</label>
                      <select class="form-select" v-model="local.program.spacific.radiology">
                      <option :value="null">กรุณาเลือก</option>
                        <option :key="index" v-for="(item, index) in clinicalProgram.spacific.radiology.options" :value="item.value">{{item.title}}</option>
                      </select>
                    </div>
                    <div class="form-group column col-6">
                      <label class="form-label">{{clinicalProgram.spacific.dental.title}}</label>
                      <select class="form-select" v-model="local.program.spacific.dental">
                      <option :value="null">กรุณาเลือก</option>
                        <option :key="index" v-for="(item, index) in clinicalProgram.spacific.dental.options" :value="item.value">{{item.title}}</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="card p-2 mt-2">
                  <div class="panel-title h6 text-primary">Sentinel Event</div>
                  <div class="columns p-2">
                    <div class="form-group column col-6">
                      <label class="form-label">{{clinicalProgram.event.event.title}}</label>
                      <select class="form-select" v-model="local.program.event.event">
                      <option :value="null">กรุณาเลือก</option>
                        <option :key="index" v-for="(item, index) in clinicalProgram.event.event.options" :value="item.value">{{item.title}}</option>
                      </select>
                    </div>
                  </div>
                </div>
              </template>
              <template v-else>
                <div class="card p-2">
                  <div class="panel-title h6 text-primary">ความเสี่ยงทางคลินิกทั่วไป</div>
                  <div class="columns p-2">
                    <div class="form-group column col-6">
                      <label class="form-label">{{nonClinicalProgram.env.title}}</label>
                      <select class="form-select" v-model="local.program.env">
                      <option :value="null">กรุณาเลือก</option>
                        <option :key="index" v-for="(item, index) in nonClinicalProgram.env.options" :value="item.value">{{item.title}}</option>
                      </select>
                    </div>
                    <div class="form-group column col-6">
                      <label class="form-label">{{nonClinicalProgram.facilities.title}}</label>
                      <select class="form-select" v-model="local.program.facilities">
                      <option :value="null">กรุณาเลือก</option>
                        <option :key="index" v-for="(item, index) in nonClinicalProgram.facilities.options" :value="item.value">{{item.title}}</option>
                      </select>
                    </div>
                    <div class="form-group column col-6">
                      <label class="form-label">{{nonClinicalProgram.im.title}}</label>
                      <select class="form-select" v-model="local.program.im">
                      <option :value="null">กรุณาเลือก</option>
                        <option :key="index" v-for="(item, index) in nonClinicalProgram.im.options" :value="item.value">{{item.title}}</option>
                      </select>
                    </div>
                    <div class="form-group column col-6">
                      <label class="form-label">{{nonClinicalProgram.hrd.title}}</label>
                      <select class="form-select" v-model="local.program.hrd">
                      <option :value="null">กรุณาเลือก</option>
                        <option :key="index" v-for="(item, index) in nonClinicalProgram.hrd.options" :value="item.value">{{item.title}}</option>
                      </select>
                    </div>
                    <div class="form-group column col-6">
                      <label class="form-label">{{nonClinicalProgram.budget.title}}</label>
                      <select class="form-select" v-model="local.program.budget">
                      <option :value="null">กรุณาเลือก</option>
                        <option :key="index" v-for="(item, index) in nonClinicalProgram.budget.options" :value="item.value">{{item.title}}</option>
                      </select>
                    </div>
                    <div class="form-group column col-6">
                      <label class="form-label">{{nonClinicalProgram.rights.title}}</label>
                      <select class="form-select" v-model="local.program.rights">
                      <option :value="null">กรุณาเลือก</option>
                        <option :key="index" v-for="(item, index) in nonClinicalProgram.rights.options" :value="item.value">{{item.title}}</option>
                      </select>
                    </div>
                  </div>
                </div>
              </template>
            </div>

          <div class="card mt-2">
            <div class="card-header">
              <div class="card-title text-bold">ระดับความรุนแรง</div>
            </div>
            <div class="card-body">
              <div class="columns">
                <div :key="'violenceClinical'" class="column col-6 col-sm-12" v-if="local.programType === 'clinical'">
                  <div class="form-group">
                    <label class="form-label require">{{violenceProgram.clinical.title}}</label>
                    <select :class="getInputClass('violenceClinical')" v-model="local.violence.clinical" name="violenceClinical" v-validate="'required'">
                      <option :value="null">กรุณาเลือก</option>
                      <option :key="index" v-for="(item, index) in violenceProgram.clinical.options" :value="item.value">{{item.title}}</option>
                    </select>
                  </div>
                  <p class="form-input-hint text-error" v-if="errors.first('violenceClinical')">กรุณาตรวจสอบข้อมูลข้างต้น</p>
                </div>
                <div :key="'violenceGeneral'" class="column col-6 col-sm-12" v-if="local.programType === 'non-clinical'">
                  <div class="form-group">
                    <label class="form-label require">{{violenceProgram.general.title}}</label>
                    <select :class="getInputClass('violenceGeneral')" v-model="local.violence.general" name="violenceGeneral" v-validate="'required'">
                      <option :value="null">กรุณาเลือก</option>
                      <option :key="index" v-for="(item, index) in violenceProgram.general.options" :value="item.value">{{item.title}}</option>
                    </select>
                  </div>
                  <p class="form-input-hint text-error" v-if="errors.first('violenceGeneral')">กรุณาตรวจสอบข้อมูลข้างต้น</p>
                </div>
            </div>
            </div>
          </div>
          <div class="card mt-2">
            <div class="card-header">
              <div class="card-title text-bold">รูปแบบของการวิเคราะห์และการอธิบาย</div>
            </div>
            <div class="card-body">
              <div class="columns">
                <div class="column col-6 col-sm-12">
                  <div class="form-group">
                    <label class="form-label require">สรุปเหตุการณ์ (ใคร ทำอะไร ที่ไหน อย่างไร)</label>
                    <textarea class="form-input" v-model="local.eventBriefing" placeholder="" rows="5"></textarea>
                  </div>
                  <div class="form-group">
                    <label class="form-label">กิจกรรมที่ควรทำ/แนวทางการแก้ไข</label>
                    <textarea class="form-input" v-model="local.causeAnalysis" placeholder="" rows="5"></textarea>
                  </div>
                </div>
                <div class="column col-6 col-sm-12">
                  <div class="form-group">
                    <label class="form-label">ความเห็นหัวหน้างาน/ฝ่าย</label>
                    <textarea class="form-input" v-model="local.comment" placeholder="" rows="5"></textarea>
                  </div>
                   <div class="form-group">
                    <label class="form-label">หมายเหตุ</label>
                    <textarea class="form-input" v-model="local.note" placeholder="" rows="5"></textarea>
                  </div>
                </div>
            </div>
            </div>
          </div>
          <div class="mt-2 text-right">
            <button class="m-2 btn" @click="event('add')"><i class="fas fa-check-circle"></i> บันทึกข้อมูล</button>
            <button class="m-2 btn btn-error"><i class="fas fa-trash-alt"></i> ล้างข้อมูล</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBar from '@Components/navigation'
import MyInput from '@Components/Form/myInput'
import MyDatePicker from '@Components/Form/myDatePicker'
import config from '@Config/app.config'
import service from '@Services/app.service'
import to from 'await-to-js';
import moment from 'moment';

export default {
  components: {
    NavigationBar,
    MyInput,
    MyDatePicker
  },
  computed: {
    clinicalProgram () {
      if (this.programLists && this.programLists.clinical) {
        return this.programLists.clinical;
      }
      return null
    },
    nonClinicalProgram () {
      if (this.programLists && this.programLists.nonClinical) {
        return this.programLists.nonClinical;
      }
      return null
    },
    violenceProgram () {
      if (this.programLists && this.programLists.violence) {
        return this.programLists.violence;
      }
      return null
    },
    programType () {
      return this.local.programType;
    },
    // isConfigLoaded () {
    //   return this.local.isConfigLoaded
    // }
  },
  data () {
    return {
      programLists: null,
      local: {
        programType: 'clinical', // defalut
        incidentDate: null,
        hn: null,
        name: null,
        age: null,
        reportDate:  moment().format('DD-MM-YYYY'),
        reporter: null,
        area: null,
        affectedPerson: [],
        program: {
          common: {
            review: null,
            PCT: null,
            IC: null,
            PTC: null,
            operation: null,
          },
          spacific: {
            gynecology: null,
            surgery: null,
            medicine: null,
            pediatrics: null,
            orthopedic: null,
            generalEnt: null,
            optic: null,
            anesthesiology: null,
            radiology: null,
            dental: null,
          },
          event: {
            event: null
          },
          env: null,
          facilities: null,
          im: null,
          hrd: null,
          budget: null,
          rights: null,
        },
        violence: {
          clinical: null,
          general: null
        },
        eventBriefing: null,
        causeAnalysis: null,
        comment: null,
        note: null
      }
    }
  },
  async created () {
    this.local.reporter = this.USER.name
    await this.fetchConfigReport();
    if (this.$route.params.key) {
      // edit mode
      await this.fetchData(this.$route.params.key);
    }
  },
  methods: {
    async fetchData(reportId) {
      let err, res;
      [ err, res ] = await to(service.getResource({ resourceName: `${config.api.report.index}/${reportId}`}));
      if(err) return;
      let item = res.data.report;
      if (item.status === 'approved' || !this.IS_REPORTCREATER(item.createdByDepartment)) {
        this.GO_TOPAGE('Report')
        return;
      }
      item.incidentDate = new Date(item.incidentDate)
      item.affectedPerson = item.affectedPerson.split('|');
      item.reportDate = moment(item.reportDate).format('DD-MM-YYYY')
      this.local = item;
      
    },
    async fetchConfigReport () {
      let err, res;
      [ err, res ] = await to(service.getResource({ resourceName: config.api.report.config }));
      if(err) return;
       this.programLists = res.data.reportConfig
      // setTimeout( async() => {
       
      // }, 1000)
    },
    getInputClass (key) {
      return [
        'form-select',
        { 'is-error': this.errors.has(key) }
      ]
    },
    async event (type, data = null) {
      let err, res, resourceName, reportData;
      if (this.$route.params.key && type === 'add') {
        type = 'update';
      }
      switch(type) {
        case 'add':
          // console.log(moment(this.local.reportDate, 'DD-MM-YYYY').format());
          [ err, res ] = await to(this.$validator.validate());
          // console.log(res);
          if(err || !res) return
          reportData = Object.assign({}, this.local);
          reportData.reportDate = moment(this.local.reportDate, 'DD-MM-YYYY').format()
          reportData.createdByDepartment = this.USER.department
          reportData.affectedPerson = this.local.affectedPerson.join('|')
          resourceName = config.api.report.index;
          [ err, res ] = await to(service.postResource({ resourceName, data: {
            ...reportData
          }}))
          // // console.log(res);
          if(err) return;
          break;
        case 'remove':
          // const result = await this.$swal({
          //   text: "ลบข้อมูลนี้!",
          //   type: 'warning',
          //   showCancelButton: true,
          //   confirmButtonText: 'ตกลง',
          //   cancelButtonText: 'ยกเลิก',
          //   reverseButtons: true
          // });
          // if (!result.value) return;
          // resourceName = config.api.user.index;
          // queryString = { id: this.local.idSelected };
          // [ err, res ] = await to(service.deleteResource({ resourceName, queryString }));
          // if(err) return;
          break;
        case 'update':
          // console.log(this.local.reportDate);
          [ err, res ] = await to(this.$validator.validate());
          if(err || !res) return
          reportData = Object.assign({}, this.local);
          reportData.reportDate = moment(this.local.reportDate, 'DD-MM-YYYY').format()
          reportData.affectedPerson = this.local.affectedPerson.join('|')
          resourceName = `${config.api.report.index}/${this.local._id}`;
          [ err, res ] = await to(service.putResource({ resourceName, data: {
            ...reportData
          }}))
          break;
      }
      // this.resetForm();
      // this.fetchData();
      this.$notify({
        group: 'default',
        text: 'ทำรายการสำเร็จ',
        type: 'success',
      });
      if (type === 'add') {
        this.GO_TOPAGE('Report')
      }
    },
    resetProgramForm () {
      this.local.program = Object.assign({}, { // copy from state
        common: {
          review: null,
          PCT: null,
          IC: null,
          PTC: null,
          operation: null,
        },
        spacific: {
          gynecology: null,
          surgery: null,
          medicine: null,
          pediatrics: null,
          orthopedic: null,
          generalEnt: null,
          optic: null,
          anesthesiology: null,
          radiology: null,
          dental: null,
        },
        event: {
          event: null
        },
        env: null,
        facilities: null,
        im: null,
        hrd: null,
        budget: null,
        rights: null,
      })
    }
  },
  watch: {
    // whenever question changes, this function will run
    // programType: function (newQuestion, oldQuestion) {
      // this.resetProgramForm()
    // }
  },
}
</script>

<style lang="scss" scoped>
p.text-error {
  margin-bottom: 0px !important;
}
</style>
