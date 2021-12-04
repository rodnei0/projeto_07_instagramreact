import Usuario from "./Usuario";

export default function Sidebar() {
    const sugestoes = [
        {
          img: "assets/img/bad.vibes.memes.svg", 
          usuario: "bad.vibes.memes",
          razao: "Segue você"
        },
        {
          img: "assets/img/chibirdart.svg", 
          usuario: "chibirdart",
          razao: "Segue você"
        },
        {
          img: "assets/img/razoesparaacreditar.svg", 
          usuario: "razoesparaacreditar",
          razao: "Novo no Instagram"
        },
        {
          img: "assets/img/adorable_animals.svg", 
          usuario: "adorable_animals",
          razao: "Segue você"
        },
        {
          img: "assets/img/smallcutecats.svg", 
          usuario: "smallcutecats",
          razao: "Segue você"
        }
    ]
    return (
        <div className="sidebar">

          <Usuario img="assets/img/catanacomics.svg" user="catanacomics" nome="Catana"/>
          
          <div className="sugestoes">
            <div className="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>

            {sugestoes.map(sugestao => {
                return (
                    <div className="sugestao">
                      <div className="usuario">
                          <img src={sugestao.img} alt="imagem"/>
                          <div className="texto">
                              <div className="nome">{sugestao.usuario}</div>
                              <div className="razao">{sugestao.razao}</div>
                          </div>
                      </div>
                    <div className="seguir">Seguir</div>
                    </div>
                );
            })}

            <div className="links">
              Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div className="copyright">
              © 2021 INSTAGRAM DO FACEBOOK
            </div>
          </div>
        </div>
    );
}