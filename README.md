What is Ember Button Dropdown?
==========================================
This project is a bootstrap-ready button dropdown [Ember.js component][ember-components].

Demo
==========================================

TODO

Installation
==========================================

TODO

Usage
==========================================

__hbs__

```handlebars
{{#btn-dropdown}}
  {{#btn-dropdown-button}}My Button Label{{/btn-dropdown-button}}
  {{#btn-dropdown-list}}
    {{#btn-dropdown-item action="save"}}
      Save
    {{/btn-dropdown-item}}
    {{#btn-dropdown-item action="delete"}}
      Delete
    {{/btn-dropdown-item}}
  {{/btn-dropdown-list}}
{{/btn-dropdown}}
```

__controller__

```js
Ember.Controller.extend({
  actions: {
    save: function () {
      // triggered by selecting the save item
    },
    delete: function () {
      // triggered by selecting the delete item
    }
  }
});
```

