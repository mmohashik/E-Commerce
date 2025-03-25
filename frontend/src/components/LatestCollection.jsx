import React, { useContext, useState, useEffect } from 'react';
import Title from './Title';
import { ShopContext } from '../context/shopContext';
import ProductItem from '../components/ProductItem';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    // Update latestProducts when products change
    useEffect(() => {
        if (products && products.length > 0) {
            setLatestProducts(products.slice(0, 10)); // Take the latest 10 products
        }
    }, [products]); // Add products to the dependency array
  
    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
              <Title text1="LATEST" text2="COLLECTIONS" />
              <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {latestProducts.map((item, index) => (
                    <ProductItem
                        key={index} 
                        id={item._id} 
                        image={item.image} 
                        name={item.name} 
                        price={item.price} 
                    />
                ))}
            </div>
        </div>
    );
};

export default LatestCollection;
