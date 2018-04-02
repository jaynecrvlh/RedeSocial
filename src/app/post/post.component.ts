import { PostService } from './../Serviço/post.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent {

  @Input() post: Post;
  @Output() recebeuLike = new EventEmitter();
  @Output() deletou = new EventEmitter();

  constructor(private postService: PostService){}

  curtiu = false;

  like () {
    this.curtiu = !this.curtiu;
    this.postService.curtir(this.post, this.curtiu);
    this.recebeuLike.emit(this.post); 
  }

  delete () {
    this.postService.deletar(this.post);
    this.deletou.emit(this.post);
  }
}
