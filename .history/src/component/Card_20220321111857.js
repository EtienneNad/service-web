
import React from 'react';
import axios from 'axios';


class Card extends React.Component {
    constructor(props){
        super(props)
        this.state={
            isLoaded: false,
            users:[]
        }
    }
   
    render() {
        if(this.state.isLoaded = false){
            return(
                <h1>Loading ...</h1>
            )
        }

        return (
            <div>
                {this.state.users.results[0]}
            </div>
            
        );
    }
    
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                const utilisateurs = response.data;
                // On récupère les données reçues et on modifie le tableau dans l'état
                this.setState({users : utilisateurs,isLoaded:true})
           
            })
    }
}

export default (Card);
        