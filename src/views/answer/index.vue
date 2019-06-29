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
                <!-- <span class="input-group-addon">สาเหตุ</span> -->
                <my-input
                  :config="{
                    type: 'text',
                    key: 'cause',
                    placeholder: 'สาเหตุ',
                    rules: 'required',
                    validator: $validator
                  }"
                  :value="local.cause"
                  @input="value => {local.cause = value}"
                ></my-input>
              </div>     
              <div class="input-group m-2">
                <!-- <span class="input-group-addon">วิธีป้องกัน</span> -->
                <my-input
                  :config="{
                    type: 'text',
                    key: 'prevention',
                    placeholder: 'วิธีป้องกัน',
                    rules: 'required',
                    validator: $validator
                  }"
                  :value="local.prevention"
                  @input="value => {local.prevention = value}"
                ></my-input>
              </div>
              <div class="input-group m-2">
              <!-- <span class="input-group-addon">ผู้รับผิดชอบ</span> -->
                <my-input
                  :config="{
                    type: 'text',
                    key: 'responsible',
                    placeholder: 'ผู้รับผิดชอบ',
                    rules: 'required',
                    validator: $validator
                  }"
                  :value="local.responsible"
                  @input="value => {local.responsible = value}"
                ></my-input>
              </div>
            </div>
            <div class="column col-4">
              <div class="column col-md-4">
                <div class="form-group">
                  <label class="form-label" for="input-example-1"></label>
                  <button class="btn btn-primary" @click="event('add')">บันทึกข้อมูล</button>
                </div>
              </div>
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
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr :key="index" v-for="(item, index) in local.items">
                    <td>{{item.cause}}</td>
                    <td>{{item.prevention}}</td>
                    <td>{{item.responsible}}</td>
                    <td><button class="btn btn-error" @click="event('remove', {_id: item._id})">ลบข้อมูล</button></td>
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
import to from 'await-to-js';
import service from '@Services/app.service'
import config from '@Config/app.config'

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
        items: []
      }
    }
  },
  created () {
    this.fetchData();
  },
    methods: {
    
    async fetchData () {
      let err, res;
      [ err, res ] = await to(service.getResource({ resourceName: `${config.api.answer.index}/${this.$route.params.key}` }));
      if(err) return;
      this.local.items = res.data.answers
    },
    async event (type, data = null) {
      let err, res, resourceName, queryString, reportData;
      switch(type) {
        case 'add':
          [ err, res ] = await to(this.$validator.validate());
          if(err || !res) return
          [ err, res ] = await to(service.postResource(
            { 
              resourceName: config.api.answer.index,
              data: {
                cause: this.local.cause,
                prevention: this.local.prevention,
                responsible: this.local.responsible,
                reportId: this.$route.params.key
              }
            }
          ))
          if(err) return;
          this.resetForm();
          await this.fetchData()
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
          resourceName = config.api.answer.index;
          // console.log(data);
           queryString = { answerId: data._id};
          [ err, res ] = await to(service.deleteResource({ resourceName, queryString}));
          if(err) return;
          await this.fetchData()
          break;
      }
      this.local.departmentInput = null
      this.$notify({
        group: 'default',
        text: 'ทำรายการสำเร็จ',
        type: 'success',
      });
    },
    resetForm () {
      this.local.cause = null
      this.local.prevention = null
      this.local.responsible = null
      this.$validator.reset()
    }
  }
}
</script>
