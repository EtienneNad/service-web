
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
                          <tr><th>Localisation:</th></tr>
                          <tr>
                          <tr>Rue:&nbsp;
                            {this.props.user.results[0].location.street.number}&nbsp;
                            {this.props.user.results[0].location.street.name}
                          </tr>
                          <tr> Ville:&nbsp;
                          {this.props.user.results[0].location.city}&nbsp;
                          </tr>
                          <tr>États:&nbsp;
                          {this.props.user.results[0].location.state}&nbsp;
                          </tr>
                          <tr>Code Postal: &nbsp;
                          {this.props.user.results[0].location.postcode}
                         </tr>
                         <tr>Coordonnée: &nbsp;
                          {this.props.user.results[0].location.coordinates.latitude}, {this.props.user.results[0].location.coordinates.longitude}
                         </tr>
                          </tr>
                      </tr>
                  </table>
                   
                </div>
                
            );
        
        
    }
    
 
}

export default (Information);
        