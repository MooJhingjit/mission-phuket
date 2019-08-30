<template>
  <div class="container columns">
    <navigation-bar />
    <div class="column col-12">
      <div class="panel">
        <nav class="panel-nav">
          <ul class="tab tab-block">
            <li :class="['tab-item', {'active': tabName === 'department'}]" @click="() => tabName = 'department'">
              <a href="#department"><i class="fas fa-project-diagram"></i> ข้อมูลหน่วยงาน</a>
            </li>
            <li :class="['tab-item', {'active': tabName === 'user'}]" @click="() => tabName = 'user'">
              <a href="#user"><i class="fas fa-users"></i> ข้อมูลผู้ใช้งานระบบ</a>
            </li>
          </ul>
        </nav>
        <div class="panel-body">
          <component :is="dynamicComponent"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBar from '@Components/navigation'
import userComponent from './user'
import departmentComponent from './department'

export default {
  components: {
    NavigationBar
  },
  computed: {
    dynamicComponent() {
      if(this.tabName === 'user') {
        return userComponent;
      } else {
        return departmentComponent;
      }
    }
  },
  data () {
    return {
      tabName: 'department',
    }
  },
  methods: {
  }
}
</script>
