import { Injectable } from "@angular/core";
import {Post} from "./../post/post"

@Injectable()
export class PostService{

    posts = [
        new Post (1, "Jayne", "Ola mundo", 1000),
        new Post (2, "KIQ", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum massa sit amet mi vulputate mollis. Sed vehicula dui justo, non aliquet quam luctus sed. Donec et ante enim. In interdum sapien ut urna fringilla tempor. Phasellus dapibus, libero nec convallis euismod, neque ipsum tincidunt dolor, eu fringilla sem erat ut ante.", 1)
      ];

    getPosts(){
        return this.posts;
    }

    curtir(post: Post, curtiu: boolean){
        let index = this.posts.indexOf(post);
        if(curtiu){
            this.posts[index].qtdLikes++;
        }
        else {
            this.posts[index].qtdLikes--;
        }
    }

    deletar(post: Post){
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
    }
}