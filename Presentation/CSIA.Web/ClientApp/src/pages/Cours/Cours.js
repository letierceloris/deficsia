import React, { Component } from 'react';
import { CCours } from '../../components/Cours/Cours';

export class Cours extends Component {
     
    render() {
        return (
            <div>
                <CCours idCours={this.props.match.params.id} />
                <button>S'inscrire</button>
            </div>
        )
    }
}
