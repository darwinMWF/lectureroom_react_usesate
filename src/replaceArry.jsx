import { useState } from "react";

let initialCounters = [1, 2, 3];


const ReplaceArry = () => {
  const [arry, setarry] = useState(initialCounters);
    
    const handleClick = (index)=>{
        const newarry = arry.map((x,i)=>{
            if(i === index){
                return  x+1;
            }else{
                return x;
            }
        })

        setarry(newarry)


    }

  const newArrayList = arry.map((x,i) => (
    <li>
      {x}&nbsp;
      <button onClick={()=>{
        handleClick(i)
      }} id={i}>+1</button>
    </li>
  ));



  return <ul>{newArrayList}</ul>;
};


export  default ReplaceArry;
