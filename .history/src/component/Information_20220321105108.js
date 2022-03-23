import React from 'react';
import axios from "axios";

class ListeUtilisasteur extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // isLodad est faux tant que l'appel n'est pas terminé
            isLoaded: false,
            utilisateurs : [],
        }
    }

    componentDidMount() {
        api({
            method: 'post',
            // c'est ici qu'on peut seulement entrer la dernière partie de l'url qui
            // représente la route au lieu d'avoir à écrire 
            // https://swh2022-libapi.herokuapp.com/livres
            url: '/livres',
            data: {
                titre: 'Nouveau livre',
                isbn: '123456'
            }
        })
        .then((resultat) => {
            // Traitement si l'appel a réussi
        }) 
    }


    render() {
        if(!this.state.idLoaded){
            return 
                // HTML à retourner tant que l'appel n'est pas terminé, un message 
                // de chargement par exemple
            
        }

        return 
            // Le code "régulier"
        
    }
}