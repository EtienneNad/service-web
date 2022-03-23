
import React from 'react';
import axios from 'axios';


class Information extends React.Component {
   
    
   
    render() {
       
       
            return (
                <div>
                  <table>
                      <tr>
                          <th>Gender:</th>
                          <td>
                          {this.props.user.results[0].gender}
                          </td>
                      </tr>
                      <tr>
                          <th>Nom:</th>
                          <td>
                          {this.props.user.results[0].name.title}&nbsp;
                          {this.props.user.results[0].name.first}
                          {this.props.user.results[0].name.last}
                          </td>
                      </tr>
                  </table>
                   
                </div>
                
            );
        
        
    }
    
 
}

export default (Information);
        