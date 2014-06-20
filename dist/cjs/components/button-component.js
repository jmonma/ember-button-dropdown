"use strict";
var Component = require("ember").Component;
var get = require("ember").get;
var set = require("ember").set;
var computed = require("ember").computed;

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