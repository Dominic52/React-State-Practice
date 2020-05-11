import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleContact(event) {
    const { name, value } = event.target;

    setContact(prevState => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevState.lName,
          email: prevState.email
        };
      } else if (name === "lName") {
        return {
          fName: prevState.fName,
          lName: value,
          email: prevState.email
        };
      } else {
        return {
          fName: prevState.fName,
          lName: prevState.lName,
          email: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleContact}
          value={contact.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleContact}
          value={contact.lName}
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleContact}
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
