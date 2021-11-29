import React, { useState, useMemo } from 'react';

function UseMemoComponent () {
  const [counterOne, setCounterOne] = useState( 0 )
  const [counterTwo, setCounterTwo] = useState( 0 )

  const isEven = useMemo( () => {
    let i = 0
    while ( i < 2000000000 ) i++
    return counterOne % 2 === 0
  }, [counterOne] )

  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mb-2"
        onClick={() => setCounterOne( counterOne + 1 )} >Counter 1 -Increment - {counterOne}</button>
      <span className="ml-4">{isEven ? 'Event' : 'Odd'}</span>
      <br></br>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        onClick={() => setCounterTwo( counterTwo + 1 )} >Counter 2 -Increment - {counterTwo}</button>
    </div>
  );
}

export default UseMemoComponent;