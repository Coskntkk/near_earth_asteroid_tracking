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
    const [showWarning, setShowWarning] = useState(false);

    const handleSubmit = () => {
        const diff = (new Date(end) - new Date(start)) / (1000 * 60 * 60 * 24);
        if (diff > 7) {
            setShowWarning(true);
        } else {
            setShowWarning(false);
        }
        onSubmit(start, end);
    };

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
                onClick={handleSubmit}
                className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50 w-full sm:w-auto"
            >
                Search
            </button>
            {showWarning && (
                <span className="text-xs text-gray-400 mt-1">
                    The date range exceeded 7 days, so the end date was adjusted automatically.
                </span>
            )}
        </div>
    );
}
