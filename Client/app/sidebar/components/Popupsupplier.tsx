import React from "react";

interface PopupsupplierProps {
    onClose: () => void;
}

const Popupsupplier: React.FC<PopupsupplierProps> = ({ onClose }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <button onClick={onClose}>Close</button>
            <h1 className="text-xl font-bold">Hello</h1>
            {/* Additional popup content can go here */}
        </div>
    );
};

export default Popupsupplier;
