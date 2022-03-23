
import React from 'react';


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
                          {this.props.user.results[0].name.first}&nbsp;
                          {this.props.user.results[0].name.last}
                          </td>
                      </tr>
                      <tr>
                          <th>Localisation:</th>
                          <td>
                          {this.props.user.results[0].location.street.name}&nbsp;
                          {this.props.user.results[0].location.street.number}&nbsp;
                          {this.props.user.results[0].location.city}&nbsp;
                          {this.props.user.results[0].location.state}&nbsp;
                          {this.props.user.results[0].location.postcode}
                         
                          </td>
                      </tr>
                  </table>
                   
                </div>
                
            );
        
        
    }
    
 
}

export default (Information);
        