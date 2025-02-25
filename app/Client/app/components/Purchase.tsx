

const Purchase = () => {
    return (
    <div>
            <div>
        <div>
            <div className="justify-end flex">
            <h5 className="mr-10">SupplierName</h5>
            <input type="text" className="w-[25%]"/>
            </div>
            <div>
            <h3 className="mt-11 justify-end flex">OrderNumber: #0001</h3>
            </div>
            
            <div className="mb-20 flex-1 flex-col space-y-6 p-3">
            <p className="bg-white rounded-lg w-28 p-1">SupplierEmail:</p>
            <p className="bg-white rounded-lg w-48 p-1">SupplierContactNumber:</p>
            <p className="bg-white rounded-lg w-32 p-1">SupplierAddress:</p>
            </div>
            <div className="mb-20 p-3 mr-5">
                <div className="grid grid-cols-6 gap-y-4 items-center">
            <p>RequestDepartment</p>
            <input type="text"></input>
                <p>ProductName</p>
                <input type="text"></input>
                <p>ProductQuantity</p>
                <input type="text"></input>
                <p>ProductRate</p>
                <input type="text"></input>
                <p>Amount</p>
                <h3>Overall_price</h3>
            </div>
            </div>
        </div>
    </div>
    </div>
    )
}

export default Purchase;
