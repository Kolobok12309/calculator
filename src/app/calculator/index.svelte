<script lang="ts">
  import Keyboard from './keyboard.svelte';
  import ThemeChanger from './theme-changer.svelte';
</script>

<main class="calculator">
  <div class="calculator__settings">
    <ThemeChanger />
  </div>

  <div class="calculator__result">120</div>

  <div class="calculator__query">
    50
    <span class="calculator__query__operator"> - </span>
    10
    <span class="calculator__query__operator"> - </span>
    10
    <span class="calculator__query__operator"> - </span>
    10
    <span class="calculator__query__operator"> + </span>
    100
  </div>

  <div class="calculator__keyboard">
    <Keyboard />
  </div>
</main>

<style lang="sass">
.calculator
	$max-width: 414px
	$max-height: 800px

	min-width: 320px
	max-width: $max-width
	width: 100%
	max-height: $max-height
	height: 100%
	flex-grow: 1
	padding: 60px 40px
	border-radius: 15px
	display: flex
	flex-direction: column

	+backgroundColor($c-light-bg, $c-dark-bg)
	+color($c-light-text, $c-dark-text)

	@media (max-width: $max-width)
		border-radius: 0

	@media screen and (orientation: landscape) and (max-height: 500px)
		max-width: $max-height
		max-height: $max-width

		@media (max-width: $max-height)
			border-radius: 0

	&__result
		text-align: right
		font-size: 90px
		line-height: 1.25
		+color($c-light-text, $c-dark-text)

	&__query
		text-align: right
		font-size: 22px
		line-height: 1.25
		+color($c-light-accent, $c-dark-accent)

		&__operator
			+color($c-light-text, $c-dark-text)

	&__keyboard
		margin-top: auto
</style>
