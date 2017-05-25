//our root app component
// Import -> ES2015 feature used to import functions, object, etc
// Decorator -> Adds more behavior to our class from outside the class, it mush be declared before the class
// Modules -> Modules are how we organize our application in Angular, Every Angular application must have a "root module", which we'll need to launch it. One app may have multiples modules, but we need to declare a "root module"
// Component -> Funtion we will use to create components
// NgModule -> Angular 2 you must specifically say which components you’re going to be using in your app.
import { Component } from '@angular/core';
import { PostService } from '../../Services/post/post.service'

// @Component -> used to apply our component decorator to our class, it's a typescript feature
// moduleId -> is used to resolve relative paths for your stylesheets and templates as it says in the documentation.
@Component({
  selector: 'user',
  templateUrl: 'app/components/user/user.component.html',
  providers: [PostService]
})
// selector -> CSS selector that tells Angular to create and insert an instance of this component where it finds a <my-app> tag in parent HTML.
// templateUrl -> module-relative address of this component's HTML template, shown above.
// providers: array of dependency injection providers for services that the component requires. 
// This is one way to tell Angular that the component's constructor requires a Service.
// Metadata -> Configuration lines inside the decorator are sometimes refered to metadata.
export class UserComponent  { 
  name: string; 
  email: string;
  address: address;
  colors: string[];
  showColors: boolean;
  posts: Post;

  constructor(private postService: PostService){
    this.name = 'Juan'; 
    this.email = 'juan@gmail.com';
    this.address = {
        street: 'San Miguel',
        city: 'Alajuela',
        country: 'Costa Rica'
    }
    this.colors = ['red', 'black', 'blue'];
    this.showColors = false;
    this.postService.getPost().subscribe(posts => {
      this.posts = posts;
    });
  }

  toggleColorList() {
    this.showColors = !this.showColors;
  }

  addNewColor(newColor: string) {
    this.colors.push(newColor);
    console.log(newColor)
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

type Post = {
  id: number;
  title: string;
  body: string;
}