import React from "react";

import Banner from "assets/images/banner.jpg";
import IconCamera from "assets/images/icons/icon camera.svg";
import IconCities from "assets/images/icons/icon cities.svg";
import IconTraveler from "assets/images/icons/icon traveler.svg";

import Button from "elements/Button";

import numberFormat from "utils/FormatNumber";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <section className="container hero">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1 className="tagline">
            Make yourself relax, escape from your hectic
          </h1>
          <p className="hero-description text-gray-500 my-4">
            We provide a special place for you to vacation and stay for a while
            with your fam and partners. It’s a time for made a moment for the
            rest of your life.
          </p>
          <Button
            className="btn btn-cta"
            hasShadow
            isPrimary
            onClick={showMostPicked}
          >
            CHECK AVAILABILITY
          </Button>
          <div className="row mt-5">
            <div className="col-auto icon-hero">
              <img src={IconTraveler} alt={`${props.data.location} Location`} />
              <h6 className="icon-hero-description mt-3 font-weight-bold">
                {numberFormat(props.data.location)}{" "}
                <span className="banner-label text-gray-500">Locations</span>
              </h6>
            </div>
            <div className="col-auto icon-hero">
              <img src={IconCamera} alt={`${props.data.photo} Location`} />
              <h6 className="icon-hero-description mt-3 font-weight-bold">
                {numberFormat(props.data.photo)}{" "}
                <span className="banner-label text-gray-500">Photo Spot</span>
              </h6>
            </div>
            <div className="col-auto icon-hero">
              <img src={IconCities} alt={`${props.data.cities} Cities`} />
              <h6 className="icon-hero-description mt-3 font-weight-bold">
                {numberFormat(props.data.cities)}{" "}
                <span className="banner-label text-gray-500">Locations</span>
              </h6>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img
            src={Banner}
            alt=""
            className="img-fluid d-none d-md-block d-lg-block"
          />
        </div>
      </div>
    </section>
  );
}
