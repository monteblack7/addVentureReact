import React from "react";
import {withGoogleMap, GoogleMap, Marker} from "react-google-maps";

const Map = withGoogleMap((props) => {
    return (
        <GoogleMap defaultZoom={11} defaultCenter={{
            lat: 40.7608,
            lng: -111.8910
        }} onClick={(event) => {
            if(props.selected !== null) {
                let data = {
                    ...props.selected,
                    lng: event.latLng.lng(),
                    lat: event.latLng.lat(),
                };
                props.handleAdd(data);
                props.handleSet(null);
            }
        }}>
            {
                props.markers.map((item, index) => {
                    return(
                        <Marker onRightClick={() => {
                            props.handleDelete(item);
                        }} key={item.label + index} {...item} />
                    )
                })
            }
        </GoogleMap>
    )
});

export default Map;