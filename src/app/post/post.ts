export class Post{
    constructor(
        public id: number,
        public nomePessoa: string,
        public mensagem: string,
        public qtdLikes: number
    ){}
}