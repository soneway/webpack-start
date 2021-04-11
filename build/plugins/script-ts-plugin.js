class ScriptTsPlugin {
  constructor(options) {
    this.options = options;
    console.log('new ScriptTsPlugin');
  }
  apply(compiler) {
    compiler.hooks.compilation.tap('ScriptTsPlugin', (compilation, callback) => {
      console.log('ScriptTsPlugin');
    });
  }
}

module.exports = ScriptTsPlugin;
