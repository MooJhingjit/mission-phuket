<template>
  <div class="container columns">
    <div class="column col-4">
      <div class="panel">
        <div class="panel-header">
          <div class="panel-title">รายละเอียดรายการ</div>
        </div>
        <div class="panel-body">
          <div class="empty">
            <div class="empty-icon"><i class="icon icon-3x icon-mail"></i></div>
            <p class="empty-title h5">You have no new messages</p>
          </div>
        </div>
      </div>
    </div>
    <div class="column col-8">
      <div class="panel">
        <div class="panel-header columns">
          <div class="column col-7">
            <div class="input-group"><span class="input-group-addon">ส่วนงาน</span>
              <input class="form-input" type="text" placeholder="">
              <div class="item-center m-2">
                <i class="c-hand fas fa-plus-circle"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="panel-body">
          <div class="card">
            <div class="card-header">
              <div class="card-title">ตารางแสดงรายชื่อส่วนงานที่ต้องลงบันทึกและดำเนินการ</div>
              <!-- <div class="card-subtitle text-gray">...</div> -->
            </div>
            <div class="card-body">
              <table class="table table-striped table-hover">
                <tbody>
                  <tr class="" :key="index" v-for="(item, index) in local.department">
                    <td>{{item.name}}</td>
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
        department: [
          {
            name: 'xxxxx'
          },
          {
            name: 'xxxxx'
          }
        ]
      }
    }
  }
}
</script>
