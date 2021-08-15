
// import React from 'react'
// import { Container } from "react-bootstrap"

// const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=62c9315e12544e6dbbefe73c593856fd&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

import React from "react";
import { Container } from "react-bootstrap";


const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=29100d22a56f419e846f66a430615533&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

export default function Login() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <a className="btn btn-success btn-lg" href={AUTH_URL}>
        Start Listening
      </a>
    </Container>
  );
}
