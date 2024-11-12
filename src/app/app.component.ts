// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { LoadComponent } from "./load/load.component";
// import { DataComponent } from "./data/data.component";

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, LoadComponent, DataComponent],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'app';

//   isLoading = true;
//   constructor() {
//     setTimeout(() => {
//       this.isLoading = false
//     }, 3000);
//   }
// }


import { Component } from '@angular/core';
import { LoadComponent } from "./load/load.component";
import { DataComponent } from "./data/data.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoadComponent, DataComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isLoading = true;

  constructor() {
    
    setTimeout(() => {
      this.isLoading = false; 
    }, 3000);
  }
}
