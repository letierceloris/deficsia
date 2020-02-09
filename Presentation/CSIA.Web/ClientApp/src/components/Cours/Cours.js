import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ClipLoader from "react-spinners/ClipLoader";

export class CCours extends Component {
    
    constructor(props) {
        super(props);
        this.state = ({cours: {id: 0, nom: '', description: '', duree: 0, modules: []}, chargement: true})
    }


    componentDidMount() {
        this.recuperCours();
    }

    async recuperCours() {
        var reponse = await fetch(`api/cours/${this.props.idCours}`);
        var c = await reponse.json();
        this.setState({
            cours: {
                id: c.idCours,
                nom: c.nom,
                description: c.description,
                duree: c.duree,
                modules : c.modules
            },
            chargement: false
        });
    }

    rendreModule(modules) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Description</th>
                        <th>Durée</th>
                    </tr>
                </thead>
                <tbody>
                    {modules.map(m =>
                        <tr key={m.idModule}>
                        <td>{m.nom}</td>
                        <td>{m.description}</td>
                        <td>{m.duree}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }
    
    render() {
        return (
            <React.Fragment>
                <h2>{this.state.cours.nom} (durée: {this.state.cours.duree})</h2>
                <p>{this.state.cours.description}</p>
                {this.rendreModule(this.state.cours.modules)}
                <ClipLoader size={150} color={"#123abc"} loading={this.state.chargement} />
            </React.Fragment>
        )
    }
}

Component.propTypes = {
    idCours: PropTypes.string
}