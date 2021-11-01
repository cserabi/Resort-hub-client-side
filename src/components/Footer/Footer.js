import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="container-fluid bg-custom">
      <div className="row">
        <div className="col-md-2">

        </div>
        <div className="col-md-3">
          <p><i class="fas fa-phone-alt"></i> 01278941254 (24 hours available )<br />
            <i class="fas fa-envelope"></i> resorthub@gmail.com <br />
            <i class="fas fa-map-marker-alt"></i> 120 street Road , Sirajgonj Town , Bangladesh</p>
          <img src="https://i.postimg.cc/VNWxxj2x/Screenshot-25.png" alt="" />
        </div>

        <div className="col-md-2">

          <p>
            About us<br />
            Success<br />
            Refund policy<br />
            Terms and Conditions<br />
            Privacy Policy<br />

            <div className="icon-size">


              <i class="fab fa-facebook-square fa-2x"></i>

              <i class="fab fa-instagram-square fa-2x"></i>
              <i class="fab fa-twitter-square fa-2x"></i>
              <i class="fab fa-pinterest-square fa-2x"></i>
            </div>

          </p>

        </div>
        <div className="col-md-3">
          <img src="https://i.postimg.cc/SxKyv47k/Screenshot-24.png" alt="payment" />

        </div>
        <div className="col-md-2">

        </div>

        <div className="row">
          <div className="col-md-4">

          </div>

          <div className="col-md-4 text-center">
            <h5>Copyright &copy; 2021 Resort Hub , Bangladesh</h5>
          </div>

          <div className="col-md-4">

          </div>
        </div>
      </div>



    </div >
  );
};

export default Footer;