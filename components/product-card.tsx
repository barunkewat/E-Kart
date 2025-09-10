import Link from "next/link";
import Stripe from "stripe";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { useState } from "react";

interface Props {
  product: Stripe.Product;
}

export const ProductCard = ({ product }: Props) => {
  const price = product.default_price as Stripe.Price;
  const [showFull, setShowFull] = useState(false);

  const truncateDescription = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  return (
    <Link href={`/products/${product.id}`} className="block h-full">
      <Card className="group hover:shadow-2xl transition duration-300 py-0 h-full flex flex-col border-gray-300 gap-0">
        {product.images && product.images[0] && (
          <div className="relative h-60 w-full">
            <Image
              src={product.images[0]}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="group-hover:opacity-90 transition-opacity duration-300 rounded-t-lg"
            />
          </div>
        )}
        <CardHeader className="p-4">
          <CardTitle className="text-xl -mb-8 font-bold text-gray-800">
            {product.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 flex-grow flex flex-col justify-between">
          {product.description && (
            <div className="text-gray-600 text-sm mb-2">
              {showFull
                ? product.description
                : truncateDescription(product.description, 15)}
              {product.description.split(" ").length > 15 && (
                <button
                  onClick={(e) => {
                    e.preventDefault(); // Link ko trigger hone se roke
                    setShowFull(!showFull);
                  }}
                  className="text-blue-600 ml-2 hover:underline"
                >
                  {showFull ? "Read less" : "Read more"}
                </button>
              )}
            </div>
          )}
          {price && price.unit_amount && (
            <p className="text-lg font-semibold text-gray-900">
              ${(price.unit_amount / 100).toFixed(2)}
            </p>
          )}
          <Button className="mt-4 bg-black text-white">View Details</Button>
        </CardContent>
      </Card>
    </Link>
  );
};
