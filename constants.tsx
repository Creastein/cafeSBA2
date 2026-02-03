
import { Product, SocialImage } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Basque Cheesecake',
    price: 28.00,
    description: 'Creamy, caramelized perfection with a scorched top and a custardy center.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBB1K_s6cYCUW3-qotd-PKyelV2lL0kXGj3lVuj1W6A9uJG0NwW0VvJXzksC8OAySKKQtqfsIfTVOr4xProfrcle_ABnF5vknuom2ODV-axKHgATcJ0y0WylsF5iJFLa50rphLS40wV774XYnxm429R4ruxEqXJ0kEWYH2XpKvRsXoEEzOvK57fbNkd6THGCikPlkvb6yHWK0Z6lNt_IkMf0O6v6LLsCtk-XMrJSWNeVq_CNoOCcFmUO2LNvMjmiVPK-tmNrOWiflHL',
    tag: 'Best Seller'
  },
  {
    id: '2',
    name: 'Brownie Bites',
    price: 12.00,
    description: 'Rich, fudgy chocolate bites made with 70% dark Belgian chocolate.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbrTJ_3J9gebteGuxTsoCJQibbDTKMJBhSovTWJax0GOMXr12jXGwfDpwtKRu4cqtQ5aL116YWZXk2QJDDiWn0ZuHcjcWU3Buj92OfynQjGf0pNCaTJDnODh0xJsirxoZbqF3atFvGBk3Ky5Uw9GA64nIa19Ofs-BMl2ko-UOQXmMtsq9ExIWrHvj_xolcjdt5h9EbvgLCw_0DfvtFV-u4WRjfnoKRLcgWHqsKuoKgQ6_S4TvaimncVRgZqCD8lB75uNTnQutCx_vq'
  },
  {
    id: '3',
    name: 'Soft Cookies',
    price: 4.50,
    description: 'Chunky, melt-in-your-mouth goodness with walnuts and chocolate chunks.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZJWY2ka0pB_C-UeI4jIHcZk2Xb7HlHY-oeOaBLrDPIYs_NoWIKI2zR4aKf_T4Q_e0QGs18AxWdGrLxmoKS7JO7MPXWQPjO5YbHnGGfvAoi_Mn-2UFl25kjth2HufBzzlc5OkBpW1UtRSdaWjBD7qAvGAmIliXO0MpMnEajBvy4wGV7gmd1fAkaDGCscKT30I9kw0Hwg8N-fBAUNye1WoIFulqHz6ts1kpMv36Wg-ejjoAtCB0XmWsfTb9ApCBW6Uo8k3s2KIC-WnY',
    tag: 'New'
  }
];

export const INSTAGRAM_IMAGES: SocialImage[] = [
  { id: 'ig1', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvdyFb8boIrqpfmm-_qKS3efikG2qudCnCKOlChCYb92UZPEZdwgMUAMGc2-VWk_0e0Ek-c6jblk8vFGxzIqEbGXpGEPQ3rgu29dsptyE85G7jPaNqWpnWAfby5ke4ar_cMnVZwRkaJgbAiODfWfLDUE-IMGyrhgGJE7_lSRuk7Q0MEGlkQNobXlsnUeCJUp5xKE36TjGvOB73sh3CAAOjV6iZHSWKh_cERp_5K9ihFylDuTBq15p7K8dvAPu9RCosuB7xsqhrMLda', alt: 'Coffee and cake' },
  { id: 'ig2', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgoKlGSjhupTgZ3GZZnjMBU0xTCF4K9_lXD0eTpgz-7ywZ5J9kWXA4I4TQovbsVtNaLvWrtg7OcbYPLUszJ9Wc5Jp0Q9sbC_rGqIV5yDBWNkt1qvipFfiEdezk4TPJYOF7jOg55k22LsMVpfqTMqaBkK6Rohq21fkWj_H65CEQ8V2nSlSl8e8_UlRL5jyrb7Te6dXxN3oLAKoTkiDiFUpkNiO8DWIoVBNDzeI0oh3SItfDfR0bPDezNmCj6oYclaJ7FrKJtxTN8l9L', alt: 'Shop interior' },
  { id: 'ig3', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmQq43QWvSbtMs-1mgbgmERhyZVk4-dHjwAIi1Hr0B0WeeWypwol75Q3EfZXmsDKCqNJfwnlStc-EZiRUJX0ZPLgeBKLddm-cBXmOsXEq5Gl5cLGv70ZG83ltg_HocelKRxg2Psm8uhHMhEYT8Rn_EN4RmIZkPghSDWPIxrdX_8D2dnPglpwyU89L_brhUeSzH7MMGplDG450tO85XBUGuoNxD2BmzegE6ReTo5kLRsrVLflML-3gECPif8Tm8ZhY8-TWl2gpOErMW', alt: 'Assorted cupcakes' },
  { id: 'ig4', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeNVPSels81pe6eChzQ_wseAarl31i3tdwiqdfVNtJGw-lCnKoS6Vy2-RLY8xVEeCiOHJwv7-0akRG8tgjnKReJ_w6QnAKwYi_BQFs_Gllrrxu_R7jsnqiHK-ZR0malKc7JyLQ6LigQHoZ86w6Jt6U9C_FSHydU3bPuESa5oWS7skmX-L5yjdhwJBqksGX3Mk5cVJQJ__XdOclmoqicwg2Jo4i8t9c-Y4JSKVCozRfom8Mt8GKb_Lx6_PPg4koF2oGU5yk_25zDtsb', alt: 'Latte art pouring' },
];
