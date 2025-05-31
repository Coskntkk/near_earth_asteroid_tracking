// components/Footer.tsx

export default function Footer() {
    return (
        <footer className="w-full border-t border-gray-200 mt-16 py-6 text-sm text-gray-300">
            <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
                <p>© {new Date().getFullYear()} Near-Earth Asteroid Tracking</p>
                <a
                    href="https://github.com/Coskntkk/near_earth_asteroid_tracking"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                >
                    Show on GitHub →
                </a>
            </div>
        </footer>
    );
}
