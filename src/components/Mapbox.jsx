import GoogleMapReact from "google-map-react"
import {Card} from "@mui/material"
export default function Mapbox(){
    const coordinates = {lat:0,lng:0}
    return(<Card className="h-[546px] w-full">
        <GoogleMapReact 
            bootstrapURLKeys={{key:"AIzaSyC4LxwR5ByTASNAoQfKq8nsecvQJQ1tEOM"}}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={0}
            margin={[50,50,50,50]}
        >

        </GoogleMapReact>
    </Card>)
}