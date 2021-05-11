import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <nav class="menu">
      <p class="menu-label">Legacy Menu</p>
      <ul class="menu-list">
        <a routerLink="/products" routerLinkActive="router-link-active">
          <span>Legacy App</span>
        </a>
        <a [href]="pocBreakoutLink">
          <span>Breakout</span>
        </a>
      </ul>
    </nav>
  `,
})
export class NavComponent {
  pocBreakoutLink = new URLSearchParams(location.search).get("r") || "https://breakout-tst.azureedge.net/";
}
