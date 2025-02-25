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
                    className="absolute top-4 right-4 bg-red-500 rounded-lg p-2 hover:bg-green-400 focus:outline-none"
                >
                    Close
                </button>
                
                <div className="mt-2">
                    <h3>Name</h3>
                    <div className="flex justify-between">
                    <input placeholder="FirstName" className="border border-blue-500 shadow-lg p-2 ml-16"></input>
                    <input placeholder="LastName" className="border border-blue-500 shadow-lg p-2 mr-16"></input>
                    </div>
                </div>
                <div className="mt-2">
                    <h3>Qualification</h3>
                    <div className="flex justify-between">
                    <input placeholder="Education" className="border border-blue-500 shadow-lg p-2 ml-16"></input>
                    <input placeholder="Experience" className="border border-blue-500 shadow-lg p-2 mr-16"></input>
                    </div>
                </div>
                <div className="mt-2">
                    <h3>Domain</h3>
                    <div className="flex justify-between">
                    <input placeholder="Department" className="border border-blue-500 shadow-lg p-2 ml-16"></input>
                    <input placeholder="Role" className="border border-blue-500 shadow-lg p-2 mr-16"></input>
                    </div>
                </div>
                <div className="mt-2">
                    <h3>Address</h3>
                    <div className="flex justify-between">
                    <input placeholder="State" className="border border-blue-500 shadow-lg p-2 ml-16"></input>
                    <input placeholder="Country" className="border border-blue-500 shadow-lg p-2 mr-16"></input>
                    </div>
                </div>
                <div className="mt-2">
                    <h3>ContactDetails</h3>
                    <div className="flex justify-between">
                    <input placeholder="MobileNumber" className="border border-blue-500 shadow-lg p-2 ml-16"></input>
                    <input placeholder="Email" className="border border-blue-500 shadow-lg p-2 mr-16"></input>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className="bg-green-500 p-1 w-32 hover:bg-green-400 rounded-lg">Save</button>
                </div>
            </div>
        </div>
    );
};

export default Popupemployer;
