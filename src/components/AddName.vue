<template lang="pug">
   .add-name.flex-container
        input.add-name__input(v-model="newName" :placeholder="placeHolderValue")
        span.add-name__error {{errorMessage}}
        button.add-name__button(v-on:click="addName") Hinzufügen

</template>

<script>
export default {
  name: 'AddName',
  data () {
    return {
      names: this.$root.$data.names,
      placeHolderValue: 'Add a new name',
      newName: null,
      errorMessage: ''
    }
  },
  methods: {
    addName () {
      if (this.names.includes(this.newName)) {
        this.errorMessage = `Der Name "${this.newName}" ist bereits vorhanden.`
        return
      }
      this.names.push(this.newName)
    }
  }
}
</script>

<style scoped lang="sass">
  .add-name
    &__input
      padding: 10px
      font-size: 16px
      width: 40%

    &__error
      line-height: 36px
      color: #c573ff
      font-style: italic
      font-weight: 600

</style>
