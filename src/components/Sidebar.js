import Sugestao from "./Sugestao";
import Usuario from "./Usuario";

export default function Sidebar() {
    return (
        <div className="sidebar">

          <Usuario img="assets/img/catanacomics.svg" user="catanacomics" nome="Catana"/>

          <div className="sugestoes">
            <div className="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>

            <Sugestao img="assets/img/bad.vibes.memes.svg" nome="bad.vibes.memes"  razao="Segue você"/>
            <Sugestao img="assets/img/chibirdart.svg" nome="chibirdart"  razao="Segue você"/>
            <Sugestao img="assets/img/razoesparaacreditar.svg" nome="razoesparaacreditar"  razao="Novo no Instagram"/>
            <Sugestao img="assets/img/adorable_animals.svg" nome="adorable_animals"  razao="Segue você"/>
            <Sugestao img="assets/img/smallcutecats.svg" nome="smallcutecats"  razao="Segue você"/>

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