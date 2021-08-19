import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { ListGroupItem } from "react-bootstrap";
// import Image from "react-bootstrap/Image";
import "../css/Profile.css";


export class Profile extends Component {
  render() {
    return (
      <>
      <h1 className="hello">Hello!</h1>
      <p className="para">Want to edit your profile? Find an old playlist? Put off work for a while? You can do it all here.</p>
        {/* <Image src="./img/pexels-sebastian-ervi-1763075.jpg" fluid /> */}
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./img/Jamal.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default Profile;
