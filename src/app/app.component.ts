import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practice2';


  message = 'hello world';

  mensaje = 'hi';



  receiveMessage($event){
    this.mensaje = $event;
  }


}
