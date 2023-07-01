import { useState } from "react";

let initialShapes = [
  { id: 0, type: "circle", x: 50, y: 100 },
  { id: 1, type: "square", x: 150, y: 100 },
  { id: 2, type: "circle", x: 250, y: 100 },
];

const TransformationOfArry = () => {
  const [shapes, setshape] = useState(initialShapes);

  const handleMoveDown = () => {
    
    const newshapeArry = shapes.map((shape) => {
      if (shape.type === "square") {
        return shape;
      } else {
        return { ...shape, y: shape.y + 50 };
      }
    });

    setshape(newshapeArry);
  };

  const handleMoveUp = ()=>{
    const newshapeArry = shapes.map((shape) => {
        if (shape.type === "square") {
          return shape;
        } else {
          return { ...shape, y: shape.y - 50 };
        }
      });
  
      setshape(newshapeArry);
  }



  const divList = shapes.map((shape) => (
    <div
    key={shape.id}
      style={{
        background: "red",
        width: "50px",
        height: "50px",
        borderRadius: shape.type === "circle" ? "50%" : "",
        position: "absolute",
        top: shape.y,
        left: shape.x,
      }}
    ></div>
  ));

  return (
    <>
      <button onClick={handleMoveDown}>move circles down</button>
      <button onClick={handleMoveUp}>move circles up</button>
      {divList}
    </>
  );
};

export default TransformationOfArry;
