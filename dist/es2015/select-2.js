var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
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

import { bindable, inject, customElement } from 'aurelia-framework';

import $ from 'jquery';

export let Select2 = (_dec = customElement('select2'), _dec2 = inject(Element), _dec(_class = _dec2(_class = (_class2 = class Select2 {

    constructor(element) {
        _initDefineProp(this, 'name', _descriptor, this);

        _initDefineProp(this, 'selected', _descriptor2, this);

        _initDefineProp(this, 'options', _descriptor3, this);

        _initDefineProp(this, 'labelProp', _descriptor4, this);

        _initDefineProp(this, 'valueProp', _descriptor5, this);

        this.element = element;
    }

    attached() {
        setTimeout(() => {
            $(this.element).find('select').select2({ dropdownAutoWidth: 'true', width: 'auto' }).on('change', event => {
                let changeEvent;

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
                this.element.dispatchEvent(changeEvent);
            });
        }, 0);
    }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'name', [bindable], {
    enumerable: true,
    initializer: function () {
        return null;
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'selected', [bindable], {
    enumerable: true,
    initializer: function () {
        return false;
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'options', [bindable], {
    enumerable: true,
    initializer: function () {
        return {};
    }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'labelProp', [bindable], {
    enumerable: true,
    initializer: function () {
        return 'label';
    }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'valueProp', [bindable], {
    enumerable: true,
    initializer: function () {
        return 'value';
    }
})), _class2)) || _class) || _class);