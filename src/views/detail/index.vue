<template>
  <div class="container columns">
    <navigation-bar />
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
        <div class="panel-header">
          <div class="panel-title text-bold">ส่วนงานที่ต้องแก้ไข</div>
        </div>
        <div class="panel-body">
          <div class="card m-2" :key="index" v-for="(item, index) in local.responsibilities">
            <div class="card-header">
              <div class="card-title">แผนก {{item.department.name}}</div>
              <!-- <div class="card-subtitle text-gray">...</div> -->
            </div>
            <div class="card-body p-1">
              <table class="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>สาเหตุ</th>
                    <th>ป้องกัน</th>
                    <th>ผู้รับผิดชอบ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="" :key="index" v-for="(anwser, index) in item.answers">
                    <td>{{anwser.cause}}</td>
                    <td>{{anwser.protection}}</td>
                    <td>{{anwser.responsiblePerson}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="column col-12 text-right">
      <button class="m-2 btn"><i class="fas fa-check-circle"></i> Approve</button>
      <button class="m-2 btn btn-link"><i class="fas fa-print"></i> Print Report</button>
      <button class="m-2 btn btn-error"><i class="fas fa-trash-alt"></i> Delete</button>
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
        responsibilities: [
          {
            department: {
              name: 'abc'
            },
            answers: [
              {
                cause: 'xxxx',
                protection: 'zzzz',
                responsiblePerson: 'xxxx'
              },
              {
                cause: 'xxxx',
                protection: 'zzzz',
                responsiblePerson: 'xxxx'
              },
              {
                cause: 'xxxx',
                protection: 'zzzz',
                responsiblePerson: 'xxxx'
              }
            ]
          },
          {
            department: {
              name: 'def'
            },
            answers: [
              {
                cause: 'xxxx',
                protection: 'zzzz',
                responsiblePerson: 'xxxx'
              },
              {
                cause: 'xxxx',
                protection: 'zzzz',
                responsiblePerson: 'xxxx'
              }
            ]
          }
        ]
      }
    }
  }
}
</script>
