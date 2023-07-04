import React, {useState} from "react";

const Input = () => {
    const [data, setData] = useState("")
    const [toDo, setToDo] = useState([])
    return (
        <div className="container justify-content-center align-items-center vh-100">
            <h1 className="text-light">toDo</h1>
            <label htmlFor="toDo" className="text-light"> toDo:</label>
            <input
            className="bg-secondary text-light"
            type="text"
            id="toDo"
            value={data}
            onChange={(event) => {
                console.log(data)
                setData(event.target.value)
                }
            }
            onKeyDown={(event) => {
                console.log(event.key)
                if (event.key == "Enter"){
                    setToDo((prev) => {
                        return [...prev , data] 
                    })
                }
            }}
            />
            <div className="text-light">
                <ul>
                    {toDo.map((item, index) => {
                        return (
                            <div key={index}className="d-flex">
                                <li key={index}>{item}</li>
                                <button
                                    onClick={(event) => {
                                        const newToDo = toDo.filter((filterItem, filterIndex) => {
                                            // return filterIndex != index (it the same)
                                            if (filterIndex == index){
                                                return false;
                                            } 
                                            return true;  
                                        })   
                                        setToDo(newToDo)
                                    }}
                                >X</button>
                            </div>
                        )
                    }
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Input;