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

  curtiu = false;

  like () {
    if(!this.curtiu){
      this.curtiu = true;
      this.post.qtdLikes ++;
      this.recebeuLike.emit(this.post);
    }
    else {
      this.curtiu = false;
      this.post.qtdLikes --;
    }
  }
}
