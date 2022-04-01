import GoogleMapReact from 'google-map-react';
import React, { Component } from 'react';
import Marker from './Marker.jsx';

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 40.930147,
      lng: -74.589422
    },
    zoom: 10
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100%', width: '100vw' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyA78On-67mm9qnWpLc3Lt8yIE0Rb3-ZhNs'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={40.930147}
            lng={-74.589422}
            text="My Marker"
            color="red"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;