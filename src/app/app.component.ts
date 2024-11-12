import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadComponent } from "./load/load.component";
import { DataComponent } from "./data/data.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoadComponent, DataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'load';

  isLoading = true;
  constructor() {
    setTimeout(() => {
      this.isLoading = false
    }, 3000);
  }
}
