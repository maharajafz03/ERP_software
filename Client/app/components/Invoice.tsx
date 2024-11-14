

const Sales  = () => {
    return (
    <div>
        <div>
            <p>Date:</p>
            <input type="text"></input>
            <div>
                <p>InvoiceNumber:</p>
                <input type="text"></input>
            </div>
            <div>
                <p>PoNumber:</p>
                <input type="text"></input>
            </div>

            <div>
                <p>SupllierName:</p>
                <input type="text"></input>
            </div>
            <div>
                <p>Amount:</p>
                <input type="text"></input>
            </div>
            <div>
                <button className="bg-white p-3 w-18 rounded-lg mt-8">Save</button>
            </div>
        </div>
    </div>
    )
}

export default Sales;
