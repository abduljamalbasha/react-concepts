import React from "react";
import ErrorBoundary from "./errorBountary";
import Hero from "./Hero";

const ErrorBountaryComponent = () => {
  return (
    <div>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <Hero heroName="BatMan" />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary>
       </div>

  )
}

export default ErrorBountaryComponent