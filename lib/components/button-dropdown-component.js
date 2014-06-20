import { Component, get, set, computed } from 'ember';

/**
  The `ButtonDropdownComponent` is a bootstrap-ready button dropdown.

  To use this component in your app, add this to a template:

  ```handlebars
  {{#btn-dropdown}}
    {{#btn-dropdown-button}}
      My Button Label
    {{/btn-dropdown-button}}
    {{#btn-dropdown-list}}
      {{#btn-dropdown-item action="myOptionSelect"}}
        My option
      {{/btn-dropdown-item}}
    {{/btn-dropdown-list}}
  {{/btn-dropdown}}
  ```

  @class ButtonDropdownComponent
  @extends Ember.Component
*/

var ButtonDropdownComponent;

ButtonDropdownComponent = {
  /**
    The type of element to render this view into. By default, samples will appear
    as `<btn-dropdown/>` elements.

    @property tagName
    @type String
    @default 'btn-dropdown'
  */
  tagName: 'btn-dropdown',

  classNames: ['btn-group'],

  /**
    Class names applied to the container.

    @property classNameBindings
    @type Array
    @default ['isOpen:open']
  */
  classNameBindings: ['isOpen:open'],

  /**
    Whether or not the dropdown is open.

    @property isOpen
    @type Boolean
    @default false
  */
  isOpen: false,

  /**
    Close the dropdown.

    @method close
    @chainable
  */
  close: function () {
    this.set('isOpen', false);

    return this;
  },

  /**
    Open the dropdown.

    @method open
    @chainable
  */
  open: function () {
    this.set('isOpen', true);

    return this;
  },

  /**
    Toggle the dropdown.

    @method toggle
    @chainable
  */
  toggle: function () {
    this.toggleProperty('isOpen');

    return this;
  },

  /**
    Event handler for clicks outside the dropdown.

    @method handleOuterClick
  */
  handleOuterClick: function (e) {
    var element = this.get('element');

    if (e.target === element || $.contains(element, e.target)) {
      return;
    }

    this.close();
  },

  /**
    Event handler for whenever a key is pressed, bindings are set elsewhere.
    Allows arrows to cycle through the enabled list items.

    @method handleKeyDown
  */
  handleKeyDown: function (e) {
      var $items = this.$('li:not(.divider):not(.disabled):visible a'),
          index;

      if (!$items.length || (e.keyCode !== 38 && e.keyCode !== 40)) { return; }

      index = $items.index($items.filter(':focus'));

      if (e.keyCode === 38 && index > 0) { index--; } // up
      if (e.keyCode === 40 && index < $items.length - 1) { index++; } // down
      if (!~index) { index = 0; }

      $items.eq(index).focus();
  },

  /**
    Bind event handlers on the document when the dropdown opens.

    @method bindEventHandlers
  */
  bindEventHandlers: function () {
    if (!this.get('isOpen')) {
      return this.unbindEventHandlers();
    }

    Ember.run.next(this, function () {
      if (this.get('isOpen')) {
        $(document).on('click.btn-dropdown', $.proxy(this.handleOuterClick, this));
        $(document).on('keydown.btn-dropdown', $.proxy(this.handleKeyDown, this));
      } else {
        this.unbindEventHandlers();
      }
    });
  }.observes('isOpen'),

  /**
    Removes event handlers. Automatically runs if the element is destroyed.

    @method unbindEventHandlers
  */
  unbindEventHandlers: function () {
    $(document).off('keydown.btn-dropdown');
    $(document).off('click.btn-dropdown');
  }.on('willDestroyElement')
};

export default Component.extend(ButtonDropdownComponent);
