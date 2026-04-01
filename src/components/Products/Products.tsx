import { useState } from "react";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../../features/products/productApi";
import ProductCard from "../ProductCard";

const PAGE_SIZE = 12;

interface PaginationProps {
  page: number
  total: number
  onPageChange: (p: number) => void
}

function Pagination({ page, total, onPageChange }: PaginationProps) {
  const totalPages = Math.ceil(total / PAGE_SIZE);
  if (totalPages <= 1) return null;

  const getPages = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    pages.push(1);
    if (page > 3) pages.push('...');
    for (let i = Math.max(2, page - 1); i <= Math.min(totalPages - 1, page + 1); i++) {
      pages.push(i);
    }
    if (page < totalPages - 2) pages.push('...');
    pages.push(totalPages);
    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-2 py-8">
      <button className="btn btn-sm btn-ghost" onClick={() => onPageChange(page - 1)} disabled={page === 1}>«</button>
      {getPages().map((p, i) =>
        p === '...' ? (
          <span key={`d${i}`} className="px-2 text-gray-400">···</span>
        ) : (
          <button
            key={p}
            onClick={() => onPageChange(p as number)}
            className={`btn btn-sm ${p === page ? 'bg-[#001a2e] text-white' : 'btn-ghost'}`}
          >{p}</button>
        )
      )}
      <button className="btn btn-sm btn-ghost" onClick={() => onPageChange(page + 1)} disabled={page === totalPages}>»</button>
    </div>
  );
}

interface Props {
  limit?: number;
}

const Products = ({ limit }: Props) => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useGetProductsQuery(
    limit ? undefined : { limit: PAGE_SIZE, skip: (page - 1) * PAGE_SIZE }
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong</p>;

  const allProducts = data?.products ?? [];

  const displayProducts = limit
    ? [...allProducts].sort((a, b) => b.rating - a.rating).slice(0, limit)
    : allProducts;

  return (
    <div className="pt-5 pb-16">
      <div className="flex justify-between items-center mb-6">
        {limit ? (
          <h2 className="text-[#001a2e] text-4xl font-black uppercase">Featured Products</h2>
        ) : (
          <div className="text-sm breadcrumbs">
            <ul>
              <li><Link to="/" className="text-[#001a2e] font-semibold">Home</Link></li>
              <li className="text-gray-400 font-medium">Products</li>
            </ul>
          </div>
        )}
        {limit && (
          <Link to="/product" className="text-sm text-[#001a2e] font-semibold hover:underline hover:text-cyan-400 transition-colors duration-300">
            Show All →
          </Link>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-4">
        {displayProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {!limit && <Pagination page={page} total={data?.total ?? 0} onPageChange={(p) => { setPage(p); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />}
    </div>
  );
};

export default Products;
