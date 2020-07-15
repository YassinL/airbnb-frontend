import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 48.8167,
      lng: 2.3167,
    },
    zoom: 14,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="places-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_GOOGLE_MAP_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={48.8167} lng={2.3167} text="ICI" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
