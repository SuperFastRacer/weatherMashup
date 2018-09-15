import React, { Component } from "react";
import "./music.module.css";
import getMusic from "../../api/MusicAPI";

class Music extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: "",
      trackName: ""
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.searchString !== prevProps.searchString) {
      this.fetchMusic();
    }
  }

  componentDidMount() {
    if (this.props.searchString !== "") {
      this.fetchMusic();
    }
  }

  fetchMusic = () => {
    getMusic(this.props.searchString)
      .then(data => {
        let min = 0;
        let max = data.results.trackmatches.track.length;
        let index = Math.floor(Math.random() * (max - min)) + min;
        let artist = data.results.trackmatches.track[index].artist;
        let trackName = data.results.trackmatches.track[index].name;
        this.setState({ artist, trackName });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="music-container">
        <div className="music-bar">
          <div className="introText">
            {this.props.searchString !== "" ? (
              <p>
                Get in the mood with: {this.state.artist} -{" "}
                {this.state.trackName}{" "}
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Music;
