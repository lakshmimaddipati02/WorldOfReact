import React, {useEffect, useRef} from "react";


const Component1 = () =>{

const inputRef1 = useRef(null)
const inputRef2 = useRef(null)
const inputRef3 = useRef(null)


const handleClick1 = () => {
   inputRef1.current.focus()
   inputRef1.current.style.backgroundColor = "red";   
}

const handleClick2 = () => {
    inputRef2.current.focus()
    inputRef2.current.style.backgroundColor = "yellow";   
 }

 const handleClick3 = () => {
    inputRef3.current.focus()
    inputRef3.current.style.backgroundColor = "pink";   
 }


useEffect (()=> {
    console.log("component render")
})

return(
    <div>
        <center>
        <button onClick={handleClick1}>click me 1!</button><br/>
        <input ref={inputRef1}/>

        <button onClick={handleClick2}>click me 2!</button><br/>
        <input ref={inputRef2}/>

        <button onClick={handleClick3}>click me 3!</button><br/>
        <input ref={inputRef3}/>
        </center>

    </div>
)
}

export default Component1