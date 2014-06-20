module('main');

test('Components are registered on an application', function() {
  expect(4);
  var container = {
    registry: {},
    register: function(name, definition) {
      this.registry[name] = definition;
    }
  };
  var initializer = Ember.Application.initializers['btn-dropdown'];
  initializer.initialize(container);
  strictEqual(container.registry['component:btn-dropdown-button'],
              NAMESPACE.ButtonComponent,
              'btn-dropdown-button component is registered on the container');
  strictEqual(container.registry['component:btn-dropdown-list'],
              NAMESPACE.ListComponent,
              'btn-dropdown-list is registered on the container');
  strictEqual(container.registry['component:btn-dropdown-item'],
              NAMESPACE.ListItemComponent,
              'btn-dropdown-item is registered on the container');
  strictEqual(container.registry['component:btn-dropdown'],
              NAMESPACE.ButtonDropdownComponent,
              'btn-dropdown is registered on the container');
});
