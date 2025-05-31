import React from 'react'
import { FaSearchengin } from 'react-icons/fa'

const Loading = () => {
    return (
        <div className="flex items-center justify-center p-6">
            <div className="flex items-center gap-2 text-white bg-gray-900 px-4 py-2 rounded-md shadow">
                <FaSearchengin className="animate-spin text-xl" />
                <span>Loading...</span>
            </div>
        </div>
    )
}

export default Loading