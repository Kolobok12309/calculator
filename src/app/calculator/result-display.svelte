<script lang="ts">
  export let result = 0;
</script>

<div class="display">
  {result}
</div>

<style lang="sass">
.display
  text-align: right
  font-size: 90px
  line-height: 1.25
  +color($c-light-text, $c-dark-text)
</style>
