export const escapeRegexp = (text: string = '') =>
  text.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
