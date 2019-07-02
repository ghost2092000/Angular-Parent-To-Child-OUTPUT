import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent  {

  mensaje:string= "Hola Mundo!" ;

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage(){
    this.messageEvent.emit(this.mensaje)
  }




  @Input() message: string;


}
