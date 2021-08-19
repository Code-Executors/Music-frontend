import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "../css/AboutUs.css";

export class AboutUs extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src="./img/Mohammad.jpg" />
              <Card.Body>
                <Card.Title>Mohammad Harb</Card.Title>
                <Card.Text>
                  28 years old. Holding a bachelor's degree in industrial
                  engineering from Jordan university of science & technology.
                  Passionate about environment, logistics, and technology. Being
                  well-equipped in these three majors is reason behind learning
                  programming.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div class="col-sm">
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src="./img/Jamal.png" />
              <Card.Body>
                <Card.Title>Jamal Eldeen Wari </Card.Title>
                <Card.Text>
                  Hello Everyone my name is Jamal Eldeen Wari, i graduated from
                  Arab Open University with a Computer Science degree, i am
                  happy to be here in this course to help me become the best
                  developer and to work with the best tech companies worldwide..
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div class="col-sm">
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src="./img/basharaq.jpg" />
              <Card.Body>
                <Card.Title>Bashar Aqleh</Card.Title>
                <Card.Text>
                  I am 29 years old form Jordan, With a bachelor's degree in
                  business Administration From Middle East university and
                  currantly a student at LTUC-Abdul Aziz Al Ghurair School of
                  Advanced Computing hoping in becoming a Web-developer in the
                  near future
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div class="col-sm">
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src="./img/Yazeed.png" />
              <Card.Body>
                <Card.Title>Yazeed Al-Shami</Card.Title>
                <Card.Text>
                  My Name is Yazeed Alshami I'm a Mechatronics Engineering
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
