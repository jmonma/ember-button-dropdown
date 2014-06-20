"use strict";
var ButtonComponent = require("./components/button-component")["default"] || require("./components/button-component");
var ListItemComponent = require("./components/list-item-component")["default"] || require("./components/list-item-component");
var ListComponent = require("./components/list-component")["default"] || require("./components/list-component");
var ButtonDropdownComponent = require("./components/button-dropdown-component")["default"] || require("./components/button-dropdown-component");
var ButtonDropdownCss = require("./templates/main-css")["default"] || require("./templates/main-css");
var Application = require("ember").Application;

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