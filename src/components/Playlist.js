import axios from "axios";
import React, { Component } from "react";
import AudioPlayer from "./AudioPlayer";
import DeleteButton from "./DeleteButton";
import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import "../css/PlayList.css";

export class Playlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      accessToken: "",
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3001/song").then((response) => {
      this.setState({ songs: response.data.playlist });
    });

    let accessToken = localStorage.getItem("token");

    this.setState({
      accessToken: accessToken,
    });
  }

  afterDelete = (newVal) => {
    this.setState({
      songs: newVal,
    });
  };

  render() {
    return (
      <>
        {this.state.songs.map((elem) => {
          return (
            <div>
              <Card className="addedPlayList">
                <Card.Header>{elem.title}</Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>{elem.artist}</ListGroup.Item>
                  <ListGroup.Item>
                    <AudioPlayer />
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <DeleteButton
                      id={elem._id}
                      afterDelete={this.afterDelete}
                    />
                  </ListGroup.Item>

                </ListGroup>
                <br></br>
              </Card>
            </div>
          );
        })}
      </>
    );
  }
}

export default Playlist;
