import React from "react";
import Star from "elements/Star";
import Button from "elements/Button";
import Fade from "react-reveal/Fade";

export default function Testimonial({ data }) {
  return (
    <Fade bottom>
      <section className="container testimonials">
        <div className="row align-items-center">
          <div className="col-auto" style={{ marginRight: 42 }}>
            <img
              src={data.imageUrl}
              alt="testimonial"
              className="img-fluid"
              style={{ width: 400 }}
            />
          </div>
          <div className="col-auto testimonial-main-content">
            <h3 className="family-testimonial">{data.name}</h3>
            <Star value={data.rate} width={28} height={28} spacing={1}></Star>
            <p className="testimonial-content">{data.content}</p>
            <div className="testimonal-customer">
              {data.familyName}, {data.familyOccupation}
            </div>
            <Button
              isPrimary
              hasShadow
              type="link"
              href={`/testimonial/${data._id}`}
              className="btn btn-testi"
            >
              Read Their Story
            </Button>
          </div>
        </div>
      </section>
    </Fade>
  );
}
