import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { featuredCars } from "../../data";

import { FaArrowRight } from "react-icons/fa";
import { SlPeople } from "react-icons/sl";
import { IoMdSpeedometer } from "react-icons/io";
import { IoFlashOutline, IoHardwareChipOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

export default function Search() {
  const [cars, setCars] = useState(featuredCars);
  const navigate = useNavigate();
  const [search, setSearch] = useSearchParams();
  let carmodel = search.get("carmodel");
  let monthlypay = search.get("monthlypay");
  let year = search.get("year");
  useEffect(() => {
    if (carmodel.length === 0 || monthlypay.length === 0 || year.length === 0) {
      navigate("/");
    }
  }, []);

  const filteredCars = cars.filter((car) => {
    return (
      car.name.toLowerCase().includes(carmodel.toLowerCase()) &&
      car.price.toString() >= monthlypay &&
      car.year.toString() >= year
    );
  });

  return (
    <section className="section featured-car" id="featured-car">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="h2 section-title">Featured cars</h2>
          <a href="#" className="featured-car-link">
            <span>View more</span>
            <FaArrowRight color="hsl(204, 91%, 53%)" size={"22"} />
          </a>
        </div>
        {filteredCars.length > 0 ? (
          <ul className="featured-car-list">
            {filteredCars.map((car) => (
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
          "Not found"
        )}
      </div>
    </section>
  );
}
