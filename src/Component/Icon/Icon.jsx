import { BsCircle, BsFillXCircleFill, BsPencil } from "react-icons/bs";

function Icon({name})
{
    if(name == "circle"){
        return <BsCircle />
    }else if(name == "cross"){
        return <BsFillXCircleFill />
    }else{
        return <BsPencil />
        
    }
} 

export default Icon;    