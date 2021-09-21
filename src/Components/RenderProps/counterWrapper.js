import React from "react";
import ClickCounter from "./clickCounter";
import Counter from "./counter";
import HoverCounter from "./hoverCounter";

const RenderPropComponent = () => {
  return (
    <div>

      {/* Render Props start */}

      {/* Type 1 */}
      {/* <Counter render={( count, incrementCounter ) =>
        ( <ClickCounter count={count} IncrementCounter={incrementCounter} ></ClickCounter> )
      } />

       <Counter render={( count, incrementCounter ) =>
        ( <HoverCounter count={count} IncrementCounter={incrementCounter} ></HoverCounter> )
      } />
       */}
      
      {/* Type 2 */}
      <Counter>
        {( count, incrementCounter ) =>
        ( <ClickCounter count={count} IncrementCounter={incrementCounter} ></ClickCounter> )
        }
      </Counter>

      <Counter>
       {( count, incrementCounter ) =>
        ( <HoverCounter count={count} IncrementCounter={incrementCounter} ></HoverCounter> )
      }
      </Counter>
      {/* Render Props end */}
    </div>
  )
}

export default RenderPropComponent