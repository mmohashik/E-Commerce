import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  // Handle category checkbox toggle
  const toggleCategory = (e) => {
    const value = e.target.value;
    if (category.includes(value)) {
      setCategory(prev => prev.filter(item => item !== value));
    } else {
      setCategory(prev => [...prev, value]);
    }
  };

  // Handle subCategory checkbox toggle
  const toggleSubCategory = (e) => {
    const value = e.target.value;
    if (subCategory.includes(value)) {
      setSubCategory(prev => prev.filter(item => item !== value));
    } else {
      setSubCategory(prev => [...prev, value]);
    }
  };

  // Filter products when category or subCategory changes
  useEffect(() => {
    let filtered = [...products];

    // Filter by category
    if (category.length > 0) {
      filtered = filtered.filter(product => category.includes(product.category));
    }

    // Filter by subCategory
    if (subCategory.length > 0) {
      filtered = filtered.filter(product => subCategory.includes(product.subCategory));
    }

    setFilterProducts(filtered);
  }, [category, subCategory, products]);

  // Load all products initially
  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  const sortProduct = () => {
    let fpcopy = filterProducts.slice();

    switch(sortType) {
      case 'low-high':
        setFilterProducts(fpcopy.sort((a, b) => a.price - b.price));
        break;
      case 'high-low':
        setFilterProducts(fpcopy.sort((a, b) => b.price - a.price));
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter section */}
      <div className='min-w-60'>
        <p 
          className='my-2 text-xl flex items-center cursor-pointer gap-2'
          onClick={() => setShowFilter(!showFilter)}
        >
          FILTERS
          <img 
            className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} 
            src={assets.dropdown_icon} 
            alt="dropdown icon" 
          />
        </p>

        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <label className='flex gap-2'>
              <input className='w-3' type='checkbox' value='Men' onChange={toggleCategory} /> Men
            </label>
            <label className='flex gap-2'>
              <input className='w-3' type='checkbox' value='Women' onChange={toggleCategory} /> Women
            </label>
            <label className='flex gap-2'>
              <input className='w-3' type='checkbox' value='Kids' onChange={toggleCategory} /> Kids
            </label>
          </div>
        </div>

        {/* SubCategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <label className='flex gap-2'>
              <input className='w-3' type='checkbox' value='Topwear' onChange={toggleSubCategory} /> Topwear
            </label>
            <label className='flex gap-2'>
              <input className='w-3' type='checkbox' value='Bottomwear' onChange={toggleSubCategory} /> Bottomwear
            </label>
            <label className='flex gap-2'>
              <input className='w-3' type='checkbox' value='Winterwear' onChange={toggleSubCategory} /> Winterwear
            </label>
          </div>
        </div>
      </div>

      {/* Products section */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1='ALL' text2='COLLECTIONS' />
          <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value='relevant'>Sort by : Relevant</option>
            <option value='low-high'>Sort by : Low to High</option>
            <option value='high-low'>Sort by : High to Low</option>
          </select>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterProducts.map((item, index) => (
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
    </div>
  );
};

export default Collection;
