
import React from 'react';


class Information extends React.Component {
   
    
   
    render() {
       
       
            return (
                <div class="row">
                  
                      <body>
                        <div class="col-6">
                          <th>Gender:&nbsp; </th>
                          <td>
                          {this.props.user.results[0].gender}
                          </td>&nbsp;
                          <th>Nom: &nbsp;</th>
                          <td>
                          {this.props.user.results[0].name.title}&nbsp;
                          {this.props.user.results[0].name.first}&nbsp;
                          {this.props.user.results[0].name.last}
                          </td>
                          
                        </div>

                         <div class="col-6">
                          <th>Localisation:</th>
                          
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
                          {this.props.user.results[0].location.coordinates.latitude}, 
                          {this.props.user.results[0].location.coordinates.longitude}
                         </tr>
                         <tr>Heure: &nbsp;
                          {this.props.user.results[0].location.timezone.offset}&nbsp;
                          {this.props.user.results[0].location.timezone.description} 
                         </tr>
                        </div>
                      
                      </body>
                 
                   
                </div>
                
            );
        
        
    }
    
 
}

export default (Information);
        