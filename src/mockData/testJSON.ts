const testProducts = [
  {
    id: '159fdd2f-2b12-46de-9654-d9139525ba87',
    title: 'Gold Headphones',
    description: 'Professional headphones with gold trim.',
    price: 449.99,
    discountedPrice: 382.49,
    image: {
      url: 'https://static.cloud.noroff.dev/api/online-shop/3-headphones-beats.jpg',
      alt: 'Gold headphones laying on a white background',
    },
    rating: 4,
    tags: ['headphones'],
    reviews: [
      {
        id: '88e11191-d2e5-4bfb-9bcb-d7e158284657',
        username: 'Michael J.',
        rating: 4,
        description: 'Good sound quality.',
      },
    ],
  },
  {
    id: '109566af-c5c2-4f87-86cb-76f36fb8d378',
    title: 'Vanilla Perfume',
    description:
      "Women's perfume that smells warm and sweet, with nuances of wood and jasmine.",
    price: 2599.99,
    discountedPrice: 2079.99,
    image: {
      url: 'https://static.cloud.noroff.dev/api/online-shop/1-perfume-white.jpg',
      alt: 'White perfume bottle on a yellow background',
    },
    rating: 5,
    tags: ['perfume', 'beauty'],
    reviews: [
      {
        id: '90a61e3e-355a-42e4-b038-d91dcad33c20',
        username: 'Jim N.',
        rating: 5,
        description: 'My partner loves it, its her favourite.',
      },
    ],
  },
  {
    id: '3f5a9b12-4c8d-4e7f-a123-bc456def7890',
    title: 'Running Shoes',
    description: 'Lightweight running shoes with extra cushioning.',
    price: 999.99,
    discountedPrice: 999.99, // no discount
    image: {
      url: 'https://static.cloud.noroff.dev/api/online-shop/shoes.jpg',
      alt: 'White running shoes on a grey background',
    },
    rating: 3,
    tags: ['shoes', 'sport'],
    reviews: [
      {
        id: '12abc345-def6-7890-ghij-klmnopqrstuv',
        username: 'Sarah K.',
        rating: 3,
        description: 'Comfortable but runs a bit small.',
      },
    ],
  },
  {
    id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    title: 'Wireless Mouse',
    description: 'Ergonomic wireless mouse with long battery life.',
    price: 299.99,
    discountedPrice: 249.99,
    image: {
      url: 'https://static.cloud.noroff.dev/api/online-shop/mouse.jpg',
      alt: 'Black wireless mouse',
    },
    rating: 4,
    tags: ['electronics'],
    reviews: [
      { id: 'r1', username: 'Tom A.', rating: 4, description: 'Great mouse.' },
    ],
  },
  {
    id: 'b2c3d4e5-f6a7-8901-bcde-f12345678901',
    title: 'Yoga Mat',
    description: 'Non-slip yoga mat with alignment lines.',
    price: 350.0,
    discountedPrice: 350.0,
    image: {
      url: 'https://static.cloud.noroff.dev/api/online-shop/yoga-mat.jpg',
      alt: 'Purple yoga mat rolled out',
    },
    rating: 5,
    tags: ['sport', 'fitness'],
    reviews: [
      {
        id: 'r2',
        username: 'Lisa M.',
        rating: 5,
        description: 'Perfect thickness.',
      },
    ],
  },
  {
    id: 'c3d4e5f6-a7b8-9012-cdef-123456789012',
    title: 'Sunglasses',
    description: 'UV400 polarised sunglasses with titanium frame.',
    price: 799.99,
    discountedPrice: 599.99,
    image: {
      url: 'https://static.cloud.noroff.dev/api/online-shop/sunglasses.jpg',
      alt: 'Black sunglasses on white background',
    },
    rating: 4,
    tags: ['fashion', 'accessories'],
    reviews: [
      { id: 'r3', username: 'Erik B.', rating: 4, description: 'Looks great.' },
    ],
  },
  {
    id: 'd4e5f6a7-b8c9-0123-defa-234567890123',
    title: 'Coffee Maker',
    description: 'Drip coffee maker with programmable timer.',
    price: 649.99,
    discountedPrice: 649.99,
    image: {
      url: 'https://static.cloud.noroff.dev/api/online-shop/coffee-maker.jpg',
      alt: 'Silver coffee maker on a kitchen counter',
    },
    rating: 3,
    tags: ['kitchen'],
    reviews: [
      {
        id: 'r4',
        username: 'Anna S.',
        rating: 3,
        description: 'Does the job.',
      },
    ],
  },
  {
    id: 'e5f6a7b8-c9d0-1234-efab-345678901234',
    title: 'Backpack',
    description: '30L hiking backpack with waterproof coating.',
    price: 899.99,
    discountedPrice: 719.99,
    image: {
      url: 'https://static.cloud.noroff.dev/api/online-shop/backpack.jpg',
      alt: 'Green hiking backpack on white background',
    },
    rating: 5,
    tags: ['outdoor', 'travel'],
    reviews: [
      {
        id: 'r5',
        username: 'Jonas P.',
        rating: 5,
        description: 'Very spacious.',
      },
    ],
  },
  {
    id: 'f6a7b8c9-d0e1-2345-fabc-456789012345',
    title: 'Mechanical Keyboard',
    description: 'Compact TKL mechanical keyboard with blue switches.',
    price: 1199.99,
    discountedPrice: 999.99,
    image: {
      url: 'https://static.cloud.noroff.dev/api/online-shop/keyboard.jpg',
      alt: 'White mechanical keyboard on a desk',
    },
    rating: 5,
    tags: ['electronics', 'gaming'],
    reviews: [
      {
        id: 'r6',
        username: 'David L.',
        rating: 5,
        description: 'Satisfying to type on.',
      },
    ],
  },
  {
    id: 'a7b8c9d0-e1f2-3456-abcd-567890123456',
    title: 'Scented Candle',
    description: 'Soy wax candle with lavender and vanilla scent.',
    price: 149.99,
    discountedPrice: 149.99,
    image: {
      url: 'https://static.cloud.noroff.dev/api/online-shop/candle.jpg',
      alt: 'White candle in a glass jar',
    },
    rating: 4,
    tags: ['home', 'beauty'],
    reviews: [
      {
        id: 'r7',
        username: 'Mia T.',
        rating: 4,
        description: 'Smells amazing.',
      },
    ],
  },
  {
    id: 'b8c9d0e1-f2a3-4567-bcde-678901234567',
    title: 'Smart Watch',
    description: 'Fitness tracker with heart rate monitor and GPS.',
    price: 2499.99,
    discountedPrice: 1999.99,
    image: {
      url: 'https://static.cloud.noroff.dev/api/online-shop/smartwatch.jpg',
      alt: 'Black smart watch on white background',
    },
    rating: 4,
    tags: ['electronics', 'fitness'],
    reviews: [
      {
        id: 'r8',
        username: 'Chris N.',
        rating: 4,
        description: 'Battery lasts all week.',
      },
    ],
  },
  {
    id: 'c9d0e1f2-a3b4-5678-cdef-789012345678',
    title: 'Desk Lamp',
    description: 'LED desk lamp with adjustable colour temperature.',
    price: 399.99,
    discountedPrice: 319.99,
    image: {
      url: 'https://static.cloud.noroff.dev/api/online-shop/lamp.jpg',
      alt: 'White desk lamp on a wooden desk',
    },
    rating: 3,
    tags: ['home', 'office'],
    reviews: [
      {
        id: 'r9',
        username: 'Nora H.',
        rating: 3,
        description: 'Good light, flimsy arm.',
      },
    ],
  },
  {
    id: 'd0e1f2a3-b4c5-6789-defa-890123456789',
    title: 'Water Bottle',
    description: 'Insulated stainless steel bottle, keeps cold 24h.',
    price: 249.99,
    discountedPrice: 249.99,
    image: {
      url: 'https://static.cloud.noroff.dev/api/online-shop/bottle.jpg',
      alt: 'Blue water bottle on white background',
    },
    rating: 5,
    tags: ['sport', 'outdoor'],
    reviews: [
      {
        id: 'r10',
        username: 'Karl V.',
        rating: 5,
        description: 'No leaks at all.',
      },
    ],
  },
];

export default testProducts;
