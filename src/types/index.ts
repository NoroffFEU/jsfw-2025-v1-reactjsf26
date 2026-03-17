interface ProductImage {
  url: string;
  alt: string;
}

interface Review {
  id: string;
  username: string;
  rating: number;
  description: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  image: ProductImage;
  rating: number;
  tags: string[];
  reviews: Review[];
}

export interface CartItem {
  id: Product['id'];
  title: Product['title'];
  price: Product['discountedPrice'];
  image: Product['image'];
  quantity: number;
}

export interface CartSummary {
  itemCount: number;
  totalCost: number;
}

export interface CartState extends CartSummary {
  items: CartItem[];
}

interface Meta {
  isFirstPage: boolean;
  isLastPage: boolean;
  currentPage: number;
  previousPage: number | null;
  nextPage: number | null;
  pageCount: number;
  totalCount: number;
}

export interface ApiAllProducts {
  data: Product[];
  meta: Meta;
}

export interface ApiSingleProducts {
  data: Product;
  meta: Record<string, never>;
}
