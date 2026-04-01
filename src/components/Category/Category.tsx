import { useGetCategoriesQuery } from "../../features/products/productApi";

const categoryImages: Record<string, string> = {
  'beauty':              'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=90',
  'fragrances':          'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=600&q=90',
  'furniture':           'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&q=90',
  'groceries':           'https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?w=600&q=60',
  'home-decoration':     'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=600&q=90',
  'kitchen-accessories': 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=90',
  'laptops':             'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=90',
  'mens-shirts':         'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=90',
  'mens-shoes':          'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=90',
  'mens-watches':        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=90',
  'smartphones':         'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=90',
  'skin-care':           'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=90',
  'sunglasses':          'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=90',
  'tops':                'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&q=90',
  'womens-bags':         'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=90',
  'womens-dresses':      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=90',
  'womens-jewellery':    'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=90',
  'womens-shoes':        'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=90',
  'womens-watches':      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&q=90',
  'vehicle':             'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=90',
  'motorcycle':          'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=90',
  'tablets':             'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=90',
  'sports-accessories':  'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&q=90',
  'mobile-accessories':  'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&q=90',
};

const fallback = 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=90';

const Category = ({ limit }: { limit?: number }) => {
    const { data: categories, isLoading, isError } = useGetCategoriesQuery();

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Something went wrong</p>;

    const list = limit ? categories?.slice(0, limit) : categories;

    return (
        <div className="py-10">
            <h2 className="text-[#001a2e] text-4xl font-black uppercase mb-6">Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {list?.map((cat) => (
                    <div key={cat.slug} className="relative overflow-hidden cursor-pointer group h-80">
                        {/* image */}
                        <img
                            src={categoryImages[cat.slug] || fallback}
                            alt={cat.name}
                            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                        />
                        {/* dark overlay */}
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500" />
                        {/* text */}
                        <div className="absolute inset-0 flex flex-col justify-end p-5">
                            <span className="text-white text-xs font-semibold tracking-[3px] uppercase opacity-80">
                                Explore
                            </span>
                            <h3 className="text-white text-xl font-black uppercase tracking-wide leading-tight">
                                {cat.name}
                            </h3>
                            <span className="mt-2 text-white/70 text-xs underline underline-offset-4 group-hover:text-white transition-colors duration-300">
                                Shop Now →
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
