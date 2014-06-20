!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.WD=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";
var Component = window.Ember.Component;
var get = window.Ember.get;
var set = window.Ember.set;
var computed = window.Ember.computed;

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

exports["default"] = Component.extend(ButtonComponent);
},{}],2:[function(_dereq_,module,exports){
"use strict";
var Component = window.Ember.Component;
var get = window.Ember.get;
var set = window.Ember.set;
var computed = window.Ember.computed;

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
      $(document).off('keydown.btn-dropdown');
      return $(document).off('click.btn-dropdown');
    }

    Ember.run.next(this, function () {
      if (this.get('isOpen')) {
        $(document).on('click.btn-dropdown', $.proxy(this.handleOuterClick, this));
        $(document).on('keydown.btn-dropdown', $.proxy(this.handleKeyDown, this));
      } else {
        $(document).off('click.btn-dropdown');
        $(document).off('keydown.btn-dropdown');
      }
    });
  }.observes('isOpen')
};

exports["default"] = Component.extend(ButtonDropdownComponent);
},{}],3:[function(_dereq_,module,exports){
"use strict";
var Component = window.Ember.Component;
var get = window.Ember.get;
var set = window.Ember.set;
var computed = window.Ember.computed;

/**
  The `ListComponent` is a bootstrap-ready list/menu to be used with the
  ButtonDropdownComponent.

  @class ListComponent
  @extends Ember.Component
*/

var ListComponent;

ListComponent = {
  /**
    The type of element to render this view into. By default, samples will appear
    as `<ul/>` elements.

    @property tagName
    @type String
    @default 'ul'
  */
  tagName: 'ul',

  /**
    Bound attributes on the container.

    @property attributeBindings
    @type Array
    @default ['ariaExpanded:aria-expanded', 'role']
  */
  attributeBindings: ['ariaExpanded:aria-expanded', 'role'],

  /**
    Class names applied to the container.

    @property classNames
    @type Array
    @default ['btn', 'dropdown-toggle']
  */
  classNames: ['dropdown-menu'],

  isOpen: computed.oneWay('parentView.isOpen').readOnly(),

  /**
    Accessibility attribute for whether or not the list is expanded,
    coerced to a string.

    @property ariaExpanded
    @type String
    @default parentView.isOpen
  */
  ariaExpanded: function() {
    return !!this.get('isOpen')+'';
  }.property('isOpen'),

  /**
    Accessibility attribute for the role.

    @property role
    @type String
    @default 'menu'
  */
  role: 'menu'
};

exports["default"] = Component.extend(ListComponent);
},{}],4:[function(_dereq_,module,exports){
"use strict";
var Component = window.Ember.Component;
var Handlebars = window.Ember.Handlebars;
var get = window.Ember.get;
var set = window.Ember.set;
var computed = window.Ember.computed;

/**
  The `ListItemComponent` is a list item within the `ListComponent`, to be used
  with the `ButtonDropdownComponent`.

  By default, this item wraps the content in an `a` tag so that correct
  bootstrap are applied. If you don't want the anchor tag, overwrite the layout.

  @class ListItemComponent
  @extends Ember.Component
*/

var ListItemComponent;

ListItemComponent = {
  /**
    The type of element to render this view into. By default, samples will appear
    as `<li/>` elements.

    @property tagName
    @type String
    @default 'li'
  */
  tagName: 'li',

  /**
    Bound attributes on the container.

    @property attributeBindings
    @type Array
    @default ['ariaExpanded:aria-expanded', 'role']
  */
  attributeBindings: ['ariaDisabled:aria-disabled', 'role'],

  /**
    Flag for whether or not the menu item is disabled.

    @property disabled
    @type Boolean
    @default false
  */
  disabled: false,

  /**
    Accessibility attribute for whether or not the list is disabled,
    coerced to a string.

    @property ariaExpanded
    @type String
    @default parentView.isOpen
  */
  ariaDisabled: function() {
    return !!this.get('disabled')+'';
  }.property('disabled'),

  /**
    Accessibility attribute for the role.

    @property role
    @type String
    @default 'menuitem'
  */
  role: 'menuitem',

  click: function (e) {
    if (this.get('disabled')) {
      return;
    }

    this.get('parentView.parentView').close();
    this.sendAction();
  },

  keyDown: function(e) {
    // keyCode 13 was removed due the click event firing on enter
    if (e.keyCode == 32) {
      this.click(e);
    }
  },

  layout: Handlebars.compile('<a href="#">{{ yield }}</a>')
};

exports["default"] = Component.extend(ListItemComponent);
},{}],5:[function(_dereq_,module,exports){
"use strict";
var ButtonComponent = _dereq_("./components/button-component")["default"] || _dereq_("./components/button-component");
var ListItemComponent = _dereq_("./components/list-item-component")["default"] || _dereq_("./components/list-item-component");
var ListComponent = _dereq_("./components/list-component")["default"] || _dereq_("./components/list-component");
var ButtonDropdownComponent = _dereq_("./components/button-dropdown-component")["default"] || _dereq_("./components/button-dropdown-component");
var ButtonDropdownCss = _dereq_("./templates/main-css")["default"] || _dereq_("./templates/main-css");
var Application = window.Ember.Application;

Application.initializer({
  name: 'btn-dropdown',
  initialize: function(container) {
    container.register('component:btn-dropdown-button', ButtonComponent);
    container.register('component:btn-dropdown-item', ListItemComponent);
    container.register('component:btn-dropdown-list', ListComponent);
    container.register('component:btn-dropdown', ButtonDropdownComponent);
    container.register('template:components/btn-dropdown-css', ButtonDropdownCss);
  }
});

exports.ButtonComponent = ButtonComponent;
exports.ListItemComponent = ListItemComponent;
exports.ListComponent = ListComponent;
exports.ButtonDropdownComponent = ButtonDropdownComponent;
},{"./components/button-component":1,"./components/button-dropdown-component":2,"./components/list-component":3,"./components/list-item-component":4,"./templates/main-css":6}],6:[function(_dereq_,module,exports){
"use strict";
var Ember = window.Ember["default"] || window.Ember;
exports["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("ella-sample{background-color:transparent;color:#000}ella-sample[activated=\"true\"]{background-color:transparent;color:green}");
  
});
},{}]},{},[5])
(5)
});