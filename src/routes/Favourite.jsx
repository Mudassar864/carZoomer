import React, { useEffect, useState } from "react";
import car1 from "../assets/images/car-1.jpg";
import car2 from "../assets/images/car-2.jpg";
import car3 from "../assets/images/car-3.jpg";
import car4 from "../assets/images/car-4.jpg";
import car5 from "../assets/images/car-5.jpg";
import car6 from "../assets/images/car-6.jpg";

import { FaArrowRight } from "react-icons/fa";
import { SlPeople } from "react-icons/sl";
import { IoMdSpeedometer } from "react-icons/io";
import { IoFlashOutline, IoHardwareChipOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

export default function Favourite() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favoriteCars"));
    if (storedFavorites.length > 0) {
      setCars(storedFavorites);
    }
  }, []);

  const toggleFavorite = (currentCar) => {
    const updatedCars = cars.map((car) =>
      car.id === currentCar.id ? { ...car, isFav: !car.isFav } : car
    );
    const updatedFavoriteCars = updatedCars.filter((car) => car.isFav);
    localStorage.setItem("favoriteCars", JSON.stringify(updatedFavoriteCars));
    setCars(updatedCars);
  };
  return (
    <section className="section featured-car" id="featured-car">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="h2 section-title">Favourite cars</h2>
        </div>
        {cars.length > 0 ? (
          <ul className="featured-car-list">
            {cars
              .filter((car) => car.isFav)
              .map((car) => (
                <li key={car.id}>
                  <div className="featured-car-card">
                    <figure className="card-banner">
                      <img
                        src={car.image}
                        alt={car.name}
                        loading="lazy"
                        width={440}
                        height={300}
                        className="w-100"
                      />
                    </figure>
                    <div className="card-content">
                      <div className="card-title-wrapper">
                        <h3 className="h3 card-title">
                          <a href="#">{car.name}</a>
                        </h3>
                        <data className="year" value={car.year}>
                          {car.year}
                        </data>
                      </div>
                      <ul className="card-list">
                        <li className="card-list-item">
                          <SlPeople color="hsl(204, 91%, 53%)" size={"22"} />
                          <span className="card-item-text">
                            {car.people} People
                          </span>
                        </li>
                        <li className="card-list-item">
                          <IoFlashOutline
                            color="hsl(204, 91%, 53%)"
                            size={"22"}
                          />
                          <span className="card-item-text">{car.fuelType}</span>
                        </li>
                        <li className="card-list-item">
                          <IoMdSpeedometer
                            color="hsl(204, 91%, 53%)"
                            size={"22"}
                          />
                          <span className="card-item-text">{car.mileage}</span>
                        </li>
                        <li className="card-list-item">
                          <IoHardwareChipOutline
                            color="hsl(204, 91%, 53%)"
                            size={"22"}
                          />
                          <span className="card-item-text">
                            {car.transmission}
                          </span>
                        </li>
                      </ul>
                      <div className="card-price-wrapper">
                        <p className="card-price">
                          <strong>${car.price}</strong> / month
                        </p>
                        <button
                          className="btn fav-btn"
                          aria-label="Add to favourite list"
                          onClick={() => toggleFavorite(car)}
                        >
                          {car.isFav ? (
                            <FaHeart size={"24"} color="hsl(204, 91%, 53%)" />
                          ) : (
                            <CiHeart size={"24"} color="hsl(204, 91%, 53%)" />
                          )}
                        </button>
                        <button className="btn">Rent now</button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        ) : (
          <p>No fav car found</p>
        )}
      </div>
    </section>
  );
}
