<template>
  <div class="container columns">
    <navigation-bar/>
    <div class="column col-12">
      <div class="card">
        <div class="card-header columns">
          <div class="column col-sm-12">
            <div class="form-group">
              <label class="form-label" for="input-example-1">วันที่เกิดเหตุ</label>
              <input class="form-input" type="text" id="input-example-1" placeholder="">
            </div>
            <div class="form-group">
              <label class="form-label" for="input-example-1">เวลา</label>
              <input class="form-input" type="text" id="input-example-1" placeholder="">
            </div>
            <div class="form-group">
              <label class="form-label" for="input-example-1">ผู้ที่ได้รับผลกระทบ</label>
              <label class="form-radio form-inline">
                <input type="radio" name="gender" checked=""><i class="form-icon"></i> ผู้ป่วย
              </label>
              <label class="form-radio form-inline">
                <input type="radio" name="gender"><i class="form-icon"></i> ญาติ
              </label>
              <label class="form-radio form-inline">
                <input type="radio" name="gender"><i class="form-icon"></i> เจ้าหน้าที่
              </label>
              <label class="form-radio form-inline">
                <input type="radio" name="gender"><i class="form-icon"></i> สิ่งแวดล้อม
              </label>
              
            </div>
          </div>
          <div class="column col-sm-12">
            <div class="form-group">
              <label class="form-label" for="input-example-1">วันที่รายงาน</label>
              <input class="form-input" type="text" id="input-example-1" placeholder="">
            </div>
            <div class="form-group">
              <label class="form-label" for="input-example-1">ผู้รายงาน</label>
              <input class="form-input" type="text" id="input-example-1" placeholder="">
            </div>
            <div class="form-group">
              <label class="form-label" for="input-example-1">แผนกบริเวณที่พบเหตุ</label>
              <input class="form-input" type="text" id="input-example-1" placeholder="">
            </div>
          </div>
          <div class="column col-sm-12">
            <div class="form-group">
              <label class="form-label" for="input-example-1">HN</label>
              <input class="form-input" type="text" id="input-example-1" placeholder="">
            </div>
            <div class="form-group">
              <label class="form-label" for="input-example-1">ชื่อ-นามสกุล</label>
              <input class="form-input" type="text" id="input-example-1" placeholder="">
            </div>
            <div class="form-group">
              <label class="form-label" for="input-example-1">อายุ</label>
              <input class="form-input" type="text" id="input-example-1" placeholder="">
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="card mt-2">
            <div class="card-header">
              <div class="card-title text-bold">รูปแบบของเหตุการณ์ที่เกิด</div>
            </div>
            <div class="card-body">
              <div class="columns">
                <div class="column col-6 col-sm-12">
                  <div class="form-group">
                    <label class="form-label" for="input-example-1">1. ยา/สารน้ำ/เลือด/วัคซีน</label>
                    <input class="form-input" type="text" id="input-example-1" placeholder="">
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="input-example-1">2. การวินิจฉัย/รักษา</label>
                    <input class="form-input" type="text" id="input-example-1" placeholder="">
                  </div>
                   <div class="form-group">
                    <label class="form-label" for="input-example-1">3. การผ่าตัด/วิสัญญี/หัตถการ</label>
                    <input class="form-input" type="text" id="input-example-1" placeholder="">
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="input-example-1">4. การคลอด</label>
                    <input class="form-input" type="text" id="input-example-1" placeholder="">
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="input-example-1">5. เครื่องมือ/อุปกรณ์</label>
                    <input class="form-input" type="text" id="input-example-1" placeholder="">
                  </div>
                </div>
                <div class="column col-6 col-sm-12">
                  <div class="form-group">
                    <label class="form-label" for="input-example-1">6. ความปลอดภัย</label>
                    <input class="form-input" type="text" id="input-example-1" placeholder="">
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="input-example-1">7. การติดต่อสื่อสาร</label>
                    <input class="form-input" type="text" id="input-example-1" placeholder="">
                  </div>
                   <div class="form-group">
                    <label class="form-label" for="input-example-1">8. เหตุการณ์ทั่วไป</label>
                    <input class="form-input" type="text" id="input-example-1" placeholder="">
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="input-example-1">9. อื่นๆ</label>
                    <textarea class="form-input" id="input-example-3" placeholder="" rows="5"></textarea>
                  </div>
                </div>
            </div>
            </div>
          </div>
          <div class="card mt-2">
            <div class="card-header">
              <div class="card-title text-bold">ระดับความรุนแรงทางคลินิก และความรุนแรงทั่วไป</div>
            </div>
            <div class="card-body">
              <div class="columns">
                <div class="column col-6 col-sm-12">
                  <div class="form-group">
                    <label class="form-label" for="input-example-1">ความรุนแรงทางคลินิก</label>
                    <input class="form-input" type="text" id="input-example-1" placeholder="">
                  </div>
                </div>
                <div class="column col-6 col-sm-12">
                  <div class="form-group">
                    <label class="form-label" for="input-example-1">ความรุนแรงทั่วไป</label>
                    <input class="form-input" type="text" id="input-example-1" placeholder="">
                  </div>
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
                    <label class="form-label" for="input-example-1">บรรยายสรุปเหตุการณ์ที่เกิด</label>
                    <textarea class="form-input" id="input-example-3" placeholder="" rows="5"></textarea>
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="input-example-1">วิเคราะห์สาเหตุและแนวทางแก้ไข</label>
                    <textarea class="form-input" id="input-example-3" placeholder="" rows="5"></textarea>
                  </div>
                </div>
                <div class="column col-6 col-sm-12">
                  <div class="form-group">
                    <label class="form-label" for="input-example-1">ความเห็นหัวหน้างาน/ฝ่าย</label>
                    <textarea class="form-input" id="input-example-3" placeholder="" rows="5"></textarea>
                  </div>
                   <div class="form-group">
                    <label class="form-label" for="input-example-1">หมายเหตุ</label>
                    <textarea class="form-input" id="input-example-3" placeholder="" rows="5"></textarea>
                  </div>
                </div>
            </div>
            </div>
          </div>
          <div class="mt-2 text-right">
            <button class="m-2 btn"><i class="fas fa-check-circle"></i> บันทึกข้อมูล</button>
            <button class="m-2 btn btn-error"><i class="fas fa-trash-alt"></i> ล้างข้อมูล</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBar from '@Components/navigation'

export default {
  components: {
    NavigationBar
  },
  data () {
    return {
      local: {
        effectLists: [
          {}
        ]
      }
    }
  },
  methods: {
    updateEffectLists(number) {
      if (number > 0) {
        this.local.effectLists.push({})
      } else {
        this.local.effectLists.pop();
      }
    }
  }
}
</script>
