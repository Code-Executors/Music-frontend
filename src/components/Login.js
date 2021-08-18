import React from 'react';
import { Container } from "react-bootstrap";




const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=9ee854c43e39427f94857af5488dae60&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

// const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=62c9315e12544e6dbbefe73c593856fd&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";




// let AUTH_URL =
//   "https://accounts.spotify.com/authorize?client_id=9ee854c43e39427f94857af5488dae60&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";


export default function Login() {
  return (
    <div>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh", minWidth: "233vh", backgroundImage: 'url(./img/wepik-2021718-132626.jpg)', backgroundSize: "cover", }}
      >
        {/* <p>    Premium Discover Help Download Music for everyone. Music Station is now free on mobile, tablet and computer. Listen to the
    right music, wherever you are. What’s on Music Station? Millions of Songs There are millions of songs on Music Station HD Music
    Listen to music as if you were listening live Stream Everywhere Stream music on your smartphone, tablet or computer
    It’s as yeezy as Kanye West. Search Know what you want to listen to? Just search and hit play. Browse Check out the
    latest charts, brand new releases and great playlists for right now. Discover Enjoy new music every Monday with your
    own personal playlist. Or sit back and enjoy Radio.</p> */}

        <a className="btn btn-danger active btn-lg" href={AUTH_URL} role="button" data-bs-toggle="button" autocomplete="off" aria-pressed="true" >
          Start Listening
        </a>
       
      </Container>
     
              <img src="./img/Untitled-4.jpg" class="img-fluid rounded-start" alt="..."  width="1500px" height="200px"  />
              <img src="./img/Untitled-5.jpg" class="img-fluid rounded-start" alt="..."  width="1600px" height="200px"  />

              
        
            
        
       
    </div>
  );
}
