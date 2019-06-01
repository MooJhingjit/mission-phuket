<template>
  <div class="container columns">
     <navigation-bar>
       <template v-slot:searchOptions>
        <div class="columns col-12 p-relative">
          <div class="column col-5 item-right"><button @click="createReport" class="btn"> <i class="fas fa-plus-circle"></i> สร้างใหม่</button></div>
          <div class="column col-7">
            <div class="has-icon-right">
              <input type="text" class="form-input main-input" placeholder="...">
              <i class="form-icon fas fa-search"></i>
            </div>
            
          </div>
          <advanced-search />
        </div>
      </template>
     </navigation-bar>
    <div class="column col-12">
      <div class="card">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>number</th>
              <th>happendate</th>
              <th>happentime</th>
              <th>reportdate</th>
              <th>reporttime</th>
              <th>topatient</th>
              <th>hn</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr @dblclick="GO_TOPAGE('ReportDetail')" :key="index" v-for="(item, index) in local.reportLists">
              <td>....</td>
              <td>....</td>
              <td>....</td>
              <td>....</td>
              <td>....</td>
              <td>....</td>
              <td>....</td>
              <td>....</td>
              <td style="text-align:center;">
                <button class="btn m-1" @click="GO_TOPAGE('ReportDetail')"><i class="fas fa-info-circle"></i> รายละเอียด</button>
                <button class="btn m-1" @click="GO_TOPAGE('Management')"><i class="fas fa-edit"></i> จัดการ</button>
                <button class="btn m-1" @click="GO_TOPAGE('Answer')"><i class="fas fa-edit "></i> ตอบ</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="item-right">
          <ul class="pagination">
              <li class="page-item disabled">
                <a href="#" tabindex="-1">Previous</a>
              </li>
              <li class="page-item active">
                <a href="#">1</a>
              </li>
              <li class="page-item">
                <a href="#">2</a>
              </li>
              <li class="page-item">
                <a href="#">3</a>
              </li>
              <li class="page-item">
                <span>...</span>
              </li>
              <li class="page-item">
                <a href="#">12</a>
              </li>
              <li class="page-item">
                <a href="#">Next</a>
              </li>
            </ul>
        </div>
      </div>  
    </div>
  </div>
  
</template>

<script>
import NavigationBar from '@Components/navigation'
import AdvancedSearch from '@Components/searchBox/advanced'

export default {
  components: {
    NavigationBar,
    AdvancedSearch
  },
  name: 'Report',
  data () {
    return {
      local: {
        reportLists: [
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
        ]
      }
    }
  },
  methods: {
    createReport() {
      this.GO_TOPAGE('CreateReport')
    }
  }
}
</script>
