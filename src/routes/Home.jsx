import React from "react";
import banner from "../assets/images/hero-banner.jpg";
import { Form } from "react-router-dom";
export default function Home() {
  return (
    <section className="section hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h2 className="h1 hero-title">The easy way to takeover a lease</h2>
          <p className="hero-text">
            Live in New York, New Jerset and Connecticut!
          </p>
        </div>
        <div className="hero-banner" style={{ background: `url(${banner})` }} />
        <Form action="/search" className="hero-form">
          <div className="input-wrapper">
            <label htmlFor="input-1" className="input-label">
              Car, model, or brand
            </label>
            <input
              type="text"
              name="carmodel"
              id="input-1"
              className="input-field"
              placeholder="What car are you looking?"
              required
              list="carSuggestions"
            />
            <datalist id="carSuggestions">
              <option value="Toyota Corolla" />
              <option value="Honda Civic" />
              <option value="Ford Mustang" />
              <option value="BMW 3 Series" />
              <option value="Tesla Model 3" />
            </datalist>
          </div>
          <div className="input-wrapper">
            <label htmlFor="input-2" className="input-label">
              Max. monthly payment
            </label>
            <input
              type="text"
              name="monthlypay"
              id="input-2"
              className="input-field"
              placeholder="Add an amount in $"
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="input-3" className="input-label">
              Make Year
            </label>
            <input
              type="text"
              name="year"
              id="input-3"
              className="input-field"
              placeholder="Add a minimal make year"
              required
            />
          </div>
          <button type="submit" className="btn">
            Search
          </button>
        </Form>
      </div>
    </section>
  );
}
