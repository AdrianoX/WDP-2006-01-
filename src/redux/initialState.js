export const imageData = [
  { image: 'https://cdn.pixabay.com/photo/2017/03/28/12/13/chairs-2181968__340.jpg' },
  {
    image: 'https://cdn.pixabay.com/photo/2016/06/10/01/05/hotel-room-1447201__340.jpg',
  },
  {
    image: 'https://cdn.pixabay.com/photo/2016/06/10/01/05/hotel-room-1447201__340.jpg',
  },
];

const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      price: 30,
      oldPrice: 50,
      stars: 4,
      rated: true,
      promo: 'sale',
      newFurniture: true,
      favorite: 'yes',
      compare: '',
      bgImageUrl:
        'https://cdn.pixabay.com/photo/2016/04/18/13/53/room-1336497__340.jpg',
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      price: 30,
      oldPrice: 45,
      stars: 2,
      rated: false,
      promo: 'sale',
      newFurniture: true,
      favorite: '',
      compare: 'yes',
      bgImageUrl:
        'https://cdn.pixabay.com/photo/2017/03/28/12/13/chairs-2181968__340.jpg',
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      price: 30,
      oldPrice: null,
      stars: 3,
      rated: true,
      promo: 'sale',
      newFurniture: true,
      favorite: 'yes',
      compare: 'yes',
      bgImageUrl:
        'https://cdn.pixabay.com/photo/2016/11/19/13/06/bed-1839184_960_720.jpg',
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      price: 30,
      oldPrice: 63,
      stars: 4,
      rated: true,
      promo: 'sale',
      newFurniture: true,
      favorite: '',
      compare: '',
      bgImageUrl:
        'https://cdn.pixabay.com/photo/2018/01/26/08/15/dining-room-3108037_960_720.jpg',
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      price: 30,
      oldPrice: 55,
      stars: 2,
      rated: false,
      promo: 'sale',
      newFurniture: true,
      favorite: '',
      compare: '',
      bgImageUrl:
        'https://cdn.pixabay.com/photo/2016/01/26/11/09/design-1162241__340.jpg',
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      price: 30,
      oldPrice: null,
      stars: 2,
      rated: false,
      promo: 'sale',
      newFurniture: true,
      favorite: '',
      compare: '',
      bgImageUrl:
        'https://cdn.pixabay.com/photo/2015/09/04/23/29/minimal-923194__340.jpg',
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      price: 30,
      oldPrice: 70,
      stars: 5,
      rated: true,
      promo: 'sale',
      newFurniture: true,
      favorite: '',
      compare: '',
      bgImageUrl:
        'https://cdn.pixabay.com/photo/2016/06/10/01/05/hotel-room-1447201__340.jpg',
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      price: 30,
      oldPrice: 40,
      stars: 2,
      rated: false,
      promo: 'sale',
      newFurniture: true,
      favorite: '',
      compare: '',
      bgImageUrl:
        'https://cdn.pixabay.com/photo/2019/03/23/14/14/chair-4075443__340.jpg',
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      price: 30,
      oldPrice: 52,
      stars: 3,
      rated: true,
      promo: 'sale',
      newFurniture: true,
      favorite: '',
      compare: '',
      bgImageUrl:
        'https://cdn.pixabay.com/photo/2017/03/10/10/07/bathroom-2132342__340.jpg',
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      price: 30,
      oldPrice: null,
      stars: 2,
      rated: false,
      promo: 'sale',
      newFurniture: true,
      favorite: '',
      compare: '',
      bgImageUrl:
        'https://cdn.pixabay.com/photo/2017/12/27/14/42/furniture-3042835_960_720.jpg',
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      price: 30,
      oldPrice: 50,
      stars: 2,
      rated: false,
      promo: 'sale',
      newFurniture: true,
      favorite: '',
      compare: '',
      bgImageUrl:
        'https://cdn.pixabay.com/photo/2017/08/06/11/08/white-2591357__340.jpg',
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      price: 30,
      oldPrice: 42,
      stars: 4,
      rated: true,
      promo: 'sale',
      newFurniture: true,
      favorite: '',
      compare: '',
      bgImageUrl:
        'https://cdn.pixabay.com/photo/2018/05/02/09/01/children-3368013__340.jpg',
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      price: 30,
      oldPrice: 35,
      stars: 5,
      rated: true,
      promo: 'sale',
      newFurniture: true,
      favorite: '',
      compare: '',
      bgImageUrl:
        'https://cdn.pixabay.com/photo/2014/02/21/00/09/chair-270980__340.jpg',
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      price: 30,
      oldPrice: null,
      stars: 2,
      rated: false,
      promo: 'sale',
      newFurniture: true,
      favorite: '',
      compare: '',
      bgImageUrl:
        'https://cdn.pixabay.com/photo/2017/09/15/12/10/mockup-2752025__340.jpg',
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'bed',
      price: 30,
      oldPrice: 45,
      stars: 2,
      rated: false,
      promo: 'sale',
      newFurniture: true,
      favorite: '',
      compare: '',
      bgImageUrl:
        'https://cdn.pixabay.com/photo/2014/11/06/18/50/living-room-519682__340.jpg',
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'bed',
      price: 30,
      oldPrice: 48,
      stars: 3,
      rated: true,
      promo: 'sale',
      newFurniture: true,
      favorite: '',
      compare: '',
      bgImageUrl:
        'https://cdn.pixabay.com/photo/2015/12/05/23/45/sofa-1078931__340.jpg',
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      price: 30,
      oldPrice: 51,
      stars: 2,
      rated: true,
      promo: 'sale',
      newFurniture: true,
      favorite: '',
      compare: '',
      bgImageUrl:
        'https://cdn.pixabay.com/photo/2017/03/19/09/02/sofa-2155865__340.jpg',
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      price: 30,
      oldPrice: 50,
      stars: 2,
      rated: false,
      promo: 'sale',
      newFurniture: true,
      favorite: '',
      compare: '',
      bgImageUrl:
        'https://cdn.pixabay.com/photo/2018/07/14/17/19/interior-3538020__340.jpg',
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'bed',
      price: 30,
      oldPrice: null,
      stars: 2,
      rated: false,
      promo: 'sale',
      newFurniture: true,
      favorite: '',
      compare: '',
      bgImageUrl:
        'https://cdn.pixabay.com/photo/2017/09/16/08/12/flowerpots-2754775__340.jpg',
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      price: 30,
      oldPrice: 40,
      stars: 2,
      rated: false,
      promo: 'sale',
      newFurniture: true,
      favorite: '',
      compare: '',
      bgImageUrl: 'https://cdn.pixabay.com/photo/2016/01/23/23/54/bed-1158267__340.jpg',
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      price: 30,
      oldPrice: 35,
      stars: 3,
      rated: false,
      promo: 'sale',
      newFurniture: true,
      favorite: '',
      compare: '',
      bgImageUrl: 'https://cdn.pixabay.com/photo/2014/12/21/23/40/bed-575793__340.png',
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'bed',
      price: 30,
      oldPrice: 40,
      stars: 3,
      rated: true,
      promo: 'sale',
      newFurniture: true,
      favorite: '',
      compare: '',
      bgImageUrl: 'https://cdn.pixabay.com/photo/2013/08/15/04/18/teak-172642__340.jpg',
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      price: 30,
      oldPrice: 45,
      stars: 2,
      rated: false,
      promo: 'sale',
      newFurniture: true,
      favorite: '',
      compare: '',
      bgImageUrl:
        'https://cdn.pixabay.com/photo/2015/09/22/14/29/holiday-951773__340.jpg',
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      price: 30,
      oldPrice: null,
      stars: 2,
      rated: true,
      promo: 'sale',
      newFurniture: true,
      favorite: '',
      compare: '',
      bgImageUrl:
        'https://cdn.pixabay.com/photo/2017/02/20/15/28/home-2082922__340.jpg',
    },
    {
      id: 'aenean-ru-bristique-25',
      name: 'Aenean Ru Bristique 25',
      category: 'chair',
      price: 30,
      oldPrice: 50,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: 'yes',
      compare: '',
      bgImageUrl:
        'https://cdn.pixabay.com/photo/2017/03/10/10/07/bathroom-2132342__340.jpg',
    },
    {
      id: 'aenean-ru-bristique-26',
      name: 'Aenean Ru Bristique 26',
      category: 'chair',
      price: 30,
      oldPrice: 50,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: 'yes',
      compare: '',
      bgImageUrl:
        'https://cdn.pixabay.com/photo/2017/08/06/11/08/white-2591357__340.jpg',
    },
    {
      id: 'aenean-ru-bristique-27',
      name: 'Aenean Ru Bristique 27',
      category: 'chair',
      price: 30,
      oldPrice: 50,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: 'yes',
      compare: '',
      bgImageUrl:
        'https://cdn.pixabay.com/photo/2016/04/18/13/53/room-1336497__340.jpg',
    },
    {
      id: 'aenean-ru-bristique-28',
      name: 'Aenean Ru Bristique 28',
      category: 'chair',
      price: 30,
      oldPrice: 50,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: 'yes',
      compare: '',
      bgImageUrl:
        'https://cdn.pixabay.com/photo/2017/12/27/14/42/furniture-3042835_960_720.jpg',
    },
    {
      id: 'aenean-ru-bristique-29',
      name: 'Aenean Ru Bristique 29',
      category: 'sofa',
      price: 30,
      oldPrice: 50,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: 'yes',
      compare: '',
      bgImageUrl:
       'https://cdn.pixabay.com/photo/2018/05/02/09/01/children-3368013__340.jpg',
    },
    {
      id: 'aenean-ru-bristique-30',
      name: 'Aenean Ru Bristique 30',
      category: 'sofa',
      price: 30,
      oldPrice: 50,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: 'yes',
      compare: '',
      bgImageUrl:
        'https://cdn.pixabay.com/photo/2014/02/21/00/09/chair-270980__340.jpg',
    },
    {
      id: 'aenean-ru-bristique-31',
      name: 'Aenean Ru Bristique 31',
      category: 'sofa',
      price: 30,
      oldPrice: 50,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: 'yes',
      compare: '',
      bgImageUrl:
        'https://cdn.pixabay.com/photo/2017/09/15/12/10/mockup-2752025__340.jpg',
    },
    {
      id: 'aenean-ru-bristique-32',
      name: 'Aenean Ru Bristique 32',
      category: 'sofa',
      price: 30,
      oldPrice: 50,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: 'yes',
      compare: '',
      bgImageUrl:
        'https://cdn.pixabay.com/photo/2014/11/06/18/50/living-room-519682__340.jpg',
    },
    {
      id: 'aenean-ru-bristique-33',
      name: 'Aenean Ru Bristique 33',
      category: 'table',
      price: 30,
      oldPrice: 50,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: 'yes',
      compare: '',
      bgImageUrl:
        'https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068220_960_720.jpg',
    },
    {
      id: 'aenean-ru-bristique-34',
      name: 'Aenean Ru Bristique 34',
      category: 'table',
      price: 30,
      oldPrice: 50,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: 'yes',
      compare: '',
      bgImageUrl:
        'https://cdn.pixabay.com/photo/2016/03/26/13/09/notebook-1280538_960_720.jpg',
    },
    {
      id: 'aenean-ru-bristique-35',
      name: 'Aenean Ru Bristique 35',
      category: 'table',
      price: 30,
      oldPrice: 50,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: 'yes',
      compare: '',
      bgImageUrl:
        'https://cdn.pixabay.com/photo/2016/12/30/07/59/kitchen-1940174_960_720.jpg',
    },
    {
      id: 'aenean-ru-bristique-36',
      name: 'Aenean Ru Bristique 36',
      category: 'table',
      price: 30,
      oldPrice: 50,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: 'yes',
      compare: '',
      bgImageUrl:
        'https://cdn.pixabay.com/photo/2017/09/04/18/39/coffee-2714970_960_720.jpg',
    },
    {
      id: 'aenean-ru-bristique-37',
      name: 'Aenean Ru Bristique 37',
      category: 'dining',
      price: 30,
      oldPrice: 50,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: 'yes',
      compare: '',
      bgImageUrl:
        'https://cdn.pixabay.com/photo/2018/01/26/08/15/dining-room-3108037_960_720.jpg',
    },
    {
      id: 'aenean-ru-bristique-38',
      name: 'Aenean Ru Bristique 38',
      category: 'dining',
      price: 30,
      oldPrice: 50,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: 'yes',
      compare: '',
      bgImageUrl:
        'https://cdn.pixabay.com/photo/2017/06/13/22/42/kitchen-2400367_960_720.jpg',
    },
    {
      id: 'aenean-ru-bristique-39',
      name: 'Aenean Ru Bristique 39',
      category: 'dining',
      price: 30,
      oldPrice: 50,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: 'yes',
      compare: '',
      bgImageUrl:
        'https://cdn.pixabay.com/photo/2020/03/26/20/54/table-4971788_960_720.jpg',
    },
    {
      id: 'aenean-ru-bristique-40',
      name: 'Aenean Ru Bristique 40',
      category: 'dining',
      price: 30,
      oldPrice: 50,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: 'yes',
      compare: '',
      bgImageUrl:
        'https://cdn.pixabay.com/photo/2013/09/24/12/08/apartment-185779_960_720.jpg',
    },
  ],

  sales: [
    {
      title: 'GUEST ROOM',
      subtitle: 'SOFA',
      discount: '-20%',
      image:
        'url("https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325_1280.jpg")',
    },
    {
      title: 'OFFICE CHAIR',
      subtitle: 'COLLECTION',
      discount: '$ 200.00',
      image:
        'url("https://cdn.pixabay.com/photo/2016/10/23/17/24/chair-1763659_1280.jpg")',
    },
    {
      title: 'SPECIAL COLLECTION',
      subtitle: 'SAVE UP 45% OF FURNITURE',
      discount: '',
      image:
        'url("https://cdn.pixabay.com/photo/2018/07/31/20/08/interior-3575815_1280.jpg")',
    },
  ],

  favorites: ['aenean-ru-bristique-1'],

  cart: {
    products: [],
  },

  ratings: [
    {
      id: 0,
      person: 'John Smith',
      occupation: 'Furniture client',
      rating:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'https://i.postimg.cc/TP9JJgYB/managerr.png',
    },
    {
      id: 1,
      person: 'George Bregs',
      occupation: 'Furniture client',
      rating:
        'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.',
      image: 'https://i.postimg.cc/RhB8V5jL/333.png',
    },
    {
      id: 2,
      person: 'Susan Howl',
      occupation: 'Furniture client',
      rating:
        'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda es.',
      image: 'https://i.postimg.cc/SKmpV9ZG/777.jpg',
    },
  ],

  brands: [
    {
      id: 'Brand-1',
      name: 'Brand 1',
      logo: 'https://i.postimg.cc/9FgtGrYL/Layer-138.png',
    },

    {
      id: 'Brand-2',
      name: 'Brand 2',
      logo: 'https://i.postimg.cc/CLxsBjkZ/Layer-139.png',
    },

    {
      id: 'Brand-3',
      name: 'Brand 3',
      logo: 'https://i.postimg.cc/d0r2PnPf/Layer-140.png',
    },

    {
      id: 'Brand-4',
      name: 'Brand 4',
      logo: 'https://i.postimg.cc/VkS94m7m/Layer-141.png',
    },

    {
      id: 'Brand-5',
      name: 'Brand 5',
      logo: 'https://i.postimg.cc/vZprNkj9/Layer-142.png',
    },

    {
      id: 'Brand-6',
      name: 'Brand 6',
      logo: 'https://i.postimg.cc/9FgtGrYL/Layer-138.png',
    },
  ],

  viewport: '',
};

export default initialState;
