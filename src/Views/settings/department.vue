<template>
  <div class="columns">
    <div class="column col-4 col-md-12">
      <div class="form-group">
        <label class="form-label" for="input-example-1">ชื่อหน่วยงาน</label>
        <my-input
          :config="{
            type: 'text',
            key: 'name',
            placeholder: 'ชื่อหน่วยงาน',
            rules: 'required',
            validator: $validator
          }"
          :value="local.name"
          @input="value => {local.name = value}"
        ></my-input>
      </div>
      <div class="form-group">
        <label class="form-label" for="input-example-1">ผู้จัดการ</label>
        <my-input
          :config="{
            type: 'text',
            key: 'manager',
            placeholder: 'ผู้จัดการ',
            rules: 'required',
            validator: $validator
          }"
          :value="local.manager"
          @input="value => {local.manager = value}"
        ></my-input>
      </div>
      <div class="form-group">
        <label class="form-label"><input type="checkbox" value="1" v-model="local.isAdmin" @change="selectAdmin(local.isAdmin)"> ผู้ดูแลระบบ</label>
        <label class="form-label" :key="index" v-for="(route, index) in local.allRoutes"><input type="checkbox" :value="route.name" v-model="local.right"> {{route.meta.label}}</label>
       
      </div>
      <div class="columns">
        <template v-if="local.idSelected === null">
          <div class="column col-md-4">
            <div class="form-group">
              <label class="form-label" for="input-example-1"></label>
              <button class="btn btn-primary" @click="event('add')">บันทึกข้อมูล</button>
            </div>
          </div>
        </template>
        <template v-if="local.idSelected">
          <div class="column col-md-4">
            <div class="form-group">
              <label class="form-label" for="input-example-1"></label>
              <button class="btn btn-primary" @click="event('update')">แก้ไขข้อมูล</button>
            </div>
          </div>
          <div class="column col-md-4">
            <div class="form-group" >
              <label class="form-label" for="input-example-1"></label>
              <button class="btn btn-warning" @click="resetForm()">ยกเลิก</button>
            </div>
          </div>
          <div class="column col-md-4">
            <div class="form-group">
              <label class="form-label" for="input-example-1"></label>
              <button class="btn btn-error" @click="event('remove')">ลบข้อมูล</button>
            </div>
          </div>
        </template>
        
      </div>


    </div>
    <div class="column col-7 col-md-12">
      <table class="table">
        <thead>
          <tr>
            <th>หน่วยงาน</th>
            <th>ผู้จัดการ</th>
            <th>ผู้ดูแลระบบ</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="index" v-for="(item, index) in local.items" @click="selectItem(item)">
            <td>{{item.name}}</td>
            <td>{{item.manager}}</td>
            <td>
              <i class="fas fa-check" v-if="item.isAdmin"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import config from '@Config/app.config'
import service from '@Services/app.service'
import to from 'await-to-js';
import MyInput from '@Components/Form/myInput'

export default {
  components: {
    MyInput
  },
  data () {
    return {
      local: {
        name: null,
        manager: null,
        isAdmin: false,
        idSelected: null,
        items: [],
        allRoutes: [],
        right: []
      }
    }
  },
  created () {
    this.fetchData();
    this.$router.options.routes.filter((root) => {
      return root.name === 'Root'
    })[0].children.map((item) => {
      this.local.allRoutes.push({
        ...item,

      })
      // console.log(item);
    })
  },
  methods: {
    async fetchData() {
      let err, res;
      let resourceName = config.api.department.index;
      [ err, res ] = await to(service.getResource({ resourceName }));
      if(err) return;
      this.local.items = res.data.department;
    },
    async event (type, data = null) {
      let err, res, resourceName, queryString;
      switch(type) {
        case 'add':
          [ err, res ] = await to(this.$validator.validate());
          if(err || !res) return
          resourceName = config.api.department.index;
          [ err, res ] = await to(service.postResource({ resourceName, data: {
            name:  this.local.name, manager: this.local.manager, isAdmin: this.local.isAdmin, right: this.local.right
          }}))
          break;
        case 'remove':
          const result = await this.$swal({
            text: "ลบข้อมูลนี้!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'ตกลง',
            cancelButtonText: 'ยกเลิก',
            reverseButtons: true
          });
          if (!result.value) return;
          resourceName = config.api.department.index;
          queryString = { id: this.local.idSelected };
          [ err, res ] = await to(service.deleteResource({ resourceName, queryString }));
          if(err) return;
          break;
        case 'update':
          resourceName = `${config.api.department.index}/${this.local.idSelected}`;
          [ err, res ] = await to(service.putResource({ resourceName, data: {
            name: this.local.name, manager: this.local.manager, isAdmin: this.local.isAdmin, right: this.local.right
          }}))
          if(err) return;
          break;
      }
      this.resetForm();
      this.fetchData();
      this.$notify({
        group: 'default',
        text: 'ทำรายการสำเร็จ',
        type: 'success',
      });
    },
    selectItem (item) {
      this.local.idSelected = item._id
      this.local.name = item.name;
      this.local.manager = item.manager;
      this.local.isAdmin = item.isAdmin;
      this.local.right = item.right;
    },
    resetForm () {
      this.local.name = '';
      this.local.manager = '';
      this.local.isAdmin = false;
      this.local.right = [];
      this.local.idSelected = null;
      this.$validator.reset()
    },
    selectAdmin (isAdmin) {
      // console.log(isAdmin);
      if (isAdmin) {
        this.local.allRoutes.map((item) => {
          this.local.right.push(item.name)
        })
        return
      }
      this.local.right = [];
    }
  }
}
</script>
