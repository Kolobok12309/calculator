<script lang="ts">
  import Calculator from './calculator/index.svelte';

  import { ColorTheme, getTheme, setTheme } from './color-theme';

  let colorTheme: ColorTheme = getTheme();
</script>

<div
  class="container"
  class:dark={colorTheme === 'dark'}
  class:light={colorTheme === 'light'}
>
  <Calculator bind:colorTheme />
</div>

<style lang="sass">
:global(html,body)
	height: 100%
	min-height: 100vw

:global(*)
	box-sizing: border-box

.container
	width: 100%
	height: 100%
	display: flex
	align-items: center
	justify-content: center
</style>
