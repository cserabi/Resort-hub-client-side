import { Carousel, Nav } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Reviews.css';

const Reviews = () => {



  const [newReview, setnewReview] = useState([]);


  useEffect(() => {

    fetch('http://localhost:5000/reviews')
      .then(res => res.json())
      .then(data => setnewReview(data))

    console.log(newReview);
  }, [])

  return (


    <div className="container-fluid">
      <h4 className="text-center"> User Recommendation and Experience </h4>
      <div className="d-flex justify-content-center align-items-center flex-wrap">

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4"></div>

            <div className="col-md-4">


              <Carousel>

                {
                  newReview.length > 0
                  && newReview.map(reviewer =>


                    <Carousel.Item>





                      <div className='container'>
                        <div className="row review-box" >
                          <div className="col-md-4"></div>
                          <div className="col-md-4">
                            <img className='profile-images' src="https://cdn-icons-png.flaticon.com/512/17/17004.png" />
                          </div>
                          <div className="col-md-4"></div>

                        </div>


                      </div>

                      <Carousel.Item />
                      {/* <img
                      className="image-bg d-block w-100"
                      src="https://media.istockphoto.com/vectors/triangles-background-vector-id940466680?k=20&m=940466680&s=612x612&w=0&h=jz32ccCcAVH_hFN-bnuelxQU0o5hgQrMFIR_lkMOsCc="
                      alt="First slide" */}



                      <Carousel.Caption>
                        <h3 className="text-dark text-center text-dark-pro ">{reviewer.name} </h3>

                        <p className="text-dark text-center">
                        </p>



                        <div style={{ color: '#ff3200' }}>

                          {

                            reviewer.review === '1' ? <i class="fas fa-star review-color" />
                              : reviewer.review === '2' ? <div><i class="fas fa-star review-color" /> <i class="fas fa-star review-color" /> </div>
                                : reviewer.review === '3' ? <div><i class="fas fa-star review-color" /><i class="fas fa-star review-color" /> <i class="fas fa-star review-color" /> </div>
                                  : reviewer.review === '4' ? <div><i class="fas fa-star review-color" /><i class="fas fa-star review-color" /><i class="fas fa-star review-color" /> <i class="fas fa-star review-color" /> </div>
                                    : reviewer.review === '5' ? <div><i class="fas fa-star review-color" /><i class="fas fa-star review-color" /><i class="fas fa-star review-color" /><i class="fas fa-star review-color" /> <i class="fas fa-star review-color" /> </div>
                                      : <p style={{ color: '#ff3200' }}>no review found </p>

                          }
                          {/* <div class="custom"></div> */}

                        </div>



                        <h5 className="text-dark text-center "> " {reviewer.comment} " </h5>

                      </Carousel.Caption>
                    </Carousel.Item>
                  )
                }



              </Carousel>






            </div>


            <div className="col-md-4"></div>

          </div>

          <div className="row">
            <div className="col-md-4"></div>

            <div className="col-md-4">  <Nav.Link className='list-group-item drop-review' as={Link} to="/addreview">Add Review</Nav.Link></div>
            <div className="col-md-4"></div>

          </div>
        </div>


      </div>

    </div >
  );
};

export default Reviews;