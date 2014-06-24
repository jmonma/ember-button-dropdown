What is Ember Button Dropdown?
==========================================
This project provides an [Ember component][ember-components] implementation of a [bootstrap button dropdown][bootstrap-button-dropdown]. The structure of this component is inspired by [Ryan Florence][rpflorence].

NOTE: The twitter bootstrap library is not included in the dist, so you may choose to use the library or implement your own styles without the dependency.

Demo
==========================================

TODO

Installation
==========================================

NOTE: bower package is not yet public, but soon you will be able to install via:

```bower install ember-button-dropdown```

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
    {{#btn-dropdown-item action="rename"}}
      Rename
    {{/btn-dropdown-item}}
    {{#btn-dropdown-item action="archive"}}
      Archive
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
    rename: function () {
      // triggered by selecting the rename item
    },
    archive: function () {
      // triggered by selecting the archive item
    }
  }
});
```

[ember-components]: http://emberjs.com/guides/components/ "Ember Component Guide"
[bootstrap-button-dropdown]: http://getbootstrap.com/components/#btn-dropdowns "Bootstrap Button Dropdown"
[rpflorence]: https://github.com/rpflorence "Ryan Florence on GitHub"
