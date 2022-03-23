
import React from 'react';
import axios from 'axios';
import './Avatar.css';


class Avatar extends React.Component {
   
   
    render() {
     
            return (
                <div>
                    <img src={this.props.user.results[0].picture.large} alt="avatar">
                     
                </img>
                </div>
                
            );
        
        
    }
    
   
}

export default (Avatar);
        