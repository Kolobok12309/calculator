import { writable } from 'svelte/store';

import isSomeEnum from '@/utils/is-some-enum';

export enum ColorTheme {
  Dark = 'dark',
  Light = 'light',
  Default = 'default',
};

const STORAGE_NAME = 'color-theme';
const storage = window.localStorage;
const isColorTheme = isSomeEnum(ColorTheme);

const createStorage = () => {
  let initialTheme = ColorTheme.Default;

  try {
    const theme = storage.getItem(STORAGE_NAME);

    if (isColorTheme(theme)) initialTheme = theme;
  } catch(err) {}

  const { subscribe, set: realSet } = writable(initialTheme, (set) => {
    const listener = ({ storageArea, key, newValue }: StorageEvent) => {
      if (storageArea !== storage) return;
      if (key !== STORAGE_NAME) return;
      if (!isColorTheme(newValue)) return;

      set(newValue);
    }

    window.addEventListener('storage', listener);

    return () => {
      window.removeEventListener('storage', listener);
    };
  });

  const set = (newValue: string) => {
    let newTheme = ColorTheme.Default;

    if (isColorTheme(newValue)) newTheme = newValue;

    try {
      storage.setItem(STORAGE_NAME, newTheme);
      realSet(newTheme);
    } catch(err) {}
  }

  return {
    subscribe,
    set,
  };
}

export const colorTheme = createStorage();
