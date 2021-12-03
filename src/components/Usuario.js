export default function Usuario(props) {
    return (
        <div className="usuario">
            <img src={props.img} alt="imagem"/>
            <div className="texto">
                <strong>{props.user}</strong>
                {props.nome}
            </div>
        </div>
    );
}
