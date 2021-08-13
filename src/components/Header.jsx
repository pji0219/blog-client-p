import React from 'react';
import { Col, Row } from 'reactstrap';

function Header() {
  return (
    <header id="page-header" className="mb-3">
      <Row>
        <Col md="6" sm="auto" className="text-center m-auto">
          <h1>Read Our Blog</h1>
          <p>나의 프로토타입 블로그</p>
        </Col>
      </Row>
    </header>
  );
}

export default Header;