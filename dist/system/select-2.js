'use strict';

System.register(['jquery', 'select2/select2'], function (_export, _context) {
  "use strict";

  var $, select2, Select2;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_jquery) {
      $ = _jquery.default;
    }, function (_select2Select) {
      select2 = _select2Select.default;
    }],
    execute: function () {

      console.log($, select2);

      _export('Select2', Select2 = function Select2() {
        _classCallCheck(this, Select2);
      });

      _export('Select2', Select2);
    }
  };
});