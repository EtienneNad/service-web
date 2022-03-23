
import React from 'react';
import axios from 'axios';


class Information extends React.Component {
   
    
   
    render() {
       
       
            return (
                <div>
                  <table>
                      <tr>
                          <td>Gender</td>
                          
                          {this.props.user.results[0].gender}
                          
                      </tr>
                  </table>
                   
                </div>
                
            );
        
        
    }
    
 
}

export default (Information);
        