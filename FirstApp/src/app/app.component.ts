import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from './shared/title/title.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TitleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FirstApp';
}
