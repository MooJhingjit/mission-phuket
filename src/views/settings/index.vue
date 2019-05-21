<template>
  <div class="container columns">
    <div class="column col-12">
      <div class="panel">
       
        <nav class="panel-nav">
          <ul class="tab tab-block">
            <li class="tab-item"><a href="#panels">ข้อมูลหน่วยงาน</a></li>
            <li class="tab-item active"><a href="#panels">ข้อมูลผู้ใช้งานระบบ</a></li>
          </ul>
        </nav>
        <div class="panel-body">
          <!-- <div class="columns">
            <div class="column col-4">
              <div class="form-group">
                <label class="form-label" for="input-example-1">ชื่อหน่วยงาน</label>
                <input class="form-input" type="text" id="input-example-1" placeholder="">
              </div>
              <div class="form-group">
                <label class="form-label" for="input-example-1">ผู้จัดการ</label>
                <input class="form-input" type="text" id="input-example-1" placeholder="">
              </div>
              <div class="form-group">
                <label class="form-label" for="input-example-1"></label>
                 <button class="btn btn-primary">บันทึกข้อมูลหน่วยงาน</button>
              </div>
            </div>
            <div class="column col-1">
            </div>
            <div class="column col-7">
              <table class="table">
                <thead>
                  <tr>
                    <th>หน่วยงาน</th>
                    <th>ผู้จัดการ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="">
                    <td>The Shawshank Redemption</td>
                    <td>Crime, Drama</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div> -->

           <div class="columns">
            <div class="column col-4">
              <div class="form-group">
                <label class="form-label" for="input-example-1">ชื่อ สกุล</label>
                <input class="form-input" type="text" id="input-example-1" placeholder="">
              </div>
              <div class="form-group">
                <label class="form-label" for="input-example-1">ชื่อผู้ใช้</label>
                <input class="form-input" type="text" id="input-example-1" placeholder="">
              </div>
              <div class="form-group">
                <label class="form-label" for="input-example-1">รหัสผ่าน</label>
                <input class="form-input" type="text" id="input-example-1" placeholder="">
              </div>
              <div class="form-group">
                <label class="form-label" for="input-example-1">หน่วยงาน</label>
                <input class="form-input" type="text" id="input-example-1" placeholder="">
              </div>
              <div class="form-group">
                <label class="form-label" for="input-example-1"></label>
                 <button class="btn btn-primary">บันทึกข้อมูลผู้ใช้</button>
              </div>
            </div>
            <div class="column col-1">
            </div>
            <div class="column col-7">
              <table class="table">
                <thead>
                  <tr>
                    <th>ชื่อ สกุล</th>
                    <th>ชื่อผู้ใช้</th>
                    <th>หน่วยงาน</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="">
                    <td>The Shawshank Redemption</td>
                    <td>Crime, Drama</td>
                    <td>Crime, Drama</td>
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
export default {
  data () {
    return {
      local: {
      }
    }
  }
}
</script>
