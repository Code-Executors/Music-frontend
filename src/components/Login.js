import React from "react";
import { Container } from "react-bootstrap";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=29100d22a56f419e846f66a430615533&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

export default function Login() {
  return (
    <div>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{
          backgroundRepeat: "repeat",
          minHeight: "100vh",
          minWidth: "203vh",
          backgroundImage: "url(./img/wepik-2021718-132626.jpg)",
          // backgroundSize: "cover",
        }}
      >
        <a
          className="btn btn-danger active btn-lg"
          href={AUTH_URL}
          role="button"
          data-bs-toggle="button"
          autocomplete="off"
          aria-pressed="true"
        >
          Start Listening
        </a>
      </Container>
     
              <img src="./img/Untitled-4.jpg" class="img-fluid rounded-start animated bounce infinite"  alt="..."  width="1500px" height="200px"  />
              <img src="./img/Untitled-5.jpg" class="img-fluid rounded-start" alt="..."  width="1600px" height="200px"  />

      <img
        src="./img/Untitled-4.jpg"
        class="img-fluid rounded-start"
        alt="..."
        width="1500px"
        height="200px"
      />
      <img
        src="./img/Untitled-5.jpg"
        class="img-fluid rounded-start"
        alt="..."
        width="1600px"
        height="200px"
      />
    </div>
  );
}
