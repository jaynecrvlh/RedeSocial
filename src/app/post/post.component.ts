import { LinhaTempoComponent } from './../linha-tempo/linha-tempo.component';
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
  @Output() editPost = new EventEmitter();

  constructor(private linhaTempo: LinhaTempoComponent){}

  curtiu = false;

  like () {
    this.curtiu = !this.curtiu;
    this.linhaTempo.capturarLike(this.post, this.curtiu)
  }

  delete (post: Post) {
    this.deletou.emit(post);
  }

  editar: boolean = false;
  textEdit: string = "";

  edit(post: Post){
    post.mensagem = this.textEdit
    this.editar = false;
    this.textEdit = "";
    this.editPost.emit(post);
  }

  editConfirm(){
    this.editar = true;
    this.textEdit = this.post.mensagem

  }

  cancelarEdicao(){
    this.editar = false;
    this.textEdit = "";
  }
}
