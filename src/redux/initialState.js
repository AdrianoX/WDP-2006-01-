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
        'url("https://cdn.pixabay.com/photo/2016/04/18/13/53/room-1336497__340.jpg")',
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'table',
      price: 30,
      oldPrice: 45,
      stars: 2,
      rated: false,
      promo: 'sale',
      newFurniture: true,
      favorite: '',
      compare: 'yes',
      bgImageUrl:
        'url("https://cdn.pixabay.com/photo/2017/03/28/12/13/chairs-2181968__340.jpg")',
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
        'url("https://cdn.pixabay.com/photo/2016/11/19/13/06/bed-1839184_960_720.jpg")',
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
        'url("https://cdn.pixabay.com/photo/2018/01/26/08/15/dining-room-3108037_960_720.jpg")',
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
        'url("https://cdn.pixabay.com/photo/2016/01/26/11/09/design-1162241__340.jpg")',
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
        'url("https://cdn.pixabay.com/photo/2015/09/04/23/29/minimal-923194__340.jpg")',
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
        'url("https://cdn.pixabay.com/photo/2016/06/10/01/05/hotel-room-1447201__340.jpg")',
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
        'url("https://cdn.pixabay.com/photo/2019/03/23/14/14/chair-4075443__340.jpg")',
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
        'url("https://cdn.pixabay.com/photo/2017/03/10/10/07/bathroom-2132342__340.jpg")',
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
        'url("https://cdn.pixabay.com/photo/2017/12/27/14/42/furniture-3042835_960_720.jpg")',
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
        'url("https://cdn.pixabay.com/photo/2017/08/06/11/08/white-2591357__340.jpg")',
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
        'url("https://cdn.pixabay.com/photo/2018/05/02/09/01/children-3368013__340.jpg")',
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
        'url("https://cdn.pixabay.com/photo/2014/02/21/00/09/chair-270980__340.jpg")',
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
        'url("https://cdn.pixabay.com/photo/2017/09/15/12/10/mockup-2752025__340.jpg")',
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
        'url("https://cdn.pixabay.com/photo/2014/11/06/18/50/living-room-519682__340.jpg")',
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
        'url("https://cdn.pixabay.com/photo/2015/12/05/23/45/sofa-1078931__340.jpg")',
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
        'url("https://cdn.pixabay.com/photo/2017/03/19/09/02/sofa-2155865__340.jpg")',
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
        'url("https://cdn.pixabay.com/photo/2018/07/14/17/19/interior-3538020__340.jpg")',
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
        'url("https://cdn.pixabay.com/photo/2017/09/16/08/12/flowerpots-2754775__340.jpg")',
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
      bgImageUrl:
        'url("https://cdn.pixabay.com/photo/2016/01/23/23/54/bed-1158267__340.jpg")',
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
      bgImageUrl:
        'url("https://cdn.pixabay.com/photo/2014/12/21/23/40/bed-575793__340.png")',
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
      bgImageUrl:
        'url("https://cdn.pixabay.com/photo/2013/08/15/04/18/teak-172642__340.jpg")',
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
        'url("https://cdn.pixabay.com/photo/2015/09/22/14/29/holiday-951773__340.jpg")',
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
        'url("https://cdn.pixabay.com/photo/2017/02/20/15/28/home-2082922__340.jpg")',
    },
  ],

  cart: {
    products: [],
  },

  ratings: [
    {
      person: 'John Smith',
      occupation: 'Furniture client',
      rating:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'https://i.postimg.cc/TP9JJgYB/managerr.png',
    },
  ],
};

export default initialState;
