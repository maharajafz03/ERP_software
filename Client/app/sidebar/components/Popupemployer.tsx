import React from "react";

interface PopupemployerProps {
    onClose: () => void;
}

const Popupemployer: React.FC<PopupemployerProps> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 w-3/4 h-3/4 md:w-2/3 md:h-2/3 rounded-lg shadow-xl relative">
                {/* Close button */}
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 bg-gray-300 rounded-full p-2 hover:bg-gray-400 focus:outline-none"
                >
                    Close
                </button>
                
                {/* Content */}
                <h1 className="text-2xl font-bold mb-4">EmployerMaster</h1>
                <div>
                <p className="text-lg">First Name</p>
                <input className="bg-purple-300 rounded-lg p-1"></input>
                </div>
                <div>
                <p className="text-lg">LastName</p>
                <input className="bg-purple-300 rounded-lg p-1"></input>
                </div>
                <div>
                <p className="text-lg">First Name</p>
                <input className="bg-purple-300 rounded-lg p-1"></input>
                </div>
                <div>
                <p className="text-lg">LastName</p>
                <input className="bg-purple-300 rounded-lg p-1"></input>
                </div>
            </div>
        </div>
    );
};

export default Popupemployer;
