
import React from 'react';
import axios from 'axios';
import Avatar from './Avatar';

class Card extends React.Component {
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
                   <Avatar/> 
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

export default (Card);
        