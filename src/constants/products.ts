import { Product } from "../types/ecommerce";

export const products: Product[] = [
  {
    id: "p1",
    name: "Air Flex Runner",
    price: 129,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    category: "shoes",
    rating: 4.8,
    description: "Lightweight running shoes with breathable mesh and cushioned sole.",
    inStock: true
  },
  {
    id: "p2",
    name: "Urban Street Sneaker",
    price: 119,
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=900&q=80",
    category: "shoes",
    rating: 4.6,
    description: "Minimal streetwear sneaker with soft interior lining and durable outsole.",
    inStock: true
  },
  {
    id: "p3",
    name: "Classic White Tee",
    price: 34,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
    category: "clothing",
    rating: 4.5,
    description: "Premium cotton t-shirt with regular fit and clean finish.",
    inStock: true
  },
  {
    id: "p4",
    name: "Oversized Hoodie",
    price: 79,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=80",
    category: "clothing",
    rating: 4.7,
    description: "Soft brushed hoodie with modern oversized fit and front pocket.",
    inStock: true
  },
  {
    id: "p5",
    name: "Everyday Denim Jacket",
    price: 99,
    image:
      "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=900&q=80",
    category: "clothing",
    rating: 4.4,
    description: "Mid-weight denim jacket designed for layering all year.",
    inStock: true
  },
  {
    id: "p6",
    name: "Leather Crossbody Bag",
    price: 89,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=80",
    category: "accessories",
    rating: 4.6,
    description: "Compact leather crossbody with adjustable strap and secure zipper.",
    inStock: true
  },
  {
    id: "p7",
    name: "Silver Chain Watch",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=80",
    category: "accessories",
    rating: 4.7,
    description: "Elegant steel watch with minimal dial and polished bracelet strap.",
    inStock: true
  },
  {
    id: "p8",
    name: "Sport Utility Cap",
    price: 29,
    image:
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=900&q=80",
    category: "accessories",
    rating: 4.3,
    description: "Curved peak cap with adjustable closure and breathable fabric.",
    inStock: true
  },
  {
    id: "p9",
    name: "Trail Performance Shoe",
    price: 139,
    image:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=900&q=80",
    category: "shoes",
    rating: 4.8,
    description: "Grip-focused trail sneaker for comfort and support on long walks.",
    inStock: true
  },
  {
    id: "p10",
    name: "Minimal Canvas Backpack",
    price: 69,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    category: "accessories",
    rating: 4.5,
    description: "Clean everyday backpack with roomy compartment and laptop sleeve.",
    inStock: true
  }
];

export const featuredProducts = products.slice(0, 4);

export function getProductById(productId: string): Product | undefined {
  return products.find((product) => product.id === productId);
}
