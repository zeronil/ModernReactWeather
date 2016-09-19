'use strict';

import React from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

export default ({ lat, lon }) => {

    console.log('google-map: lat = ' + lat + ', log = ' + lon);

    return (
        <GoogleMapLoader
            containerElement={<div style={{ height: '100%' }} />}
            googleMapElement={<GoogleMap defaultZoom={12} defaultCenter={{ lat, lng: lon }} />}
        />
    )
}
