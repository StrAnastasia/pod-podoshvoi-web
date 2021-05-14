import React from 'react'
import { Loader } from "@googlemaps/js-api-loader"

export default function Map() {
    const loader = new Loader({
        apiKey: "YOUR_API_KEY",
        version: "weekly",
        ...additionalOptions,
      });
      loader.load().then(() => {
        map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 8,
        });
      });
    return (
        // <iframe src="https://www.google.com/maps/d/embed?mid=1NU5MOEVWU6iFzSSw5NJ3VDRIT75G1bay" width="640" height="480"></iframe>
        <iframe
        style={{
            border:0

        }}
        width="600"
        height="450"
        loading='lazy'
        allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJUUJipbtLtUYRZx9Yzyj6zkI&key=AIzaSyCtPbYjq1VPSnTlsfvfNs3pexwlEAYjDmk"></iframe>
    )
}
