import { NovoPostComponent } from './../novo-post/novo-post.component';
import { Injectable } from "@angular/core";
import {Post} from "./../post/post";
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class PostService{

    url:string= "http://rest.learncode.academy/api/jayne/rede"

    constructor(private http: Http){
        
    }

    posts:Post[] = [];


    getPosts(){
        return this.http.get(this.url)
                .map((response:Response) => {
                    this.posts = [];
                    for(let p of response.json()){
                        this.posts.push(new Post(p.id, p.nomePessoa, p.mensagem,  p.qtdLikes))
                    }
                    return this.posts;
                })
                .catch((error: Response) => Observable.throw(error))
    }

    curtir(post: Post, qtdLikes: number){
        return this.http.put(this.url + "/" + post.id, post)
            .map((response:Response) => response.json())
            .catch((error:Response) => Observable.throw(error))
    }

    deletouSer(post: Post){
            return this.http.delete(this.url + "/" + post.id)
                .map((response:Response) => response.text)
                .catch((error: Response) => Observable.throw(error)); 
                
    }

    postar(varpost: Post){
        this.posts.push(varpost);
        return this.http.post( this.url, varpost)
        .map((response:Response) => response.text)
            .catch((error: Response) => Observable.throw(error));  
    }

    editarPost(post:Post){
        return this.http.put(this.url + "/" + post.id, post)
            .map((response:Response) => response.json())
            .catch((error:Response) => Observable.throw(error));
    }
}