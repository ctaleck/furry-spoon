import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <nav class="menu">
      <p class="menu-label">Legacy Menu</p>
      <ul class="menu-list">
        <a routerLink="/products" routerLinkActive="router-link-active">
          <span>Legacy Products</span>
        </a>
        <a href="https://breakout-tst.azureedge.net/">
          <span>Breakout</span>
        </a>
        <a routerLink="/about" routerLinkActive="router-link-active">
          <span>Lagacy About</span>
        </a>
      </ul>
    </nav>
  `,
})
export class NavComponent {}
