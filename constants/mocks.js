const integrations = [
  {
    id: 'revolut',
    name: 'Revolut',
    tags: ['integrations'],
    count: 147,
    connected: true,
    image: require('../assets/icons/revo.jpg')
  },
  {
    id: 'n26',
    name: 'N26',
    tags: ['integrations'],
    count: 16,
    connected: true,
    image: require('../assets/icons/n26.png')
  },
  {
    id: 'coinbase',
    name: 'Coinbase',
    tags: ['integrations'],
    count: 68,
    connected: true,
    image: require('../assets/icons/coinbase.png')
  },
  {
    id: 'airbnb',
    name: 'AirBnb',
    tags: ['integrations'],
    count: 17,
    connected: true,
    image: require('../assets/icons/airbnb.jpg')
  },
  {
    id: 'paypal',
    name: 'PayPal',
    tags: ['integrations'],
    count: 47,
    connected: true,
    image: require('../assets/icons/paypal.png')
  },
  {
    id: 'kayak',
    name: 'Kayak',
    tags: ['integrations'],
    count: 47,
    connected: true,
    image: require('../assets/icons/kayak.jpg')
  },
];

const profile = {
  tags: 'personalData',
  username: 'Renaissance-User',
  fullName: 'Alice Ruth',
  location: 'London',
  email: 'login@renaissance.com',
  phone: '+44 7356 625396',
  age: 23,
  avatar: require('../assets/images/avatar.png'),
  security: 1000,
  monthly_cap: 5000,
  notifications: true,
  newsletter: false,
  verified: true
};

const profilesData = [
  {
    tags: 'data',
    plainData: true,
    tagName: 'Full Name',
    info: 'Alice Ruth',
  },
  {
    tags: 'data',
    plainData: true,
    tagName: 'Phone Number',
    info: '+44 7356 625396',
  },
  {
    tags: 'data',
    plainData: true,
    tagName: 'Age',
    info: 23,
  },
  {
    tags: 'data',
    plainData: false,
    tagName: 'Add Passport',
    navigate: 'AddPassport',
    info: false,
    image: require('../assets/icons/id.png')
  },
  {
    tags: 'data',
    plainData: false,
    tagName: 'Add Your Driving Licence',
    navigate: 'AddDl',
    info: true,
    image: require('../assets/icons/dl.png'),
  }
]

const buttons = [
  {
    tags: 'sign-in',
    data: 'Sign In with Renaissance'
  }
]

const services = [
  {
    id: 1, 
    name: 'Revolut',
    description: 'Revolut Ltd is a UK financial technology company that offers banking services including a pre-paid debit card, currency exchange, cryptocurrency exchange and peer-to-peer payments. The Revolut mobile app supports spending and ATM withdrawals in 120 currencies and sending in 29 currencies directly from the app.',
    tags: ['Finance', 'London', '🇬🇧 '],
    images: [
      require('../assets/icons/revo.jpg'),
      require('../assets/images/revo2.jpg'),
      require('../assets/images/revo3.png'),
      // showing only 3 images, show +3 for the rest
      require('../assets/images/revo.jpg'),
      require('../assets/images/revo2.jpg'),
      require('../assets/images/revo3.png'),
    ]
  }
];

const nucypher = {
  message_kit: "AyMGeXdCe+YYyo25x5k41bJU3/6SCVv9qo6wFJq2YcoxA7oKCfdz9VngE9yZIiveHziZlJ9JDh1T46v986pMoFoTvLlr2/psfYB+2BCYH3ZLwqCQ5xbD2uMMKheoVciunUUDmo+AzLAem4uDm2v6Df27lneJQGkoznRbAdY63R0P4xlCdomoSKQr/ujHSjILy/yUEuGmy+mNq3r5aQMw8tzBwDxgteemtE5PDz0iPP/DjFrd3+SPNiYCIrY5olqxx4tYybxLHtaqLbWGfWqnVJeLjyW+dplgt7suMWwBSWu+k6u5kAWcvylC9DdKFy8ClpNpsC5oL65yvt8=",
  label: "test-66",
  pek: "03e09cfde3721a6afbf33355b4ef6b7c96c00fbfdeb15b9eb533edad12e0487087",
  avk: "025318b7140aab7fc9f588b5b98d4aeaba1b94eb8b711c90c65c3a34403f757d08",
  bvk: "03cb4b7dff26e969b0e6bf193a668169736dcb9ee32d980c6b2303aeba36edd5f7",
  bek: "0287cd377daa91bee7dfb4f64dcbde761f7cae10c730d98427339c3c13b4e3841b",
  expiration: "2019-07-19T12:56:26.976816"
}

const privatesData = [
  {
    tags: 'sign-in',
    tagName: 'Full Name',
    info: 'Alice Ruth',
  },
  {
    tags: 'sign-in',
    tagName: 'Birth Date',
    info: '01-01-2000',
  },
  {
    tags: 'sign-in',
    tagName: 'Birth Place',
    info: 'London',
  },
  {
    tags: 'sign-in',
    tagName: 'Passport Number',
    info: '1111'
    },
  {
    tags: 'sign-in',
    tagName: 'Country',
    info: 'UK',
  }
]


export {
  integrations,
  profile,
  profilesData,
  buttons,
  services,
  nucypher,
  privatesData
}