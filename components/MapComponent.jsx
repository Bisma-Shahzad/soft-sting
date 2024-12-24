"use client"

import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api"
import { useState, useMemo } from "react"

const mapContainerStyle = {
  width: "100%",
  height: "300px",
  borderRadius: "8px"
}

// Conroe, TX coordinates
const center = {
  lat: 30.3118,
  lng: -95.4561
}

export default function MapComponent() {
  // const { isLoaded } = useLoadScript({
  //   // googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  // })

  const options = useMemo(() => ({
    disableDefaultUI: false,
    clickableIcons: true,
    scrollwheel: true,
    styles: [
      {
        featureType: "all",
        elementType: "geometry",
        stylers: [{ color: "#242f3e" }]
      },
      {
        featureType: "all",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#242f3e" }]
      },
      {
        featureType: "all",
        elementType: "labels.text.fill",
        stylers: [{ color: "#746855" }]
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }]
      }
    ]
  }), [])

  if (!isLoaded) return <div className="w-full h-[300px] bg-[#1a1f24] rounded-lg animate-pulse" />

  return (
    <div className="w-full h-[300px] rounded-lg overflow-hidden">
      <GoogleMap
        zoom={14}
        center={center}
        mapContainerStyle={mapContainerStyle}
        options={options}
      >
        {/* <MarkerF
          position={center}
          icon={{
            url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png"
          }}
        /> */}
      </GoogleMap>
    </div>
  )
}

