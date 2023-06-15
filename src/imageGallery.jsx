import { useState } from "react"
import { arry } from "./data";
// export default function Gallery(){

// }

// export default  Gallery = ()=>{

// }

// function Gallery(){
//     return ()
// }


// const Gallery = () =>{

// }

// export default Gallery


export default function Gallery (){

    const [index,setindex] = useState(0);
    const [Show,setshow]  = useState(false);

    const newArryData = ()=>{
        if(index < arry.length - 1){
            setindex(index+1);
        }

        if(index === arry.length-1){
            setindex(0)
        }


    }

    const showHandling =({data})=>{
        // console.log(data)
        // if(data === "show"){
        //     setshow(true)

        // }else{
        //     setshow(false)
        // }
        setshow(!Show)
    }
    return (
        <>
        <button onClick={newArryData}>Next</button>
        <h1>{arry[index].name}by{arry[index].artist}</h1>
        <p>{index} of {arry.length}</p>
        <button onClick={showHandling}>
            {Show ? "hide":"show"}
        </button>
        <br />
        {Show && <p>{arry[index].description}</p>}
        <br />
        <img src={arry[index].url} alt={arry[index].alt} />
        </>    
    )
}