import React, { Component } from "react";

import Header from "parts/Header";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";

import LandingPageJSON from "json/landingPage.json";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }
  render() {
    return (
      <>
        {/* Ambil semua props yang ada pada Header */}
        <Header {...this.props} />
        <Hero refMostPicked={this.refMostPicked} data={LandingPageJSON.hero} />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={LandingPageJSON.mostPicked}
        />
      </>
    );
  }
}
