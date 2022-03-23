
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
                          <td>Rue:&nbsp;
                            {this.props.user.results[0].location.street.number}&nbsp;
                            {this.props.user.results[0].location.street.name}
                          </td>
                          <td> Ville:&nbsp;
                          {this.props.user.results[0].location.city}&nbsp;
                          </td>
                          <td>États:&mbsp;
                          {this.props.user.results[0].location.state}&nbsp;
                          </td>
                          {this.props.user.results[0].location.postcode}
                         
                          </td>
                      </tr>
                  </table>
                   
                </div>
                
            );
        
        
    }
    
 
}

export default (Information);
        