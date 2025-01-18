'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility"

export default function Branches() {
  const branches = [
    { name: 'Sede Central', lat: 40.416775, lng: -3.703790 },
    { name: 'Sucursal 1', lat: 41.390205, lng: 2.154007 },
    { name: 'Sucursal 2', lat: 37.389092, lng: -5.984459 },
  ]

  return (
    <section id="sucursales" className="py-20 px-4 relative">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nuestras Sucursales</h2>
      <p className="text-center mb-12 max-w-2xl mx-auto">Encuentra nuestras oficinas en diferentes partes del mundo.</p>
      <div className="h-96 max-w-4xl mx-auto relative z-0">
        <MapContainer center={[40.416775, -3.703790]} zoom={5} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {branches.map((branch, index) => (
            <Marker key={index} position={[branch.lat, branch.lng]}>
              <Popup>{branch.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  )
}

