import React, { Component } from "react";
// import Header from "../components/includes/Header";
import MainLayout from '../components/layouts/MainLayout';

export default class Home extends Component {
  render() {
    return (
        <>
            <MainLayout/>
        {/* <Header /> */}
        <h1>Welcome to NextJS</h1>
      </>
    );
  }
}
