import React from 'react';
import CounterOneComponent from './counterOne';
import CounterTwoComponent from './counterTwo';
import DocumentTitleOneComponent from './documentTitleOne';
import DocumentTitleTwoComponent from './documentTitleTwo';
import UseInputHook from './InputCustomHook';

const CustomHookCompoenent = () => {
  return (
    <div>
      <h1 className='text-xl'>Custom Hook Example</h1>
      <p className="text-sm text-gray-500">On click look at the title</p>
      <DocumentTitleOneComponent />
      <DocumentTitleTwoComponent />

      <h1 className='text-xl'> Another Custom Hook Example</h1>

      <CounterOneComponent />
      <CounterTwoComponent />

      <UseInputHook />
    </div>
  );
};

export default CustomHookCompoenent;