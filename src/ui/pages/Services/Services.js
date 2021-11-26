import React from "react";
import { Link } from "react-router-dom";
import { Background, Img, Row, Col, H2 } from "./style";
import img1 from "./imgs/img-1.jpg";
import img2 from "./imgs/img-2.jpg";
import img3 from "./imgs/img-3.jpg";
import img4 from "./imgs/img-4.jpg";
import img5 from "./imgs/img-5.jpg";
import img6 from "./imgs/img-6.jpg";
import { IMG_PREVIEW } from "../../../routing/routes";

function Services() {
  return (
    <Background>
      <div className="container">
        <Row className="row justify-content-md-center">
          <div className="col-lg-2">
            <H2>Our Products</H2>
          </div>
        </Row>
      </div>

      <div className="row ">
        <Col className="col">
          <figure className="figure">
            <Link to={IMG_PREVIEW + "1"}>
              <Img
                src={img1}
                className="figure-img img-fluid rounded"
                alt="..."
              />
            </Link>
            <figcaption className="figure-caption">
              A caption for the above image.
            </figcaption>
          </figure>
        </Col>
        <Col className="col">
          <figure className="figure">
            <Link to={IMG_PREVIEW + "2"}>
              <Img
                src={img2}
                className="figure-img img-fluid rounded"
                alt="..."
              />
            </Link>
            <figcaption className="figure-caption">
              A caption for the above image.
            </figcaption>
          </figure>
        </Col>
        <Col className="col">
          <figure className="figure">
            <Link to={IMG_PREVIEW + "3"}>
              <Img
                src={img3}
                className="figure-img img-fluid rounded"
                alt="..."
              />
            </Link>
            <figcaption className="figure-caption">
              A caption for the above image.
            </figcaption>
          </figure>
        </Col>
      </div>
      <div className="row">
        <Col className="col">
          <figure className="figure">
            <Link to={IMG_PREVIEW + "5"}>
              <Img
                src={img5}
                className="figure-img img-fluid rounded"
                alt="..."
              />
            </Link>
            <figcaption className="figure-caption">
              A caption for the above image.
            </figcaption>
          </figure>
        </Col>
        <Col className="col">
          <figure className="figure">
            <Link to={IMG_PREVIEW + "4"}>
              <Img
                src={img4}
                className="figure-img img-fluid rounded"
                alt="..."
              />
            </Link>
            <figcaption className="figure-caption">
              A caption for the above image.
            </figcaption>
          </figure>
        </Col>
        <Col className="col">
          <figure className="figure">
            <Link to={IMG_PREVIEW + "6"}>
              <Img
                src={img6}
                className="figure-img img-fluid rounded"
                alt="..."
              />
            </Link>
            <figcaption className="figure-caption">
              A caption for the above image.
            </figcaption>
          </figure>
        </Col>
      </div>
    </Background>
  );
}

export default Services;
