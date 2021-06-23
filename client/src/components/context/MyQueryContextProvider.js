import React, { useState } from 'react'

export const MyQueryContext = React.createContext();

const MyQueryContextProvider = ({children}) => {
    const [query, setQuery] = useState({ pageNumber: 1, search: ""});   
    return (
        <MyQueryContext.Provider value={{query, setQuery}}>
            {children}
        </MyQueryContext.Provider>
    )
}

export default MyQueryContextProvider
