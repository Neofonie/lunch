<template lang = "pug">
  div.result
    h2 {{ title }}
    .content-box.flex-container
      .result-list(v-for="(group, index) in result", :key="index")
        h3 Gruppe {{ index + 1 }}
        ul.result-list__content
          li.result-list__item(v-for="(name, index) in group", :key="index") {{ name }}

</template>

<script>
export default {
  name: 'ResultView',
  data () {
    return {
      title: 'Gruppenübersicht',
      result: this.$root.$data.result
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.flex-container
     display: flex
     flex-wrap: wrap
     justify-content: space-around
.result-list
  margin: 0 10px
  &__content
    border-radius: 0 10px
    background-color: rgba(255, 255, 255, 0.1)
    padding: 20px
    margin-bottom: 20px
    line-height: 38px
  &__item
    list-style-type: none

</style>
