import Link from 'next/link';
import { FaMeteor, FaRulerHorizontal, FaTachometerAlt, FaExclamationTriangle } from 'react-icons/fa';

export default function AsteroidCard({ asteroid }) {
    const approach = asteroid.close_approach_data[0];
    const isHazardous = asteroid.is_potentially_hazardous_asteroid;

    return (
        <Link
            key={asteroid.id}
            href={`/asteroid/${asteroid.id}`}
        >
            <div className={`rounded-lg shadow-md p-4 border transition-transform bg-gray-900 hover:scale-105 ${isHazardous ? 'border-red-500' : 'border-gray-200'}`}>
                <div className="flex items-center gap-3 mb-4">
                    <img src={"asteroid.png"} alt="Asteroid" className="w-12 h-12 object-contain" />
                    <h3 className="text-lg font-semibold">{asteroid.name}</h3>
                    {isHazardous && (
                        <FaExclamationTriangle className="text-red-500 ml-auto text-xl" title="Tehlikeli" />
                    )}
                </div>
                <ul className="text-sm space-y-1 text-gray-500">
                    <li className="flex items-center gap-2">
                        <FaRulerHorizontal className="text-blue-500" />
                        <span>Miss Distance:</span>
                        <strong>{parseInt(approach.miss_distance.kilometers).toLocaleString()} kms</strong>
                    </li>
                    <li className="flex items-center gap-2">
                        <FaTachometerAlt className="text-green-500" />
                        <span>Velocity:</span>
                        <strong>{parseInt(approach.relative_velocity.kilometers_per_hour).toLocaleString()} km/h</strong>
                    </li>
                    <li className="flex items-center gap-2">
                        <FaMeteor className="text-purple-500" />
                        <span>Diameter:</span>
                        <strong>
                            {Math.round(asteroid.estimated_diameter.meters.estimated_diameter_min)} - {Math.round(asteroid.estimated_diameter.meters.estimated_diameter_max)} m
                        </strong>
                    </li>
                </ul>
            </div>
        </Link>
    );
}
