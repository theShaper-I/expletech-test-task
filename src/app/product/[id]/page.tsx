import { MainContainer } from '@/compontents/MainContainer';
import { api } from '@/data/api';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  params: {
    id: string;
  };
};

export default async function ProductPage({ params: { id } }: Props) {
  const { data: product } = await api.getProduct({ id });

  return (
    <MainContainer className='mt-100'>
      <Link href='/'>
        <div className='font-bold hover:text-orange-500 transition-all duration-300'>
          {'<'}= Back to Product List
        </div>
      </Link>
      <div className='bg-white mt-40 p-8 rounded-lg shadow-md jusify-center '>
        <div className='flex items-center justify-between  max-md:block'>
          <div className='w-[400px] h-[300px] relative max-md:justify-center max-md:flex max-md:mx-auto'>
            <Image
              src={product.image}
              alt=''
              layout='fill'
              className='rounded-lg object-contain'
            />
          </div>
          <div className='p-6 w-full rounded-lg max-md:mt-20'>
            <h1 className='text-xl font-semibold mb-4'>{product.title}</h1>

            <div className='mb-2'>
              <strong>Id:</strong> {product.id}
            </div>

            <div className='text-black mt-20 text-base'>
              <strong>Price:</strong> {product.price} $
            </div>
            <div className='text-black mt-20'>
              <strong>Description:</strong> {product.description}
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
}
