"use strict";
var Component = require("ember").Component;
var get = require("ember").get;
var set = require("ember").set;
var computed = require("ember").computed;

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