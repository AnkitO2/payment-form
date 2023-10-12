import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col,
  Container,
} from "reactstrap";
// import MemberLogo from "./Memberlogo/Ankit1.jpg";
import "./Member.css";
function Example(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [tab, setTab] = useState(1);

  return (
    <Container>
      <Button color="danger" onClick={toggle}>
        Click Me
      </Button>
      <Row> </Row>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          <h6>Members</h6>
        </ModalHeader>
        <ModalBody className="bg-transparent">
          <Row className="Parent-divNo-One ">
            <Col
              className={`ChildOne-divNo-One ${tab === 1 ? "active" : ""}`}
              onClick={() => setTab(1)}
            >
              <p className="m-0 py-1 ">05</p>
              <p className="py-0  mb-2 ">Invited</p>
            </Col>
            <Col
              className={`ChildOne-divNo-One ${tab === 2 ? "active" : ""}`}
              onClick={() => setTab(2)}
            >
              <p className="m-0 py-1  ">05</p>
              <p className=" py-0 mb-2">Going</p>
            </Col>
          </Row>
          <Row className="Parent-divNo-Two">
            <Col
              className={`ChildOne-divNo-One ${tab === 3 ? "active" : ""}`}
              onClick={() => setTab(3)}
            >
              <p className="m-0 py-1 ">05</p>
              <p className="py-0 mb-2">Interested</p>
            </Col>
            <Col
              className={`ChildOne-divNo-One ${tab === 4 ? "active" : ""}`}
              onClick={() => setTab(4)}
            >
              <p className="m-0 py-1 ">05</p>
              <p className="py-0 mb-2">Not Interested</p>
            </Col>
          </Row>

          <Row className="Parent-divNo-Three border-bottom pt-3">
            <Col className="d-flex ">
              &nbsp;&nbsp;&nbsp;
              <div>
                <h6 className="mb-0">EmmanThoma</h6>
                <p className="emman-thoma">emman-thoma</p>
                <p className="Follower-Paragraph">
                  <span className="fw-semibold Follower">9.8M</span> Followers
                </p>
              </div>
              <span className="d-flex align-items-end mb-2 dot">.</span>
            </Col>

            <Col className="d-flex align-items-end">
              <p className="Follower-Paragraph">
                <span className="fw-semibold Follower">18M</span> Posts
              </p>
            </Col>

            <Col>
              <button type="button" className="secondary border">
                Invited
              </button>
            </Col>
          </Row>

          <Row className="Parent-divNo-Four border-bottom pt-3">
            <Col className="d-flex">
              <div>
                <h6 className="mb-0">EmmanThoma</h6>
                <p className="emman-thoma">emman-thoma</p>
                <p className="Follower-Paragraph">
                  <span className="fw-semibold Follower ">9.8M</span> Followers
                </p>
              </div>
              <span className="d-flex align-items-end mb-2 dot">.</span>
            </Col>

            <Col className="d-flex align-items-end">
              <p className="Follower-Paragraph">
                <span className="fw-semibold Follower">18M</span> Posts
              </p>
            </Col>
            <Col>
              <button type="button" className="secondary border">
                Invited
              </button>
            </Col>
          </Row>

          <Row className="Parent-divNo-Five border-bottom pt-3">
            <Col className="d-flex">
              <div>
                <h6 className="mb-0">EmmanThoma</h6>
                <p className="emman-thoma">emman-thoma</p>
                <p className="Follower-Paragraph">
                  <span className="fw-semibold Follower ">9.8M</span> Followers
                </p>
              </div>
              <span className="d-flex align-items-end mb-2 dot">.</span>
            </Col>

            <Col className="d-flex align-items-end">
              <p className="Follower-Paragraph">
                <span className="fw-semibold  Follower">18M</span> Posts
              </p>
            </Col>
            <Col>
              <button type="button" className="secondary border">
                Invited
              </button>
            </Col>
          </Row>

          <Row className="Parent-divNo-Six border-bottom pt-3">
            <Col className="d-flex">
              <h6 className="mb-0">EmmanThoma</h6>
              <p className="emman-thoma">emman-thoma</p>
              <p className="Follower-Paragraph">
                <span className="fw-semibold Follower">9.8M</span> Followers
              </p>

              <span className="d-flex align-items-end mb-2 dot">.</span>
            </Col>

            <Col className="d-flex align-items-end">
              <p className="Follower-Paragraph">
                <span className="fw-semibold Follower">18M</span> Posts
              </p>
            </Col>
            <Col>
              <button type="button" className=" secondary border">
                Invited
              </button>
            </Col>
          </Row>

          <Row className="Parent-divNo-Seven mb-0 border-bottom pt-3">
            <Col className="d-flex">
              <h6 className="mb-0">EmmanThoma</h6>
              <p className="emman-thoma">emman-thoma</p>
              <p className="Follower-Paragraph">
                <span className="fw-semibold Follower">9.8M</span> Followers
              </p>
              <span className="d-flex align-items-end mb-2 dot">.</span>
            </Col>

            <Col className="d-flex align-items-end">
              <p className="Follower-Paragraph">
                <span className="fw-semibold Follower">18M</span> Posts
              </p>
            </Col>
            <Col>
              <button type="button" className=" secondary border">
                Invited
              </button>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </Container>
  );
}

export default Example;
