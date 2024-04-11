import React, { useState } from "react";
import Navbar from "./components/Navbar";
import res1 from "./assets/Restaurant1.jpg";
import res2 from "./assets/Restaurant2.jpg";
import res3 from "./assets/Restaurant3.jpg";
import res4 from "./assets/Restaurant4.jpg";
import res5 from "./assets/Restaurant5.jpg";
import res6 from "./assets/Restaurant6.jpg";
import p1 from "./assets/details1.jpg";
import p2 from "./assets/details2.jpg";
import p3 from "./assets/details3.jpg";
import p4 from "./assets/details4.jpg";
import p5 from "./assets/details5.jpg";
import p6 from "./assets/details6.jpg";
import p7 from "./assets/details7.jpg";
import review1 from "./assets/Review1.jpg";
import review2 from "./assets/Review2.jpeg";
import review3 from "./assets/Review3.webp";
import review4 from "./assets/Review4.jpeg";
import review5 from "./assets/Review5.jpeg";
import review6 from "./assets/Review6.jpeg";
import "./Restaurant.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { BsStarFill, BsStar } from "react-icons/bs";

const photos = [p1, p2, p3, p4, p5, p6, p7];

const restaurants = [
  {
    id: 1,
    name: "Miyabi - Sheraton Petaling Jaya",
    image: res1,
    description:
      "A dining venue where an a la carte selection of customary Japanese specialties takes center stage.",
    location: "Petaling Jaya",
    address:
      "2, Jalan Stesen Sentral, Kuala Lumpur Sentral, 50470 Kuala Lumpur",
    phone: "03-22637434",
    openinghours: "Mon-Sat 12–2:30 pm, 6:30–10:30 pm",
    cuisine: "steakhouse",
    resPhotos: photos,
    review: "3.5",
  },
  {
    id: 2,
    name: "Sala Bar - Sheraton Petaling Jaya",
    image: res2,
    description:
      "Conceived as a laidback haven for cigar and whisky connoisseurs to convene.",
    location: "Puchong",
    address:
      "2, Jalan Stesen Sentral, Kuala Lumpur Sentral, 50470 Kuala Lumpur",
    phone: "03-22637434",
    openinghours: "Mon-Sat 12–2:30 pm, 6:30–10:30 pm",
    cuisine: "wine",
    resPhotos: photos,
    review: "4.5",
  },
  {
    id: 3,
    name: "Colonial Cafe",
    image: res3,
    description:
      "The Colonial Cafe recreates the atmosphere of the halcyon days of the planters of Malaya.",
    location: "Kajang",
    address: "Colonial Cafe, The Majestic Hotel, 5, Jalan Sultan Hishamuddin",
    phone: "03-22637434",
    openinghours: "Mon-Sat 12–2:30 pm, 6:30–10:30 pm",
    cuisine: "local Malaysia",
    resPhotos: photos,
    review: "3.8",
  },
  {
    id: 4,
    name: "PRIME - Le Méridien Kuala Lumpur",
    image: res4,
    description:
      "Delight your palate with Australian cuts of beef, including tenderloin, sirloin, rib-eye and prime rib.",
    location: "Kuala Lumpur",
    address:
      "2, Jalan Stesen Sentral, Kuala Lumpur Sentral, 50470 Kuala Lumpur",
    phone: "03-22637434",
    openinghours: "Mon-Sat 12–3 pm, 6–10 pm",
    cuisine: "steakhouse",
    resPhotos: photos,
    review: "4.8",
  },
  {
    id: 5,
    name: "Yun House at Four Seasons Hotel",
    image: res5,
    description:
      "A Cantonese with an edge, Yun House stretches the boundaries with elevated Chinese favourites.",
    location: "Petaling Jaya",
    address: "Yue, Lorong Utara C, Pjs 52, 46200 Petaling Jaya, Selangor",
    phone: "03-22637434",
    openinghours: "Mon-Sat 12–3 pm, 6–10 pm",
    cuisine: "chinese",
    resPhotos: photos,
    review: "3.5",
  },
  {
    id: 6,
    name: "Cinnamon Coffee House",
    image: res6,
    description:
      "Start your day with a perfect morning pick-me-up at our award-winning Cinnamon Coffee House!",
    location: "Petaling Jaya",
    address:
      "2, Jalan Stesen Sentral, Kuala Lumpur Sentral, 50470 Kuala Lumpur",
    phone: "03-22637434",
    openinghours: "Mon-Sat 12–2:30 pm, 6:30–10:30 pm",
    cuisine: "dessert",
    resPhotos: photos,
    review: "3.5",
  },
];
const reviews = [
  {
    userName: "Wendy",
    rating: "5",
    timePosted: "today",
    reviewDescription:
      "This is a wonderful place to relax with excellent food and service. Always have a memorable experience when I come to Gastro.",
    photoUrl: review1,
  },
  {
    userName: "Karen",
    rating: "4",
    timePosted: "today",
    reviewDescription:
      "Had a delightful evening at Gastro! The ambiance was soothing, and the food was top-notch. The staff was attentive and friendly. Definitely worth a visit.",
    photoUrl: review2,
  },
  {
    userName: "David",
    rating: "5",
    timePosted: "today",
    reviewDescription:
      "Gastro never disappoints! The cuisine is consistently delicious, and the service is impeccable. I highly recommend trying their specials—they're always a hit!",
    photoUrl: review3,
  },
  {
    userName: "Emily",
    rating: "5",
    timePosted: "today",
    reviewDescription:
      "I can't say enough good things about Gastro. From the moment you walk in, you're greeted with warmth. The food is exceptional, and the ambiance is perfect for a relaxed evening. Can't wait to return!",
    photoUrl: review4,
  },
  {
    userName: "Mark",
    rating: "4",
    timePosted: "today",
    reviewDescription:
      "Another fantastic meal at Gastro! The attention to detail in every dish is evident, and the flavors are exquisite. Whether you're a regular or it's your first time, you'll leave with a smile.",
    photoUrl: review5,
  },
  {
    userName: "Sarah",
    rating: "5",
    timePosted: "today",
    reviewDescription:
      "Gastro is a gem! The atmosphere is cozy, the food is divine, and the service is top-notch. It's the perfect spot for a romantic dinner or a gathering with friends. Always a pleasure to dine here.",
    photoUrl: review6,
  },
];

