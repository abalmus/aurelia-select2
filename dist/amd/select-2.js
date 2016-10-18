define(['exports', 'aurelia-framework', 'jquery', 'select2/select2'], function (exports, _aureliaFramework, _jquery) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Select2 = undefined;

    var _jquery2 = _interopRequireDefault(_jquery);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _initDefineProp(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object['ke' + 'ys'](descriptor).forEach(function (key) {
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
            Object['define' + 'Property'](target, property, desc);
            desc = null;
        }

        return desc;
    }

    function _initializerWarningHelper(descriptor, context) {
        throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
    }

    var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

    var Select2 = exports.Select2 = (_dec = (0, _aureliaFramework.customElement)('select2'), _dec2 = (0, _aureliaFramework.inject)(Element), _dec(_class = _dec2(_class = (_class2 = function () {
        function Select2(element) {
            _classCallCheck(this, Select2);

            _initDefineProp(this, 'name', _descriptor, this);

            _initDefineProp(this, 'selected', _descriptor2, this);

            _initDefineProp(this, 'options', _descriptor3, this);

            _initDefineProp(this, 'labelProp', _descriptor4, this);

            _initDefineProp(this, 'valueProp', _descriptor5, this);

            this.element = element;
        }

        Select2.prototype.attached = function attached() {
            var _this = this;

            setTimeout(function () {
                (0, _jquery2.default)(_this.element).find('select').select2({ dropdownAutoWidth: 'true', width: 'auto' }).on('change', function (event) {
                    var changeEvent = void 0;

                    if (window.CustomEvent) {
                        changeEvent = new CustomEvent('change', {
                            detail: {
                                value: event.target.value
                            },
                            bubbles: true
                        });
                    } else {
                        changeEvent = document.createEvent('CustomEvent');
                        changeEvent.initCustomEvent('change', true, true, {
                            detail: {
                                value: event.target.value
                            }
                        });
                    }
                    _this.element.dispatchEvent(changeEvent);
                });
            }, 0);
        };

        return Select2;
    }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'name', [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'selected', [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return false;
        }
    }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'options', [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return {};
        }
    }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'labelProp', [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return 'label';
        }
    }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'valueProp', [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return 'value';
        }
    })), _class2)) || _class) || _class);
});