import Storie from "./Storie";

export default function Stories() {
    return (
        <div className="stories">

          <Storie img="assets/img/9gag.svg" usuario="9gag"/>
          <Storie img="assets/img/meowed.svg" usuario="meowed"/>
          <Storie img="assets/img/barked.svg" usuario="barked"/>
          <Storie img="assets/img/nathanwpylestrangeplanet.svg" usuario="nathanwpylestrangeplanet"/>
          <Storie img="assets/img/wawawicomics.svg" usuario="wawawicomics"/>
          <Storie img="assets/img/respondeai.svg" usuario="respondeai"/>
          <Storie img="assets/img/filomoderna.svg" usuario="filomoderna"/>
          <Storie img="assets/img/memeriagourmet.svg" usuario="memeriagourmet"/>

        <div className="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      </div>
    );
}
