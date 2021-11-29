import React, { useState } from 'react';
import useDocumentTitle from './hook/useDocumentTitle';

function DocumentTitleOneComponent () {

  const [count, setCount] = useState( 0 )
  useDocumentTitle( count )

  return (
    <div>
      <button className="rounded border border-gray-500 p-3 mb-3" onClick={() => { setCount( count + 1 ) }} >Count - {count}</button>
    </div>
  );
}

export default DocumentTitleOneComponent;