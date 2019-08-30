<template>
  <div class="column col-12">
      <div class="columns navigation-bar">
        <div class="column col-sm-12">
          <ul class="breadcrumb">
            <li class="breadcrumb-item" :key="list.name" v-for="(list) in routeLists">
              <router-link :to="{ name: list.name }">{{list.meta.label}}</router-link>
            </li>
          </ul>
        </div>
        <div class="column col-9 col-sm-12" v-if="hasSlot">
          <slot name="searchOptions"></slot>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  computed: {
    routeLists () {
      return this.$route.matched.filter((route) => route.meta.label)
    }
  },
  props: {
    hasSlot: {
      type: Boolean,
      default: false,
      required: false
    }
  },
}
</script>
