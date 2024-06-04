import { useState } from 'react'
export function Createtodo({todo}){
    const [title,settitle]=useState("")
    const [description,setdescription]=useState("")
    return(
        <div>
            <input id="title" type="text" onChange={(e)=>{
                const value=e.target.value;
                settitle(value)
            }}placeholder='title'></input>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <input id="desc" type="text" onChange={(e)=>{
                const value=e.target.value;
                setdescription(value)
            }}placeholder='desc'></input>
            <br></br>
            <br></br>
            <button onClick={()=>{
                fetch("http://localhost:3000/todos",{
                    method:"POST",
                    body:JSON.stringify({
                        title:title,
                        description:description
                    }),headers:{
                        "Content-type": "application/json"
                    }
                }).then(async(res)=>{
                    const json=await res.json();
                    alert("todo added")
                })
            }}>Add todo</button>
        </div>
    )
}