import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello welcome';
  a=10;
  b=false;
  
  display()
  {
	return 100;
  }
  
  
}
