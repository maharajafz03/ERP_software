import React from "react";

interface PopupemployerProps {
    onClose: () => void;
}

const Popupemployer: React.FC<PopupemployerProps> = ({ onClose }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <button onClick={onClose}>Close</button>
            <h1 className="text-xl font-bold">Hello</h1>
            
        </div>
    );
};

export default Popupemployer;
