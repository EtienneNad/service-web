
import React from 'react';


class Information extends React.Component {
   
    
   
    render() {
       
       
            return (
                <div>
                  <table>
                      <tbody>
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
                          
                          <td>Rue:&nbsp;
                            {this.props.user.results[0].location.street.number}&nbsp;
                            {this.props.user.results[0].location.street.name}
                          </td>
                          <tr>
                          <td> Ville:&nbsp;
                          {this.props.user.results[0].location.city}&nbsp;
                          </td>
                          </tr>
                          
                          <tr>États:&nbsp;
                          {this.props.user.results[0].location.state}&nbsp;
                          </tr>
                          
                          <td>Code Postal: &nbsp;
                          {this.props.user.results[0].location.postcode}
                         </td>
                         <td>Coordonnée: &nbsp;
                          {this.props.user.results[0].location.coordinates.latitude}, 
                          {this.props.user.results[0].location.coordinates.longitude}
                         </td>
                         <td>Heure: &nbsp;
                          {this.props.user.results[0].location.timezone.offset}&nbsp;
                          {this.props.user.results[0].location.timezone.description} 

                         </td>
                          </tr>
                      
                      </tbody>
                  </table>
                   
                </div>
                
            );
        
        
    }
    
 
}

export default (Information);
        