export class Post{
    constructor(
        public id: string,
        public nomePessoa: string,
        public mensagem: string,
        public qtdLikes: number
    ){}
}