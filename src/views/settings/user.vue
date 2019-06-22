<template>
  <div class="columns">
    <div class="column col-4 col-md-12">
      <div class="form-group">
        <label class="form-label" for="input-example-1">ชื่อ สกุล</label>
        <my-input
          :config="{
            type: 'text',
            key: 'name',
            placeholder: 'ชื่อ สกุล',
            rules: 'required',
            validator: $validator
          }"
          :value="local.name"
          @input="value => {local.name = value}"
        ></my-input>
      </div>
      <div class="form-group">
        <label class="form-label" for="input-example-1">ชื่อผู้ใช้</label>
        <my-input
          :config="{
            type: 'text',
            key: 'username',
            placeholder: 'ชื่อผู้ใช้',
            rules: 'required',
            validator: $validator
          }"
          :value="local.username"
          @input="value => {local.username = value}"
        ></my-input>
      </div>
      <div class="form-group">
        <label class="form-label" for="input-example-1">รหัสผ่าน</label>
        <my-input
          :config="{
            type: 'text',
            key: 'password',
            placeholder: 'รหัสผ่าน',
            rules: 'required',
            validator: $validator
          }"
          :value="local.password"
          @input="value => {local.password = value}"
        ></my-input>
      </div>
      <div class="form-group">
        <label class="form-label" for="input-example-1">หน่วยงาน</label>
        <div class="form-group">
          <select class="form-select" v-model="local.departmentId">
            <option :key="index" v-for="(item, index) in local.departmentItems" :value="item._id">
              {{ item.name }}
            </option>
          </select>
        </div>
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
            <th>ชื่อ สกุล</th>
            <th>ชื่อผู้ใช้</th>
            <th>หน่วยงาน</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="index" v-for="(item, index) in local.items" @click="selectItem(item)">
            <td>{{item.name}}</td>
            <td>{{item.username}}</td>
            <td>{{getDepartmentName(item.department)}}</td>
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
        username: null,
        password: null,
        departmentId: null,
        idSelected: null,
        items: [],
        departmentItems: []
      }
    }
  },
  created () {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      let err, resUser, resDepartment;
      // let resourceName = config.api.user.index;
      [ err, resUser ] = await to(service.getResource({ resourceName: config.api.user.index }));
      [ err, resDepartment ] = await to(service.getResource({ resourceName: config.api.department.index }));
      if(err) return;
      // console.log(resDepartment.data);
      this.local.departmentItems = resDepartment.data.department;
      this.local.items = resUser.data.user;
    },
    async event (type, data = null) {
      let err, res, resourceName, queryString;
      switch(type) {
        case 'add':
          [ err, res ] = await to(this.$validator.validate());
          if(err || !res) return
          resourceName = config.api.user.index;
          [ err, res ] = await to(service.postResource({ resourceName, data: {
            name: this.local.name,
            username: this.local.username,
            password: this.local.password,
            departmentId: this.local.departmentId
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
          resourceName = config.api.user.index;
          queryString = { id: this.local.idSelected };
          [ err, res ] = await to(service.deleteResource({ resourceName, queryString }));
          if(err) return;
          break;
        case 'update':
          resourceName = `${config.api.user.index}/${this.local.idSelected}`;
          [ err, res ] = await to(service.putResource({ resourceName, data: {
            name: this.local.name,
            username: this.local.username,
            password: this.local.password,
            departmentId: this.local.departmentId
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
      this.local.username = item.username;
      this.local.password = item.password;
      this.local.departmentId = item.department;
    },
    resetForm () {
      this.local.name = '';
      this.local.username = '';
      this.local.password = '';
      this.local.departmentId = '';
      this.local.idSelected = null;
      this.$validator.reset()
    },
    getDepartmentName (departmentId) {
      // console.log(departmentId); 
      if (!departmentId) return '';
      return this.local.departmentItems.filter((item) => {
        return item._id === departmentId
      })[0].name
    }
  }
}
</script>
