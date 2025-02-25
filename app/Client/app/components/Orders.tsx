



const Orders = () => {
    return (
    <div>
        <div>
            <div>
            <h5>SupplierName</h5>
            <input type="text" className="w-1/2"/>
            <h3>OrderNumber: #0001</h3>
            </div>
            <div className="mt-10 flex-1 flex-col space-y-3 p-3">
            <p className="bg-yellow-500 bg-opacity-40 rounded-lg w-28 p-1">SupplierEmail:</p>
            <p className="bg-white rounded-lg w-48 p-1">SupplierContactNumber:</p>
            <p className="bg-white rounded-lg w-32 p-1">SupplierAddress:</p>
            </div>
            <div className="grid grid-cols-6 gap-y-4 items-center mr-5 mt-44">
            <p >RequestDepartment</p>
            <input type="text"></input>
                <p className="ml-14">ProductName</p>
                <input type="text"></input>
                <p className="ml-5">ProductQuantity</p>
                <input type="text"></input>
                <p>ProductRate</p>
                <input type="text"></input>
                <p className="ml-16">Amount</p>
                <h3 className="ml-16 bg-blue-500 p-1 rounded-lg">Overall_price</h3>
            </div>
        </div>
    </div>
    )

    

    
}

export default Orders;
