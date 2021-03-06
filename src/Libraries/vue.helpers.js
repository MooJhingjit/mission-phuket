import { mapGetters, mapActions } from 'vuex'
import config from '@Config/app.config'
// import moment from 'moment'
import Helper from '@Libraries/common.helpers'
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

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
    IS_ADMIN () {
      return this.GET_USERDATA_STORE.isAdmin
    },
    USER_RIGHT () {
      return this.GET_USERDATA_STORE.right
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
    ...mapActions([
      'RESET_STATE'
    ]),
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
    IS_REPORTCREATER (createdByDepartment) {
      return (createdByDepartment === this.USER.department || this.IS_ADMIN)
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
    GO_TOHOMEPAGE () {
      let department = 'admin'
      switch (department) {
        case 'admin':
          this.GO_TOPAGE('Report')
          break
      }
    },
     HAD_AUTH () {
      if (Helper.GET_STORAGEITEM(config.variable.authStorage) === '1') {
        return true
      }
      return false
    },
    HAS_PRIVILEGE (pageName) {
      if (this.USER && this.USER.departmentName === 'Administrator') return true;
      if (this.USER && this.USER.right && this.USER.right.includes(pageName)) {
        return true
      }
      return false;
    },
    PRINT_PDF (docDefinition) {
      pdfMake.vfs = pdfFonts.pdfMake.vfs;
      pdfMake.fonts = {
        THSarabunNew: {
          normal: 'THSarabunNew.ttf',
          bold: 'THSarabunNew-Bold.ttf',
          italics: 'THSarabunNew-Italic.ttf',
          bolditalics: 'THSarabunNew-BoldItalic.ttf'
        },
        Roboto: {
          normal: 'Roboto-Regular.ttf',
          bold: 'Roboto-Medium.ttf',
          italics: 'Roboto-Italic.ttf',
          bolditalics: 'Roboto-MediumItalic.ttf'
        }
      }
      pdfMake.createPdf(docDefinition).print();
    },
    LOGOUT () {
      Helper.REMOVE_STORAGEITEM(config.variable.tokenStorage)
      Helper.REMOVE_STORAGEITEM(config.variable.authStorage)
      this.RESET_STATE()
      this.GO_TOPAGE('Login')
    }

  }
}