import React, { useState } from 'react'
import ReactmapGL, { ViewStateChangeEvent, Marker, Popup } from 'react-map-gl';
import { getCenter } from 'geolib';

import { room_info_interface } from './InfoCard';

export default function Map({ searchResults }: { searchResults: room_info_interface[] }) {
    const coordinates = searchResults.map(result => ({
        longitude: result.long,
        latitude: result.lat
    }));
    const center: any = getCenter(coordinates);

    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        longitude: center?.longitude,
        latitude: center?.latitude,
        zoom: 14
    })
    const handleOnMove = (e: ViewStateChangeEvent) => {
        setViewport({
            latitude: e.viewState.latitude,
            longitude: e.viewState.longitude,
            zoom: e.viewState.zoom,
            width: '100%',
            height: '100%'
        })
    }
    return (
        <ReactmapGL
            mapStyle='mapbox://styles/tetravaal/cl0le6f7l002g14pcfqhmcgyw'
            mapboxAccessToken={process.env.mapbox_key}
            initialViewState={{ ...viewport }}
            onMove={handleOnMove}
            style={{
                width:100,height:100
            }}
        >
            {/* {searchResults.map((result) => (
                <div key={result.long} className="flex">
                    <Marker
                        longitude={result.long}
                        latitude={result.lat}
                        color="red"
                    />
                </div>
            ))} */}
        </ReactmapGL>
    )
}
