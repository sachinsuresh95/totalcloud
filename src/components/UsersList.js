import React from 'react'
import { Spring } from 'react-spring/renderprops'
import UserListTile from './UserListTile'

function UsersList({ users }) {
    return users.length > 0 ? (
        <Spring from={{ marginLeft: 1000 }}
            to={{ marginLeft: 0 }}>
            {props => (<div style={props}>
                <h2>Users</h2>
                <div className="row">
                    {users.map(user => <UserListTile
                        key={user.id}
                        id={user.id}
                        fname={user.first_name}
                        lname={user.last_name}
                        img={user.avatar}
                    />)}
                </div>
            </div>)}
        </Spring>
    ) : null;
}

export default UsersList;