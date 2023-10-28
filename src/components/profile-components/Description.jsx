import React, { useEffect, useState } from "react";

const Description = () => {
  // combine the states in one object
  const [personDescription, setPersonDescription] = useState({
    jobTitle: "",
    phNumber: "",
    bio: "",
  });

  const [fruits, setFruits] = useState(['banana', 'apple', 'mango']);
  
  function handleCreateDescription() {
    setPersonDescription({
      jobTitle: "Engineer",
      phNumber: "1234",
      bio: "Working",
    });
  }

  function clearDescription() {
    setPersonDescription({
      jobTitle: "",
      phNumber: "",
      bio: "",
    });
  }

  function addFruit() {
    setFruits(previousValuesOfArray => [...previousValuesOfArray, 'grapes']);
  }

  // useEffect we use to re-render the page when a state updates
  useEffect(() => {
  }, [fruits]);

  return (
    <div>
      <ul>
        <li>Title: {personDescription.jobTitle}</li>
        <li>Contact Number: {personDescription.phNumber}</li>
        <li>Bio: {personDescription.bio}</li>
        {
            fruits.map((fruit) => (
                <li>{fruit}</li>
            ))
        }
        <button onClick={handleCreateDescription}>Set the description</button>
        <button onClick={clearDescription}>clear description</button>
        <button onClick={addFruit}>Add fruit</button>
      </ul>
    </div>
  );
};

export default Description;
