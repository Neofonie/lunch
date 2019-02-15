<template lang="pug">
   .choose-names.flex-container
        input.choose-names__input(v-model="personCount" :placeholder="placeHolderValue" :max="maxPersonCount", min="2", type="number")
        button.choose-names__button(v-on:click="chooseNames") Auslosen
</template>

<script>
export default {
  name: 'ChooseNames',
  data () {
    return {
      names: this.$root.$data.names,
      placeHolderValue: 'Anzahl Teilnehmer pro Gruppe',
      personCount: null
    }
  },
  methods: {
    chooseNames () {
      const max = parseInt(this.personCount) ? parseInt(this.personCount) : 2
      let tmpNames = this.names.slice(0)
      let result = []
      while (tmpNames.length) {
        let subGroup = []
        for (let i = 0; i < max; i++) {
          console.log(i)
          if (tmpNames.length) {
            let index = Math.floor(Math.random() * tmpNames.length)
            subGroup.push(tmpNames[index])
            this.$delete(tmpNames, index)
          }
        }
        result.push(subGroup)
      }
      console.log(result)
      this.$root.$data.result = result
      this.$router.push({ name: 'll-ergebnissliste' })
    }
  },
  computed: {
    maxPersonCount () {
      return Math.round(this.names.length / 2)
    }
  }
}
</script>

<style scoped lang="sass">
.choose-names
    &__input
        padding: 10px
        font-size: 16px
        width: 40%
</style>
