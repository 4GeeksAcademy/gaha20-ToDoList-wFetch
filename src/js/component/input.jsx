import React, {useEffect, useState} from "react";
const API_URL = "https://assets.breatheco.de/apis/fake/todos/user/gaha20";

const Input = () => {
    const [data, setData] = useState("")
    const [toDo, setToDo] = useState([])
    const toDoCounter = toDo.length
    
        async function getToDo(){
            try{
                const response = await fetch(API_URL);
                console.log(response)
                if (response.status != 200){
                    console.log("hay un error en el GET")
                    return;
                }
                const body = await response.json();
                console.log(body);
                setToDo(body);
            }
            catch(error){
                console.log(error)
            }
        };
        async function putToDo(newTask){
            const taskObject = {label: newTask, done:false}
            try{
                const response = await fetch(API_URL, {
                    method: "PUT",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify([...toDo, taskObject]) 
                });
                console.log(response)
                if (response.status != 200){
                    console.log("hay un error en el PUT")
                    return;
                }
                const body = await response.json();
                console.log(body);
                getToDo()
                
            }
            catch(error){
                console.log(error)
            }
        }
        useEffect(()=>{
            console.log("inicia la app")
            getToDo()
            //putToDo()
        },[])
    return (
        <div className="container justify-content-center align-items-center vh-100 vw-50">
            <h1 className="text-light confortaa">2Do´s</h1>
            <label htmlFor="toDo" className="text-light confortaa p-1"></label>
            <input
                className="bg-secondary text-light confortaa"
                type="text"
                id="toDo"
                placeholder="what needs to be done?"
                value={data}
                onChange={(event) => {
                    console.log(data)
                    setData(event.target.value)
                }
            }
            onKeyDown={(event) => {
                console.log(event.key)
                if (event.key == "Enter"){
                    putToDo(data)
                    setData("")
                    /*setToDo((prev) => {
                        return [...prev , data];
                    })*/
                }
            }}
            />
            <div className="container text-light container task">
                <ul>
                    {toDo.map((item, index) => {
                        return (
                            <div key={index}className="d-flex justify-content-between">
                                <li  className="confortaa" key={index}>{item.label}</li>
                                <i className="fa-regular fa-trash-can trash"
                                    onClick={(event) => {
                                        const newToDo = toDo.filter((filterItem, filterIndex) => {
                                            // return filterIndex != index (it´s the same)
                                            if (filterIndex == index){
                                                return false;
                                            } 
                                            return true;  
                                        })   
                                        setToDo(newToDo)
                                    }}
                                    ></i>
                            </div>
                        )
                    }
                    )}
                </ul>
            </div>
            <p className="text-light confortaa">
                {
                (toDoCounter == 0 ? "No tasks, add a task" : toDoCounter == 1 ? toDoCounter + " item left" : toDoCounter + " items left")
                }
                </p>
        </div>
    );
};

export default Input;