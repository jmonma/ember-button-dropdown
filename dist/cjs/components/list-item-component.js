"use strict";
var Component = require("ember").Component;
var Handlebars = require("ember").Handlebars;
var get = require("ember").get;
var set = require("ember").set;
var computed = require("ember").computed;

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
    Bound class names on the container.

    @property classNameBindings
    @type Array
  */
  classNameBindings: ['divider'],

  /**
    Flag for whether or not the menu item is disabled.

    @property disabled
    @type Boolean
    @default false
  */
  disabled: false,

  /**
    Flag for whether or not the menu item is a simple divider.

    @property disabled
    @type Boolean
    @default false
  */
  divider: false,

  /**
    Accessibility attribute for whether or not the list is disabled,
    coerced to a string.

    @property ariaExpanded
    @type String
    @default parentView.isOpen
  */
  ariaDisabled: function() {
    return (this.get('disabled') || this.get('divider'))+'';
  }.property('disabled', 'divider'),

  /**
    Accessibility attribute for the role.

    @property role
    @type String
    @default 'menuitem'
  */
  role: function () {
    if (!this.get('divider')) {
      return 'menuitem';
    }
    return;
  }.property('divider'),

  click: function (e) {
    if (this.get('disabled') || this.get('divider')) {
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

  layout: Handlebars.compile('{{#unless divider}}<a href="#">{{ yield }}</a>{{/unless}}')
};

exports["default"] = Component.extend(ListItemComponent);