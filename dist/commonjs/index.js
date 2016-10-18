'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configure = configure;

require('select2/select2');

function configure(config) {
  config.globalResources('./select-2');
}