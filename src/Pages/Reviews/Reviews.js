import React, { useEffect, useState } from "react";
import AllReview from "./AllReview";

const Reviews = () => {
  const [userReviews, setUserReview] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setUserReview(data));
  }, []);
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>ServiceName</th>
              <th>All Reviews</th>
            </tr>
          </thead>
          <tbody>
            {userReviews.map((usrReview) => (
              <AllReview key={usrReview._id} usrReview={usrReview}></AllReview>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reviews;
