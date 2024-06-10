import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import "./Reserve.css";
import Form from "./components/Form";
import { Link, useParams, useNavigate } from "react-router-dom";
//import workshopdatas from "./WorkshopData";
import DetailCard from "./components/DetailCard";
import axios from "axios";

const Registration = () => {
  const [workshop, setWorkshop] = useState(null);
  const {_id } = useParams();
  const navigate = useNavigate();

  // const workshop = workshopdatas.find(
  //   (workshop) => workshop.id === parseInt(id)
  // );

  // Go to the top of page when navigate to this page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/workshop/${_id}`)
      .then(({ data }) => {
        console.log("Received workshop data:", data.workshop);
        setWorkshop(data.workshop);
      })
      .catch((error) => {
        console.error("Error fetching workshop:", error);
      });
  }, [_id]);

  return (
    <div>
      <Navbar />
      {/* <div id="Rmain-container"> */}
      <div className="container">
        <br />
        <div className="d-flex justify-content-between align-items-center">
          <div
          className="back-btn"
          style={{ cursor: "pointer" }}
          onClick={() => navigate(-1)}
        >
          <i className="bi bi-arrow-left-circle"></i> Back
        </div>
          <div className="ml-auto">
            <Link to="/schedule" className="back-btn">
              <i className="bi bi-calendar-heart custom-icon"></i>View My
              Registration
            </Link>
          </div>
        </div>
        <div id="Rdown">
          <div id="Fleft">
          {workshop &&(<DetailCard workshop={workshop} />)}
            <div id="disclaimer">
              <h3>Registration Policy</h3>
              <p>
                1. Registration Procedure: Our workshop accepts registration
                through our online registration form, available on our official
                website. Registration can also be made via phone during
                operating hours.
                <br />
                2. Registration Changes and Cancellations: Customers may modify
                or cancel their registration by contacting the organizer
                directly via phone or email (cancellation can be done via thi
                website) . Any changes or cancellations must be made at least 24
                hours before the registration time to avoid penalties.
                <br />
                3. Cancellation Policy: A cancellation policy is in place to
                manage registration changes effectively. Customers will be
                subject to a cancellation fee if they fail to cancel within the
                specified time
                <br />
              </p>
            </div>
          </div>
          <div id="Rform-container">
            <h2 id="form-header">Registration Form</h2>
            {workshop&&(<Form date={workshop.date} time={workshop.time} available={workshop.availableSlot}/>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
