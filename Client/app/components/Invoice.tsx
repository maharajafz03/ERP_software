

const Sales  = () => {
    return (
    <div className="flex rounded-lg shadow-lg shadow-black h-full">
        <div className="relative">
            <p className="ml-9 p-1">Date:</p>
            <input type="text" className="p-2 ml-9 rounded-lg w-28"></input>
            </div>
            <div className=" absolute top-5 right-80 p-2">
                <p>InvoiceNumber:</p>
                <input type="text" className="p-2 rounded-lg bg-blue-500 opacity-30"></input>
            </div>
            <div className="absolute top-36 left-28">
                <p className="ml-9">PoNumber:</p>
                <input type="text" className="p-2 ml-9 rounded-lg"></input>
            </div>

            <div className="absolute top-56">
                <p className="ml-9 p-1">SupllierName:</p>
                <input type="text" className="p-2 ml-9 rounded-lg"></input>
            </div>
            
            <div className="absolute top-56 right-80 ">
                <p className="ml-3 p-1">Amount:</p>
                <input type="text" className="p-2 rounded-lg"></input>
            </div>
            <div className=" absolute top-80">
                <div className=" ">
                <button className="bg-white ml-9 p-3 w-28 rounded-lg">Save</button>
                </div>
            </div>
                       
    </div>
    )
}

export default Sales;
