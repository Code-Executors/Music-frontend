import axios from "axios";
import React, { Component } from "react";
import Player from "./Player";
import AudioPlayer from "./AudioPlayer";
// import useAuth from "./useAuth"
import DeleteButton from "./DeleteButton";

export class Playlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      accessToken:'',
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3001/song").then((response) => {
      // console.log(response.data.playlist);
      this.setState({songs:response.data.playlist});

    });
    
    let accessToken = localStorage.getItem("token");
    // console.log(accessToken);
    this.setState({
        accessToken:accessToken
    });
  }

  afterDelete=(newVal)=>{
    this.setState({
        songs:newVal
    })
  }
 
  render() {
      console.log(this.state.songs);
    return (
      <>
      <h1>hello</h1>
        {this.state.songs.map((elem) => {
            return(

          <div>
              <h1>{elem.title}</h1>
              <p>{elem.artist}</p>
              <AudioPlayer  />
              <DeleteButton id={elem._id} afterDelete = {this.afterDelete}/>
            
          </div>
            )
        })}
      </>
    );
  }
}

export default Playlist;
