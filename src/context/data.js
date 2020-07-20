import React, { createContext, useState } from 'react';

export const DataContext = createContext();


const DataProvider = (props) => {

    
    const [idLeague, setidLeague] = useState(739);

    return ( 
        <DataContext.Provider
            value={{
                idLeague
        }}>
            {props.children}
        </DataContext.Provider>
     );
}
 
export default DataProvider;