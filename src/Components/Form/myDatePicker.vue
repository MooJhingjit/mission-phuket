<template>
  <div class="date-div">
    <date-picker v-model="myValue"
    :id="`input_${config.key}`"
    v-validate="config.rules"
    :input-class="getInputClass()"
    :name="config.key"
    lang="en"
    type="datetime"
    width="100%"
    :placeholder="config.placeholder"
    format="DD-MM-YYYY [เวลา] HH:mm">
    </date-picker>
    <!-- <datepicker
      :id="`input_${config.key}`"
      v-validate="config.rules"
      :input-class="getInputClass()"
      :name="config.key"
      readonly="false"
      :placeholder="config.placeholder"
      v-model="myValue"
    >
    </datepicker> -->
    <!-- {{errors}} -->
    <p class="form-input-hint text-error" v-if="errors.has(config.key)">กรุณาตรวจสอบข้อมูลข้างต้น</p>
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker'
export default {
  props: {
    config: {
      type: Object,
      required: true
    },
    value: {
      type: [Date, String],
      required: false
    }
  },
  components: {
    DatePicker
  },
  name: 'MyDatePicker',
  data () {
    return {
      myValue: ''
    }
  },
  computed: {
  },
  created () {
    this.setData()
  },
  methods: {
    setData () {
      // console.log(this.$validator)
      if (this.config.validator) {
        this.$validator = this.config.validator
      }
      this.myValue = this.value
      
    },
    getInputClass () {
      return [
        'form-input',
        { 'is-error': this.errors.has(this.config.key) }
      ]
    }
  },
  watch: {
    myValue () {
      // console.log(this.myValue);
      this.$emit('input', this.myValue)
    },
    value () {
      // console.log(this.value);
      this.myValue = this.value
    },
  }
}
</script>

<style lang="scss" scoped>
p {
  margin-bottom: 0px !important;
}

</style>
