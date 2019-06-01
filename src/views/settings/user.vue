<template>
  <div class="columns">
    <div class="column col-4 col-md-12">
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
    <div class="column col-7 col-md-12">
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
