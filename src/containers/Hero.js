import React, {Component} from 'react';
import ButtonLink from './ButtonLink';

export default class Hero extends Component {

    render() {

    return (
      <div className="jumbotron text-center" style={{'marginTop': '-40px'}}>
            <h2 className="title">
            ISCRIZIONI Colonie estive 2020
            <br/>
            <span className="text-blue">C’entro Anch’io – Comunità Murialdo</span>
            </h2>
            <div className="row mt-50">
          <div className="col-sm-12 col-sm-offset-3 text-justify">
            <p className="lead">
            Attraverso questo modulo è possibile effettuare on-line la prenotazione alle colonie estive del C’entro Anch’io della Comunità Murialdo in collaborazione con il Comune di Rovereto. Una volta cliccato su -Invia- riceverete sulla email indicata la ricevuta dell'avvenuta prenotazione.
            </p>
            <p className="lead">Scarica QUI il dettaglio delle proposte.</p>
          </div>

          <div className="col-sm-12 col-sm-offset-3 text-center">
            <p className="lead">Costi: 30 euro a settimana</p>
            <p className="lead">Hai bisogno di aiuto per l'iscrizione?</p>
            <ul className="list-inline">
              <li>
                Chiama al <a href="tel:0464-412886">0464-412886</a>
              </li>
              <li>
                Scrivici a <a target="_blank" rel="noopener noreferrer" href="mailto:centroanchio@murialdo.taa.it">centroanchio@murialdo.taa.it</a>
              </li>
            </ul>
              <ButtonLink to="/colonie" className="btn btn-lg btn-success nolist">
              Fai l'iscrizione
              </ButtonLink>
          </div>
        </div>

          <div className="row text-center mt-50">

          <div className="col-sm-12 col-sm-offset-3 text-center">

           <p>
             <img src="https://comunitamurialdo.github.io/iscrizioni/static/stemma_cr.png" height="100px"/>
             <img src="https://comunitamurialdo.github.io/iscrizioni/static/logo.png" height="100px"/>
             <img src="https://comunitamurialdo.github.io/iscrizioni/static/logoCA.png" height="100px"/>
           </p>
          </div>
          </div>
      </div>
    );
  }
}
