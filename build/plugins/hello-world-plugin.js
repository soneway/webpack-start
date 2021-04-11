class HelloWorldPlugin {
  constructor(options) {
    console.log('new HelloWorldPlugin');
  }

  apply(compiler) {
    // compiler.hooks.done.tap('Hello World Plugin', (
    //   stats,
    // ) => {
    //   console.log('hello-world-plugin.js done');
    // });

    // Tap into compilation hook which gives compilation as argument to the callback function
    compiler.hooks.compilation.tap('HelloCompilationPlugin1111', (compilation) => {
      // Now we can tap into various hooks available through compilation
      compilation.hooks.optimize.tap('HelloCompilationPlugin1111', () => {
        // console.log('Assets are being optimized.');
      });
    });
  }
}

module.exports = HelloWorldPlugin;
