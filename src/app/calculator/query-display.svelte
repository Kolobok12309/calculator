<script lang="ts">
  export let query = '';

  const template = (className: string, content: string = '') =>
    `<span class="display__${className}">${content}</span>`;

  $: htmlQuery = query
    .replace(/ +/g, template('space'))
    .replace(/\d+/g, v => template('num', v));
</script>

<div class="display">
  {@html htmlQuery}
</div>

<style lang="sass">
.display
  text-align: right
  font-size: 22px
  line-height: 1.25
  min-height: 1.25em
  white-space: nowrap
  overflow: hidden
  text-overflow: ellipsis
  +color($c-light-text, $c-dark-text)

  @include landscape
    @media (max-height: 340px)
      font-size: 20px
      line-height: 1

  :global(.display__num)
    +color($c-light-accent, $c-dark-accent)

  :global(.display__space)
    margin-left: 10px
</style>
