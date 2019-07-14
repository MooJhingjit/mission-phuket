import Vue from 'vue'
import Router from 'vue-router'

// Containers
const DefaultLayout = () => import('@Layouts/default')

// Views
const Home = () => import('@Views/home')
const Create = () => import('@Views/create')
const Detail = () => import('@Views/detail')
const Management = () => import('@Views/management')
const Answer = () => import('@Views/answer')
const Settings = () => import('@Views/settings')
const Login = () => import('@Views/login')

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/report',
      name: 'Root',
      meta: {
        label: 'รายงานอุบัติการณ์',
      },
      component: DefaultLayout,
      children: [
        {
          path: 'report',
          name: 'Report',
          meta: {
            label: 'หน้าหลัก',
          },
          component: Home
        },
        {
          path: 'report/create',
          name: 'CreateReport',
          meta: {
            label: 'สร้างใหม่',
          },
          component: Create
        },
        {
          path: 'report/edit/:key',
          name: 'EditReport',
          meta: {
            label: 'แก้ไข',
          },
          component: Create
        },
        {
          path: 'report/:key',
          name: 'ReportDetail',
          meta: {
            label: 'รายละเอียด',
          },
          component: Detail
        },
        {
          path: 'management/:key',
          name: 'Management',
          meta: {
            label: 'บันทึกส่วนงาน',
          },
          component: Management
        },
        {
          path: 'answer/:key',
          name: 'Answer',
          meta: {
            label: 'ตอบอุบัติการณ์',
          },
          component: Answer
        },
        {
          path: 'settings',
          name: 'Settings',
          meta: {
            label: 'ตั้งค่าระบบ',
          },
          component: Settings
        },
        {
          path: 'reportAction',
          name: 'ReportAction',
          meta: {
            label: 'อัพเดท/ลบ รายงาน',
            type: 'event'
          },
          component: null
        },
        // {
        //   path: 'theme',
        //   redirect: '/theme/colors',
        //   name: 'Theme',
        //   component: {
        //     render (c) { return c('router-view') }
        //   },
        //   children: [
        //     {
        //       path: 'colors',
        //       name: 'Colors',
        //       component: Colors
        //     },
        //     {
        //       path: 'typography',
        //       name: 'Typography',
        //       component: Typography
        //     }
        //   ]
        // },
        // {
        //   path: 'charts',
        //   name: 'Charts',
        //   component: Charts
        // },
        // {
        //   path: 'widgets',
        //   name: 'Widgets',
        //   component: Widgets
        // },
        // {
        //   path: 'users',
        //   meta: { label: 'Users'},
        //   component: {
        //     render (c) { return c('router-view') }
        //   },
        //   children: [
        //     {
        //       path: '',
        //       component: Users,
        //     },
        //     {
        //       path: ':key',
        //       meta: { label: 'User Details'},
        //       name: 'User',
        //       component: User,
        //     },
        //   ]
        // },
        // {
        //   path: 'base',
        //   redirect: '/base/cards',
        //   name: 'Base',
        //   component: {
        //     render (c) { return c('router-view') }
        //   },
        //   children: [
        //     {
        //       path: 'cards',
        //       name: 'Cards',
        //       component: Cards
        //     },
        //     {
        //       path: 'forms',
        //       name: 'Forms',
        //       component: Forms
        //     },
        //     {
        //       path: 'switches',
        //       name: 'Switches',
        //       component: Switches
        //     },
        //     {
        //       path: 'tables',
        //       name: 'Tables',
        //       component: Tables
        //     },
        //     {
        //       path: 'tabs',
        //       name: 'Tabs',
        //       component: Tabs
        //     },
        //     {
        //       path: 'breadcrumbs',
        //       name: 'Breadcrumbs',
        //       component: Breadcrumbs
        //     },
        //     {
        //       path: 'carousels',
        //       name: 'Carousels',
        //       component: Carousels
        //     },
        //     {
        //       path: 'collapses',
        //       name: 'Collapses',
        //       component: Collapses
        //     },
        //     {
        //       path: 'jumbotrons',
        //       name: 'Jumbotrons',
        //       component: Jumbotrons
        //     },
        //     {
        //       path: 'list-groups',
        //       name: 'List Groups',
        //       component: ListGroups
        //     },
        //     {
        //       path: 'navs',
        //       name: 'Navs',
        //       component: Navs
        //     },
        //     {
        //       path: 'navbars',
        //       name: 'Navbars',
        //       component: Navbars
        //     },
        //     {
        //       path: 'paginations',
        //       name: 'Paginations',
        //       component: Paginations
        //     },
        //     {
        //       path: 'popovers',
        //       name: 'Popovers',
        //       component: Popovers
        //     },
        //     {
        //       path: 'progress-bars',
        //       name: 'Progress Bars',
        //       component: ProgressBars
        //     },
        //     {
        //       path: 'tooltips',
        //       name: 'Tooltips',
        //       component: Tooltips
        //     }
        //   ]
        // },
        // {
        //   path: 'buttons',
        //   redirect: '/buttons/standard-buttons',
        //   name: 'Buttons',
        //   component: {
        //     render (c) { return c('router-view') }
        //   },
        //   children: [
        //     {
        //       path: 'standard-buttons',
        //       name: 'Standard Buttons',
        //       component: StandardButtons
        //     },
        //     {
        //       path: 'button-groups',
        //       name: 'Button Groups',
        //       component: ButtonGroups
        //     },
        //     {
        //       path: 'dropdowns',
        //       name: 'Dropdowns',
        //       component: Dropdowns
        //     },
        //     {
        //       path: 'brand-buttons',
        //       name: 'Brand Buttons',
        //       component: BrandButtons
        //     }
        //   ]
        // },
        // {
        //   path: 'icons',
        //   redirect: '/icons/font-awesome',
        //   name: 'Icons',
        //   component: {
        //     render (c) { return c('router-view') }
        //   },
        //   children: [
        //     {
        //       path: 'coreui-icons',
        //       name: 'CoreUI Icons',
        //       component: CoreUIIcons
        //     },
        //     {
        //       path: 'flags',
        //       name: 'Flags',
        //       component: Flags
        //     },
        //     {
        //       path: 'font-awesome',
        //       name: 'Font Awesome',
        //       component: FontAwesome
        //     },
        //     {
        //       path: 'simple-line-icons',
        //       name: 'Simple Line Icons',
        //       component: SimpleLineIcons
        //     }
        //   ]
        // },
        // {
        //   path: 'notifications',
        //   redirect: '/notifications/alerts',
        //   name: 'Notifications',
        //   component: {
        //     render (c) { return c('router-view') }
        //   },
        //   children: [
        //     {
        //       path: 'alerts',
        //       name: 'Alerts',
        //       component: Alerts
        //     },
        //     {
        //       path: 'badges',
        //       name: 'Badges',
        //       component: Badges
        //     },
        //     {
        //       path: 'modals',
        //       name: 'Modals',
        //       component: Modals
        //     }
        //   ]
        // }
      ]
    },
    {
      path: '/',
      // redirect: '',
      name: 'Other',
      meta: {
        label: 'Other',
      },
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '/login',
          name: 'Login',
          meta: {
            label: 'Login',
          },
          component: Login
        },
        // {
        //   path: '500',
        //   name: 'Page500',
        //   component: Page500
        // },
        // {
        //   path: 'login',
        //   name: 'Login',
        //   component: Login
        // },
        // {
        //   path: 'register',
        //   name: 'Register',
        //   component: Register
        // }
      ]
    }
  ]
})
