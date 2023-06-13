import { useState } from "react"


// import './App.css'
// import Form from "./form"

// const blogsubmit = ()=>{
//   return alert("formsubmitted");
// }
{/* <Form onformSubmit={blogsubmit}/> */}

export default function App() {
  const [count,setCount] = useState(0);
  // const {name,age} = props
  
  const handleClick = ()=>{
    if(count < 10){
      setCount(count+1)
    }
  //   console.log(count);
  // setCount(count+1)
  // console.log(count)
    
  }

  const MinusHandle = () =>{
    if(count > 0){
      setCount(count-1);
    }
    
  }
  return (
     <>
     <p>{count}</p>
     <button onClick={handleClick}>+</button>
     <button onClick={MinusHandle}>-</button>
     </>

  )
}



