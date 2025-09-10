import { Button } from "@/components/ui/button";
import { stripe } from "@/lib/stripe";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "@/components/carousel";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });
  console.log(products);
  return (
    <div>
      <section className=" w-3/4 bg-[#A68AFE] rounded-xl mx-auto mt-5 py-8 sm:py-12">
        <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
          <div className="max-w-md space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Welcome to E-Kart
            </h2>
            <p className="text-gray-100 text-lg">
              Discover the latest products at the best prices.
            </p>
            <Button
              asChild
              variant="default"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-black text-white"
            >
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full px-6 py-3"
              >
                Browse All Products
              </Link>
            </Button>
          </div>
          <Image
            alt="Hero Image"
            src={products.data[0].images[0]}
            className="rounded"
            width={450}
            height={450}
          />
        </div>
      </section>

      <section className="py-8">
        <Carousel products={products.data} />
      </section>
    </div>
  );
}
