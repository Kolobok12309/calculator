<script
	lang="ts"
	context="module"
>
	import { Calculator } from '@/logic';
	import type CompiledOperator from '@/logic/compiled-operator';

	const calculator = new Calculator();
</script>

<script lang="ts">
  import Keyboard from './keyboard.svelte';
  import ThemeChanger from './theme-changer.svelte';
	import ResultDisplay from './result-display.svelte';
	import QueryDisplay from './query-display.svelte';

  let result: number = 0;
	let compiled: CompiledOperator = null;
	let query: string = '';

	const onAddSymbol = ({ detail }) => {
		query += detail;
	}
	const onReset = () => {
		query = '';
		result = 0;
		compiled = null;
	}
	const onSubmit = () => {
		try {
			compiled = calculator.compile(query);
			result = compiled.exec();
			query = compiled.view(-1);
		} catch (err) {
			console.error(err);
		}
	}
</script>

<main class="calculator">
  <div class="calculator__settings">
    <ThemeChanger />
  </div>

  <div class="calculator__result">
    <ResultDisplay result={result} />
  </div>

  <div class="calculator__query">
		<QueryDisplay query={query} />
  </div>

  <div class="calculator__keyboard">
    <Keyboard
			on:add={onAddSymbol}
			on:reset={onReset}
			on:submit={onSubmit}
		/>
  </div>
</main>

<style lang="sass">
.calculator
	$max-width: 414px
	$max-height: 800px

	position: relative
	min-width: 320px
	max-width: $max-width
	width: 100%
	max-height: $max-height
	height: 100%
	flex-grow: 1
	padding: 40px 60px
	border-radius: 15px
	display: flex
	flex-direction: column

	+backgroundColor($c-light-bg, $c-dark-bg)
	+color($c-light-text, $c-dark-text)

	@media (max-width: $max-width)
		border-radius: 0
		padding: 25px

	@media screen and (orientation: landscape) and (max-height: 500px)
		max-width: $max-height
		max-height: $max-width

		@media (max-width: $max-height)
			border-radius: 0

	&__settings
		position: absolute

	&__keyboard
		margin-top: auto
</style>
