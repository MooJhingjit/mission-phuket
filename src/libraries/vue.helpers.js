import { mapGetters, mapActions } from 'vuex'
import config from '@Config/app.config'
// import moment from 'moment'
// import Helper from '@Libraries/common.helpers'
// import { bus } from '@/main'
export default {
  computed: {
    ...mapGetters([
      'GET_USERDATA_STORE'
      // 'GET_APPDATA_STORE'
    ]),
    USER () {
      return this.GET_USERDATA_STORE
    },
    REPORT_CONFIG () {
      return config.programLists;
    }
  //   APPDATA () {
  //     return this.GET_APPDATA_STORE
  //   },
  //   USERTYPE () {
  //     if (this.USER) {
  //       return this.USER.department
  //     }
  //   },
  //   ISADMIN () {
  //     if (this.USER) {
  //       return (this.USER.department === 'admin')
  //     }
  //   },
  //   JOBSTATUS () {
  //     return config.variable.jobStatus
  //   },
  //   TASKSTATUS () {
  //     return config.variable.taskStatus
  //   }
  },
  filters: {},
  methods: {
    GO_TOPAGE (pageName, options = {}) {
      this.$router.push({
        name: pageName,
        params: { key: options.key }
      })
    },
    BUILDPARAM (params = []) {
      let queryString = ''
      if (Object.keys(params).length) {
        Object.keys(params).forEach(function (key) {
          queryString += key + '=' + params[key] + '&'
        })
        return queryString.slice(0, -1)
      }
    },
    NOTIFY (type, msg = null) {
      switch (type) {
        case 'success':
          if (msg === null) {
            msg = 'ทำรายการเสร็จสิ้น'
          }
          this.$notify(msg, 'success')
          break
        case 'error':
          if (msg === null) {
            msg = 'เกิดข้อผิดพลาด โปรดลองอีกครั้ง'
          }
          this.$notify(msg, 'error')
          break
      }
    },
    LOGOUT () {
      // Helper.REMOVE_STORAGEITEM(config.variable.tokenStorage)
      // Helper.REMOVE_STORAGEITEM(config.variable.authStorage)
      // this.SET_APP_STORE({ data: {} })
      // this.GO_TOPAGE('Login')
    },
    GO_TOHOMEPAGE () {
      let department = 'admin'
      switch (department) {
        case 'admin':
          this.GO_TOPAGE('Report')
          break
      }
    }
  }
}