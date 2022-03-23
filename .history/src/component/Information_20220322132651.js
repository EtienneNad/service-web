
import React from 'react';


class Information extends React.Component {
   
    
   
    render() {
       
       
            return (
                <div class="row">
                  
                      <div class="col-3">
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
                      <div class="col-3">
                          <th>Localisation:</th>
                          
                          <td>Rue:&nbsp;
                            {this.props.user.results[0].location.street.number}&nbsp;
                            {this.props.user.results[0].location.street.name}
                          </td>
                          <td> Ville:&nbsp;
                          {this.props.user.results[0].location.city}&nbsp;
                          </td>
                          <td>États:&nbsp;
                          {this.props.user.results[0].location.state}&nbsp;
                          </td>
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
                          </div>
                      </div>
                      
                   
                </div>
                
            );
        
        
    }
    
 
}

export default (Information);
        