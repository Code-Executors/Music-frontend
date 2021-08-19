import React from 'react'

class AudioPlayer extends React.Component {
  render() {
    return (
      <div>
        <audio ref="audio_tag" src="#" controls autoPlay style={{ width: "100%" }} />
      </div>
    );
  }
}

export default AudioPlayer;