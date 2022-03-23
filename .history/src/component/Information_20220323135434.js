
import React from 'react';


class Information extends React.Component {
   render() {
       return (
       <div>
            <table>
                <tbody>
                    <tr>
                        <th>
                            Gender:
                        </th>
                        <td>
                          {this.props.user.results[0].gender}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Nom:
                        </th>
                        <td>
                          {this.props.user.results[0].name.title}&nbsp;
                          {this.props.user.results[0].name.first}&nbsp;
                          {this.props.user.results[0].name.last}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Localisation:
                        </th>
                          
                        <td>
                            Rue:&nbsp;
                            {this.props.user.results[0].location.street.number}&nbsp;
                            {this.props.user.results[0].location.street.name}
                        </td>
                        <td>
                            Ville:&nbsp;
                            {this.props.user.results[0].location.city}&nbsp;
                        </td>
                        <td>
                            États:&nbsp;
                            {this.props.user.results[0].location.state}&nbsp;
                        </td>
                        <td>
                            Code Postal: &nbsp;
                            {this.props.user.results[0].location.postcode}
                        </td>
                        <td>
                            Coordonnée: &nbsp;
                            {this.props.user.results[0].location.coordinates.latitude}, 
                            {this.props.user.results[0].location.coordinates.longitude}
                        </td>
                        <td>
                            Heure: &nbsp;
                            {this.props.user.results[0].location.timezone.offset}&nbsp;
                            {this.props.user.results[0].location.timezone.description} 
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Couriel:
                        </th>
                        <td>
                            Email: &nbsp;
                            {this.props.user.results[0].email}
                        </td>
                        <td>
                            Login: &nbsp;
                        </td>
                        <td>
                            username: &nbsp;
                            {this.props.user.results[0].login.username}
                        </td>
                        <td>
                            password: &nbsp;
                            {this.props.user.results[0].login.password}

                        </td> 
                    </tr>
                    <tr>
                        <th>
                            date de naissances:
                        </th>
                        <td>
                            date:&nbsp;
                            {this.props.user.results[0].dob.date}&nbsp;
                        </td>
                        <td>    
                            age:&nbsp;
                            {this.props.user.results[0].dob.age}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            téléphone:
                        </th>
                        <td>
                            maison:&nbsp;
                            {this.props.user.results[0].phone}
                        </td>
                        <td>
                            cellulaire:&nbsp;
                            {this.props.user.results[0].phone}
                        </td>
                    </tr>
                </tbody>
            </table>      
        </div>   
        );
    }
}

export default (Information);
        