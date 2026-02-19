import type { MenuSectionData } from './features/menu/types/menu';

export interface SocialImage {
  id: string;
  url: string;
  alt: string;
}

export const INSTAGRAM_IMAGES: SocialImage[] = [
  { id: 'ig1', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvdyFb8boIrqpfmm-_qKS3efikG2qudCnCKOlChCYb92UZPEZdwgMUAMGc2-VWk_0e0Ek-c6jblk8vFGxzIqEbGXpGEPQ3rgu29dsptyE85G7jPaNqWpnWAfby5ke4ar_cMnVZwRkaJgbAiODfWfLDUE-IMGyrhgGJE7_lSRuk7Q0MEGlkQNobXlsnUeCJUp5xKE36TjGvOB73sh3CAAOjV6iZHSWKh_cERp_5K9ihFylDuTBq15p7K8dvAPu9RCosuB7xsqhrMLda', alt: 'Coffee and cake' },
  { id: 'ig2', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgoKlGSjhupTgZ3GZZnjMBU0xTCF4K9_lXD0eTpgz-7ywZ5J9kWXA4I4TQovbsVtNaLvWrtg7OcbYPLUszJ9Wc5Jp0Q9sbC_rGqIV5yDBWNkt1qvipFfiEdezk4TPJYOF7jOg55k22LsMVpfqTMqaBkK6Rohq21fkWj_H65CEQ8V2nSlSl8e8_UlRL5jyrb7Te6dXxN3oLAKoTkiDiFUpkNiO8DWIoVBNDzeI0oh3SItfDfR0bPDezNmCj6oYclaJ7FrKJtxTN8l9L', alt: 'Shop interior' },
  { id: 'ig3', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmQq43QWvSbtMs-1mgbgmERhyZVk4-dHjwAIi1Hr0B0WeeWypwol75Q3EfZXmsDKCqNJfwnlStc-EZiRUJX0ZPLgeBKLddm-cBXmOsXEq5Gl5cLGv70ZG83ltg_HocelKRxg2Psm8uhHMhEYT8Rn_EN4RmIZkPghSDWPIxrdX_8D2dnPglpwyU89L_brhUeSzH7MMGplDG450tO85XBUGuoNxD2BmzegE6ReTo5kLRsrVLflML-3gECPif8Tm8ZhY8-TWl2gpOErMW', alt: 'Assorted cupcakes' },
  { id: 'ig4', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeNVPSels81pe6eChzQ_wseAarl31i3tdwiqdfVNtJGw-lCnKoS6Vy2-RLY8xVEeCiOHJwv7-0akRG8tgjnKReJ_w6QnAKwYi_BQFs_Gllrrxu_R7jsnqiHK-ZR0malKc7JyLQ6LigQHoZ86w6Jt6U9C_FSHydU3bPuESa5oWS7skmX-L5yjdhwJBqksGX3Mk5cVJQJ__XdOclmoqicwg2Jo4i8t9c-Y4JSKVCozRfom8Mt8GKb_Lx6_PPg4koF2oGU5yk_25zDtsb', alt: 'Latte art pouring' },
];

export const MENUS: MenuSectionData[] = [
  {
    id: 'dessert',
    label: 'Desserts',
    categories: [
      {
        title: 'Petit Dessert',
        items: [
          { name: "S'mores Brookies", price: '24K' },
          { name: 'Seasalt Chocochip Cookies', price: '21K' },
          { name: 'Seasalt Brownies Bites (GF)', price: '35K', tags: ['GF'] },
        ]
      },
      {
        title: 'Slice Cake',
        items: [
          { name: 'Orange Cake (GF & DF)', price: '40K', tags: ['GF', 'DF'] },
          { name: 'Earl Grey Peach Cake (GF)', price: '40K', tags: ['GF'] },
          { name: 'Berry Gluten Free', price: '36K', tags: ['GF'] },
          { name: 'Kopsu Cake (GF)', price: '36K', tags: ['GF'] },
          { name: 'Mon Cherie (GF)', price: '40K', tags: ['GF'] },
          { name: 'Lychee Berry Cake (GF&DF)', price: '43K', tags: ['GF', 'DF'] },
          { name: 'Blueberry Cake (GF&DF)', price: '43K', tags: ['GF', 'DF'] },
          { name: 'Triple Chocolate (GF)', price: '40K', tags: ['GF'] },
          { name: 'Chocorange (GF)', price: '40K', tags: ['GF'] },
          { name: 'Pandan Kelapa', price: '43K' },
          { name: 'Choco Lotus Cake', price: '36K' },
          { name: 'Bolu Meises (GF)', price: '43K', tags: ['GF'] },
          { name: 'Choco Berry Cake', price: '36K' },
          { name: 'Taro Milk Tea (GF)', price: '43K', tags: ['GF'] },
        ]
      },
      {
        title: 'Puff Series',
        items: [
          { name: 'Icey Puff Original', price: '31K' },
          { name: 'Icey Puff Strawberry', price: '36K' },
          { name: 'Icey Puff Choco Sauce', price: '35K' },
          { name: 'Icey Puff Cinnamon Sugar', price: '33K' },
          { name: 'Icey Puff Lotus Biscoff', price: '36K' },
        ]
      },
      {
        title: 'Viennoiserie',
        items: [
          { name: 'Butter Croissant', price: '23K' },
          { name: 'Crokie OG', price: '30K' },
          { name: 'Matcha Crokie', price: '31K' },
          { name: 'Croissant Ice Cream', price: '37K' },
        ]
      }
    ]
  },
  {
    id: 'beverage',
    label: 'Beverages',
    categories: [
      {
        title: 'Coffee Base',
        items: [
          { name: 'Es Kopsu OG!', price: '28', variants: ['hot', 'iced'] },
          { name: 'Sugar Bloom Latte', price: '30', variants: ['iced'] },
          { name: 'Latte', price: '28', variants: ['hot', 'iced'] },
          { name: 'Vanilla Latte', price: '33', variants: ['hot', 'iced'] },
          { name: 'Caramel Latte', price: '35', variants: ['hot', 'iced'] },
          { name: 'Hazelnut Latte', price: '36', variants: ['hot', 'iced'] },
          { name: 'Cube Latte', price: '37', variants: ['iced'] },
          { name: 'Jolly Pong Latte', price: '35', variants: ['hot', 'iced'] },
          { name: 'Cappuccino', price: '29', variants: ['hot', 'iced'] },
          { name: 'Mocaccino', price: '33', variants: ['hot', 'iced'] },
          { name: 'Americano', price: '23', variants: ['hot', 'iced'] },
          { name: 'Einspanner', price: '30', variants: ['hot', 'iced'] },
          { name: 'Lotus Coffee', price: '38', variants: ['iced'] },
          { name: 'Cream Latte', price: '37', variants: ['iced'] },
        ]
      },
      {
        title: 'Non-Coffee',
        items: [
          { name: 'Berry POP!', price: '32', variants: ['iced'] },
          { name: 'Berry Cream', price: '37', variants: ['iced'] },
          { name: 'Citrus POP!', price: '36', variants: ['iced'] },
          { name: 'Summer Berry', price: '42', variants: ['iced'] },
          { name: 'Hazelnut Choco', price: '36', variants: ['hot', 'iced'] },
          { name: 'Day', price: '32', variants: ['hot', 'iced'] },
          { name: 'Night', price: '36', variants: ['iced'] },
          { name: 'Chocolate', price: '32', variants: ['iced'] },
          { name: 'Greentea Latte', price: '32', variants: ['hot', 'iced'] },
          { name: 'Li-MIN-TI', price: '33', variants: ['hot', 'iced'] },
          { name: 'Strawberry Lime Tea', price: '33', variants: ['hot', 'iced'] },
          { name: 'Peach Tea', price: '31', variants: ['hot', 'iced'] },
          { name: 'Lychee Tea', price: '31', variants: ['hot', 'iced'] },
          { name: 'Cookies and Cream', price: '36', variants: ['iced'] },
          { name: 'Lotus and Cream', price: '36', variants: ['iced'] },
          { name: 'Mineral Water 330ml', price: '9' },
        ]
      },
      {
        title: 'Vegan Drinks (Oat Milk)',
        items: [
          { name: 'Choco Berry', price: '41', variants: ['iced'] },
          { name: 'Double Choco', price: '41', variants: ['iced'] },
          { name: 'Melts Latte', price: '44', variants: ['iced'] },
        ]
      },
      {
        title: 'Tea-Bag Base',
        items: [
          { name: 'Java Breakfast', price: '31', variants: ['hot', 'iced'] },
          { name: 'Moroccan Mint', price: '31', variants: ['hot', 'iced'] },
          { name: 'Jasmine Tea', price: '31', variants: ['hot', 'iced'] },
          { name: 'Earl Grey', price: '31', variants: ['hot', 'iced'] },
          { name: 'Wedang Uwuh', price: '31', variants: ['hot'] },
        ]
      },
      {
        title: 'Additional',
        items: [
          { name: 'Extra Shot', price: '9' },
          { name: 'Aren Jelly', price: '10' },
          { name: 'Jolly Pong', price: '11' },
          { name: 'Ice Cream', price: '12' },
          { name: 'Oat Milk', price: '9' },
        ]
      }
    ]
  },
  {
    id: 'special',
    label: 'Specials',
    categories: [
      {
        title: 'Special Menu',
        items: [
          { name: 'GF Strawberry Cheesecake', price: '51K', tags: ['GF'], image: '/GFStrawberry-Cheesecake-Recipe.png', description: 'Creamy cheesecake with fresh strawberry topping, gluten free.' },
          { name: 'Roasted Potato', price: '44K', image: '/Roast-Potatoe.png', description: 'Crispy roasted potato wedges with melted cheese and herbs.' },
          { name: 'Cheesy Clup Clup', price: '58K', image: '/Cheese-clup-cups.png', description: 'Mozzarella cheese sticks with rich dipping sauce.' },
          { name: 'Croissant Ice Cream', price: '37K', tags: ['Recommended'], image: '/croissant-ice-cream.png', description: 'Flaky butter croissant filled with creamy ice cream.' },
          { name: 'Kopimisu', price: '56K', tags: ['GF'], image: '/kopimisu.png', description: 'Coffee-infused tiramisu with mascarpone cream, gluten free.' },
          { name: 'Seasalt Brownies with Ice Cream', price: '47K', tags: ['GF'], image: '/seasalt-brownies-with-ice-cream.png', description: 'Rich fudgy brownies with sea salt finish and ice cream.' },
          { name: 'Matchamisu', price: '53K', tags: ['GF'], image: '/matchamisu.png', description: 'Matcha green tea tiramisu with delicate cream layers.' },
        ]
      }
    ]
  }
];
