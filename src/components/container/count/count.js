import { useState } from "react";

const Count = () =>{

    const values = useState(2);
    const count = values[0];
    const setCount = values[1]

    const handleBtnClick = () =>{
        setCount(count + 1)
        console.log(count);
    }

    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={handleBtnClick}>qo'shish</button>
        </div>
    )
}


export default Count;