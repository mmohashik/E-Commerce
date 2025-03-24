import { createContext } from "react";
import { products } from '../assets/frontend_assets/assets';

export const ShopContext = createContext();

const ShopContextProvider = (props) =>{
    
    const currency = 'LKR';
    const delivery_fee = 500;

    const value = {
        products,currency,delivery_fee
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
export { ShopContextProvider };
 