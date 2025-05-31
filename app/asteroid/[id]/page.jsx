'use client';

import React, { useEffect, useState } from "react";
import { fetchAsteroidById } from "@/lib/nasa";
import AsteroidDetail from "@/components/AsteroidDetail";
import Loading from "@/components/Loading";

export default function DetailPage({ params }) {
    const { id } = React.use(params);
    const [asteroid, setAsteroid] = useState();
    const [loading, setLoading] = useState(false);

    async function handleSearch(asteroidId) {
        setLoading(true);
        try {
            const data = await fetchAsteroidById(asteroidId);
            setAsteroid(data);
        } catch (e) {
            alert('Could not fetch.');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        handleSearch(id)
    }, [id])

    return (
        <main className="p-8" >
            {loading && <Loading/>}
            {asteroid && <AsteroidDetail asteroid={asteroid} />}
        </main>
    )

}
