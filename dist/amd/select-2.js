define(['exports', 'jquery', 'select2/select2'], function (exports, _jquery, _select) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Select2 = undefined;

  var _jquery2 = _interopRequireDefault(_jquery);

  var _select2 = _interopRequireDefault(_select);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  console.log(_jquery2.default, _select2.default);

  var Select2 = exports.Select2 = function Select2() {
    _classCallCheck(this, Select2);
  };
});