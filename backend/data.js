import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Ved',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8), //bcrypt.hashSync is function that changes pass to hashtags
      isAdmin: true,
    },
    {
      name: 'Tara',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
    products: [
      {
        name: 'ABC Speaker',
        category: 'Speaker',
        image: '/images/p1.jpg',
        price: 1200,
        countInStock: 10,
        brand: 'Xiaomi',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        name: 'ABC Speaker',
        category: 'Speaker',
        image: '/images/p2.jpg',
        price: 1000,
        countInStock: 5,
        brand: 'Xiaomi',
        rating: 4.0,
        numReviews: 10,
        description: 'high quality product',
      },
      { 
        name: 'ABCD Speaker',
        category: 'Speaker',
        image: '/images/p3.jpg',
        price: 2200,
        countInStock: 0,
        brand: 'Xiaomi',
        rating: 4.8,
        numReviews: 17,
        description: 'high quality product',
      },
      {
        name: 'Ab speaker',
        category: 'speaker',
        image: '/images/p4.jpg',
        price: 7800,
        countInStock: 20,
        brand: 'Xiaomi',
        rating: 4.5,
        numReviews: 14,
        description: 'high quality product',
      },
      {
       name: 'ABC Headphones',
        category: 'Headphones',
        image: '/images/p5.jpg',
        price: 6500,
        countInStock: 90,
        brand: 'Xiaomi',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        name: 'AB Earphones',
        category: 'Pants',
        image: '/images/p6.jpg',
        price: 1390,
        countInStock: 4,
        brand: 'Xiaomi',
        rating: 4.5,
        numReviews: 15,
        description: 'high quality product',
      },
    ],
  };
  
  export default data;