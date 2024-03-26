import { createContext, useState } from "react";
import photosData from '/public/photos.json';

export const MyContext = createContext(); // creamos el contexto

const MyContextProvider = ({ children }) => { // proveedor de context
  const [data, setData] = useState(photosData);

  return (
    <MyContext.Provider value={{data,setData}}>
       {children}  {/* variable global */}
    </MyContext.Provider>
  );
};
export default MyContextProvider;