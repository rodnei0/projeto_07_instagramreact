import Post from "./Post";

export default function Posts() {
    return (
        <div className="posts">
            <Post usuarioImg="assets/img/meowed.svg" usuario="meowed" conteudoImg="assets/img/gato-telefone.svg" curtidasImg="assets/img/respondeai.svg" nomeCurtida="respondeai" numeroCurtida="outras 101.523 pessoas"/>
            <Post usuarioImg="assets/img/barked.svg" usuario="barked" conteudoImg="assets/img/dog.svg" curtidasImg="assets/img/adorable_animals.svg" nomeCurtida="adorable_animals" numeroCurtida="outras 99.159 pessoas"/>
        </div>
    );
}
