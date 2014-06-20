define(
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Component = __dependency1__.Component;
    var get = __dependency1__.get;
    var set = __dependency1__.set;
    var computed = __dependency1__.computed;

    /**
      The `ButtonComponent` is a bootstrap-ready button to be used with the
      ButtonDropdownComponent.

      @class ButtonComponent
      @extends Ember.Component
    */

    var ButtonComponent;

    ButtonComponent = {
      /**
        The type of element to render this view into. By default, samples will appear
        as `<button/>` elements.

        @property tagName
        @type String
        @default 'button'
      */
      tagName: 'button',

      /**
        The value for the type attribute.

        @property type
        @type String
        @default 'button'
      */
      type: 'button',

      /**
        Attribute bindings.

        @property attributeBindings
        @type Array
        @default ['type']
      */
      attributeBindings: ['type'],

      /**
        Class names applied to the container.

        @property classNames
        @type Array
        @default ['btn', 'dropdown-toggle']
      */
      classNames: ['btn', 'dropdown-toggle'],

      /**
        Bound class names applied to the container.

        @property classNameBindings
        @type Array
        @default ['style']
      */
      classNameBindings: ['btnStyle'],

      /**
        The bootstrap style applied to the button.

        @property btn-style
        @type String
        @default 'btn-default'
      */
      btnStyle: 'btn-default',

      click: function () {
        this.get('parentView').toggle();
      }
    };

    __exports__["default"] = Component.extend(ButtonComponent);
  });