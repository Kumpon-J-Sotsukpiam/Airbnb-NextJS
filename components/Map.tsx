import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useState } from 'react'
import ReactmapGL, { ViewStateChangeEvent, Marker } from 'react-map-gl';
import { getCenter } from 'geolib';

import { room_info_interface } from './InfoCard';

export default function Map({ searchResults }: { searchResults: room_info_interface[] }) {
    const coordinates = searchResults.map(result => ({
        longitude: result.long,
        latitude: result.lat
    }));
    const center: any = getCenter(coordinates);

    const [viewport, setViewport] = useState({
        longitude: center?.longitude,
        latitude: center?.latitude,
        zoom: 14
    })
    const handleOnMove = (e: ViewStateChangeEvent) => {
        setViewport({
            latitude: e.viewState.latitude,
            longitude: e.viewState.longitude,
            zoom: e.viewState.zoom
        })
    }

    return (
        <ReactmapGL
            mapStyle='mapbox://styles/tetravaal/cl0le6f7l002g14pcfqhmcgyw'
            mapboxAccessToken={process.env.mapbox_key}
            initialViewState={{ ...viewport }}
            onMove={handleOnMove}
        >
            {searchResults.map((result) => (
                <div key={result.long}>
                    <Marker
                        longitude={result.long}
                        latitude={result.lat}
                        color="red"
                    />
                </div>
            ))}
        </ReactmapGL>
    )
}
