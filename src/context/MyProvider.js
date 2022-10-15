import { useState } from 'react';
import { myContext } from './context';

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState(5);

  const clickNumber = e => {
    setData(prevstate => prevstate + e.target.value);
  };

  return (
    <myContext.Provider value={{ data, setData, clickNumber }}>
      {children}
    </myContext.Provider>
  );
};
