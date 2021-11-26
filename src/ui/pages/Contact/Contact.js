import React, { useState } from "react";
import { Button, Col, H2, Input, Label, Textarea } from "./style";
import xss from "xss";

function Contact() {
  const [state, setState] = useState({
    alertMsg: "",
  });

  const sendMsg = (e) => {
    e.preventDefault();
    setState({
      ...state,
      alertMsg: "Message sent successfully.",
    });
    return false;
  };

  return (
    <>
      <div className="row mb-5">
        <H2 className="d-flex justify-content-center my-3">Contact Us</H2>
      </div>
      <div className="container ">
        <div className="row">
          <Col className="col-lg-4 m-auto p-3 ">
            {state.alertMsg && state.alertMsg.length > 0 && (
              <div class="alert alert-success my-3" role="alert">
                {xss(state.alertMsg)}
              </div>
            )}
            <form
              className="justify-content-center"
              onSubmit={(e) => {
                sendMsg(e);
              }}
            >
              <div className="mb-3 d-flex flex-column ">
                <Label for="exampleFormControlInput1" className="form-label ">
                  Your Email address
                </Label>
                <Input
                  required={true}
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3 d-flex flex-column ">
                <Label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </Label>
                <Textarea
                  required={true}
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></Textarea>
              </div>

              <Button type="submit" className="btn btn-warning my-3">
                Send
              </Button>
            </form>
          </Col>
        </div>
      </div>
    </>
  );
}

export default Contact;
