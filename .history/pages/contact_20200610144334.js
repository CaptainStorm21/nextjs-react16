import React, { Component } from "react";
import mainLayout from '../components/layouts'

export default class Contact extends Component {
  render() {
    return (
      <>
        <>
          <h1>Contact</h1>
          <div style={{ color: "red" }}>Hello guys</div>
          <div className="jsxStyled">Styles with styled-jsx</div>
          <style jsx>
            {`
              .jsxStyled {
                color: blue;
              }
            `}
          </style>
          <div className="contact_static">Styles with static css</div>
          <div>
            <img src="/static/images/knicks.jpeg" />
          </div>
        <>
      </>
    );
  }
}

/*
<div style = {{ color: 'red'}}>
  Hello react
</div>

<div className="jsxStyle">
  styles with
</div>

<style jsx>
{
  `
  .jsxStyled {
  color: blue
  }
 `
}
</style>




*/
