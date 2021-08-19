import React, { Component } from "react";

export default class Footer extends Component {

  render() {
    return (
      <div>
        <footer className="bg-dark text-center text-white">
          <div className="container p-4 pb-0">
            <section className="mb-1">
              <a className="btn btn-btn-floating m-1" href="#!" role="button">
                <i>
                  <img src="./img/facebook-logo.png" alt="" width="35" />{" "}
                </i>
              </a>
              <a className="btn btn- btn-floating m-1" href="#!" role="button">
                <i>
                  <img src="./img/github.png" alt="" width="35" />
                </i>
              </a>
              <a className="btn btn-btn-floating m-1" href="#!" role="button">
                <i>
                  <img src="./img/linkedin.png" alt="" width="35" />
                </i>
              </a>
              <a className="btn btn- btn-floating m-1" href="#!" role="button">
                <i className="fab fa-instagram">
                  <img src="./img/twitter.png" alt="" width="35" />
                </i>
              </a>
            </section>
          </div>
          <div className="text-center p-3">
            © 2021 Copyright:
            <p>Code-Executors</p>
          </div>
        </footer>
      </div>
    );
  }
}
