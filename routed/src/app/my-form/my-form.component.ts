import { Component } from '@angular/core';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent {
  // properties
  categories = ['users', 'posts', 'albums', 'photos', 'todos']
  category = this.categories[0]
  category_id = 1

}
