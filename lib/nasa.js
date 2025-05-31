const API_KEY = 'M4zgteyuYeFEnKxd7SfOZ61dQokV5E8ZyjnJLdNY'; // Gerçek key ile değiştir


// Yardımcı fonksiyonlar
const getDateOffset = (days) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date.toISOString().split('T')[0];
};


async function fetchAsteroids(start, end) {
    const start_date = start ? start : getDateOffset(-3);
    const end_date = end ? end : getDateOffset(3);

    const res = await fetch(
        `https://api.nasa.gov/neo/rest/v1/feed?start_date=${start_date}&end_date=${end_date}&api_key=${API_KEY}`
    );

    if (!res.ok) {
        alert('Could not fetch.');
    }

    const data = await res.json();
    return data.near_earth_objects;
}

async function fetchAsteroidById(asteroidId) {
    const res = await fetch(
        `https://api.nasa.gov/neo/rest/v1/neo/${asteroidId}?api_key=${API_KEY}`
    );

    if (!res.ok) {
        alert('Could not fetch.');
    }

    const data = await res.json();
    return data;
}

module.exports = { fetchAsteroids, fetchAsteroidById }