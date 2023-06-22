import { useState } from "react";

// const initialList = [
//   { id: 0, title: "Big Bellies", seen: false },
//   { id: 1, title: "Lunar Landscape", seen: false },
//   { id: 2, title: "Terracotta Army", seen: true },
// ];

const initialarry = [
  { name: "mukesh" },
  { name: "suresh" },
  { name: "arjun" },
  { name: "neha" },
  { name: "mena" },
];

const Items = ({ data }) => {
   
  const list = data.map((item, index) => <li key={index}>{item.name}</li>);
  return <ul>{list}</ul>;
};

const Todolist = () => {
  const [value, setvalue] = useState({name:''});
  const [arry, setarry] = useState(initialarry);

  const handleClick = () => {
    setarry([...arry,  value ]);
    setvalue({...value,name:''});
  };

  const handlechange = (e) => {
    setvalue({...value,name:e.target.value});
  };

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <input type="text" value={value.name} onChange={handlechange} />
      <button onClick={handleClick}>add</button>
      <Items data={arry} />
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
