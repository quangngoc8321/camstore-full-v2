import React, { useContext } from 'react'


import { useQuery } from "react-query";
import { MyQueryContext } from './MyQueryContextProvider';
import { axiosFunction } from '../../helpers/axiosFunction';
export const CartContext = React.createContext();
const CartContextProvider = ({children}) => {
    const {query, setQuery} = useContext(MyQueryContext);

      const { isLoading, data } = useQuery(["cart", query], () =>
           axiosFunction(null,null,"/cart","get",query)
      );

    return (
        <CartContext.Provider value={{isLoading, data, query, setQuery }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
