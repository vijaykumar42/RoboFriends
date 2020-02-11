import React from "react";
import "./App.css";
import Robots from "./Robots";
import SearchBox from "./SearchBox";

const robolist = [
  {
    id: 1,
    name: "rado",
    email: "rando@gmail.vom"
  },
  {
    id: 2,
    name: "puto",
    email: "pando@gmail.vom"
  },
  {
    id: 3,
    name: "sangi",
    email: "sangi8@gmail.vom"
  },
  {
    id: 4,
    name: "fantu",
    email: "fantibot@gmail.vom"
  },
  {
    id: 5,
    name: "vijkum",
    email: "vij@gmail.vom"
  },
  {
    id: 6,
    name: "Loke",
    email: "loki@gmail.vom"
  },
  {
    id: 7,
    name: "asnu",
    email: "sanuti@gmail.vom"
  },
  {
    id: 8,
    name: "kum",
    email: "muk@gmail.vom"
  }
];

const robolistarray = robolist.map((robot, i) => {
  return (
    <Robots
      key={i}
      id={robolist[i].id}
      name={robolist[i].name}
      email={robolist[i].email}
    />
  );
});

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Robo Friends!</h1>
        <SearchBox />
        {robolistarray}
      </div>
    );
  }
}

export default App;
