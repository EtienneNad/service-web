
import React from 'react';
import axios from 'axios';


class Information extends React.Component {

   
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
                          {this.state.users.gender}
                          </td>
                      </tr>
                  </table>
                   
                </div>
                
            );
        }
        
    }
}

export default (Information);
        