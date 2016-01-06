import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import FormInscription from './inscriptionBasique';

function ApplicationComponent() {
    return(
        <div>
            <header className='bar bar-nav'>
                <h1 className='title'>DreamAct</h1>
            </header>
            <section id='main' className='content'>
                <FormInscription />
            </section>
            <footer className='bar bar-tab'>
                &copy; DreamAct
            </footer>
        </div>
    )
}

ReactDOM.render(<ApplicationComponent />, document.body);