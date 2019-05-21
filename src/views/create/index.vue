<template>
  <div class="container columns">
    <div class="column col-12">
      <div class="card">
        <div class="card-header columns">
          <div class="column">
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
                <input type="radio" name="gender" checked=""><i class="form-icon"></i> เจ้าหน้าที่
              </label>
              <label class="form-radio form-inline">
                <input type="radio" name="gender"><i class="form-icon"></i> สิ่งแวดล้อม
              </label>
              
            </div>
          </div>
          <div class="column">
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
          <div class="column">
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
          <div class="columns">
            <div class="column col-6">
                <label class="form-label" for="input-example-1">ระบุผลกระทบ</label>
              <div class="card">
                <div class="card-header">
                  <div class="card-title">ผลกระทบ(1)</div>
                  <!-- <div class="card-subtitle text-gray">Software and hardware</div> -->
                </div>
                <div class="card-body">
                    <div class="input-group m-2">
                      <span class="input-group-addon">โปรแกรม</span>
                      <select class="form-select">
                          <option>......</option>
                          <option>Slack</option>
                          <option>Skype</option>
                          <option>Hipchat</option>
                        </select>
                    </div>
                    <div class="input-group m-2">
                        <span class="input-group-addon">ผลกระทบ</span>
                        <select class="form-select">
                            <option>......</option>
                            <option>Slack</option>
                            <option>Skype</option>
                            <option>Hipchat</option>
                          </select>
                      </div>
                </div>
                <!-- <div class="card-footer"><a class="btn btn-primary" href="#cards">Do</a></div> -->
              </div>
              <div class="text-right m-2">
                <i class="c-hand fas fa-minus-circle"></i>
                <i class="c-hand fas fa-plus-circle"></i>
              </div>
            </div>
            <div class="column col-6">
              <div class="form-group">
                <label class="form-label" for="input-example-1">สรุปเหตุการณ์</label>
                <textarea class="form-input" id="input-example-3" placeholder="" rows="5"></textarea>
              </div>
              <div class="form-group">
                <label class="form-label" for="input-example-1">กิจกรรมที่ควรทำ</label>
                <textarea class="form-input" id="input-example-3" placeholder="" rows="5"></textarea>
              </div>
              <div class="form-group">
                <label class="form-label" for="input-example-1">ประเมินความรุนแรง</label>
                <select class="form-select">
                  <option>0. ไม่รุบะความรุนแรง</option>
                  <option>Slack</option>
                  <option>Skype</option>
                  <option>Hipchat</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label" for="input-example-1"></label>
                <button class="btn btn-primary">บันทึกข้อมูล</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>
