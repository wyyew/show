var glob = require('glob');
var path = require('path');

/*
pickFiles({
  id: /([^\/]+).js$/,
  pattern: './src/base/*.js',
});
*/
exports.pickFiles = function(options) {
  var files = glob.sync(options.pattern);
  return files.reduce(function(data, filename) {
    var matched = filename.match(options.id);
    var name = matched[1];
    data[name] = path.resolve(__dirname, filename);
    return data;
  }, {});
};

exports.fullPath = function(dir) {
  return path.resolve(__dirname, dir);
};

exports.getIP = function() {
  var os = require('os');
  var IPv4 = '127.0.0.1';
  var interfaces = os.networkInterfaces();
  for (var key in interfaces) {
    interfaces[key].some(function(details){
      if (details.family == 'IPv4' && key == 'en0') {
        IPv4 = details.address;
        return true;
      }
    });
  }
  return IPv4;
};

exports.entries = function(srcDir) {
  var jsDir = path.resolve(srcDir, 'modules');
  var entryFiles = glob.sync(jsDir + '/**/*.{js,jsx}');
  var map = {lib: [
      'react', 'react-dom', 'react-router',
      'redux', 'react-redux', 'redux-thunk'
    ]};

  for(var i = 0, len = entryFiles.length; i < len; i ++ ) {
    var filePath = entryFiles[i];
    var filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'));
    map[filename] = [filePath];
  }
  return map;
};

exports.htmlGenerator = function (srcDir, entries, dev) {
var r = [];
var entryHtml = glob.sync(srcDir + '/modules/**/*.html');
var entries = entries(srcDir);
var HtmlwebpackPlugin = require('html-webpack-plugin');

entryHtml.forEach(function (filePath) {
    var filename = filePath.substring(filePath.lastIndexOf('modules/') + 8);
    var jsFile = filePath.substring(filePath.lastIndexOf('/') + 1, filePath.lastIndexOf('.'));
    var conf = {
        template: filePath,
        filename: jsFile == 'app' ? 'index' + '.html' :filename,//jsFile == 'app' ? 'index' + '.html' : jsFile + '.html',
        minify: dev ? false : {
          collapseWhitespace: true,
          collapseInlineTagWhitespace: true,
          removeRedundantAttributes: true,
          removeEmptyAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          removeComments: true
    }
    };
    if (jsFile in entries) {
        conf.inject = 'body';
        conf.chunks = ['lib', jsFile];
    }
    r.push(new HtmlwebpackPlugin(conf));
});
return r;
};
