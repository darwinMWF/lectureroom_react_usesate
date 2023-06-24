import { useState } from "react";
import { useImmer } from "use-immer";

// const initialList = [
//   { id: 0, title: "Big Bellies", seen: false },
//   { id: 1, title: "Lunar Landscape", seen: false },
//   { id: 2, title: "Terracotta Army", seen: true },
// ];

const initialarry = [
  { name: "mukesh", id: 0 },
  { name: "suresh", id: 1 },
  { name: "arjun", id: 2 },
  { name: "neha", id: 3 },
  { name: "mena", id: 4 },
];

const Items = ({ data, settingArry }) => {
  

  // console.log(data)
  const list = data.map((item) => (
    <>
      <li key={item.id}>
        <span >{item.name}</span>
        <input
          type="button"
          name="delete"
          value="Delete"
          onClick={() => { 
              settingArry(
                data.filter((a) => {
                  console.log(a.id);
                  return a.id !== item.id;
                })
              );
            }
          }
        />
      </li>
      <br />
    </>
  ));
  return <ul>{list}</ul>;
};

const Todolist = () => {
  const [newid,setid] = useState(6);
  const [value, setvalue] = useState({ name: "" , id:6});
  const [arry, setarry] = useState(initialarry);
  

  // const [value, setvalue] = useImmer({ name: "" });
  // const [arry, setarry] = useImmer(initialarry);

  const handleClick = () => {
  
    setarry([...arry, value]);
    setvalue({ ...value, name: "" });
    

    // setarry((data) => {
    //   data.push(value);
    // });
    // setvalue((newvalue) => {
    //   newvalue.name = "";
    // });
  };

  const handlechange = (e) => { 
    setid(newid+1)
    setvalue({...value,name:e.target.value,id:newid});
    

    // setvalue((newvalue) => {
    //   newvalue.name = e.target.value;
    // });
  };

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <input type="text"  onChange={handlechange} />
      <button onClick={handleClick}>add</button>
      <Items data={arry} settingArry={setarry}  />
    </>
  );
};

export default Todolist;

// import { useState } from 'react';

// let nextId = 3;
// const initialList = [
//   { id: 0, title: 'Big Bellies', seen: false },
//   { id: 1, title: 'Lunar Landscape', seen: false },
//   { id: 2, title: 'Terracotta Army', seen: true },
// ];

// export default function BucketList() {
//   const [list, setList] = useState(
//     initialList
//   );

//   function handleToggle(artworkId, nextSeen) {
//     setList(list.map(artwork => {
//       if (artwork.id === artworkId) {
//         return { ...artwork, seen: nextSeen };
//       } else {
//         return artwork;
//       }
//     }));
//   }

//   return (
//     <>
//       <h1>Art Bucket List</h1>
//       <h2>My list of art to see:</h2>
//       <ItemList
//         artworks={list}
//         onToggle={handleToggle} />
//     </>
//   );
// }

// function ItemList({ artworks, onToggle }) {
//   return (
//     <ul>
//       {artworks.map(artwork => (
//         <li key={artwork.id}>
//           <label>
//             <input
//               type="checkbox"
//               checked={artwork.seen}
//               onChange={e => {
//                 onToggle(
//                   artwork.id,
//                   e.target.checked
//                 );
//               }}
//             />
//             {artwork.title}
//           </label>
//         </li>
//       ))}
//     </ul>
//   );
// }
