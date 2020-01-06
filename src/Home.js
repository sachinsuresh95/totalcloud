import React from 'react';
import axios from 'axios';
import { Spring } from 'react-spring/renderprops';

import Loader from './components/Loader';
import UsersList from './components/UsersList';

class Home extends React.Component {
    state = {
        loading: true,
        users: []
    }

    componentDidMount() {
        this.getUserData();
    }

    getUserData() {
        axios.get('https://reqres.in/api/users?delay=3').then(response => {
            this.setState(state => {
                return { ...state, loading: false, users: response.data.data }
            })
        })
    }

    render() {
        let { loading, users } = this.state;
        return (
            <Spring from={{ marginLeft: 1000 }}
                to={{ marginLeft: 0 }}>
                {
                    props => (<div style={props} className="text-center">
                        {loading ? <Loader /> : <UsersList users={users} />}
                    </div>)
                }
            </Spring>
        )
    }
}

export default Home;