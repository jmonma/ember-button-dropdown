define("button-dropdown/components/button-component",
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
define("button-dropdown/components/button-dropdown-component",
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Component = __dependency1__.Component;
    var get = __dependency1__.get;
    var set = __dependency1__.set;
    var computed = __dependency1__.computed;

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

    __exports__["default"] = Component.extend(ButtonDropdownComponent);
  });
define("button-dropdown/components/list-component",
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Component = __dependency1__.Component;
    var get = __dependency1__.get;
    var set = __dependency1__.set;
    var computed = __dependency1__.computed;

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

    __exports__["default"] = Component.extend(ListComponent);
  });
define("button-dropdown/components/list-item-component",
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
define("button-dropdown",
  ["./components/button-component","./components/list-item-component","./components/list-component","./components/button-dropdown-component","./templates/main-css","ember","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__, __dependency6__, __exports__) {
    "use strict";
    var ButtonComponent = __dependency1__["default"] || __dependency1__;
    var ListItemComponent = __dependency2__["default"] || __dependency2__;
    var ListComponent = __dependency3__["default"] || __dependency3__;
    var ButtonDropdownComponent = __dependency4__["default"] || __dependency4__;
    var ButtonDropdownCss = __dependency5__["default"] || __dependency5__;
    var Application = __dependency6__.Application;

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

    __exports__.ButtonComponent = ButtonComponent;
    __exports__.ListItemComponent = ListItemComponent;
    __exports__.ListComponent = ListComponent;
    __exports__.ButtonDropdownComponent = ButtonDropdownComponent;
  });
define("button-dropdown/templates/main-css",
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"] || __dependency1__;
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      


      data.buffer.push("ella-sample{background-color:transparent;color:#000}ella-sample[activated=\"true\"]{background-color:transparent;color:green}");
      
    });
  });