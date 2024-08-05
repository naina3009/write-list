import { FC } from "react";
import "./Inputs.css"

interface IInputs{
    value : string,
    onChange : (e : any)=>void,
    placeHolder : string
    inputRef ?: any
    required : boolean
    name : string,
    id : string
}


const Inputs : FC<IInputs> = (props:any)=>{
    const {value,onChange,placeHolder,inputRef,required,name,id} = props
    return(
        <>
            <span className="note">Make a Note</span>
            <input
                className="form-control form-control-lg mt-2" 
                type="text"
                placeholder={placeHolder}
                value={value}
                onChange={onChange}
                ref={inputRef}
                required={required}
                name={name}
                id={id}
            />
         </>
    )
}
export default Inputs;