"use client"

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
import Link from "next/link";

const Service = () => {
    // State to track the active component
    const [activeWorkspace, setActiveWorkspace] = useState("orders");

    // Handler to change the active workspace
    const handleWorkspaceChange = (workspace: string) => {
        setActiveWorkspace(workspace);
    };

    // Render different component based on the active workspace
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
            {/* Sidebar Menu */}
            <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 w-[20%]">
                <div className="p-6 mt-8 overflow-auto">
                    <ul className="space-y-4">
                        {/* Set onClick to change the active workspace */}
                        <li
                            className="bg-white p-2 text-center rounded-lg"
                            onClick={() => handleWorkspaceChange("orders")}
                        >
                            Orders
                        </li>
                        <li
                            className="bg-white p-2 text-center rounded-lg"
                            onClick={() => handleWorkspaceChange("purchase")}
                        >
                            Purchase
                        </li>
                        <li
                            className="bg-white p-2 text-center rounded-lg"
                            onClick={() => handleWorkspaceChange("invoice")}
                        >
                            Invoice
                        </li>
                        <li
                            className="bg-white p-2 text-center rounded-lg"
                            onClick={() => handleWorkspaceChange("payable")}
                        >
                            Payable
                        </li>
                        <li
                            className="bg-white p-2 text-center rounded-lg"
                            onClick={() => handleWorkspaceChange("sales")}
                        >
                            Sales
                        </li>
                        <li
                            className="bg-white p-2 text-center rounded-lg"
                            onClick={() => handleWorkspaceChange("recivable")}
                        >
                            Receivable
                        </li>
                        <li
                            className="bg-white p-2 text-center rounded-lg"
                            onClick={() => handleWorkspaceChange("production")}
                        >
                            Production
                        </li>
                        <li
                            className="bg-white p-2 text-center rounded-lg"
                            onClick={() => handleWorkspaceChange("inventory")}
                        >
                            Inventory
                        </li>
                        <li
                            className="bg-white p-2 text-center rounded-lg"
                            onClick={() => handleWorkspaceChange("human")}
                        >
                            Human Resources
                        </li>
                        <div className="bg-lime-300 rounded-lg text-center
                        ">
                        <button>create_supplier</button>
                        </div>
                        <div className="bg-lime-300 rounded-lg text-center">
                        <button>create_employer</button>
                        </div>
                    </ul>
                </div>
            </div>

            {/* Main Content */}
            <div className="p-6 bg-pink-600 overflow-auto w-full">
                {/* Render the selected workspace */}
                {renderWorkspace()}
            </div>
        </div>
    );
};

export default Service;
