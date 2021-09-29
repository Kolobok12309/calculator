export const escapeRegexp = (text: string = '') =>
  text.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');

export const getRegexpExecArray = (regex: RegExp, string: string) => {
  const res: RegExpExecArray[] = [];
  let tmp: RegExpExecArray;

  while (tmp = regex.exec(string)) {
    res.push(tmp);
  }

  return res;
}
