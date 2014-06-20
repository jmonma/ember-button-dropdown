moduleForComponent('btn-dropdown-item', 'ListItemComponent');

test('component should render', function() {
  expect(1);
  var component = buildComponent(this);

  ok(find('li').length, 'li element exists');
});

test('verify component properties and interface', function() {
  expect(2);
  var component = buildComponent(this);

  // properties
  ok(component.get('tagName') === 'li', '`tagName` is "li"');
  ok(component.get('role') === 'menuitem', '`role` is "menuitem"');
});
