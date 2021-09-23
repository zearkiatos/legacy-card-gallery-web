import React, { Component } from "react";
import { connect } from "react-redux";
import Thumbnails from "./Thumbnails";
import { imageActions } from '../actions'

class App extends Component {
  componentWillMount() {
    this.props.fetchImages();
  }

  render() {
    return (
      <div>
        <Thumbnails images={this.props.images} />
      </div>
    );
  }
}
function mapStateToProps({ images }) {
    return { images };
}

export default connect(mapStateToProps, {
    fetchImages: imageActions.fetchImages
})(App);
