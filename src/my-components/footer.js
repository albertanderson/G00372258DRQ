import React from 'react';
import ReactPlayer from "react-player"  // import to play video

export class Footer extends React.Component {

  render() {
    return (
      <div>
        <style>{'body { background-color: grey; }'}</style>
        <ReactPlayer
          url="https://youtu.be/5QQrqobDAG4"  // plays video clip
        />
      </div>
    )
  }
}