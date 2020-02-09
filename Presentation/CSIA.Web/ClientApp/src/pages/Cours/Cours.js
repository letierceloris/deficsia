import React, { Component } from 'react';

export class Cours extends Component {
    
    constructor(props) {
        super(props);
        this.state = { cours:[], chargement: true };
    }

    componentDidMount() {
        this.recupereCours();
    }
    
    async recupereCours () {
        const reponse = await fetch('api/cours');
        const cours = await reponse.json();

        this.setState({cours: cours, chargement: false})
    }

    static rendreCours(cours) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Description</th>
                        <th>Difficulté</th>
                        <th>Durée</th>
                    </tr>
                </thead>
                <tbody>
                    {cours.map(cour =>
                        <tr key={cour.idCours}>
                        <td>{cour.nom}</td>
                        <td>{cour.description}</td>
                        <td>{cour.difficulte}</td>
                        <td>{cour.duree}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }
    
    render() {
        let c = this.state.cours.loading 
            ? <p><em>Loading...</em></p>
            : Cours.rendreCours(this.state.cours);
        
        return (
            <div>
                {c}
            </div>
        )
    }
}

