import React from "react";

import img from "./img/homePic.jpg";
import { Button, H2, Image } from "./style";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const routeChange = () => {
    let path = "/services";
    navigate(path);
  };
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-8">
          <H2>
            “Clothes transform your body language and attitude. They lift you
            physically and emotionally.”
          </H2>
          <div
            className="d-grid gap-2 d-md-flex justify-content-center
          "
          >
            <Button
              onClick={() => routeChange()}
              type="button"
              className="btn btn-warning"
            >
              Transform Yorself
            </Button>
          </div>
        </div>
        <div className="col-4">
          <div className="image__container">
            <Image src={img} className="img-fluid" alt="..."></Image>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
