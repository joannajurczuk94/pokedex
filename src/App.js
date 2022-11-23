import React from "react";
import "./App.css";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import Avatar from "./Avatar";
import Title from "./Title";

const App = () => {
  function logWhenClicked() {
    console.log("Hello Guys!");
  }


  return (
    <div>
      <Title appName={"Pokedex"} />
      <Logo />
      <BestPokemon abilities={["Anticipation", "Adaptability", "Run-Away"]} />
      <CaughtPokemon date={new Date().toLocaleDateString()} />
      <Avatar doWhenClicked={logWhenClicked} msg="Hello" />
  
    </div>
  );
};
export default App;
