import React, { Component } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from 'react-router-dom';


export class ListeCours extends Component {
    
    constructor(props) {
        super(props);
        this.state = { cours:[], chargement: true };
    }

    componentDidMount() {
        this.recupereCours();
    }

    handleClick = () => {
        //this.props.history.push(`/cours/${id}`);
        console.log('click');
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
                        <td><Link to={`/cours/${cour.idCours}`}>{cour.nom}</Link></td>
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
        let contenu = this.state.cours.chargement 
            ? ''
            : ListeCours.rendreCours(this.state.cours);
        
        return (
            <div>
                {contenu}
                <ClipLoader size={150} color={"#123abc"} loading={this.state.chargement} />
            </div>
        )
    }
}

