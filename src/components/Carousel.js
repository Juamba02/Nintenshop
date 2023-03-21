import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Carousel = () => {
  return (
    <div
    style={styles.box}
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Link to={"/item/4ENGz9SohOxujwCyikFy"}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/nintenshop-84700.appspot.com/o/Pikmin4.jpg?alt=media&token=a0545dfc-5a52-4961-a70d-bb1e11df4cf1"
              className="d-block w-100"
              alt="..."
            />
          </Link>
        </div>
        <div className="carousel-item">
          <Link to={"/item/Nmh5vAeLHJv5HjajJAYR"}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/nintenshop-84700.appspot.com/o/MarioKart8.jpg?alt=media&token=b4730043-399c-45e9-ac77-3a0a55d05a4b"
              className="d-block w-100"
              alt="..."
            />
          </Link>
        </div>
        <div className="carousel-item">
          <Link to={"/item/pA8tf3LmD9yufQ4xsMeQ"}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/nintenshop-84700.appspot.com/o/PKMNV.jpg?alt=media&token=8edba4a0-46fa-4bec-b34a-a4eb16c95193"
              className="d-block w-100"
              alt="..."
            />
          </Link>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

const styles = {
  box: {
    width: '100%'
  },
};

export default Carousel;
