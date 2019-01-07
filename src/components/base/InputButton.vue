<template lang="pug">
   .input-button.flex-container
        input.input-button__input(v-model="vmValue" :placeholder="placeHolderValue")
        span.input-button__error {{errorMessage}}
        button.input-button__button(v-on:click="callbacks.click(vmValue)") {{label}}

</template>

<script>
export default {
  name: 'InputButton',
  props: {
    placeHolderValue: {
      type: String,
      required: true,
      default: 'Should not be empty'
    },
    label: {
      type: String,
      required: true
    },
    callbacks: {
      type: Object,
      required: true
    },
    errorMessage: {
      type: String
    },
    inputType: {
      type: String
    }
  },
  data () {
    return {
      vmValue: null
    }
  }
}
</script>

<style scoped lang="sass">
  .input-button

    &__input
      padding: 10px
      font-size: 16px
      width: 40%

    &__error
      line-height: 36px
      color: #c573ff
      font-style: italic
      font-weight: 600

    &__button
      background-color: #ffc3d7
      color: black
      padding: 10px 20px
      font-size: 16px
      font-weight: 600
      border-color: #030203
      box-shadow: 2px 5px #c798a8
      border-radius: 0 10px
      width: 140px

      &:active
        box-shadow: 0px 2px #b59299
        transform: translateY(4px)

      &:focus
        outline: none

</style>
