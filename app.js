
module.exports = {

  // CAMELIZE
  camelize(str) {
    const CAMELIZE_REGEXP_1 = /(-|_|\.|\s)+(.)?/g;
    const CAMELIZE_REGEXP_2 = /(^|\/)([A-Z])/g;

    return str
      .replace(CAMELIZE_REGEXP_1, (_match, _separator_, chr) => (chr ? chr.toUpperCase() : ''))
      .replace(CAMELIZE_REGEXP_2, (match /* _separator_, chr */) => match.toLowerCase())
  },

  // CAPITALIZE
  capitalize(str) {
    const CAPITALIZE_REGEXP = /(^|\/)([a-z\u00C0-\u024F])/g;

    return str.replace(CAPITALIZE_REGEXP, (match /*, separator, chr */) => match.toUpperCase())
  },


  // CLASSIFY
  classify(str) {
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
  },


  // DASHERIZE
  dasherize(str) {

    const DASHERIZE_REGEXP = /[ _]/g;

    return decamelize(str).replace(DASHERIZE_REGEXP, '-')

  },


  // DECAMELIZE
  decamelize(str) {
    const DECAMELIZE_REGEXP = /([a-z\d])([A-Z])/g;

    return str.replace(DECAMELIZE_REGEXP, '$1_$2').toLowerCase()

  },


  // UNDERSCORE
  underscore(str) {
    const UNDERSCORE_REGEXP_1 = (/([a-z\d])([A-Z]+)/g)
    const UNDERSCORE_REGEXP_2 = (/\-|\s+/g)

    return str
      .replace(UNDERSCORE_REGEXP_1, '$1_$2')
      .replace(UNDERSCORE_REGEXP_2, '_')
      .toLowerCase()
  },


  // HOW BOUT DAT W
  w(str) {
    return str.split(/\s+/);
  }

}


// console.log(camelize("css-class-name"))
