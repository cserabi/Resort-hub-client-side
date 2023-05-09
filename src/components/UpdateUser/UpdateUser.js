import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateUser = () => {
    const [user, setUser] = useState({});

    const { id } = useParams();

    useEffect(() => {
        const url = `http://localhost:5000/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data));

    }, [])



    // Name change

    const handleNameChange = e => {
        const updateName = e.target.value;
        const updateUser = { name: updateName, email: user.Day };

        setUser(updateUser);
    }

    // Email change

    const handleEmailChange = e => {
        const updateEmail = e.target.value;

        const updateUser = { ...user };
        updateUser.Day = updateEmail;
        setUser(updateUser);
        // const updateUserEmail = { name: user.name, email: updateEmail };
        // setUser(updateUserEmail);

    }

    //phone number

    const handlePhoneChange = e => {
        const updatePhone = e.target.value;
        const updateUser = { ...user };
        updateUser.phone = updatePhone;
        setUser(updateUser);
    }

    const handleImageChange = e => {

        const updateImage = e.target.value;
        const updateUser = { ...user };
        updateUser.image = updateImage;
        setUser(updateUser);

    }
    const handleUpdateUser = e => {

        const url = `http://localhost:5000/${id}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })

            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('update successfully done by you');

                    setUser({});
                }

            })


        e.preventDefault();

    }
    return (
        <div>
            <h2>Name : {user.name}</h2>
            <h2>Day time out : {user.Day}</h2>


            <form onSubmit={handleUpdateUser}>
                <input type="text" onChange={handleNameChange} alt="user-name" value={user.name || ''} name="" id="" />
                <input type="text" onChange={handleEmailChange} alt="user-email" value={user.Day || ''} name="" id="" />
                <input type="text" onChange={handlePhoneChange} alt="user-phone" value={user.phone || ''} name="" id="" />
                <input type="text" onChange={handleImageChange} alt="user-image" value={user.image || ''} name="" />

                <input type="submit" alt="update-user" value="update" name="" id="" />




            </form>
        </div>
    );
};

export default UpdateUser;