import React from "react";

const Hero = ( { heroName } ) => {

  if ( heroName === "Joker" ) {
    throw new Error("Not a Hero")
  }
  return <div>
    {heroName}
  </div>
}

export default Hero