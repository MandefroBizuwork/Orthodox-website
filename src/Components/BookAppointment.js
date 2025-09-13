import React from "react";
import Doctor from "../Assets/doctor-book-appointment.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFacebook, faTelegram, faYoutube,faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/BookAppointment.css";

function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  return (
    <div className="ba-section shadow my-2">
      <div className="ba-image-content">
  <div style={{ width: "100%", height: "400px" }}>
    <iframe
      title="google-map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.2847575749847!2d38.75881937572444!3d9.037768088850145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8f4658bd2561%3A0x435e620b7cd166e5!2zTWFoaWJlcmUgS2lkdXNhbiBCdWlsZGluZyB8IDUgS2lsbyB8IOGIm-GIheGJoOGIrSDhiYXhi7HhiLPhipUg4YiF4YqV4Yy7IHwgNSDhiqrhiI4!5e0!3m2!1sam!2set!4v1757748310826!5m2!1sam!2set"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>


      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>ያግኙን</span>
        </h3>
        <p className="ba-description">
          በሚከተሉት የሶሻል ሚዲያዎች ያገኙናል
        </p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> <a href="https://web.facebook.com/profile.php?id=100082860816745" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} color="#1877F2" />
      </a>Facebook
        </p>
       <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTelegram} color="#1877F2" />
      </a>Telegram
        </p>
         <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} color="#1877F2" />
      </a>Youtube
        </p>
         <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} color="#1877F2" />
      </a>Instagram
        </p>

        <button
          className="text-appointment-btn"
          type="button"
          onClick={handleBookAppointmentClick}
        >
          <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
        </button>
      </div>
    </div>
  );
}

export default BookAppointment;
