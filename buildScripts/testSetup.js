/**
 * Created by nicolemi on 5/25/2017.
 */
// this file isn't transpiled, so must use CommonJS and ES5

// Register babel to transpile before our tests run
require('babel-register')();

//Disable webpack feature that Mocha does not understand
require.extensions['.css'] = function() {};