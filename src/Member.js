import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
// import MemberLogo from "./Memberlogo/Ankit1.jpg";
import "./Member.css";
function Example(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [tab, setTab] = useState(1);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Click Me
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          <h6>Members</h6>
        </ModalHeader>
        <ModalBody className="bg-transparent">
          <div className="Parent-divNo-One ">
            <div
              className={`ChildOne-divNo-One ${tab === 1 ? "active" : ""}`}
              onClick={() => setTab(1)}
            >
              <p className="m-0 py-1 ">05</p>
              <p className="py-0  mb-2 ">Invited</p>
            </div>
            <div
              className={`ChildOne-divNo-One ${tab === 2 ? "active" : ""}`}
              onClick={() => setTab(2)}
            >
              <p className="m-0 py-1  ">05</p>
              <p className=" py-0 mb-2">Going</p>
            </div>
          </div>
          <div className="Parent-divNo-Two">
            <div
              className={`ChildOne-divNo-One ${tab === 3 ? "active" : ""}`}
              onClick={() => setTab(3)}
            >
              <p className="m-0 py-1 ">05</p>
              <p className="py-0 mb-2">Interested</p>
            </div>
            <div
              className={`ChildOne-divNo-One ${tab === 4 ? "active" : ""}`}
              onClick={() => setTab(4)}
            >
              <p className="m-0 py-1 ">05</p>
              <p className="py-0 mb-2">Not Interested</p>
            </div>
          </div>

          <div className="Parent-divNo-Three border-bottom pt-3">
            <div className="d-flex ">
              <div>
                {/* <img src={MemberLogo} className="rounded-circle" alt="Error" /> */}
              </div>
              &nbsp;&nbsp;&nbsp;
              <div>
                <h6 className="mb-0">EmmanThoma</h6>
                <p className="emman-thoma">emman-thoma</p>
                <p className="Follower-Paragraph">
                  <span className="fw-semibold Follower">9.8M</span> Followers
                </p>
              </div>
              <span className="d-flex align-items-end mb-2 dot">.</span>
            </div>

            <div className="d-flex align-items-end">
              <p className="Follower-Paragraph">
                <span className="fw-semibold Follower">18M</span> Posts
              </p>
            </div>

            <div>
              <button type="button" className="secondary border">
                Invited
              </button>
            </div>
          </div>

          <div className="Parent-divNo-Four border-bottom pt-3">
            <div className="d-flex">
              <div>
                {/* <img src={MemberLogo} className="rounded-circle" alt="Error" /> */}
              </div>
              &nbsp;&nbsp;&nbsp;
              <div>
                <h6 className="mb-0">EmmanThoma</h6>
                <p className="emman-thoma">emman-thoma</p>
                <p className="Follower-Paragraph">
                  <span className="fw-semibold Follower ">9.8M</span> Followers
                </p>
              </div>
              <span className="d-flex align-items-end mb-2 dot">.</span>
            </div>

            <div className="d-flex align-items-end">
              <p className="Follower-Paragraph">
                <span className="fw-semibold Follower">18M</span> Posts
              </p>
            </div>
            <div>
              <button type="button" className="secondary border">
                Invited
              </button>
            </div>
          </div>

          <div className="Parent-divNo-Five border-bottom pt-3">
            <div className="d-flex">
              <div>
                {/* <img src={MemberLogo} className="rounded-circle" alt="Error" /> */}
              </div>
              &nbsp;&nbsp;&nbsp;
              <div>
                <h6 className="mb-0">EmmanThoma</h6>
                <p className="emman-thoma">emman-thoma</p>
                <p className="Follower-Paragraph">
                  <span className="fw-semibold Follower ">9.8M</span> Followers
                </p>
              </div>
              <span className="d-flex align-items-end mb-2 dot">.</span>
            </div>

            <div className="d-flex align-items-end">
              <p className="Follower-Paragraph">
                <span className="fw-semibold  Follower">18M</span> Posts
              </p>
            </div>
            <div>
              <button type="button" className="secondary border">
                Invited
              </button>
            </div>
          </div>

          <div className="Parent-divNo-Six border-bottom pt-3">
            <div className="d-flex">
              <div>
                {/* <img src={MemberLogo} className="rounded-circle" alt="Error" /> */}
              </div>
              &nbsp;&nbsp;&nbsp;
              <div>
                <h6 className="mb-0">EmmanThoma</h6>
                <p className="emman-thoma">emman-thoma</p>
                <p className="Follower-Paragraph">
                  <span className="fw-semibold Follower">9.8M</span> Followers
                </p>
              </div>
              <span className="d-flex align-items-end mb-2 dot">.</span>
            </div>

            <div className="d-flex align-items-end">
              <p className="Follower-Paragraph">
                <span className="fw-semibold Follower">18M</span> Posts
              </p>
            </div>
            <div>
              <button type="button" className=" secondary border">
                Invited
              </button>
            </div>
          </div>

          <div className="Parent-divNo-Seven mb-0 border-bottom pt-3">
            <div className="d-flex">
              <div>
                {/* <img src={MemberLogo} className="rounded-circle" alt="Error" /> */}
              </div>
              &nbsp;&nbsp;&nbsp;
              <div className="">
                <h6 className="mb-0">EmmanThoma</h6>
                <p className="emman-thoma">emman-thoma</p>
                <p className="Follower-Paragraph">
                  <span className="fw-semibold Follower">9.8M</span> Followers
                </p>
              </div>
              <span className="d-flex align-items-end mb-2 dot">.</span>
            </div>

            <div className="d-flex align-items-end">
              <p className="Follower-Paragraph">
                <span className="fw-semibold Follower">18M</span> Posts
              </p>
            </div>
            <div>
              <button type="button" className=" secondary border">
                Invited
              </button>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Example;
