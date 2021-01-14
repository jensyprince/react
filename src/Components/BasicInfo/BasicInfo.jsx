import React from "react";

const BasicInfo = (props) => {
  const {person} = props.state  
  return (
    <div>
        <p>{person.name}</p>
        <p>{person.phoneNumber}</p>
        <p>{person.dateOfBirth}</p>
    </div>
  );
};
export default BasicInfo;