import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { ListGroupItem } from "react-bootstrap";
// import Image from "react-bootstrap/Image";
import "../css/Profile.css";
import { Button } from "react-bootstrap";


export class Profile extends Component {
  render() {
    return (
      <>
      <h1 className="hello">Hello!</h1>
      <p className="para">Want to edit your profile? Put off work for a while? You can do it all here.</p>
        {/* <Image src="./img/pexels-sebastian-ervi-1763075.jpg" fluid /> */}
        <Card style={{ width: "20rem",margin:"auto",boxShadow: '0px 0px 110px #181f23' }}>
          <Card.Img variant="top" src="./img/Jamal.png" />
          <Card.Body>
            <Card.Title>User Name: Jamal Eldeen Wari</Card.Title>

          </Card.Body>
          <ListGroup className="list-group-flush" >
            <ListGroupItem>User ID: xa7d9q0862ivuth0fv3c9b78f</ListGroupItem>
            <ListGroupItem>Email: jamailspider@gmail.com </ListGroupItem>
            <ListGroupItem>Country: Jordan</ListGroupItem>
            <Button style={{ width: "100%"}}>Edit Profile</Button>
          </ListGroup>
        </Card>
      </>
    );
  }
}

export default Profile;
