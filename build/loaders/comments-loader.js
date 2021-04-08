const stripComments = require('strip-comments');

module.exports = function (source) {
  const options = this.getOptions();
  console.log('comments-loader options', options);

  if (options.removeComments) {
    const res = stripComments(source);
    console.log('stripComments res', res);
    return res;
  }

  return source;
};
