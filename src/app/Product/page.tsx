import Link from 'next/link';
import { ProductData } from '../../data/product';



const ProductList = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      {ProductData.map((product) => (
        <div key={product.id} className="bg-white  rounded-lg p-4">
          <Link href={`/Product/${product.id}`}>
            <div className="cursor-pointer">
              <img
                src={product.img}
                alt={product.title}
                className="w-[239px]  object-cover rounded-t-lg"
              />
              <h2 className="text-lg font-bold mt-2">{product.title}</h2>
              <p className="text-gray-600">{product.text}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
