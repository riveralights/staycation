import React, { Component } from "react";
import Header from "parts/Header";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        {/* Ambil semua props yang ada pada Header */}
        <Header {...this.props} />
      </>
    );
  }
}
