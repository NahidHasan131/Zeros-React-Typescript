import { IoBagAddOutline } from 'react-icons/io5';
import type { Product } from '../features/products/types';

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const { title, price, brand, stock, thumbnail } = product;

  return (
    <div className="group flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden rounded-xl bg-gray-100">
        <img src={thumbnail} alt={title}
          className="w-full h-72 object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <button className="absolute bottom-3 right-3 bg-white rounded-full p-2.5 shadow-md opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 cursor-pointer hover:bg-[#001a2e] hover:text-white">
          <IoBagAddOutline className="text-lg" />
        </button>
      </div>

      {/* Line 1: brand + price */}
      <div className="mt-3 flex items-center gap-2">
        {brand && (
          <span className="text-[10px] font-bold text-white bg-red-500 px-1.5 py-0.5 rounded-sm uppercase tracking-wide">
            {brand}
          </span>
        )}
        <span className="ml-auto text-md font-bold text-[#001a2e]">${price.toFixed(2)}</span>
      </div>

      {/* Line 2: title + stock */}
      <div className="mt-2 flex items-start justify-between gap-2">
        <h3 className="text-sm font-semibold text-gray-900 leading-snug line-clamp-1">{title}</h3>
        <span className={`text-xs font-semibold whitespace-nowrap ${stock > 0 ? 'text-blue-500' : 'text-red-400'}`}>
          {stock > 0 ? 'In Stock' : 'Out of Stock'}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
