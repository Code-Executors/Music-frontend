import React from 'react';
import { Container } from "react-bootstrap";

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=9ee854c43e39427f94857af5488dae60&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

export default function Login() {
  return (
    <div>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh", minWidth: "233vh", backgroundImage: 'url(./img/wepik-2021718-132626.jpg)', backgroundSize: "cover", }}
      >
        <a className="btn btn-danger active btn-lg" href={AUTH_URL} role="button" data-bs-toggle="button" autocomplete="off" aria-pressed="true" >
          Start Listening
        </a>

      </Container>

      <img src="./img/Untitled-4.jpg" class="img-fluid rounded-start" alt="..." width="1500px" height="200px" />
      <img src="./img/Untitled-5.jpg" class="img-fluid rounded-start" alt="..." width="1600px" height="200px" />
    </div>
  );
}
