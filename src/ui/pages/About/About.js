import React from "react";
import img from "./img/team.jpg";
import { Col, H2, H3, H5, Img } from "./style";

function About() {
  return (
    <div className="container justify-content-md-center">
      <div>
        <H2 className="row justify-content-md-center">About Us</H2>
      </div>
      <div className="row">
        <Col className="col">
          <div className="heading">
            <H3 className="mt-5">We make you smile more!</H3>
            <H5>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </H5>
          </div>
        </Col>
        <Col className="col ">
          <Img src={img} alt="" />
        </Col>
      </div>
    </div>
  );
}

export default About;
