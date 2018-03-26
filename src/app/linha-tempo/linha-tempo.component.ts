import { Post } from './../post/post';
import { Component } from '@angular/core';
@Component({
  selector: 'linha-tempo',
  templateUrl: './linha-tempo.component.html',
  styleUrls: ['./linha-tempo.component.css']
})
export class LinhaTempoComponent {

  posts = [
    new Post (1, "Jayne", "Ola mundo", 1000),
    new Post (2, "KIQ", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum massa sit amet mi vulputate mollis. Sed vehicula dui justo, non aliquet quam luctus sed. Donec et ante enim. In interdum sapien ut urna fringilla tempor. Phasellus dapibus, libero nec convallis euismod, neque ipsum tincidunt dolor, eu fringilla sem erat ut ante.", 1)
  ];

  capturarEvento(event){
    console.log(event);
  }

}
