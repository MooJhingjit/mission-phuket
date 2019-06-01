<template>
  <div class="container columns">
    <navigation-bar/>
    <div class="column col-4 col-md-12">
      <div class="panel">
        <div class="panel-header">
          <div class="panel-title">รายละเอียดรายการ</div>
        </div>
        <div class="panel-body">
          <div class="empty">
            <div class="empty-icon"><i class="icon icon-3x icon-mail"></i></div>
            <p class="empty-title h5">รายละเอียด</p>
          </div>
        </div>
      </div>
    </div>
    <div class="column col-8 col-md-12">
      <div class="panel">
        <div class="panel-header columns">
          <div class="column">
            <div class="input-group">
              <span class="input-group-addon">สาเหตุ</span>
              <input class="form-input" type="text" placeholder="">
            </div>
          </div>
          <div class="column">
            <div class="input-group">
              <span class="input-group-addon">วิธีป้องกัน</span>
              <input class="form-input" type="text" placeholder="">
            </div>
          </div>
          <div class="column">
            <div class="input-group">
              <span class="input-group-addon">ผู้รับผิดชอบ</span>
              <input class="form-input" type="text" placeholder="">
            </div>
          </div>
          <div class="column item-center m-2 col-1">
            <i class="c-hand fas fa-plus-circle"></i>
          </div>
        </div>
        <div class="panel-body">
          <div class="card">
            <div class="card-header">
              <div class="card-title">ตารางแสดงรายการการแก้ไขปัญหา</div>
            </div>
            <div class="card-body">
              <table class="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>สาเหตุ</th>
                    <th>วิธีป้องกัน</th>
                    <th>ผู้รับผิดชอบ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="" :key="index" v-for="(item, index) in local.department">
                    <td>{{item.name}}</td>
                    <td>{{item.name}}</td>
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
import navigationBar from '@Components/navigation'

export default {
  components: {
    navigationBar
  },
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
