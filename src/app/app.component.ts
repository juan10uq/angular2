//our root app component
// Import -> ES2015 feature used to import functions, object, etc
// Decorator -> Adds more behavior to our class from outside the class, it mush be declared before the class
// Modules -> Modules are how we organize our application in Angular, Every Angular application must have a "root module", which we'll need to launch it. One app may have multiples modules, but we need to declare a "root module"
// Component -> Funtion we will use to create components
// NgModule -> Angular 2 you must specifically say which components you’re going to be using in your app.
import { Component } from '@angular/core';

// @Component -> used to apply our component decorator to our class, it's a typescript feature
@Component({
  selector: 'my-app',
  template: `
    <h1>{{name}}</h1>
    <p>Email: {{email}}</p>
    <p>Address: {{address.street}} {{address.city}}, {{address.country}}</p>
    <button (click)="toggleColorList()">{{showColors ? "Hide":"Show"}} Color User List</button>
    <div *ngIf="showColors">
    <h3>User Colors</h3>
    <ul>
        <li *ngFor="let color of colors; let i = index">
        {{color}} <button (click)="deleteColor(i)">X</button>
        </li>
        <br/>    
        <form (submit)="addNewColor(color.value, $event)">
            <label>Add new color: </label><br/>
            <input type="text" #color/>
        </form>
    </ul>
    </div>
  `,
})

// selector -> CSS selector that tells Angular to create and insert an instance of this component where it finds a <my-app> tag in parent HTML.
// templateUrl -> module-relative address of this component's HTML template, shown above.
// providers: array of dependency injection providers for services that the component requires. 
// This is one way to tell Angular that the component's constructor requires a Service.
// router-outle -> element indicates where the contents of each route component will be rendered.
// [routerLink] -> applies the directive to the current element
// Metadata -> Configuration lines inside the decorator are sometimes refered to metadata.
export class AppComponent  { 
  name: string; 
  email: string;
  address: address;
  colors: string[];
  showColors: boolean;


  constructor(){
    this.name = 'Juan'; 
    this.email = 'juan@gmail.com';
    this.address = {
        street: 'San Miguel',
        city: 'Alajuela',
        country: 'Costa Rica'
    }
    this.colors = ['red', 'black', 'blue'];
    this.showColors = false;
  }

  toggleColorList() {
    this.showColors = !this.showColors;
  }

  addNewColor(newColor: string, event: Event) {
    event.preventDefault();
    this.colors.push(newColor);
  }

  deleteColor(i: number) {
    this.colors.splice(i, 1);
  }
}

type address = {
  street: string;
  city: string;
  country: string;
}
