<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  const buttons = [
    { text: 'C', color: 'red', handler: () => dispatch('reset') },
    { text: 'CA', color: 'red', handler: () => dispatch('reset') },
    { text: '←', color: 'red', handler: () => dispatch('backspace') },
    { text: '_', color: 'red', handler: () => dispatch('add', ' ') },
    { text: '(', color: 'accent', handler: () => dispatch('add', '(') },
    { text: ')', color: 'accent', handler: () => dispatch('add', ')') },
    { text: '!', color: 'accent', handler: () => dispatch('add', '!') },
    { text: '/', color: 'accent', handler: () => dispatch('add', ' / ') },
    { text: '7', color: 'text', handler: () => dispatch('add', '7') },
    { text: '8', color: 'text', handler: () => dispatch('add', '8') },
    { text: '9', color: 'text', handler: () => dispatch('add', '9') },
    { text: '*', color: 'accent', handler: () => dispatch('add', ' * ') },
    { text: '4', color: 'text', handler: () => dispatch('add', '4') },
    { text: '5', color: 'text', handler: () => dispatch('add', '5') },
    { text: '6', color: 'text', handler: () => dispatch('add', '6') },
    { text: '-', color: 'accent', handler: () => dispatch('add', '-') },
    { text: '1', color: 'text', handler: () => dispatch('add', '1') },
    { text: '2', color: 'text', handler: () => dispatch('add', '2') },
    { text: '3', color: 'text', handler: () => dispatch('add', '3') },
    { text: '+', color: 'accent', handler: () => dispatch('add', '+') },
    { text: '0', color: 'text', handler: () => dispatch('add', '0') },
    { text: '000', color: 'text', handler: () => dispatch('add', '000') },
    { text: '.', color: 'text', handler: () => dispatch('add', '.') },
    { text: '=', color: 'bg', round: true, handler: () => dispatch('submit') },
  ];
</script>

<div class="keyboard">
  {#each buttons as button}
    <button
      class={`keyboard__btn keyboard__btn_${button.color}`}
      class:keyboard__btn_round={button.round}
      on:click={button.handler}
    >
      {button.text}
    </button>
  {/each}
</div>

<style lang="sass">
.keyboard
  display: grid
  grid-template-columns: repeat(4, 1fr)
  gap: 10px

  &__btn
    flex-basis: 25%
    display: flex
    align-items: center
    justify-content: center
    padding: 0
    border: none
    background-color: transparent
    font-size: 26px
    padding: 10px

    &_bg
      +color($c-light-bg, $c-dark-bg)

    &_red
      +color($c-light-red, $c-dark-red)

    &_accent
      +color($c-light-accent, $c-dark-accent)

    &_text
      +color($c-light-text, $c-dark-text)

    &_round
      border-radius: 50%
      aspect-ratio: 1 / 1
      +backgroundColor($c-light-accent, $c-dark-accent)
</style>
