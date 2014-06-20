define(
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