export default function Posts() {
  const posts = [
        {
          usuarioImg: "assets/img/meowed.svg", 
          usuario: "meowed",
          conteudoImg: "assets/img/gato-telefone.svg",
          curtidasImg: "assets/img/respondeai.svg",
          nomeCurtida: "respondeai",
          numeroCurtida: "outras 101.523 pessoas"
        },
        {
          usuarioImg: "assets/img/barked.svg", 
          usuario: "barked",
          conteudoImg: "assets/img/dog.svg",
          curtidasImg: "assets/img/adorable_animals.svg",
          nomeCurtida: "adorable_animals",
          numeroCurtida: "outras 99.159 pessoas"
        }
    ]

    return (
        <div className="posts">
            {posts.map(post => {
              return  <div className="post">
                          <div className="topo">
                              <div className="usuario">
                                  <img src={post.usuarioImg} alt="imagem"/>
                                  {post.usuario}
                              </div>
                              <div className="acoes">
                                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                              </div>
                          </div>
      
                      <div className="conteudo">
                          <img src={post.conteudoImg} alt="imagem"/>
                      </div>
      
                      <div className="fundo">
                          <div className="acoes">
                              <div>
                              <ion-icon name="heart-outline"></ion-icon>
                              <ion-icon name="chatbubble-outline"></ion-icon>
                              <ion-icon name="paper-plane-outline"></ion-icon>
                              </div>
                              <div>
                              <ion-icon name="bookmark-outline"></ion-icon>
                              </div>
                          </div>
      
                          <div className="curtidas">
                              <img src={post.curtidasImg}  alt="imagem"/>
                              <div className="texto">
                              Curtido por <strong>{post.nomeCurtida} </strong> e <strong>{post.numeroCurtida} </strong>
                              </div>
                          </div>
                      </div>
                  </div>
            })}
        </div>
    );
}