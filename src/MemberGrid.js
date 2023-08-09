import React, { useState } from "react";
import "./MemberGrid.css";

import { Button, Modal, ModalHeader, ModalBody, Col, Row } from "reactstrap";

function Example(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Click Me
      </Button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Members</ModalHeader>
        <ModalBody className="shadow w-100">
          <Row className="d-flex grid gap-3 text-center mb-3">
            <Col className="RowOne-ColOne  rounded-3 text-white">
              <div>
                <p className="mb-0">05</p>
                <p className="mt-0">Invited</p>
              </div>
            </Col>
            <Col className="rounded-3 bg-light">
              <p className="mb-0">05</p>
              <p>Going</p>
            </Col>
          </Row>
          <Row className="d-flex grid grid gap-3 text-center mb-4">
            <Col className="  rounded-3 bg-light">
              <div>
                <p className="mb-0">05</p>
                <p>Interested</p>
              </div>
            </Col>
            <Col className="rounded-3 bg-light">
              <p className="mb-0">05</p>
              <p>Not Interested</p>
            </Col>
          </Row>

          <Row className=" d-flex justify-content-between">
            <Col className=" ">
              <div className="d-flex grid gap-3  align-items-center ">
               
                <div className="align-items-center text-center">
                  <h6 className="mb-0">EmmanThoma</h6>
                  <p>EmmanThoma</p>
                </div>
              </div>
              <p className="d-flex justify-content-end">
                <span className="fw-medium">9.8M</span> Followers
              </p>
            </Col>
            <Col className="d-flex align-items-end">
              <p>18M Posts</p>
            </Col>
            <Col className="d-flex align-items-center justify-content-center">
              <button type="button">Invited</button>
            </Col>
          </Row>
          <hr className="mt-0 mb-0" />
          <Row className="d-flex justify-content-between">
            <Col>
              <div className="d-flex grid gap-3 align-items-center ">
                <div>
                 
                </div>
                <div>
                  <h6 className="mb-0">Jesindapeter</h6>
                  <p>EmmanThoma</p>
                </div>
              </div>
              <p className="d-flex justify-content-end">
                {" "}
                <span className="fw-medium">9.8M</span> Followers
              </p>
            </Col>
            <Col className="d-flex align-items-end">
              <p>18M Posts</p>
            </Col>
            <Col className="d-flex align-items-center justify-content-center">
              <button type="button">Invited</button>
            </Col>
          </Row>
          <hr className="mt-0 mb-0" />
          <Row className="d-flex justify-content-between">
            <Col>
              <div className="d-flex grid gap-3 align-items-center ">
                <div>
                
                </div>
                <div>
                  <h6 className="mb-0">LinaMercery</h6>
                  <p>EmmanThoma</p>
                </div>
              </div>
              <p className="d-flex justify-content-end ">
                {" "}
                <span className="fw-medium">9.8M</span> Followers
              </p>
            </Col>
            <Col className="d-flex align-items-end">
              <p>18M Posts</p>
            </Col>
            <Col className="d-flex align-items-center justify-content-center">
              <button type="button">Invited</button>
            </Col>
          </Row>
          <hr className="mt-0 mb-0" />
          <Row className="d-flex justify-content-between">
            <Col>
              <div className="d-flex grid gap-3 align-items-center ">
                <div>
                
                </div>
                <div>
                  <h6 className="mb-0">lassiQueen</h6>
                  <p>EmmanThoma</p>
                </div>
              </div>
              <p className="d-flex justify-content-end">
                <span className="fw-medium">9.8M</span> Followers
              </p>
            </Col>
            <Col className="d-flex align-items-end">
              <p>18M Posts</p>
            </Col>
            <Col className="d-flex align-items-center justify-content-center">
              <button type="button">Invited</button>
            </Col>
          </Row>
          <hr className="mt-0 mb-0" />
          <Row className="d-flex justify-content-between">
            <Col>
              <div className="d-flex grid gap-3 align-items-center ">
                <div>
                 
                </div>
                <div>
                  <h6 className="mb-0">Johnpeter</h6>
                  <p>EmmanThoma</p>
                </div>
              </div>
              <p className="d-flex justify-content-end">
                <span className="fw-medium">9.8M</span> Followers
              </p>
            </Col>
            <Col className="d-flex align-items-end">
              <p>18M Posts</p>
            </Col>
            <Col className="d-flex align-items-center justify-content-center">
              <button type="button">Invited</button>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Example;
