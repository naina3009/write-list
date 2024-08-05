import { FC } from "react";

interface IButtons{
    className ?:  string ,
    onClick ?: (e:any)=>void
    label : string
    type : any
}

const Buttons : FC<IButtons> = (props : any)=>{
    const {className,onClick,label,type} = props
    return(
     
        <button 
            type={type}
            className={`btn ${className} || btn btn-primary`}
            onClick={onClick}
        >
           {label}
        </button>
        
    )
}
export default Buttons;