import { PostService } from './../Serviço/post.service';
import { Post } from './../post/post';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'linha-tempo',
  templateUrl: './linha-tempo.component.html',
  styleUrls: ['./linha-tempo.component.css'],
  
})

export class LinhaTempoComponent implements OnInit {

  posts: Post[];
  likeLinha: Post['qtdLikes'];
  
  constructor(private postService: PostService){}

 

  ngOnInit(){
    this.fillLinhaTempo()
   
  }

  fillLinhaTempo() {
    this.postService.getPosts()
      .subscribe((data) => {
        this.posts = data;
      },
        (error) => console.log(error));
  }

  addPost(post: Post) {
    this.postService.postar(post)
      .subscribe((data) => {
        this.fillLinhaTempo();
      },
        (error) => console.log(error));

  }

  deletou(post: Post) {
    this.postService.deletouSer(post)
      .subscribe(data=>{
        this.fillLinhaTempo();
      },
      error=>console.log(error));
  }

  capturarLike(post: Post, curtiu:boolean) {
    let index = this.posts.indexOf(post);
        if(curtiu == true){
            this.likeLinha = this.posts[index].qtdLikes++;
            console.log("incrementou")
        }
        else {
          this.likeLinha = this.posts[index].qtdLikes--;
        }
        this.postService.curtir(post, this.likeLinha).subscribe(
        (data) => {
          this.fillLinhaTempo()
        },
        (error) => {
          console.log(error)
        }
    )
  }

  editPost(post:Post){
    this.postService.editarPost(post)
      .subscribe(data=>{
        console.log("Post editado!")
        this.fillLinhaTempo();
      },
    error=>console.log(error));
  }


}
