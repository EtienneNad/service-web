
import React from 'react';
import axios from 'axios';
import './Avatar.css';


class Avatar extends React.Component {
    constructor(props){
        super(props)
        this.state={
            isLoaded: false,
            users:[]
        }
    }
   
    render() {
        if(!this.state.isLoaded){
            return(
                <h1>Loading ...</h1>
            )
        }
        else {
            return (
                <div>
                    <img src={this.state.users.results[0].picture.large} alt="avatar">
                     
                </img>
                </div>
                
            );
        }
        
    }
    
    componentDidMount() {
        axios.get('https://randomuser.me/api/')
            .then((response) => {
                const utilisateurs = response.data;
                // On récupère les données reçues et on modifie le tableau dans l'état
                this.setState({users : utilisateurs,isLoaded:true})
           
            })
    }
}

export default (Avatar);
        