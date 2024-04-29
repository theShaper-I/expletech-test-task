'use client';

import { useState } from 'react';
import { ProductCard } from '../ProductCard';
import { CategoriesList } from '../CategoriesList';
import { SortByPriceList } from '../SortByPriceDropdown';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
};

type ProductsListProps = {
  products: Product[];
  categories: string[];
};

export const ProductsList = ({ products, categories }: ProductsListProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [priceRange, setPriceRange] = useState<[number, number]>([1, 1000]);

  const filterProducts = (products: Product[]) => {
    return products
      .filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter((product) =>
        selectedCategory ? product.category === selectedCategory : true
      )
      .filter(
        (product) =>
          product.price >= priceRange[0] && product.price <= priceRange[1]
      )
      .sort((a, b) => {
        return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
      });
  };

  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as [number, number]);
  };

  const filteredProducts = filterProducts(products);

  return (
    <div className='mt-40'>
      <div className='flex flex-col '>
        <div className='text-base max-sm:text-sm text-[#60695C]'>
          Search item
        </div>
        <input
          className='text-[#1A1F1680] max-sm:text-base h-50 text-xl p-10 rounded-[13px] mt-2 pl-6 pr-6 shadow-lg'
          type='text'
          placeholder='Sandisk, Gold Plated, Acer...'
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      <div className=' flex flex-col mt-40'>
        <SortByPriceList
          sortOrder={sortOrder}
          onSortOrderChange={setSortOrder}
        />
        <CategoriesList
          categories={categories}
          setSelectedCategory={setSelectedCategory}
        />
        <div className='mt-4'>
          <label className='text-[18px] font-bold'>
            Price Range {priceRange.join(' - ')} $
          </label>
          <Slider
            value={priceRange}
            onChange={handlePriceChange}
            valueLabelDisplay='auto'
            aria-labelledby='price-range-slider'
            min={0}
            max={1000}
          />
        </div>
      </div>
      <div className='grid grid-cols-6 mt-40 max-2xl:grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 justify-items-center'>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className='font-bold text-center text-red-400'>
            Product List is Empty...
          </div>
        )}
      </div>
    </div>
  );
};
