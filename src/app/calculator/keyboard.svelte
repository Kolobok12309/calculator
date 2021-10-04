<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  const buttons = [
    {
      text: '(',
      color: 'accent',
      advanced: true,
      handler: () => dispatch('add', '('),
    },
    {
      text: ')',
      color: 'accent',
      advanced: true,
      handler: () => dispatch('add', ')'),
    },
    {
      text: 'x!',
      color: 'accent',
      advanced: true,
      handler: () => dispatch('add', '!'),
    },
    {
      text: '_',
      color: 'accent',
      advanced: true,
      handler: () => dispatch('add', ' '),
    },
    { text: 'C', color: 'red', handler: () => dispatch('reset') },
    { text: 'CA', color: 'red', handler: () => dispatch('reset') },
    { text: '←', color: 'red', handler: () => dispatch('backspace') },
    { text: '/', color: 'accent', handler: () => dispatch('add', ' / ') },
    {
      text: 'x<sup>2</sup>',
      color: 'accent',
      advanced: true,
      handler: () => dispatch('add', '^2 '),
    },
    {
      text: 'x<sup>3</sup>',
      color: 'accent',
      advanced: true,
      handler: () => dispatch('add', '^3 '),
    },
    {
      text: 'x<sup>y</sup>',
      color: 'accent',
      advanced: true,
      handler: () => dispatch('add', '^'),
    },
    {
      text: '10<sup>x</sup>',
      color: 'accent',
      advanced: true,
      handler: () => dispatch('add', '10^'),
    },
    { text: '7', color: 'text', handler: () => dispatch('add', '7') },
    { text: '8', color: 'text', handler: () => dispatch('add', '8') },
    { text: '9', color: 'text', handler: () => dispatch('add', '9') },
    { text: '∗', color: 'accent', handler: () => dispatch('add', ' * ') },
    {
      text: '√2',
      color: 'accent',
      advanced: true,
      handler: () => dispatch('add', '^(1/2) '),
    },
    {
      text: '√3',
      color: 'accent',
      advanced: true,
      handler: () => dispatch('add', '^(1/3) '),
    },
    {
      text: 'e',
      color: 'accent',
      advanced: true,
      handler: () => dispatch('add', `${Math.E.toFixed(3)}`),
    },
    {
      text: 'π',
      color: 'accent',
      advanced: true,
      handler: () => dispatch('add', `${Math.PI.toFixed(3)}`),
    },
    { text: '4', color: 'text', handler: () => dispatch('add', '4') },
    { text: '5', color: 'text', handler: () => dispatch('add', '5') },
    { text: '6', color: 'text', handler: () => dispatch('add', '6') },
    { text: '-', color: 'accent', handler: () => dispatch('add', '-') },
    { text: '', color: 'accent', advanced: true, handler: () => {} },
    { text: '', color: 'accent', advanced: true, handler: () => {} },
    { text: '', color: 'accent', advanced: true, handler: () => {} },
    { text: '', color: 'accent', advanced: true, handler: () => {} },
    { text: '1', color: 'text', handler: () => dispatch('add', '1') },
    { text: '2', color: 'text', handler: () => dispatch('add', '2') },
    { text: '3', color: 'text', handler: () => dispatch('add', '3') },
    { text: '+', color: 'accent', handler: () => dispatch('add', '+') },
    { text: '', color: 'accent', advanced: true, handler: () => {} },
    { text: '', color: 'accent', advanced: true, handler: () => {} },
    { text: '', color: 'accent', advanced: true, handler: () => {} },
    {
      text: 'Rand',
      color: 'accent',
      advanced: true,
      handler: () => dispatch('add', `${Math.random().toFixed(3)}`),
    },
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
      class:keyboard__btn_advanced={button.advanced}
      on:click={button.handler}
    >
      {@html button.text}
    </button>
  {/each}
</div>

<style lang="sass">
.keyboard
  display: grid
  grid-template-columns: repeat(4, 1fr)
  grid-template-rows: repeat(5, 1fr)
  justify-items: center

  @include landscape
    height: 100%
    grid-template-columns: repeat(8, 1fr)

  &__btn
    display: flex
    align-items: center
    justify-content: center
    border: none
    background-color: transparent
    font-size: 26px
    padding: 10px 15px

    @include landscape
      font-size: 20px
      max-width: 60px
      max-height: 60px

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

    &_advanced
      display: none

      @include landscape
        display: flex
</style>
