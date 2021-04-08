const uglifyjs = require('uglify-js');

module.exports = function (source) {
  const options = this.getOptions();
  console.log('minify-loader options', options);

  if (options.minify) {
    const res = uglifyjs.minify(source);
    console.log('minify res', res);
    return res.code;
  }

  return source;
};
