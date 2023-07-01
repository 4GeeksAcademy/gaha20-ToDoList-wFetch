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
                            <div key={index}>
                                <li key={index}>{item}</li>
                                <button></button>
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