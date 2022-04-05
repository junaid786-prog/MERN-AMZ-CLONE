import ReactStar from "react-rating-stars-component";
import React from "react";
import "../Css/componentscss/Details.css";
function ReviewCard({ review }) {
  const options = {
    edit: false,
    activeColor: "tomato",
    size: 25,
    isHalf: true,
    value: review.rating,
  };
  return (
    <div className="review">
      <div className="reviewer_image">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJmbAXlT87riajdUxEI6XhTJjbHajwGwUhIg&usqp=CAU" />
      </div>

      <p>{review.reviewerName}</p>
      <div className="rating">
        <ReactStar {...options} />
      </div>
      <span>{review.comment}</span>
    </div>
  );
}

export default ReviewCard;
