moduleForComponent('btn-dropdown-list', 'ListComponent');

test('component should render', function() {
  expect(1);
  var component = buildComponent(this);

  ok(find('ul').length, 'ul element exists');
});

test('component should have proper classes', function() {
  expect(1);
  var component = buildComponent(this);

  ok(find('ul.dropdown-menu').length, '.dropdown-menu class is on the container');
});

test('verify component properties and interface', function() {
  expect(2);
  var component = buildComponent(this);

  // properties
  ok(component.get('tagName') === 'ul', '`tagName` is "ul"');
  ok(component.get('role') === 'menu', '`role` is "menu"');
});
