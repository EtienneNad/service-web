
import React from 'react';
import axios from 'axios';
import './Avatar.css';


class Avatar extends React.Component {
   
   
    render() {
        if(!this.state.isLoaded){
            return(
                <h1>Loading ...</h1>
            )
        }
        else {
            return (
                <div>
                    <img src={this.props.users.results[0].picture.large} alt="avatar">
                     
                </img>
                </div>
                
            );
        }
        
    }
    
   
}

export default (Avatar);
        