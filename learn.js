function getPasswordValidator(minLength) {
  // eslint-disable-next-line no-useless-escape
  const str = `(?=\w*\d)(?=\w*[a-z])(?=\w*[A-Z]){${minLength},}`;
  const reg = new RegExp(str, 'gm');
  return reg;
}

const arr = [
  'password',
  'PASSWORD',
  'pa55word',
  'PASSW0RD',
  'Pa55',
  'Pa__W0rd',
  '   PassW0rd    ',
];

const arr2 = [
  'PA55word',
  'passW0rd',
  'pa55W0rd',
  'pa55wordPASSW0RD',
  'a1A2b3B4',
];

arr.forEach((el) => console.log(el.match(getPasswordValidator(6))));
