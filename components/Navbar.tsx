import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 mt-5 w-[60%] mx-auto z-50 shadow rounded-full bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex justify-between items-center px-8 py-4">
        <Link href={"/"} className="hover:text-blue-600">
          E-Kart
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link href={"/"} className="hover:text-blue-600">Home</Link>
          <Link href={"/products"} className="hover:text-blue-600">
            Products
          </Link>
          <Link href={"/checkout"} className="hover:text-blue-600">
            Checkout
          </Link>
        </div>
        <div className="flex justify-between items-center space-x-4">
            <ShoppingCart className="text-blue-600 font-semibold" />
        </div>
      </div>
    </nav>
  );
}
