<template>
  <div class="container columns">
    <navigation-bar/>
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
          <div class="columns">
            <div class="column col-8">

              <div class="input-group m-2">
                <span class="input-group-addon">สาเหตุ</span>
                <my-input
                  :config="{
                    type: 'text',
                    key: 'cause',
                    placeholder: '',
                    rules: 'required',
                    validator: $validator
                  }"
                  :value="local.cause"
                  @input="value => {local.cause = value}"
                ></my-input>
              </div>     
              <div class="input-group m-2">
                <span class="input-group-addon">วิธีป้องกัน</span>
                <my-input
                  :config="{
                    type: 'text',
                    key: 'prevention',
                    placeholder: '',
                    rules: 'required',
                    validator: $validator
                  }"
                  :value="local.prevention"
                  @input="value => {local.prevention = value}"
                ></my-input>
              </div>
              <div class="input-group m-2">
              <span class="input-group-addon">ผู้รับผิดชอบ</span>
                <my-input
                  :config="{
                    type: 'text',
                    key: 'responsible',
                    placeholder: '',
                    rules: 'required',
                    validator: $validator
                  }"
                  :value="local.responsible"
                  @input="value => {local.responsible = value}"
                ></my-input>
              </div>
            </div>
            <div class="column col-4">
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
        </div>
        <div class="panel-body">
          <div class="card">
            <div class="card-header">
              <div class="card-title">ตารางแสดงรายการการแก้ไขปัญหา</div>
            </div>
            <div class="card-body">
              <table class="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>สาเหตุ</th>
                    <th>วิธีป้องกัน</th>
                    <th>ผู้รับผิดชอบ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr :key="index" v-for="(item, index) in local.items" @click="selectItem(item)">
                    <td>{{item.cause}}</td>
                    <td>{{item.prevention}}</td>
                    <td>{{item.responsible}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navigationBar from '@Components/navigation'
import MyInput from '@Components/Form/myInput'

export default {
  components: {
    navigationBar,
    MyInput
  },
  data () {
    return {
      local: {
        cause: null,
        prevention: null,
        responsible: null,
        items: [],
        idSelected: null
      }
    }
  },
  created () {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      // let err, resUser, resDepartment;
      // [ err, resUser ] = await to(service.getResource({ resourceName: config.api.user.index }));
      // [ err, resDepartment ] = await to(service.getResource({ resourceName: config.api.department.index }));
      // if(err) return;
      // this.local.departmentItems = resDepartment.data.department;
      this.local.items = [
        {
          cause: 'cause 1',
          prevention: 'prevention 1',
          responsible: 'responsible 1',
        }
      ];
    },
    async event (type, data = null) {
      // let err, res, resourceName, queryString;
      switch(type) {
        case 'add':
          this.local.items.push(
            {
              cause: 'cause 2',
              prevention: 'prevention 2',
              responsible: 'responsible 2',
            }
          );
          // [ err, res ] = await to(this.$validator.validate());
          // if(err || !res) return
          // resourceName = config.api.user.index;
          // [ err, res ] = await to(service.postResource({ resourceName, data: {
          //   name: this.local.name,
          //   username: this.local.username,
          //   password: this.local.password,
          //   departmentId: this.local.departmentId
          // }}))
          break;
        // case 'remove':
        //   const result = await this.$swal({
        //     text: "ลบข้อมูลนี้!",
        //     type: 'warning',
        //     showCancelButton: true,
        //     confirmButtonText: 'ตกลง',
        //     cancelButtonText: 'ยกเลิก',
        //     reverseButtons: true
        //   });
        //   if (!result.value) return;
        //   resourceName = config.api.user.index;
        //   queryString = { id: this.local.idSelected };
        //   [ err, res ] = await to(service.deleteResource({ resourceName, queryString }));
        //   if(err) return;
        //   break;
        // case 'update':
        //   resourceName = `${config.api.user.index}/${this.local.idSelected}`;
        //   [ err, res ] = await to(service.putResource({ resourceName, data: {
        //     name: this.local.name,
        //     username: this.local.username,
        //     password: this.local.password,
        //     departmentId: this.local.departmentId
        //   }}))
        //   if(err) return;
        //   break;
      }
      // this.resetForm();
      // this.fetchData();
      // this.$notify({
      //   group: 'default',
      //   text: 'ทำรายการสำเร็จ',
      //   type: 'success',
      // });
    },
    selectItem (item) {
      // console.log(item);
      this.local.idSelected = 1
      this.local.cause = item.cause;
      this.local.prevention = item.prevention;
      this.local.responsible = item.responsible;
      // this.local.departmentId = item.department;
    },
    resetForm () {
      // this.local.name = '';
      // this.local.username = '';
      // this.local.password = '';
      // this.local.departmentId = '';
      this.local.idSelected = null;
      // this.$validator.reset()
    }
  }
}
</script>
