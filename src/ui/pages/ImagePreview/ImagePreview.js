import React, { useState, useEffect } from "react";
import { axiosInstance } from "../../../network/axiosService";
import Endpoints from "../../../network/Endpoints";
import xss from "xss";

import { Img, Col, H2, Text } from "./style";

function ImagePreview(props) {
  const [state, setState] = useState({
    description: "",
    title: "",
    caption: "",
    spinner: true,
  });

  let imgId = props.imgId;

  if (isNaN(imgId)) {
    imgId = 1;
  }

  useEffect(() => {
    if (isNaN(props.imgId)) return;
    axiosInstance.get(Endpoints.posts, { id: props.imgId }).then((res) => {
      if (res) {
        if (res.length > 0) {
          setState({
            ...state,
            description: res[0].body,
            title: res[0].title.substring(0, 5),
            spinner: false,
            caption: res[0].title,
          });
        }
      }
    });
  }, []);

  return (
    <div className="row">
      <div className="col"></div>
      <div className="col">
        <div className="title">
          <H2>{xss(state.title)}</H2>
        </div>
      </div>

      <div className="row d-flex align-items-center">
        <Col className="col-sm-4">
          <figure className="figure">
            <Img
              src={"/img/img-" + imgId + ".jpg"}
              className="figure-img img-fluid rounded"
              alt="..."
            />
            <figcaption className="figure-caption">
              {xss(state.caption)}
            </figcaption>
          </figure>
        </Col>
        <div className="col-sm-6 ">
          <Text className=" description ">
            <h5>{xss(state.description)}</h5>
            {state.spinner && (
              <>
                <div
                  className="spinner-border"
                  style={{ width: "3rem", height: "3rem" }}
                  role="status"
                ></div>
              </>
            )}
          </Text>
        </div>
      </div>
    </div>
  );
}

export default ImagePreview;
