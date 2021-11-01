import React from 'react';
import './Review.css';

const Review = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">

          <div className="card m-3" >
            <img className="card-img-top card-images" src="http://2.bp.blogspot.com/-icxW5HXQXJo/VTb6e-XsjwI/AAAAAAAAArY/DanNut6qd18/s1600/Men%2Bshort%2Bhairstyle%2Bfor%2Bsquare%2Bface%2Bcool%2Bmen%2Bs%2Bhaircut%2Bfrom%2Bnick.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Toren Ispum</h5>
              <p className="card-text">It was great turist egency .I get best service from here. </p>
              <div className="rating-setting">
                <p className="justify-content-center align-items-center"><i className="fas fa-star icon-color"></i><i className="fas fa-star icon-color"></i><i className="fas fa-star icon-color"></i><i className="fas fa-star icon-color"></i><i className="fas fa-star icon-color"></i>(5)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">



          <div className="card m-3" >
            <img className="card-img-top card-images" src="https://thumbs.dreamstime.com/b/man-portrait-young-happy-smiling-face-male-model-crossed-arms-pose-black-background-guy-casual-fashion-clothing-studio-187062164.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Jhonsoon Edenbaerg</h5>
              <p className="card-text">Great Experience with Resort hub with great behaviour with us.</p>
              <div className="rating-setting">
                <p className="justify-content-center align-items-center"><i className="fas fa-star icon-color"></i><i className="fas fa-star icon-color"></i><i className="fas fa-star icon-color"></i><i className="fas fa-star icon-color"></i><i className="fas fa-star icon-color"></i>(5)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">

          <div className="card m-3" >
            <img className="card-img-top card-images" src="https://cdn.shopify.com/s/files/1/0289/5858/9027/files/17_be828d98-0b7d-4833-b914-36c8b7fc1158.png" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Wangsahng Randu</h5>
              <p className="card-text">I am very satisfied to take service from here</p>
              <div className="rating-setting">
                <p className="justify-content-center align-items-center"><i className="fas fa-star icon-color"></i><i className="fas fa-star icon-color"></i><i className="fas fa-star icon-color"></i><i className="fas fa-star icon-color"></i><i className="fas fa-star icon-color"></i>(5)</p>
              </div>
            </div>
          </div>
        </div>


      </div>



    </div>
  );
};

export default Review;