// Aurelia Framework specific functionality
import {bindable, inject, customElement} from 'aurelia-framework';
import $ from 'jquery';
import 'select2';

// Import JSPM modules we installed earlier

@customElement('select2') // Define the name of our custom element
@inject(Element) // Inject the instance of this element
export class Select2 {
    @bindable name = null; // The name of our custom select
    @bindable selected = false; // The default selected value
    @bindable options = {}; // The label/option values
    @bindable labelProp = 'label';
    @bindable valueProp = 'value';

    constructor(element) {
        this.element = element;
    }

    // selectedChanged() {
    //     $(this.element).find('select').trigger('change');
    // }

    // Once the Custom Element has its DOM instantiated and ready for binding
    // to happenings within the DOM itself
    attached() {
        setTimeout(() => {
            $(this.element).find('select')
            .select2({dropdownAutoWidth: 'true', width: 'auto'})
            .on('change', (event) => {
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
}
