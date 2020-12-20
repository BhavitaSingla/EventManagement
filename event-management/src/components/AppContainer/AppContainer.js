import React, { useState } from "react";
import { Card, Button, Modal, Form } from "react-bootstrap";
const AppContainer = () => {
    var eventListObject = {
        eventArray: []
    };
    var eventListItems = [];
    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);

    const [eventName, setEventName] = useState("");
    const handleEventName = (e) => {
        setEventName(e.target.value)
    }

    const [description, setDescription] = useState("");
    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    const [venue, setVenue] = useState("");
    const handleVenue = (e) => {
        setVenue(e.target.value)
    }

    const [price, setPrice] = useState("");
    const handlePrice = (e) => {
        setPrice(e.target.value)
    }
    const [discount, setDiscount] = useState("");
    const handleDiscount = (e) => {
        setDiscount(e.target.value)
    }

    const [selectFilter, setFilter] = useState("");

    const handleFilterData = (e) => {
        setFilter(e.target.value);
        if (selectFilter !== '') {
            getFilterData(selectFilter);
        }
    }

    var eventObject = {
        eventName: eventName,
        description: description,
        venue: venue,
        price: price,
        discount: discount
    }
    const handleShow = () => setShow(true);

    const getEventList = () => {
        if (localStorage.getItem('eventListObject')) {
            eventListObject = JSON.parse(localStorage.getItem('eventListObject'));
            eventListItems = eventListObject.eventArray;
        }

    }

    const getFilterData = (value) => {
        if (value === 'all') {
            if (localStorage.getItem('eventListObject')) {
                eventListObject = JSON.parse(localStorage.getItem('eventListObject'));
                eventListItems = eventListObject.eventArray;
            }
        } else if (value === 'free') {
            if (localStorage.getItem('eventListObject')) {
                eventListObject = JSON.parse(localStorage.getItem('eventListObject')).eventArray;
                // eventListItems = eventListObject.eventArray;
            }
        } else if (value === 'discount') {
            if (localStorage.getItem('eventListObject')) {
                eventListObject = JSON.parse(localStorage.getItem('eventListObject')).eventArray;
                // eventListItems = eventListObject.eventArray;
            }
        } else if (value === 'noDiscount') {
            if (localStorage.getItem('eventListObject')) {
                eventListObject = JSON.parse(localStorage.getItem('eventListObject')).eventArray;
                // eventListItems = eventListObject.eventArray;
            }
        }
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            if (localStorage.getItem('eventListObject')) {
                eventListObject = JSON.parse(localStorage.getItem('eventListObject'))
            }
            eventListObject.eventArray.push(eventObject);
            localStorage.setItem('eventListObject', JSON.stringify(eventListObject));
        }


        setValidated(true);
    };



    const handleClose = () => {
        setEventName('');
        setDescription('');
        setVenue('');
        setPrice('');
        setDiscount('');
        eventListObject = {
            eventArray: []
        };
        setShow(false);
    };
    getEventList();


    return (
        <div className="container-fluid eventManagement">
            <div className="row">
                <div className="col-md-4">
                    <h4>Events</h4>
                </div>
                <div className="col-md-4">
                    <Form>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Control as="select" custom className="eventListSelect" onChange={handleFilterData} value={selectFilter}>
                                <option value=''>Please Select</option>
                                <option value='all'>All</option>
                                <option value='free'>Free</option>
                                <option value='discount'>Discount</option>
                                <option value='noDiscount'>No Discount</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </div>

                <div className="col-md-4">
                    <button className="btn btn-info" onClick={handleShow}>Add Event</button>

                </div>
            </div>


            <div className="row bg-grey mt-20 pd-15 eventList">
                {eventListItems.map(key => (

                    <div className="col-md-4">
                        <Card>
                            <Card.Body className="eventCardsBody">
                                <Card.Title className="eventCardsTitle">{key.eventName}</Card.Title>
                                <Card.Text className="eventCardsText">
                                    <p><span className="font-bold">Description:</span> {key.description}</p>
                                    <p><span className="font-bold">Venue: </span>{key.venue}</p>
                                    <p><span className="font-bold">Price: </span>{key.price}</p>
                                    <p><span className="font-bold">Discount:</span> {key.discount}</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Event</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit} id="addEventForm">
                        <Form.Group controlId="formBasicEventName">
                            <Form.Label>Event Name*</Form.Label>
                            <Form.Control type="text" placeholder="Enter Event Name" required value={eventName} onChange={handleEventName} />
                            <Form.Control.Feedback type="invalid">
                                Required
                        </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formBasicDescription">
                            <Form.Label>Description*</Form.Label>
                            <Form.Control type="text" as="textarea" placeholder="Description" required value={description} onChange={handleDescription} />
                            <Form.Control.Feedback type="invalid">
                                Required
                        </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formBasicVenue">
                            <Form.Label>Venue*</Form.Label>
                            <Form.Control type="text" placeholder="Venue" required value={venue} onChange={handleVenue} />
                            <Form.Control.Feedback type="invalid">
                                Required
                        </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formBasicPrice">
                            <Form.Label>Price*</Form.Label>
                            <Form.Control type="text" pattern="[0-9]*" placeholder="Price" required value={price} onChange={handlePrice} />
                            <Form.Control.Feedback type="invalid">
                                Required
                        </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formBasicDiscount">
                            <Form.Label>Discount(%)*</Form.Label>
                            <Form.Control type="text" placeholder="Discount(only number)" pattern="[0-9]*" required value={discount} onChange={handleDiscount} />
                            <Form.Control.Feedback type="invalid">
                                Required
                        </Form.Control.Feedback>
                        </Form.Group>
                        <Button variant="secondary" onClick={handleClose} className="mr-15">
                            Clear
                        </Button>
                        <Button variant="info" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>

            </Modal>
        </div>
    )
}

export default AppContainer