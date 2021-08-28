import React, { Component } from "react";
import Header from "parts/Header";
import Hero from "parts/Hero";
import LandingPageJSON from "json/landingPage.json";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        {/* Ambil semua props yang ada pada Header */}
        <Header {...this.props} />
        <Hero data={LandingPageJSON.hero} />
      </>
    );
  }
}
