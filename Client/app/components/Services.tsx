"use client"
import Sales from "./Sales";
import Purchase from "./Purchase";
import Invoice from "./Invoice";
import Recivable from "./Recivable";
import Payable from "./Payable";
import Production from "./Production";
import Inventory from "./Inventory";
import Human from "./HumanResources";
import Orders from "./Orders";
import Link from "next/link";
import { useState } from "react";

const Service = () => {

    return (
        <div className=" flex h-screen">
            
            <div className=" bg-red-400">
                <div className="p-6 mt-8 overflow-auto">
                <ul className="space-y-4">

                    <li className="bg-white p-2 text-center rounded-lg"><Link href="#orders" className=" p-5  rounded-lg">Orders</Link></li>
                    <li className="bg-white p-2 text-center rounded-lg"><Link href="#purchase" className="hover:text-gray-400">Purchase</Link></li>
                    <li className="bg-white p-2 text-center rounded-lg"><Link href="#invoice" className="hover:text-gray-400">Invoice</Link></li>
                    <li className="bg-white p-2 text-center rounded-lg"><Link href="#payable" className="hover:text-gray-400">Payable</Link></li>
                    <li className="bg-white p-2 text-center rounded-lg"><Link href="#sales" className="hover:text-gray-400">Sales</Link></li>
                    <li className="bg-white p-2 text-center rounded-lg"><Link href="#recivable" className="hover:text-gray-400">Receivable</Link></li>
                    <li className="bg-white p-2 text-center rounded-lg"><Link href="#production" className="hover:text-gray-400">Production</Link></li>
                    <li className="bg-white p-2 text-center rounded-lg"><Link href="#inventory" className="hover:text-gray-400">Inventory</Link></li>
                    <li className="bg-white p-2 text-center rounded-lg"><Link href="#human" className="hover:text-gray-400">Human Resources</Link></li>
                </ul>
                </div>
            </div>

            {/* Main content */}
             <div>
                <div>
                <div>
                    <Orders />
                </div>
                <div >
                    <Purchase />
                </div>
                <div >
                    <Invoice />
                </div>
                <div>
                    <Payable />
                </div>
                
                <div>
                    <Sales />
                </div>
                <div>
                    <Recivable />
                </div>
                <div>
                    <Production />
                </div>
                <div>
                    <Inventory />
                </div>
                <div>
                    <Human />
                </div>
                </div>
            </div> 
        </div>
    );
};

export default Service;
