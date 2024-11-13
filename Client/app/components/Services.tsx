import Sales from "./Sales";
import Purchase from "./Purchase";
import Invoice from "./Invoice";
import Recivable from "./Recivable";
import Payable from "./Payable";

const Service = () => {
    return(
        <div>
            <div className="p-156, ">
            <Purchase />
            </div>
            

            <div>
            <Invoice />
            </div>
             
             <div>
             <Payable/>
             </div>

             <div>
             <Sales/>
             </div>

             <div>
             <Recivable/>
             </div>
             
        </div>
    )
}


export default Service;