define(
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Component = __dependency1__.Component;
    var Handlebars = __dependency1__.Handlebars;
    var get = __dependency1__.get;
    var set = __dependency1__.set;
    var computed = __dependency1__.computed;

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

    __exports__["default"] = Component.extend(ListItemComponent);
  });