import React from 'react'

export default function Map() {
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
