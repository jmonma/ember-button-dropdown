import ButtonComponent          from './components/button-component';
import ListItemComponent        from './components/list-item-component';
import ListComponent            from './components/list-component';
import ButtonDropdownComponent  from './components/button-dropdown-component';
import ButtonDropdownCss        from './templates/main-css';
import { Application }          from 'ember';

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

export {
  ButtonComponent,
  ListItemComponent,
  ListComponent,
  ButtonDropdownComponent
};
