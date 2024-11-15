export const products = [
    {
      id: 1,
      name: '經典休閒襯衫',
      price: 1280,
      originalPrice: 1580,
      image: '/image/slide1.jpg',
      category: '上衣',
      tags: ['新品', '熱賣'],
      description: '採用高質量面料，舒適透氣，適合日常穿著。',
      rating: 4.5,
      reviews: 128,
      isFeatured: true
    },
    {
      id: 2,
      name: '都會風格外套',
      price: 2580,
      originalPrice: 3080,
      image: '/image/slide2.jpg',
      category: '外套',
      tags: ['熱賣'],
      description: '簡約時尚的設計，適合各種場合。',
      rating: 4.8,
      reviews: 95,
      isFeatured: true
    },
    {
        id: 3,
        name: '都會風格外套',
        price: 580,
        originalPrice: 680,
        image: '/image/slide3.jpg',
        category: '褲子',
        tags: ['熱賣'],
        description: '簡約時尚的設計，適合各種場合。',
        rating: 4.8,
        reviews: 95,
        isFeatured: true
      },
      {
        id: 4,
        name: '都會風格外套',
        price: 580,
        originalPrice: 680,
        image: '/image/slide3.jpg',
        category: '褲子',
        tags: ['熱賣'],
        description: '簡約時尚的設計，適合各種場合。',
        rating: 4.8,
        reviews: 95,
        isFeatured: true
      },
      {
        id: 5,
        name: '都會風格外套',
        price: 580,
        originalPrice: 680,
        image: '/image/slide3.jpg',
        category: '褲子',
        tags: ['熱賣'],
        description: '簡約時尚的設計，適合各種場合。',
        rating: 4.8,
        reviews: 95,
        isFeatured: true
      },
      {
        id: 6,
        name: '都會風格外套',
        price: 577,
        originalPrice: 680,
        image: '/image/slide3.jpg',
        category: '褲子',
        tags: ['熱賣'],
        description: '簡約時尚的設計，適合各種場合。',
        rating: 4.8,
        reviews: 95,
        isFeatured: true
      },{
        id: 7,
        name: '都會風格外套',
        price: 599,
        originalPrice: 680,
        image: '/image/slide3.jpg',
        category: '褲子',
        tags: ['熱賣'],
        description: '簡約時尚的設計，適合各種場合。',
        rating: 4.8,
        reviews: 95,
        isFeatured: true
      },
      {
        id: 8,
        name: '都會風格外套',
        price: 588,
        originalPrice: 680,
        image: '/image/slide3.jpg',
        category: '褲子',
        tags: ['熱賣'],
        description: '簡約時尚的設計，適合各種場合。',
        rating: 4.8,
        reviews: 95,
        isFeatured: true
      },
    // ... 其他不重複的商品 ...
]
export const featuredProducts = products.filter(product => product.isFeatured)

export default products