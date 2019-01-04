<template lang = "pug">
  div.result
    h2 {{ title }}
</template>

<script>
export default {
  name: 'ResultView',
  data () {
    return {
      title: 'Ergebnisse'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
