//our root app component
// Import -> ES2015 feature used to import functions, object, etc
// Decorator -> Adds more behavior to our class from outside the class, it mush be declared before the class
// Modules -> Modules are how we organize our application in Angular, Every Angular application must have a "root module", which we'll need to launch it. 
// One app may have multiples modules, but we need to declare a "root module"
// Component -> Funtion we will use to create components
// NgModule -> Angular 2 you must specifically say which components you’re going to be using in your app.
import { NgModule }      from '@angular/core';

// BrowserModule -> Module we need for running/rendering Angular websites.
// It contains code shared for browser execution (DOM thread, WebWorker).
// Ahead-of-Time pre-compiled version of application being sent to the browser. Which usually means a significantly smaller package being sent to the browser.
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule  } from '@angular/router';

import { AppComponent }  from './app.component';
import { UserComponent }  from './components/user/user.component';
import { AboutComponent }  from './components/about/about.component';
import { routing }  from './app.routing';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing ], // Loods required dependencies to launch our app in the browser.
  declarations: [ AppComponent, UserComponent, AboutComponent ], // List of all components within the module.
  bootstrap:    [ AppComponent ] // Indicates our root component
})
// imports -> other modules whose exported classes are needed by component templates declared in this module.
// declarations -> the view classes that belong to this module. Angular has three kinds of view classes: components, directives, and pipes.
// exports -> the subset of declarations that should be visible and usable in the component templates of other modules.
// bootstrap -> the main application view, called the root component, that hosts all other app views. 
// imports -> other modules whose exported classes are needed by component templates declared in this module.
// providers -> creators of services that this module contributes to the global collection of services; they become accessible in all parts of the app.
// bootstrap -> the main application view, called the root component, that hosts all other app views. 
// Only the root module should set this bootstrap property.

// Every decoration function decorates a class
export class AppModule { 
}

