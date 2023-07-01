// import { useState } from "react";
// import Gallery from "./imageGallery";
// import StateQueue from "./stateQueue";
// import Form from "./updateObjwithSpreadoprator";
import Todolist from "./updateArry";
import TransformationOfArry from "./trannsformArry";
import ReplaceArry from "./replaceArry";

export default function App() {
  
  return (
    <>
     <Todolist/>
      {/* <TransformationOfArry /> */}
     <ReplaceArry />

    </>
  );
}


// const [count, setCount] = useState(0);
//   const [index, setindex] = useState(0);

//   const brry = ["mukesh", "suresh", "arjun"];

//   const handleClick = () => {
//     if (count < 10) {
//       setCount(count + 1);
//     }
//   };

//   const MinusHandle = () => {
//     if (count > 0) {
//       setCount(count - 1);
//     }
//   };

//   const newName = () => {
//     if (index < brry.length - 1) {
//       setindex(index + 1);
//     }

//     if (index == 2) {
//       setindex(0);
//     }
//   };
  //counter wala
  // <p>{brry[index]}</p>
  //    <button onClick={newName}>next</button>
  //    <button onClick={handleClick}>+</button>
  //    <button onClick={MinusHandle}>-</button>


  // img gallery
  // <Gallery />
  // <p>
  //   <StateQueue />
  // </p>

  // <Todolist />
  //     {/* <Form/> */}