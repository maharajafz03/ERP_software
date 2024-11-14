

const Sales  = () => {
    return (
        <div>
        <div>
            <div>
            <h5>SupplierName</h5>
            <input type="text" className="w-1/2"/>
            <h3>SaleOrderNumber: #0001</h3>
            </div>
            <div className="mt-28 p-3">
            <p>SupplierEmail:</p>
            <p>SupplierContactNumber:</p>
            <p>SupplierAddress:</p>
            </div>
            <div>
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
    )
}

export default Sales;
