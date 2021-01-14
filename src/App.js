import React from "react";
import BasicInfo from "./Components/BasicInfo/BasicInfo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: "Jensy",
        phoneNumber: "123456789",
        dateOfBirth: "07/02/2002",
      },
      people: [
        {
          name: "Bob",
          phoneNumber: "123456789",
          dateOfBirth: "01/01/1999",
        },
        {
          name: "Steve",
          phoneNumber: "123456789",
          dateOfBirth: "09/03/1980",
        },
        {
          name: "Joe",
          phoneNumber: "123456789",
          dateOfBirth: "05/07/1976",
        },
      ],
    };
  }
  render() {
    return (
      <>
        <BasicInfo state={this.state} />
        {this.state.people.map((person) => {
          return (
            <div>
              <p>{person.name}</p>
              <p>{person.phoneNumber}</p>
              <p>{person.dateOfBirth}</p>
            </div>
          );
        })}
      </>
    );
  }
}

export default App;
