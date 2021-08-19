import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Login from "../components/Login";

export class Home extends Component {
  render() {
    return (
      <div>
        <>
          <Button variant="primary"><Login /></Button>{" "}
        </>
      </div>
    );
  }
}
export default Home;