const renderRatingStars = (rating) => {
  const filledStars = Math.floor(rating);
  const halfStar = rating - filledStars >= 0.5 ? 1 : 0;
  const emptyStars = 5 - filledStars - halfStar;

  return (
    <div className="star-container">
      {[...Array(filledStars)].map((_, index) => (
        <BsStarFill key={index} className="star-icon filled-star" />
      ))}
      {halfStar === 1 && <BsStarFill className="star-icon filled-star" />}
      {[...Array(emptyStars)].map((_, index) => (
        <BsStar key={index} className="star-icon empty-star" />
      ))}
    </div>
  );
};

const Restaurant = () => {
  const { id } = useParams();
  const [isSaved, setIsSaved] = useState(false); // Initialize isSaved state
  const [hasLiked, setHasLiked] = useState(
    new Array(reviews.length).fill(false)
  );
  const [likes, setLikes] = useState(new Array(reviews.length).fill(0));

  const handleSaveToggle = () => {
    setIsSaved((prevState) => !prevState);
  };

  const handleLike = (index) => {
    setLikes((prevLikes) => {
      const newLikes = [...prevLikes];
      if (newLikes[index] === 0) {
        newLikes[index] = 1;
        setHasLiked((prevHasLiked) => {
          const newHasLiked = [...prevHasLiked];
          newHasLiked[index] = true; // Set liked status to true
          return newHasLiked;
        });
      } else {
        newLikes[index] = 0;
        setHasLiked((prevHasLiked) => {
          const newHasLiked = [...prevHasLiked];
          newHasLiked[index] = false; // Set liked status to false
          return newHasLiked;
        });
      }
      return newLikes;
    });
  };

  const restaurant = restaurants.find(
    (restaurant) => restaurant.id === parseInt(id)
  );
  return (
    <div>
      <Navbar />
      <div className="container">
        <br />
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/home">
            <small>Back</small>
          </Link>
          <div className="ml-auto">
            <small className="text-muted" onClick={handleSaveToggle}>
              <i
                className={`bi ${
                  isSaved ? "bi-heart-fill" : "bi-heart"
                } custom-icon`}
              ></i>
              {isSaved ? "Unsave this restaurant" : "Save this restaurant"}
            </small>
          </div>
        </div>
        <br />
        <img
          src={restaurant.image}
          alt=""
          style={{ width: "100%", height: "500px" }}
        />
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="custom-h1">{restaurant.name}</h1>
          <div className="ml-auto">
            <small className="text-muted">
              <i className="bi bi-calendar-heart custom-icon"></i>Make
              reservations
            </small>
          </div>
        </div>

        <br />
        <p className="card-text">{restaurant.description}</p>
        <p className="card-text">
          <i className="bi-geo-alt-fill custom-icon"></i>
          {restaurant.phone}
        </p>
        <p className="card-text">
          <i className="bi bi-telephone-fill custom-icon"></i>
          {restaurant.address}
        </p>
        <p className="card-text">
          <i className="bi bi-clock-fill custom-icon"></i>
          {restaurant.openinghours}
        </p>
        <p className="card-text">
          <i class="bi bi-egg-fried custom-icon"></i>
          {restaurant.cuisine}
        </p>
        <br />
        <h5 className="card-text">Photos</h5>
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {restaurant.resPhotos.map((photo, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <img
                  src={photo}
                  className="d-block w-100"
                  alt={`Slide ${index + 1}`}
                  style={{ height: "500px", objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <br />
        <div className="d-flex justify-content-start">
          <h5 className="card-text">Reviews</h5>
          <div className="ml-auto">
            <Link to="/AddReview">
              <button type="button" className="btn-default">
                <i className="bi-plus"></i>Add a review
              </button>
            </Link>
          </div>
        </div>
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <p>
              <strong>{review.userName}</strong>
            </p>
            <div className="d-flex justify-content-start">
              <div>{renderRatingStars(review.rating)}</div>
              <p id="timePost">{review.timePosted}</p>
            </div>

            <p>{review.reviewDescription}</p>
            {review.photoUrl && (
              <img
                src={review.photoUrl}
                alt="Review"
                className="review-photo"
              />
            )}

            <div className="photo-buttons">
              <button
                className="btn-like"
                onClick={() => handleLike(index)}
                style={{ color: hasLiked[index] ? "blue" : "black" }}
              >
                <i
                  className={
                    hasLiked[index]
                      ? "bi bi-hand-thumbs-up-fill"
                      : "bi bi-hand-thumbs-up"
                  }
                ></i>
                Helpful ({likes[index]})
              </button>
              <button className="btn-share">
                <i className="bi bi-share"></i> Share
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurant;