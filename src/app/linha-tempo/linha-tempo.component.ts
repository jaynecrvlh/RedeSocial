import { PostService } from './../Serviço/post.service';
import { Post } from './../post/post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'linha-tempo',
  templateUrl: './linha-tempo.component.html',
  styleUrls: ['./linha-tempo.component.css'],
  providers: [PostService]
})

export class LinhaTempoComponent implements OnInit {

  posts: Post[];
  constructor(private postService: PostService){}

  capturarEvento(event){
    console.log(event);
  }

  ngOnInit(){
    this.posts = this.postService.getPosts();
  }

}
