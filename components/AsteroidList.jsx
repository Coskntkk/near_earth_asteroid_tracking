import AsteroidCard from './AsteroidCard';

export default function AsteroidList({ data }) {
    const sortedEntries = Object.entries(data).sort(
        ([dateA], [dateB]) => new Date(dateA) - new Date(dateB)
    );

    return (
        <div className="mt-6 space-y-8">
            {sortedEntries.map(([date, asteroids]) => (
                <div key={date}>
                    <h2 className="text-2xl font-bold mb-4">{date}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {asteroids.map(asteroid => (
                            <AsteroidCard key={asteroid.id} asteroid={asteroid} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
