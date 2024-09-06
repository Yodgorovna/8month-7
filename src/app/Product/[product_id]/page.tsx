import { ProductData } from "../../../data/product";
import { notFound } from "next/navigation";

const ProductDetail = ({ params }: { params: { product_id: string } }) => {
  const product = ProductData.find((p) => p.id === params.product_id);

  if (!product) {
    return notFound();
  }

  return (
    <div className="container mx-auto flex items-center gap-8 pb-8">
      <img
        src={product.img}
        alt={product.title}
        className="w-[300px] h-full object-cover rounded-lg mt-4"
      />
      <div>
        <h1 className="text-2xl font-bold text-[40px]">{product.title}</h1>
        <p className="mt-4 text-gray-600">{product.text}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
