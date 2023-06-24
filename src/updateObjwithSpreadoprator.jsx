import { useImmer } from "use-immer";

// import { useState } from "react";

export default function Form() {
  const [person, setPerson] = useImmer({
    name: "mukesh",
    title: "Blue Nana",
    city: "Hamburg",
    image: "https://i.imgur.com/Sd1AgUOm.jpg",
  });

  // const [person, setPerson] = useState({
  //   name: "mukesh",
  //   title: "Blue Nana",
  //   city: "Hamburg",
  //   image: "https://i.imgur.com/Sd1AgUOm.jpg",
  // });

  function handleNameChange(e) {
    // console.log(new Date(e.timeStamp).toLocaleTimeString());
    // console.log(e);
    // setPerson({
    //   ...person,
    //   name: e.target.value,
    // });
    setPerson((obj) => {
      obj.name = e.target.value;
    });
  }

  function handleTitleChange(e) {
    // console.log(e.target[1].value)
    // setPerson({
    //   ...person,
    //   title: e.target.value,
    // });

    setPerson((obj)=>{
      obj.title = e.target.value
    })
  }

  function handleCityChange(e) {
    // setPerson({
    //   ...person,
    //   city: e.target.value,
    // });

    setPerson((obj)=>{
      obj.city = e.target.value
    })
  }

  function handleImageChange(e) {
    // setPerson({
    //   ...person,
    //   image: e.target.value,
    // });

    setPerson((obj)=>{
      obj.image = e.target.value
    })
  }

  return (
    <>
      <label>
        Name:
        <input  value={person.name} onChange={handleNameChange} />
      </label>
      <label>
        Title:
        <input value={person.title} onChange={handleTitleChange} />
      </label>
      <label>
        City:
        <input value={person.city} onChange={handleCityChange} />
      </label>
      <label>
        Image:
        <input value={person.image} onChange={handleImageChange} />
      </label>
      <p>
        <i>{person.title}</i>
        {" by "}
        {person.name}
        <br />
        (located in {person.city})
      </p>
      <img src={person.image} alt={person.title} />
    </>
  );
}

//
//

{
  /*  */
}
