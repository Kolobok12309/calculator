<script lang="ts">
  import { colorTheme } from '@/store/color-theme';

  import Calculator from './calculator/index.svelte';
</script>

<div
  class="container"
  class:dark={$colorTheme === 'dark'}
  class:light={$colorTheme === 'light'}
>
  <Calculator />
</div>

<style lang="sass">
:global(html,body)
	height: 100%
	font-family: $font-family
	touch-action: none

:global(*)
	box-sizing: border-box

.container
	width: 100%
	height: 100%
	display: flex
	align-items: center
	justify-content: center
</style>
