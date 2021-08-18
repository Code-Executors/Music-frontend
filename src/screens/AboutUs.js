import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "../css/AboutUs.css";
export class AboutUs extends Component {
  render() {
    return (
      <div>
         <img id='asdf' src="./img/Untitled-6.jpg" class="mx-auto d-block mt-5"  alt="..."  width="800px" height="600px"  />
      
      <div class="container">
        
        <div class="row">
          <div class="col-sm">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src="./img/Mohammad.jpg" alt="" style={{ width: "300px", height: "350px" }} />
                </div>
                <div class="flip-card-back">
                  <h1>Mohammad Harb</h1>
                  <p>28 years old. Holding a bachelor's degree in industrial
                    engineering from Jordan university of science & technology.
                    Passionate about environment, logistics, and technology. Being
                    well-equipped in these three majors is reason behind learning
                    programming.</p>
                </div>
              </div>
            </div>

          </div>

          <div class="col-sm">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src="./img/Jamal.png" alt="" style={{ width: "300px", height: "350px" }} />
                </div>
                <div class="flip-card-back">
                  <h1>Jamal Eldeen Wari</h1>
                  <p>Hello Everyone my name is Jamal Eldeen Wari, i graduated from
                    Arab Open University with a Computer Science degree, i am
                    happy to be here in this course to help me become the best
                    developer and to work with the best tech companies worldwide..</p>
                </div>
              </div>
            </div>

          </div>

          <div class="col-sm">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src="./img/basharaq.jpg" alt="" style={{ width: "300px", height: "350px" }} />
                </div>
                <div class="flip-card-back">
                  <h1>Bashar Aqleh</h1>
                  <p>I am 29 years old form Jordan, With a bachelor's degree in
                    business Administration From Middle East university and
                    currantly a student at LTUC-Abdul Aziz Al Ghurair School of
                    Advanced Computing hoping in becoming a Web-developer in the
                    near future</p>
                </div>
              </div>
            </div>

          </div>

          <div class="col-sm">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src="./img/Yazeed.png" alt="" style={{ width: "300px", height: "350px" }} />
                </div>
                <div class="flip-card-back">
                  <h1>Yazeed Al-Shami</h1>
                  <p>My Name is Yazeed Alshami I'm a Mechatronics Engineering I'm intrested in IOT technology </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
      </div>

    );
  }
}

export default AboutUs;
