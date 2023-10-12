import React from "react";
import Member from "./Member";
import MemberGrid from "./MemberGrid";
import { Container, Row, Col } from "reactstrap";
function App() {
  
  return (
    <Container className="App">
      <Row>
        <Col>
        <Member/>
        </Col>
        <Col>
        <MemberGrid/>

        </Col>
      </Row>
    </Container>
  );
}

export default App;
