import isSomeEnum from '@/utils/is-some-enum';

const STORAGE_NAME = 'color-theme';

export enum ColorTheme {
  Dark = 'dark',
  Light = 'light',
  Default = 'default',
};

const isColorTheme = isSomeEnum(ColorTheme);

export const setTheme = (theme: ColorTheme) => {
  try {
    window.localStorage.setItem(STORAGE_NAME, theme);
  } catch(err) {}
}

export const getTheme = (): ColorTheme => {
  try {
    const theme = window.localStorage.getItem(STORAGE_NAME);

    if (isColorTheme(theme)) {
      return theme;
    }

    return ColorTheme.Default;
  } catch (err) {
    return ColorTheme.Default;
  }
}
