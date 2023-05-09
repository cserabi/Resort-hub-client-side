import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import './AddUser.css';

const AddUser = () => {

    const nameRef = useRef();
    const dayRef = useRef();
    const phoneRef = useRef();
    const imageRef = useRef();

    const handleAddUser = e => {

        const name = nameRef.current.value;
        const Day = dayRef.current.value;
        const phone = phoneRef.current.value;
        const image = imageRef.current.value;

        const newuser = { name, Day, phone, image }

        fetch('http://localhost:5000/users', {

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(newuser)
        })

            .then(res => res.json())
            .then(data => {
                if (data.insertedId > 0) {
                    alert('successfully Booking added');
                    e.target.reset();
                }


            })
        e.preventDefault();
    }
    return (
        <div>


            <div className="container">
                <h4 className="text-center">Add your booking details</h4>
                <div className="row">

                    <div className="col-md-4"></div>
                    <div className="col-md-4 shadow">
                        <Form onSubmit={handleAddUser}>
                            <Form.Floating className="mb-3">
                                <Form.Control
                                    id="floatingInputCustom"
                                    type="Text"
                                    placeholder="name@example.com"
                                    ref={nameRef}
                                />
                                <label htmlFor="floatingInputCustom">Name of Tour Place</label>
                            </Form.Floating>
                            <Form.Floating className="mb-3">
                                <Form.Control
                                    id="floatingPasswordCustom"
                                    type="text"
                                    placeholder="Password"
                                    ref={dayRef}
                                />
                                <label htmlFor="floatingPasswordCustom">Tour Timeout</label>
                            </Form.Floating>
                            <Form.Floating className="mb-3">
                                <Form.Control
                                    id="floatingPasswordCustom"
                                    type="text"
                                    placeholder="text"
                                    ref={phoneRef}
                                />
                                <label htmlFor="floatingPasswordCustom">Phone Number</label>
                            </Form.Floating>
                            <Form.Floating className="mb-3">
                                <Form.Control
                                    id="floatingPasswordCustom"
                                    type="text"
                                    placeholder="text"
                                    ref={imageRef}
                                />
                                <label htmlFor="floatingPasswordCustom">Place your image link </label>
                            </Form.Floating>

                            <input type="submit" value="Book Now" className="btn btn-primary btn-organization p-3 w-100 mb-3 bookbtn" />
                        </Form>

                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </div >
    );
};

export default AddUser;