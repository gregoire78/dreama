import React, { Component } from 'react';

export default class FormInscription extends Component {
    render() {
        return <form action="">
                <input type="text" name="firstname" id="firstname" placeholder="Nom"/><br/>
                <input type="text" name="lastname" id="lastname" placeholder="Prénom"/><br/>
                <input type="email" name="email" id="email" placeholder="Adresse email"/><br/>
                <button type="submit">Envoyer</button>
                <button type="reset">Reset</button>
            </form>
    }
}