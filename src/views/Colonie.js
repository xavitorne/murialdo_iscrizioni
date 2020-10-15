import React from 'react';
import { Component } from 'react';
import { Form } from 'react-formio';

import Modal from 'react-awesome-modal';

export default class Colonie extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible : false
        };
    }

   openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {

            return (
                    <div>
                    <Form src="https://ivzftkhgysqjtha.form.io/iscrizioni"  onSubmit={() => this.openModal()} />
                    <Modal visible={this.state.visible} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div className="p-5">
                        <h1>Richiesta inviata</h1>
                        <p className="lead">Verrete contattati dall'equipe educativa per la conferma o meno dell'iscrizione.</p>
                        <a href="javascript:void(0);" onClick={() => this.closeModal()}>Chiudi</a>
                    </div>
                </Modal>
                </div>
            );
    }
}
