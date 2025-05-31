import React, { useEffect } from 'react'
import Link from 'next/link';
import Loading from './Loading';

const AsteroidDetail = ({ asteroid }) => {

    useEffect(() => {
        console.log(asteroid);
    }, [asteroid])

    if (!asteroid) return 

    return (!asteroid
        ? <Loading />
        : <div className="max-w-4xl mx-auto p-6 bg-gray-900 text-gray-100 rounded-lg shadow-lg font-sans">
            <Link href={"/"}>← return</Link>
            <h1 className="text-3xl font-bold mb-4 text-yellow-400">{asteroid.name}</h1>

            <a
                href={asteroid.nasa_jpl_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline mb-6 inline-block"
            >
                NASA JPL Page
            </a>

            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">General Info</h2>
                <ul className="list-disc list-inside space-y-1">
                    <li>Absolute Magnitude (H): {asteroid.absolute_magnitude_h}</li>
                    <li>
                        Estimated Diameter (km):{" "}
                        {asteroid.estimated_diameter?.kilometers.estimated_diameter_min.toFixed(3)} kms -{" "}
                        {asteroid.estimated_diameter?.kilometers.estimated_diameter_max.toFixed(3)} kms
                    </li>
                    <li>
                        Hazardous Asteroid:{" "}
                        <span
                            className={
                                asteroid.is_potentially_hazardous_asteroid ? "text-red-500 font-bold" : "text-green-400"
                            }
                        >
                            {asteroid.is_potentially_hazardous_asteroid ? "Yes" : "No"}
                        </span>
                    </li>
                </ul>
            </div>

            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4">Orbital Data</h2>
                <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Orbit Class: {asteroid.orbital_data.orbit_class.orbit_class_type} - {asteroid.orbital_data.orbit_class.orbit_class_description}</li>
                    <li>Orbit Determination Date: {asteroid.orbital_data.orbit_determination_date}</li>
                    <li>Eccentricity: {asteroid.orbital_data.eccentricity}</li>
                    <li>Semi Major Axis (AU): {asteroid.orbital_data.semi_major_axis}</li>
                    <li>Inclination: {asteroid.orbital_data.inclination} degrees</li>
                    <li>Orbital Period: {parseFloat(asteroid.orbital_data.orbital_period).toFixed(2)} days</li>
                </ul>
            </div>

            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4">Close Approach Data</h2>

                <div className="space-y-6 max-h-96 overflow-y-auto pr-2">
                    {asteroid.close_approach_data.map((data, i) => (
                        <div
                            key={i}
                            className="bg-gray-800 p-4 rounded-md border border-gray-700 hover:border-yellow-400 transition"
                        >
                            <p>
                                <strong>Date:</strong> {data.close_approach_date_full} ({data.orbiting_body})
                            </p>
                            <p>
                                <strong>Velocity:</strong> {parseFloat(data.relative_velocity.kilometers_per_hour).toFixed(2)} km/h (
                                {parseFloat(data.relative_velocity.miles_per_hour).toFixed(2)} mph)
                            </p>
                            <p>
                                <strong>Distace:</strong>{" "}
                                {parseFloat(data.miss_distance.kilometers).toLocaleString()} kms /{" "}
                                {parseFloat(data.miss_distance.miles).toLocaleString()} miles /{" "}
                                {parseFloat(data.miss_distance.lunar).toFixed(2)} Moon distances
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AsteroidDetail