"use client"

import React from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'

const Map = () => {

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY
  })
  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>
  } else if (isLoaded) {
    return (
      <div className='flex justify-center'>

        <GoogleMap
          mapContainerStyle={{
            height: "87vh",
            width: "100%"
          }}
          zoom={12}
          center={{
            lat: 27.700769,
            lng: 85.300140
          }}
          options={{
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: false
          }}
        >

          <div>
            <Marker
              draggable={true}
              onDragEnd={dragSender}
              icon={{
                url: "",
                scaledSize: { width: 70, height: 100 },
              }}
              position={senderCoords}
            />
          </div>
        </GoogleMap>
      </div>
    )
  }

}

export default Map