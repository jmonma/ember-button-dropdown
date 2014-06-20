moduleForComponent('btn-dropdown', 'ButtonDropdownComponent');

test('component should render', function() {
  expect(1);
  var component = buildComponent(this);

  ok(find('btn-dropdown').length, 'btn-dropdown element exists');
});

test('component should have proper classes', function() {
  expect(1);
  var component = buildComponent(this);

  ok(find('btn-dropdown.btn-group').length, '.btn-group class is on the container');
});

test('verify component properties and interface', function() {
  expect(5);
  var component = buildComponent(this);

  // properties
  ok(component.get('tagName') === 'btn-dropdown', '`tagName` is "btn-dropdown"');
  ok(component.get('isOpen') === false, '`isOpen` is false');
  // interface
  ok(typeof component.get('close') === 'function', '`close` function exists');
  ok(typeof component.get('open') === 'function', '`open` function exists');
  ok(typeof component.get('toggle') === 'function', '`toggle` function exists');
});

test('verify functionality', function() {
  expect(7);
  var component = buildComponent(this);

  Ember.run(function () {
    ok(component.open() === component, '`open` is chainable');
  });

  ok(component.get('isOpen') === true, '`isOpen` is now true');

  Ember.run(function () {
    ok(component.close() === component, '`close` is chainable');
  });

  ok(component.get('isOpen') === false, '`isOpen` is now false');

  Ember.run(function () {
    ok(component.toggle() === component, '`toggle` is chainable');
  });

  ok(component.get('isOpen') === true, '`isOpen` is now true');

  Ember.run(function () {
    component.toggle();
  });

  ok(component.get('isOpen') === false, '`isOpen` is now false');
});
