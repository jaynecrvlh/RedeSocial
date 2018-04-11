import { PostService } from './../Serviço/post.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from './../post/post';
import { error } from 'util';

@Component({
  selector: 'novo-post',
  templateUrl: './novo-post.component.html',
  styleUrls: ['./novo-post.component.css'],
 
})
export class NovoPostComponent  {

  @Output() novoPost = new EventEmitter();
  id: string ='';
  nome: string ='';
  mensagem: string='';
  qtdlikes = 0;

  constructor(private postService: PostService) { }

  postou(event){
    event.preventDefault();

    this.postService.postar(
        new Post(this.id, this.nome, this.mensagem, this.qtdlikes))
        .subscribe((data) =>{
        }, (error) => console.log(error)


        )
        
    // this.novoPost.emit(novoPost)
    // this.postService.postar(novoPost);
    
  }

}
