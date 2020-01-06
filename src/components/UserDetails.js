import React from 'react'
import { Spring } from 'react-spring/renderprops'
import axios from 'axios'

class UserDetails extends React.Component {
    state = {
        UserDetails: {}
    }

    componentDidMount() {
        this.getUserData();
    }

    getUserData() {
        axios.get(`https://reqres.in/api/users/${this.props.match.params.id}`).then(response => {
            this.setState(state => {
                return { ...state, UserDetails: response.data.data }
            })
        })
    }

    render() {
        let { UserDetails } = this.state;
        return (
            <Spring from={{ marginLeft: 1000 }}
                to={{ marginLeft: 0 }}>
                {props => (
                    <div style={props} className="text-center">
                        <img src={UserDetails.avatar} alt={UserDetails.first_name} height="200px" width="200px" />
                        <h3>{UserDetails.first_name}</h3>
                        <h3>{UserDetails.last_name}</h3>
                        <h3>{UserDetails.email}</h3>
                    </div>
                )}
            </Spring>
        )
    }
}

export default UserDetails;