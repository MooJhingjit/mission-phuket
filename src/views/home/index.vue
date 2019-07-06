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
        <!-- <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th>วันที่เกิดเหตุ</th>
              <th>ชื่อ-นามสกุล</th>
              <th>ผู้รายงาน</th>
              <th>วันที่รายงาน</th>
              <th>ผู้ที่ได้รับผลกระทบ</th>
              <th>รูปแบบของเหตุการณ์</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr @dblclick="GO_TOPAGE('EditReport', {key: item._id})" :key="index" v-for="(item, index) in local.reportLists">
              <td>{{moment(item.incidentDate).format('DD/MM/YYYY HH:mm:ss')}}</td>
              <td>{{item.name}}</td>
              <td>{{item.reporter}}</td>
              <td>{{moment(item.reportDate).format('DD/MM/YYYY')}}</td>
              <td>{{item.affectedPerson}}</td>
              <td>{{item.programType}}</td>
              <td style="text-align:center;">
                <button class="btn m-1" @click="GO_TOPAGE('ReportDetail', {key: item._id})"><i class="fas fa-info-circle"></i> รายละเอียด</button>
                <button class="btn m-1" @click="GO_TOPAGE('Management', {key: item._id})"><i class="fas fa-edit"></i> จัดการ</button>
                <button class="btn m-1" @click="GO_TOPAGE('Answer', {key: item._id})"><i class="fas fa-edit "></i> ตอบ</button>
              </td>
            </tr>
          </tbody>
        </table> -->
        <vuetable ref="vuetable"
                :css="{
                  tableClass: 'table table-striped table-hover text-center'
                }"
                :row-class="onRowClass"
                :http-options="httpOptions"
                :fields="local.fields"
                @vuetable:pagination-data="onPaginationData"
                pagination-path=""
                :append-params="params"
                :sort-order="local.sortOrder"
              >
              <template slot="incidentDate" scope="props">
                  <span>{{moment(props.rowData.incidentDate).format('DD/MM/YYYY HH:mm:ss')}}</span>
              </template>
              <template slot="name" scope="props">
                  <span>{{props.rowData.name}}</span>
              </template>
              <template slot="affectedPerson" scope="props">
                  <span>{{translate.affectedPerson[props.rowData.affectedPerson]}}</span>
              </template>
              <template slot="reportDate" scope="props">
                  <span>{{moment(props.rowData.reportDate).format('DD/MM/YYYY')}}</span>
              </template>  
              <template slot="actions" scope="props">
                <button class="btn m-1" @click="GO_TOPAGE('ReportDetail', {key: props.rowData._id})"><i class="fas fa-info-circle"></i> รายละเอียด</button>
                <button class="btn m-1" @click="GO_TOPAGE('Management', {key: props.rowData._id})"><i class="fas fa-edit"></i> จัดการ</button>
                <button class="btn m-1" @click="GO_TOPAGE('Answer', {key: props.rowData._id})"><i class="fas fa-edit "></i> ตอบ</button>
              </template> 

              

              </vuetable>
              <div class="columns">
                <div class="column col-6 flex-item-center">
                  <vuetable-pagination-info ref="paginationInfo"></vuetable-pagination-info>
                </div>
                <div class="column col-6">
                  <vuetable-pagination ref="pagination"
                    :css="{
                      wrapperClass: 'pagination flex-item-right',
                      activeClass: 'btn btn-primary active',
                      disabledClass: 'disabled',
                      pageClass: 'btn page-item',
                      linkClass: 'page-item',
                      paginationClass: 'ui bottom attached segment grid',
                      paginationInfoClass: 'left floated left aligned six wide column',
                      dropdownClass: 'ui search dropdown',
                      icons: {
                        first: 'angle double left icon',
                        prev: 'left chevron icon',
                        next: 'right chevron icon',
                        last: 'angle double right icon',
                      }
                    }"
                    @vuetable-pagination:change-page="onChangePage"
                  ></vuetable-pagination>
                </div>
              </div>
        <!-- <div class="item-right">
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
        </div> -->
      </div>  
    </div>
  </div>
  
</template>

<script>

import commonHelper from '@Libraries/common.helpers'
import NavigationBar from '@Components/navigation'
import AdvancedSearch from '@Components/searchBox/advanced'
import to from 'await-to-js';
import service from '@Services/app.service'
import config from '@Config/app.config'
import moment from 'moment';
import Vuetable from 'vuetable-2/src/components/Vuetable.vue'
import VuetablePagination from 'vuetable-2/src/components/VuetablePagination.vue'
import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo'

export default {
  components: {
    NavigationBar,
    AdvancedSearch,
    Vuetable,
    VuetablePagination,
    VuetablePaginationInfo
  },
  name: 'Report',
  data () {
    return {
      // perPage: 1
      local: {
        config: null,
        reportLists: [],
        fields: [
          {
            name: '__slot:incidentDate',
            title: 'วันที่เกิดเหตุ',
            sortField: 'incidentDate'
          },
          {
            name: '__slot:name',
            title: 'ชื่อ-นามสกุล'
          },
          {
            name: 'reporter',
            title: 'ผู้รายงาน'
          },
          {
            name: '__slot:reportDate',
            title: 'วันที่รายงาน',
            sortField: 'reportDate'
          },
          {
            name: '__slot:affectedPerson',
            title: 'ผู้ที่ได้รับผลกระทบ'
          },
          {
            name: 'programType',
            title: 'รูปแบบของเหตุการณ์'
          },
          {
            name: '__slot:actions',
            title: ''
          }
        ],
        sortOrder: [
          {
            field: 'name',
            direction: 'asc'
          }
          // {
          //   field: 'dateEnd',
          //   direction: 'desc'
          // }
        ],
      },
      moment: moment
    }
  },
  created () {
    this.fetchData();
    // console.log(this.REPORT_CONFIG);
  },
  computed: {
    translate () {
      if (this.local.config !== null){
        return this.local.config
      }
    },
    httpOptions () {
      let queryString = ''
      return {
        baseURL: commonHelper.GET_FULLAPI(config.api.report.index, queryString),
        headers: {
          'Authorization': commonHelper.GET_STORAGEITEM(config.variable.tokenStorage).replace(/['"]+/g, '')
        }
      }
    },
    params () {
      return {
        // mainSearch: this.inputSearch,
        // searchType: this.local.searchType,
        // searchStatusType: this.local.searchStatusType
      }
    }
  },
  methods: {
    async fetchData () { // translation data
      let err, res;
      [ err, res ] = await to(service.getResource({ resourceName: config.api.report.translation }));
      if(err) return;
      this.local.config = res.data.trans
    },
    createReport() {
      this.GO_TOPAGE('CreateReport')
    },
    onRowClass (dataItem, index) {
      return [
        // { 'text-error': (this.IS_LATE(dataItem.product.dateEnd) && (dataItem.product.status === 'ip' || dataItem.product.status === 'done')) },
        // { 'text-warning': (this.IS_SAMEDATE(dataItem.product.dateEnd) && (dataItem.product.status === 'ip' || dataItem.product.status === 'done')) }
      ]
    },
    onPaginationData (paginationData) {
      this.$refs.pagination.setPaginationData(paginationData)
      this.$refs.paginationInfo.setPaginationData(paginationData)
    },
    onChangePage (page) {
      this.$refs.vuetable.changePage(page)
    },
  }
}
</script>

<style lang="scss" scoped>
.flex-item-right {
  justify-content: flex-end
}
.flex-item-center {
  display: flex !important;
  align-items: center;
}
</style>
