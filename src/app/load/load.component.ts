import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-load',
  standalone: true,
  imports: [],
  templateUrl: './load.component.html',
  styleUrl: './load.component.css'
})
export class LoadComponent {

  @Input() isLoading:boolean = false;

}
