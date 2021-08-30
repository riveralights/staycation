import React from "react";
import Button from "elements/Button";

export default function MostPicked(props) {
  return (
    <section className="container most-picked" ref={props.refMostPicked}>
      <h4 className="most-picked-title">Most Picked</h4>
      <div className="container-grid">
        {props.data.map((item, index) => {
          return (
            <div
              key={index}
              className={`item column-4 ${index === 0 ? "row-2" : "row-1"}`}
            >
              <div className="card card-featured">
                <div className="tag font-weight-bold">
                  ${item.price} <span>/ {item.unit}</span>
                </div>
                <figure className="img-wrapper">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="img-cover"
                  />
                </figure>
                <div className="meta-wrapper">
                  <Button
                    className="streched-link d-block text-white"
                    type="link"
                    href={`/properties/${item._id}`}
                  >
                    <h5>{item.name}</h5>
                  </Button>
                  <span>
                    {item.city}, {item.province}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
