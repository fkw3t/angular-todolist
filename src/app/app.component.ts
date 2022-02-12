import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-curso';

  itens: any[] = [];

  showItens($event) {
    // this.itens.push($event);

    const item = {...$event, date: new Date()};
    this.itens.push(item);
  }
}
