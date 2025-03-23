import { createContext } from "react";
import { products } from '../assets/frontend_assets/assets';

export const ShopContext = createContext();

const ShopContextProvider = () =>{
    
    const currency = 'LKR';
    const delivery_fee = 500;

    const value = {
        procucts,currency,delivery_fee
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
