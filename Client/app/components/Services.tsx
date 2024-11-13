import Sales from "./Sales";
import Purchase from "./Purchase";
import Invoice from "./Invoice";
import Recivable from "./Recivable";
import Payable from "./Payable";
import Production from "./Production";
import Inventory from "./Inventory";
import Human from "./HumanResources";

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


             <div>
             <Production/>
             </div>
             
             <div>
             <Inventory/>
             </div>

             <div>
             <Human/>
             </div>
        </div>
    )
}


export default Service;