import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo',
  standalone:true,
  imports: [CommonModule,FormsModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
  toDate = new Date();
  Items = ['item1','item2','item3'];
  carName:string='';
  @Output() carAdded = new EventEmitter<string>();
  onSubmit(){
    console.log(this.carName);
    this.carName='';
    this.carAdded.emit(this.carName);
  }
  Cars= ['ford','ferrari'];
}
