import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Tourplace = () => {

  const [tourplaces, settourplace] = useState([]);

  useEffect(() => {

    fetch('http://localhost:5000/tourplace')
      .then(res => res.json())

      .then(data => settourplace(data))

  }, [])
  return (
    <div className="container-fluid">
      <h4 className="text-center">Available Tour place : {tourplaces.length}</h4>
      <div className="d-flex justify-content-center align-items-center flex-wrap">





        {
          // users.map(user => <li className="link-style" key={user._id}>UserName : {user.name}<br /> User Email : {user.email}<br />Phone Number :{user.phone} <br /> Profile - picture : <img className="profile-Picture" src={user.image} alt="" /><br />
          //     <Link to={`/users/update/${user._id}`}><button>Update</button> </Link>
          //     <button onClick={() => handleDeleteUser(user._id)}>Delete</button>   </li>

          // )

          tourplaces.map(tourplace =>
            <div class="card shadow my-4 m-3" style={{ width: '18rem' }}>
              <img className="card-img-top" width="200px" height="250px" src={tourplace.imglink} alt="Card image cap" />
              <div class="card-body">
                <p class="card-text"> Tour Place : {tourplace.locName}</p>
                <p class="card-text"> Description : {tourplace.des}</p>
                <p class="card-text"> Day Time Out : {tourplace.dayTimeout}</p>
                <p class="card-text"> price : {tourplace.Price} Taka</p>

                <Link to='/users/add'><button className="btn btn-primary">Booking Now</button> </Link>

              </div>
            </div>

          )
        }


      </div>

    </div >
  );
};

export default Tourplace;