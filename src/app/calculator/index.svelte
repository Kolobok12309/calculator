<script lang="ts">
  import type { ColorTheme } from '../color-theme';

  import Keyboard from './keyboard.svelte';

  export let colorTheme: ColorTheme;
</script>

<main class="calculator">
  <h1>Hello world!</h1>
  <i class="fas fa-user" />
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>

  <Keyboard />
</main>

<style lang="sass">
.calculator
	min-width: 320px
	max-width: 414px
	width: 100%
	max-height: 800px
	height: 100%
	flex-grow: 1
	padding: 60px 40px 55px 55px
	border-radius: 15px
	display: flex
	flex-direction: column

	+backgroundColor($c-light-bg, $c-dark-bg)

	@media (max-width: 414px)
		border-radius: 0
</style>
