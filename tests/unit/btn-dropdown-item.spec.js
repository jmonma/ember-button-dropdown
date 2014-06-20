moduleForComponent('btn-dropdown-item', 'ListItemComponent');

test('component should render', function() {
  expect(1);
  var component = buildComponent(this);

  ok(find('li').length, 'li element exists');
});

test('verify component properties and interface', function() {
  expect(5);
  var component = buildComponent(this);

  // properties
  ok(component.get('tagName') === 'li', '`tagName` is "li"');
  ok(component.get('disabled') === false, '`disabled` is false');
  ok(component.get('divider') === false, '`divider` is false');
  // accessibility
  ok(component.get('ariaDisabled') === 'false', '`ariaDisabled` is "true"');
  ok(component.get('role') === 'menuitem', '`role` is "menuitem"');
});

test('verify component attributes', function() {
  expect(2);
  var component = buildComponent(this);

  ok(find('li').attr('aria-disabled') === "false", '`aria-disabled` attribute exists');
  ok(find('li').attr('role') === "menuitem", '`menuitem` attribute exists');
});

test('test divider functionality', function() {
  expect(5);
  var component = buildComponent(this);

  ok(find('li').hasClass('divider') === false, '.divider class is not present');

  Ember.run(function () {
    component.set('divider', true);
  });

  ok(find('li').hasClass('divider') === true, '.divider class is present');
  ok(find('li').attr('aria-disabled') === "true", '`aria-disabled` is now "true"');
  ok(find('li:not([role])').length, '`role` attribute is removed');
  ok(find('li a').length === 0, '`a` wrapper is removed');
});
