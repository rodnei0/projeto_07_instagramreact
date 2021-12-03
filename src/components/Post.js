export default function Post(props) {
    return (
        <div className="post">
            <div className="topo">
            <div className="usuario">
                <img src={props.usuarioImg} alt="imagem"/>
                {props.usuario}
            </div>
            <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
            </div>

            <div className="conteudo">
            <img src={props.conteudoImg} alt="imagem"/>
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
                    <img src={props.curtidasImg}  alt="imagem"/>
                    <div className="texto">
                    Curtido por <strong>{props.nomeCurtida} </strong> e <strong>{props.numeroCurtida} </strong>
                    </div>
                </div>
            </div>
        </div>
    );
}