import React, { useEffect, useState } from 'react';
import { Card, Carousel, Col, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Rating from 'react-rating';

const ShowReview = () => {
    const [reviews, setReviews] = useState([]);
    const { isLoading, setIsLoading } = useAuth();
    useEffect(() => {
        fetch('https://obscure-mesa-53122.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            });
    }, []);
    if (isLoading) {
        return <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    }
    return (
        <div className='container'>
            <h3 className='text-center mt-4'>Customer <span className='text-danger'>Review</span></h3>
            <p className='text-danger m-auto text-center border-2 mb-3 border-bottom border-danger w-25'>Customer Feedback,Rating and Name</p>
            <Row xs={1} md={2} lg={3} className="g-1">
                {reviews.map(review => <div key={review._id}>
                    <Col >
                        <Card border="secondary" style={{ width: '18rem' }}>
                            <Card.Header>Rating: <Rating
                                initialRating={review.rating}
                                readonly
                                emptySymbol="far fa-star"
                                fullSymbol="fas fa-star"></Rating>({review.rating})</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {review.comment}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>Name: {review.name}</Card.Footer>
                        </Card>
                    </Col>
                </div>)}
            </Row>
        </div>
    );
};

export default ShowReview;