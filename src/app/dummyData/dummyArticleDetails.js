const dummyArticleDetails = [
  {
    id: 1,
    title: 'The Golden Sands Of Florida And California',
    date: '20 Maret 2024',
    category: 'Health',
    imageUrl: '/assets/images/articlePlaceholder.png', // Ganti dengan path gambar yang sesuai
    content: `Lorem ipsum dolor sit amet, elit consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, elit consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
  },
  {
    id: 2,
    title: 'The Future of Technology: AI and Beyond',
    date: '20 Maret 2024',
    category: 'Health',
    imageUrl: '/assets/images/articlePlaceholder.png', // Ganti dengan path gambar yang sesuai
    content: `Lorem ipsum dolor sit amet, elit consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, elit consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
  },
  {
    id: 3,
    title: 'The Golden Sands Of Florida And California',
    date: '20 Maret 2024',
    category: 'Health',
    imageUrl: '/assets/images/articlePlaceholder.png', // Ganti dengan path gambar yang sesuai
    content: `Lorem ipsum dolor sit amet, elit consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, elit consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
  },
  {
    id: 4,
    title: 'The Future of Technology: AI and Beyond',
    date: '20 Maret 2024',
    category: 'Health',
    imageUrl: '/assets/images/articlePlaceholder.png', // Ganti dengan path gambar yang sesuai
    content: `Lorem ipsum dolor sit amet, elit consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, elit consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
  },
  {
    id: 5,
    title: 'The Golden Sands Of Florida And California',
    date: '20 Maret 2024',
    category: 'Health',
    imageUrl: '/assets/images/articlePlaceholder.png', // Ganti dengan path gambar yang sesuai
    content: `Lorem ipsum dolor sit amet, elit consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, elit consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
  },
  {
    id: 6,
    title: 'The Golden Sands Of Florida And California',
    date: '20 Maret 2024',
    category: 'Health',
    imageUrl: '/assets/images/articlePlaceholder.png', // Ganti dengan path gambar yang sesuai
    content: `Lorem ipsum dolor sit amet, elit consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, elit consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
  },
  {
    id: 7,
    title: 'The Golden Sands Of Florida And California',
    date: '20 Maret 2024',
    category: 'Health',
    imageUrl: '/assets/images/articlePlaceholder.png', // Ganti dengan path gambar yang sesuai
    content: `Lorem ipsum dolor sit amet, elit consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, elit consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
  },
  {
    id: 8,
    title: 'The Golden Sands Of Florida And California',
    date: '20 Maret 2024',
    category: 'Health',
    imageUrl: '/assets/images/articlePlaceholder.png', // Ganti dengan path gambar yang sesuai
    content: `Lorem ipsum dolor sit amet, elit consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, elit consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
  },
  {
    id: 9,
    title: 'The Golden Sands Of Florida And California',
    date: '20 Maret 2024',
    category: 'Health',
    imageUrl: '/assets/images/articlePlaceholder.png', // Ganti dengan path gambar yang sesuai
    content: `Lorem ipsum dolor sit amet, elit consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, elit consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
  },
  {
    id: 10,
    title: 'The Golden Sands Of Florida And California',
    date: '20 Maret 2024',
    category: 'Health',
    imageUrl: '/assets/images/articlePlaceholder.png', // Ganti dengan path gambar yang sesuai
    content: `Lorem ipsum dolor sit amet, elit consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, elit consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
  },
  {
    id: 11,
    title: 'The Golden Sands Of Florida And California',
    date: '20 Maret 2024',
    category: 'Health',
    imageUrl: '/assets/images/articlePlaceholder.png', // Ganti dengan path gambar yang sesuai
    content: `Lorem ipsum dolor sit amet, elit consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, elit consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
  },
  {
    id: 12,
    title: 'The Golden Sands Of Florida And California',
    date: '20 Maret 2024',
    category: 'Health',
    imageUrl: '/assets/images/articlePlaceholder.png', // Ganti dengan path gambar yang sesuai
    content: `Lorem ipsum dolor sit amet, elit consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, elit consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
  },
];

export default dummyArticleDetails;
