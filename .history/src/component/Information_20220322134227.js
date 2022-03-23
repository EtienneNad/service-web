
import React from 'react';


class Information extends React.Component {
   
    
   
    render() {
       
       
            return (
                <div class="row">
                  
                      <body>
                        <div class="col-6">
                          <th>Gender: </th>
                          <td>
                          {this.props.user.results[0].gender}
                          </td>&nbsp;
                          <th>Nom: </th>&nbsp;
                          <td>
                          {this.props.user.results[0].name.title}&nbsp;
                          {this.props.user.results[0].name.first}&nbsp;
                          {this.props.user.results[0].name.last}
                          </td>
                          
                        </div>
                         <tr>
                          <td>Localisation:</td>
                          
                          <tr>Rue:&nbsp;
                            {this.props.user.results[0].location.street.number}&nbsp;
                            {this.props.user.results[0].location.street.name}
                          </tr>
                          
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
                          
                      
                      </body>
                 
                   
                </div>
                
            );
        
        
    }
    
 
}

export default (Information);
        