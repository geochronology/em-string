
// module.exports = {

function camelize(str) {
  const CAMELIZE_REGEXP_1 = /(-|_|\.|\s)+(.)?/g;
  const CAMELIZE_REGEXP_2 = /(^|\/)([A-Z])/g;

  return str
    .replace(CAMELIZE_REGEXP_1, (_match, _separator_, chr) => (chr ? chr.toUpperCase() : ''))
    .replace(CAMELIZE_REGEXP_2, (match /* _separator_, chr */) => match.toLowerCase())
}


function underscore(str) {
  const UNDERSCORE_REGEXP_1 = (/([a-z\d])([A-Z]+)/g)
  const UNDERSCORE_REGEXP_2 = (/\-|\s+/g)

  return str
    .replace(UNDERSCORE_REGEXP_1, '$1_$2')
    .replace(UNDERSCORE_REGEXP_2, '_')
    .toLowerCase()
}


function capitalize(str) {
  const CAPITALIZE_REGEXP = /(^|\/)([a-z\u00C0-\u024F])/g;

  return str.replace(CAPITALIZE_REGEXP, (match /*, separator, chr */) => match.toUpperCase())
}


function classify(str) {
  const STRING_CLASSIFY_REGEXP_1 = /^(-|_)+(.)?/;
  const STRING_CLASSIFY_REGEXP_2 = /(.)(-|_|\.|\s)+(.)?/g;
  const STRING_CLASSIFY_REGEXP_3 = /(^|\/|\.)([a-z])/g;

  let replace1 = (_match, _separator_, chr) => chr ? `_${chr.toUpperCase()}` : '';
  let replace2 = (_match, initialChar, _separator, chr) =>
    initialChar + (chr ? chr.toUpperCase() : '');
  let parts = str.split('/');
  for (let i = 0; i < parts.length; i++) {
    parts[i] = parts[i]
      .replace(STRING_CLASSIFY_REGEXP_1, replace1)
      .replace(STRING_CLASSIFY_REGEXP_2, replace2);
  }
  return parts
    .join('/')
    .replace(STRING_CLASSIFY_REGEXP_3, (match /*, separator, chr */) => match.toUpperCase());
}


// }

console.log(camelize("css-class-name"))
