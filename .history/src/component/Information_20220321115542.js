
import React from 'react';
import axios from 'axios';


class Information extends React.Component {
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
                  <table>
                      <tr>
                          <th>Gender</th>
                          <td>
                          {this.props.user.gender}
                          </td>
                      </tr>
                  </table>
                   
                </div>
                
            );
        }
        
    }
    
 
}

export default (Information);
        