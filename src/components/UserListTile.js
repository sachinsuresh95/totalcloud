import React from 'react';
import { Link } from 'react-router-dom';

function UserListTile({ fname, lname, id, img }) {
    return (
        <div className="col-xs-6 col-sm-4">
            <Link to={`/user/${id}`}>
                <img src={img} alt={`user: ${fname}`} />
                <h4>{`${fname} ${lname}`}</h4>
            </Link>
        </div>
    )
}

export default UserListTile;