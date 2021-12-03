export default function Storie(props) {
    return (
        <div className="story">
            <div className="imagem">
                <img src={props.img} alt="imagem"/>
            </div>
            <div className="usuario">
               {props.usuario}
            </div>
        </div>
    );
}