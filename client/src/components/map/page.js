"use client"

import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'

const Map = () => {

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY
  })
  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>
  } else if(isLoaded){
      return(
        <div className='pl-5'>

        <GoogleMap
        id="circle-example"
        mapContainerStyle={{
            height: "600px",
            width: "500px"
        }}
        zoom={12}
        center={{
            lat: 27.700769,
            lng: 85.300140
        }}
        options={{
            mapTypeControl: false,
            streetViewControl: false,
          }}
        >
          </GoogleMap>
        </div>
      )
  }
 
  }

export default Map