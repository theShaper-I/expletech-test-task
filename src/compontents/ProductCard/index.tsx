import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: string;
  image: string;
  title: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link
      href={`/product/${product.id}`}
      className='w-[190px] relative mb-4 hover:bg-orange-200 rounded-3xl duration-500 flex flex-col'
    >
      <div className='flex-1'>
        <div className='w-[190px] h-[232px] bg-white rounded-3xl cursor-pointer '>
          <Image
            className='block mx-auto h-full p-4 hover:p-2 duration-500 object-contain justify-center'
            src={product.image}
            alt='item-card-image'
            width={500}
            height={500}
          />
        </div>

        <div className='pl-2 pt-4 text-[#1A1F16] text-xl font-medium '>
          {product.title}
        </div>

        <div className='pl-2 mt-10 text-xl font-medium'>$ {product.price}</div>
      </div>
    </Link>
  );
};
