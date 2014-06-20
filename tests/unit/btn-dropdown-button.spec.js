moduleForComponent('btn-dropdown-button', 'ButtonComponent');

test('component should render', function() {
  expect(1);
  var component = buildComponent(this);

  ok(find('button').length, 'button element exists');
});

test('component should have proper classes', function() {
  expect(3);
  var component = buildComponent(this);

  ok(find('button.btn').length, '.btn class is on the container');
  ok(find('button.dropdown-toggle').length, '.dropdown-toggle class is on the container');
  ok(find('button.btn-default').length, '.btn-default class is on the container by default');
});

test('verify component properties and interface', function() {
  expect(4);
  var component = buildComponent(this);

  // properties
  ok(component.get('tagName') === 'button', '`tagName` is "button"');
  ok(component.get('type') === 'button', '`type` is "button"');
  ok(component.get('btnStyle') === 'btn-default', '`btnStyle` is "btn-default"');
  // interface
  ok(typeof component.get('click') === 'function', '`click` function exists');
});
