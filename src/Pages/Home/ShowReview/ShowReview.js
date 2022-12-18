import React, { useEffect, useState } from "react";
import { Card, Carousel, Col, Row } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import Rating from "react-rating";

const ShowReview = () => {
  const [reviews, setReviews] = useState([]);
  const { isLoading, setIsLoading } = useAuth();
  useEffect(() => {
    fetch("bookshoopserver-production.up.railway.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <h3 className="text-center mt-4">
        Customer <span className="text-danger">Review</span>
      </h3>
      <p className="text-danger m-auto text-center border-2 mb-3 border-bottom border-danger w-25">
        Customer Feedback,Rating and Name
      </p>
      <div>
        <Carousel>
          {reviews.map((review) => (
            <Carousel.Item className="banner">
              <Card className="text-center">
                <Card.Header> Rating:{" "}
                  <Rating
                    initialRating={review.rating}
                    readonly
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                  ></Rating>
                  ({review.rating})</Card.Header>
                <Card.Body>
                  <Card.Title>Reviewer Comment</Card.Title>
                  <Card.Text>
                  {review.comment}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">Name: {review.name}</Card.Footer>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ShowReview;
