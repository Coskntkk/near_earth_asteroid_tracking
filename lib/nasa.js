const API_KEY = 'M4zgteyuYeFEnKxd7SfOZ61dQokV5E8ZyjnJLdNY'; // Gerçek key ile değiştir

const getDateOffset = (days) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date.toISOString().split('T')[0];
};

const addDaysToDate = (dateStr, days) => {
    const date = new Date(dateStr);
    date.setDate(date.getDate() + days);
    return date.toISOString().split('T')[0];
};

async function fetchAsteroids(start, end) {
    const start_date = start ? start : getDateOffset(-3);
    let end_date = end ? end : getDateOffset(3);

    const startDateObj = new Date(start_date);
    const endDateObj = new Date(end_date);

    const diffTime = endDateObj.getTime() - startDateObj.getTime();
    const diffDays = diffTime / (1000 * 60 * 60 * 24);

    if (diffDays > 7) {
        end_date = addDaysToDate(start_date, 7);
    }

    const res = await fetch(
        `https://api.nasa.gov/neo/rest/v1/feed?start_date=${start_date}&end_date=${end_date}&api_key=${API_KEY}`
    );

    const data = await res?.json();
    if (!res.ok) {
        alert(data?.error_message || 'Something went wrong.');
    }

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