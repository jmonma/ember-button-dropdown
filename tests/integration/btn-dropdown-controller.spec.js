var template = function(){/*
  {{#btn-dropdown}}
    {{#btn-dropdown-button}}
      My Button Label
    {{/btn-dropdown-button}}
    {{#btn-dropdown-list}}
      {{#btn-dropdown-item action="optionSelect"}}
        My option
      {{/btn-dropdown-item}}
    {{/btn-dropdown-list}}
  {{/btn-dropdown}}
  <select>
    <option>Test</option>
  </select>
*/}.compile();

App.IndexView = Ember.View.extend({
  template: template
});

App.IndexController = Ember.Controller.extend({
  actions: {
    optionSelect: function () {
      ok(true, 'action `optionSelect` was run');
    }
  }
});

module('Integration: btn-dropdown with controller actions', {
  setup: function () {},
  teardown: function () {
    App.reset();
  }
});

test('verify component behavior', function() {
  expect(2);

  visit('/');

  click('btn-dropdown button');

  andThen(function () {
    ok(find('btn-dropdown.open').length, 'the dropdown is now open');
  });

  click('btn-dropdown button');

  andThen(function () {
    ok(find('btn-dropdown:not(.open)').length, 'clicking the button again closed the dropdown');
  });
});

test('verify component actions fire on controller', function() {
  expect(3);

  visit('/');

  click('btn-dropdown button');

  andThen(function () {
    ok(find('btn-dropdown.open').length, 'the dropdown is now open');
  });

  click('btn-dropdown.open ul.dropdown-menu > li:first-child');

  andThen(function () {
    ok(find('btn-dropdown:not(.open)').length, 'selecting an item closed the dropdown');
  });
});

test('verify click outside behavior', function() {
  expect(4);

  visit('/');

  click('btn-dropdown button');

  andThen(function () {
    ok(find('btn-dropdown.open').length, 'the dropdown is now open');
  });

  click('> .ember-view');

  andThen(function () {
    ok(find('btn-dropdown:not(.open)').length, 'Clicking outside closed the dropdown');
  });

  click('btn-dropdown button');

  andThen(function () {
    ok(find('btn-dropdown.open').length, 'the dropdown is now open');
  });

  click('select');

  andThen(function () {
    ok(find('btn-dropdown:not(.open)').length, 'Clicking on a select element closed the dropdown');
  });
});

test('verify accessibility', function() {
  expect(7);

  visit('/');

  andThen(function () {
    ok(find('btn-dropdown:not(.open)').length, 'the dropdown is closed');
    // roles
    ok(find('ul[role=menu]').length, 'The menu has the proper role');
    ok(find('ul li[role=menuitem]').length, 'The menu item has the proper role');
    // aria
    ok(find('ul[aria-expanded=false]').length, 'The menu has the proper aria-expanded attribute');
    ok(find('ul li[aria-disabled=false]').length, 'The menu item has the proper aria-disabled attribute');
  });

  click('btn-dropdown button');

  andThen(function () {
    ok(find('btn-dropdown.open').length, 'the dropdown is now open');
    ok(find('ul[aria-expanded=true]').length, '`aria-expanded` attribute is now true');
  });
});
