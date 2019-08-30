<template>
  <div class="container columns">
     <navigation-bar :hasSlot="true">
      <template v-slot:searchOptions>
        <table-search-box :searchParams="local.searchParams" @search="(query) => searchHandle(query)"/>
      </template>
     </navigation-bar>
    <div class="column col-12">
      <div class="card" style="overflow: scroll;">
        <vuetable ref="vuetable"
          :css="{
            tableClass: 'table table-striped table-hover text-center'
          }"
          :row-class="onRowClass"
          :http-options="httpOptions"
          :fields="tableFields"
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
          <button v-if="USER_RIGHT.includes('EditReport') && IS_REPORTCREATER(props.rowData.createdByDepartment) && props.rowData.status !== 'approved'" class="btn m-1" @click="GO_TOPAGE('EditReport', {key: props.rowData._id})"><i class="fas fa-edit"></i> แก้ไข</button>
          <button v-if="USER_RIGHT.includes('Management') && props.rowData.status !== 'approved'" class="btn btn-warning m-1" @click="GO_TOPAGE('Management', {key: props.rowData._id})"><i class="fas fa-edit"></i> จัดการ</button>
          <button v-if="USER_RIGHT.includes('Answer') && props.rowData.status !== 'approved' && local.reportAssociated.includes(props.rowData._id)" class="btn m-1" @click="GO_TOPAGE('Answer', {key: props.rowData._id})"><i class="fas fa-edit "></i> ตอบ</button>
          <button v-if="USER_RIGHT.includes('ReportDetail')" class="btn m-1" @click="GO_TOPAGE('ReportDetail', {key: props.rowData._id})"><i class="fas fa-info-circle"></i> ภาพรวม</button>
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
      </div>  
    </div>
  </div>
  
</template>

<script>

import commonHelper from '@Libraries/common.helpers'
import NavigationBar from '@Components/navigation'
import to from 'await-to-js';
import service from '@Services/app.service'
import config from '@Config/app.config'
import moment from 'moment';
import Vuetable from 'vuetable-2/src/components/Vuetable.vue'
import VuetablePagination from 'vuetable-2/src/components/VuetablePagination.vue'
import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo'
import TableSearchBox from './searchBox'

export default {
  components: {
    NavigationBar,
    Vuetable,
    VuetablePagination,
    VuetablePaginationInfo,
    TableSearchBox
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
        searchParams: {
          mainSearch: '',
          reportType: 'all',
          reportAssociated: 'waitForAnswer',
          incidentDateStart: '',
          incidentDateEnd: '',
          reportStatus: 'all'
        }
      },
      moment: moment
    }
  },
  created () {
    this.fetchData();
    // console.log(this.REPORT_CONFIG);
  },
  computed: {
    tableFields () {
      if (this.IS_ADMIN) {
        this.local.fields.splice(5, 0, {
            name: 'reporter',
            title: 'ผู้รายงาน'
          });
        return this.local.fields;
      }
      return this.local.fields;
    },
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
      return this.local.searchParams
    }
  },
  methods: {
    async fetchData () { // translation data
      let err, res;
      [ err, res ] = await to(service.getResource({ resourceName: config.api.report.translation }));
      if(err) return;
      this.local.config = res.data.trans
      this.local.reportAssociated = res.data.reportAssociated
    },
    onRowClass (prop) {
      return [
        // {'text-error': this.local.reportAssociated.includes(prop._id)}
      ];
    },
    onPaginationData (paginationData) {
      this.$refs.pagination.setPaginationData(paginationData)
      this.$refs.paginationInfo.setPaginationData(paginationData)
    },
    onChangePage (page) {
      this.$refs.vuetable.changePage(page)
    },
    searchHandle (query) {
      // console.log(query);
      this.local.searchParams = query
      this.$refs.vuetable.refresh()
    }
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
