import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeaderComponent } from './view/app-header/app-header.component';
import { AppFooterComponent } from './view/app-footer/app-footer.component';
import { AppNavComponent } from './view/app-nav/app-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppHeaderComponent, AppFooterComponent, AppNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'minhaApp';
}
