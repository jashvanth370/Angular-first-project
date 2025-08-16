import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DemoComponent,CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'counter-app';
  onCarAdded(carName:string){
    console.log(carName,'from app')
  }
}
