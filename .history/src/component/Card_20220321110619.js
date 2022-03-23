
import React from 'react';
import axios from 'axios';


class Card extends React.Component {
    constructor(props){
        super(props)
        this.state={
            boxTitle:"Card"
        }
    }
   
    render() {
        return (
            <div className='Card'>    
              <img src="img_avatar.png" alt="Avatar" style="width:100%">
                </img><div class="container">
                <h4><b>John Doe</b></h4> 
                 <p>Architect & Engineer</p> 
                </div>
            </div>
            
        );
    }
    
}

export default (Card);
        