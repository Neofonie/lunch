<template lang="pug">
.name-list
    h2.name-list__title Namensliste
    name-list-item(v-for="(name, index) in names", :key="index", v-bind="{name:name, index:index}")

</template>

<script>
import NameListItem from '@/components/NameListItem'

export default {
  name: 'NameList',
  data () {
    return {
      names: this.$root.$data.names
    }
  },
  components: {
    NameListItem
  }
}
</script>

<style scoped lang="less">
.name-list {
    &__title {
        display: block;
        text-decoration-line: underline;
        text-decoration-style: double;
        text-decoration-color: #ffc3d7;
        padding: 20px;
    }
}

</style>
