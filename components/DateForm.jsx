'use client';
import { useState } from 'react';

// Yardımcı fonksiyonlar
const getDateOffset = (days) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date.toISOString().split('T')[0];
};

export default function DateForm({ onSubmit }) {
    const [start, setStart] = useState(getDateOffset(-3));
    const [end, setEnd] = useState(getDateOffset(3));

    return (
        <div className="w-full flex flex-col sm:flex-row gap-2 sm:items-center">
            <input
                type="date"
                value={start}
                onChange={e => setStart(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 w-full sm:w-auto"
            />
            <input
                type="date"
                value={end}
                onChange={e => setEnd(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 w-full sm:w-auto"
            />
            <button
                onClick={onSubmit}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50 w-full sm:w-auto"
            >
                Search
            </button>
        </div>
    );
}
