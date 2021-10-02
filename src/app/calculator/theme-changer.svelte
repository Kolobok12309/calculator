<script lang="ts">
  import { colorTheme, ColorTheme } from '@/store/color-theme';

  const themes = [
    { id: ColorTheme.Light, label: 'Light', icon: 'sun' },
    { id: ColorTheme.Dark, label: 'Dark', icon: 'moon' },
    { id: ColorTheme.Default, label: 'System', icon: 'adjust' },
  ];

  $: currentTheme = themes.find(({ id }) => id === $colorTheme);
</script>

<div class="theme-changer">
  <i
    class={`fas theme-changer__icon fa-${currentTheme.icon}`}
    title={currentTheme.label}
  />

  <select
    bind:value={$colorTheme}
    aria-label="Color theme select"
    class="theme-changer__select"
  >
    {#each themes as theme}
      <option value={theme.id} class="theme-changer__option">
        {theme.label}
      </option>
    {/each}
  </select>
</div>

<style lang="sass">
.theme-changer
  position: relative
  +color($c-light-accent, $c-dark-accent)

  $size: 16px

  &__icon
    position: relative
    z-index: 1
    pointer-events: none
    width: $size
    height: $size

  &__select
    position: absolute
    left: 0
    top: 0
    opacity: 0
    cursor: pointer
    width: $size
    height: $size
</style>
