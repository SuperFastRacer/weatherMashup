import React, { Component } from "react";
import "./background.module.css";
import getBackground from "../../api/BackgroundAPI";

class Background extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: [] //,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.searchString !== prevProps.searchString) {
      this.fetchBackground();
    }
  }

  fetchBackground = () => {
    getBackground(this.props.searchString)
      .then(data => {
        let image = data.data.images.downsized_large.url;
        this.setState({ image: image });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.fetchBackground();
  }

  render() {
    return (
      <div className="container">
        <div
          className="background-image"
          style={{ backgroundImage: `url(${this.state.image})` }}
        />
      </div>
    );
  }
}

export default Background;
