import { Component } from '@angular/core';

@Component({
  selector: 'app-header-bar-brand',
  template: `
    <div class="navbar-brand">
      <span
        class="navbar-item"
      >
        <i class="fab js-logo fa-angular fa-2x" aria-hidden="true"></i>
      </span>
      <a class="navbar-item nav-home" router-link="/">
        <span class="brand-first">Common</span>
      </a>
    </div>
  `,
})
export class HeaderBarBrandComponent {}
