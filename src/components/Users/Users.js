import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Users.css';

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))

    }, [])

    // delete an users


    const handleDeleteUser = id => {

        const proceed = window.confirm('Are you sure , you want to delete?')

        if (proceed) {
            const url = `http://localhost:5000/users/${id}`;
            fetch(url, {

                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');

                        const remainingUsers = users.filter(user => user._id !== id)
                        setUsers(remainingUsers);
                    }
                })


        }
    }
    return (
        <div className="container-fluid">
            <h4 className="text-center">Booking Tour place : {users.length}</h4>
            <div className="d-flex justify-content-center align-items-center flex-wrap">





                {
                    // users.map(user => <li className="link-style" key={user._id}>UserName : {user.name}<br /> User Email : {user.email}<br />Phone Number :{user.phone} <br /> Profile - picture : <img className="profile-Picture" src={user.image} alt="" /><br />
                    //     <Link to={`/users/update/${user._id}`}><button>Update</button> </Link>
                    //     <button onClick={() => handleDeleteUser(user._id)}>Delete</button>   </li>

                    // )

                    users.map(user =>
                        <div class="card shadow my-4 m-3" style={{ width: '18rem' }}>
                            <img className="card-img-top" width="200px" height="250px" src={user.image} alt="Card image cap" />
                            <div class="card-body">
                                <p class="card-text"> Name : {user.name}</p>
                                <p class="card-text"> Booking Days : {user.Day}</p>
                                <p class="card-text"> Phone : {user.phone}</p>
                                <Link to={`/users/update/${user._id}`}><button className="btn btn-primary">Update</button> </Link>
                                <button onClick={() => handleDeleteUser(user._id)} className="btn btn-danger">Delete</button>

                            </div>
                        </div>

                    )
                }


            </div>

        </div >
    );
};

export default Users;