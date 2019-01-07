<template lang ="pug">
  .lottery
    h2.content-box {{ title }}
    add-name.content-box
    name-list.content-box
    choose-names.content-box
  //-
    div Test
    input-button(
      placeHolderValue="Neuer Teilnehmer"
      label="Hinzufügen"
      v-bind:callbacks="{click: addNameCallback}"
    )

</template>

<script>
import AddName from '@/components/AddName'
import NameList from '@/components/NameList'
import ChooseNames from '@/components/ChooseNames'
// import InputButton from '@/components/base/InputButton'

export default {
  name: 'LotteryView',
  data () {
    return {
      title: 'Lunch-Lotterie Demo'
    }
  },
  /* methods: {
    addNameCallback (value) {
      alert(value)
    }
  }, */
  components: {
    AddName,
    NameList,
    ChooseNames
    // ,InputButton
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.flex-container {
     display: flex;
     justify-content: space-between;
 }

button {
  background-color: #ffc3d7;
  color: black;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  border-color: #030203;
  box-shadow: 2px 5px #c798a8;
  border-radius: 0 10px;
  width: 140px;

  &:active {
    box-shadow: 0px 2px #b59299;
    transform: translateY(4px);
  }

  &:focus {
    outline: none;
  }
}
</style>
