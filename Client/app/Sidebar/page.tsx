"use client";

import { useState } from "react";
import Sales from "../components/Sales";
import Purchase from "../components/Purchase";
import Invoice from "../components/Invoice";
import Recivable from "../components/Recivable";
import Payable from "../components/Payable";
import Production from "../components/Production";
import Inventory from "../components/Inventory";
import Human from "../components/HumanResources";
import Orders from "../components/Orders";
import Popupemployer from "./components/Popupemployer";
import Popupsupplier from "./components/Popupsupplier";

const Service = () => {
    const [activeWorkspace, setActiveWorkspace] = useState("orders");
    const [popup, setPopup] = useState(false);
    const [popupSupplier, setPopupSupplier] = useState(false);

    const handleWorkspaceChange = (workspace: string) => {
        setActiveWorkspace(workspace);
    };

    const handleEmployer = () => {
        setPopup(true);
    };

    const closeemployer = () => {
        setPopup(false)
    }

    const handleSupplier = () => {
        setPopupSupplier(true);
    };


    const closesupplier = () => {
        setPopupSupplier(false)
    }

    const renderWorkspace = () => {
        switch (activeWorkspace) {
            case "orders":
                return <Orders />;
            case "purchase":
                return <Purchase />;
            case "invoice":
                return <Invoice />;
            case "payable":
                return <Payable />;
            case "sales":
                return <Sales />;
            case "recivable":
                return <Recivable />;
            case "production":
                return <Production />;
            case "inventory":
                return <Inventory />;
            case "human":
                return <Human />;
            default:
                return <Orders />;
        }
    };

    return (
        <div className="flex h-screen">
            <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 w-[20%]">
                <div className="p-6 mt-8 overflow-auto">
                    <ul className="space-y-4">
                        <li
                            className="bg-white p-2 text-center rounded-lg cursor-pointer"
                            onClick={() => handleWorkspaceChange("orders")}
                        >
                            Orders
                        </li>
                        <li
                            className="bg-white p-2 text-center rounded-lg cursor-pointer"
                            onClick={() => handleWorkspaceChange("purchase")}
                        >
                            Purchase
                        </li>
                        <li
                            className="bg-white p-2 text-center rounded-lg cursor-pointer"
                            onClick={() => handleWorkspaceChange("invoice")}
                        >
                            Invoice
                        </li>
                        <li
                            className="bg-white p-2 text-center rounded-lg cursor-pointer"
                            onClick={() => handleWorkspaceChange("payable")}
                        >
                            Payable
                        </li>
                        <li
                            className="bg-white p-2 text-center rounded-lg cursor-pointer"
                            onClick={() => handleWorkspaceChange("sales")}
                        >
                            Sales
                        </li>
                        <li
                            className="bg-white p-2 text-center rounded-lg cursor-pointer"
                            onClick={() => handleWorkspaceChange("recivable")}
                        >
                            Receivable
                        </li>
                        <li
                            className="bg-white p-2 text-center rounded-lg cursor-pointer"
                            onClick={() => handleWorkspaceChange("production")}
                        >
                            Production
                        </li>
                        <li
                            className="bg-white p-2 text-center rounded-lg cursor-pointer"
                            onClick={() => handleWorkspaceChange("inventory")}
                        >
                            Inventory
                        </li>
                        <li
                            className="bg-white p-2 text-center rounded-lg cursor-pointer"
                            onClick={() => handleWorkspaceChange("human")}
                        >
                            Human Resources
                        </li>
                        <div className="bg-lime-300 rounded-lg text-center">
                            <button onClick={handleSupplier}>Create Supplier</button>
                        </div>
                        <div className="bg-lime-300 rounded-lg text-center">
                            <button onClick={handleEmployer}>Create Employer</button>
                        </div>
                    </ul>
                </div>
            </div>

            <div className="p-6 bg-blue-300 overflow-auto w-full">
                {renderWorkspace()}
            </div>

            {popup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <Popupemployer onClose={closeemployer}/>
                </div>
            )}

            {popupSupplier && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <Popupsupplier onClose={closesupplier} />
                </div>
            )}
        </div>
    );
};

export default Service;
