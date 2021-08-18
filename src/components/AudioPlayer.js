import React from 'react'

class AudioPlayer extends React.Component {
  render() {
    return (
      <div>
        <audio ref="audio_tag" src="#" controls autoPlay/>
      </div>
    );
  }
}

export default AudioPlayer;