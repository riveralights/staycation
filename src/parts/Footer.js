import React from "react";
import IconText from "parts/IconText";
import Button from "elements/Button";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-auto">
            <IconText />
            <p className="footer-tagline">
              Yours truly website that served best place to stay for your
              partners and family.
            </p>
          </div>
          <div className="col-auto">
            <h5 class="footer-list-title">Start Your Journey</h5>
            <ul class="list-unstyled">
              <li>
                <Button type="link" href="/register" className="footer-link">
                  New Account
                </Button>
              </li>
              <li>
                <Button type="link" href="/properties" className="footer-link">
                  Book a Room
                </Button>
              </li>
              <li>
                <Button type="link" href="/register" className="footer-link">
                  Payments
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-auto">
            <h5 class="footer-list-title">Explore Us</h5>
            <ul class="list-unstyled">
              <li>
                <Button type="link" href="/about" className="footer-link">
                  About
                </Button>
              </li>
              <li>
                <Button type="link" href="/privacy" className="footer-link">
                  Privacy Policy
                </Button>
              </li>
              <li>
                <Button type="link" href="/register" className="footer-link">
                  Terms and Agreements
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-auto">
            <h5 class="footer-list-title">Getting Touch with Us</h5>
            <ul class="list-unstyled">
              <li>
                <Button
                  type="link"
                  href="/register"
                  isExternal
                  className="footer-link"
                >
                  support@staycation.com
                </Button>
              </li>
              <li>
                <Button type="link" href="/register" className="footer-link">
                  +62813843295344
                </Button>
              </li>
              <li>
                <Button type="link" href="/register" className="footer-link">
                  Staycation.co, Tangerang
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <p className="footer-copyright">
              Copyright 2021 • Staycation.co • All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
