import { api } from '@/data/api';
import { ProductsList } from '@/compontents/ProductList';
import { MainContainer } from '@/compontents/MainContainer';
import { CategoriesList } from '@/compontents/CategoriesList';

export default async function Home() {
  const { data: products } = await api.getProducts();

  const { data: categories } = await api.getCategories();

  // const { data: getProductsByCategory } = api.getProductsByCategory();

  return (
    <MainContainer>
      <div className='mt-[150px]'>
        <h1 className='text-[40px] font-bold text-center text-orange-600'>
          Product List
        </h1>
        <ProductsList products={products} categories={categories} />
      </div>
    </MainContainer>
  );
}
