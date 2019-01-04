<template  lang="pug">
.name-list-item.flex-container
  span.name-list-item__name {{name}}
  button.name-list-item__remove-name(v-on:click="removeName") Löschen

</template>

<script>
export default {
  name: 'NameListItem',
  props: ['name', 'index'],
  data () {
    return {
      names: this.$root.$data.names
    }
  },
  methods: {
    removeName () {
      this.$delete(this.names, this.index)
    }
  }
}
</script>

<style scoped lang="less">
.name-list-item {
  border-radius: 0 10px;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 20px;
  margin-bottom: 20px;

  &__remove-name {
    background-color: #83ffd2;
    box-shadow: 2px 5px #6dccaf;
    &:active {
      box-shadow: 0px 2px #549e88;
    }
  }
}
</style>
