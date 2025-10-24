import Img1 from '../assets/images/image 3.png';
import Img2 from '../assets/images/image 4.png';
import Img3 from '../assets/images/image 5.png';
import Img4 from '../assets/images/image 6.png';
import Img5 from '../assets/images/image 7.png';
import Img6 from '../assets/images/image 8.png';
import Img7 from '../assets/images/image 9.png';
import Img8 from '../assets/images/Rectangle 19.png';
import Img9 from '../assets/images/Rectangle 19 (1).png';
import Img10 from '../assets/images/Rectangle 19 (2).png';
import Img11 from '../assets/images/Rectangle 19 (3).png';
import Img12 from '../assets/images/Rectangle 19 (4).png';
import Img13 from '../assets/images/Rectangle 19 (5).png';
import Img14 from '../assets/images/Rectangle 19 (6).png';
import Img15 from '../assets/images/Rectangle 19 (7).png';
import Img16 from '../assets/images/Rectangle 19 (8).png';
type exploreSliderType = {
  id: number;
  name: string;
  /**
   * this is image for the category
   */
  image: string;
  count: string;
};
type featuredSliderType = {
  id: number;
  image: string;
  category: string;
  name: string;
  Dprice: string;
  Oprice: string;
};




export const ExploreItems: exploreSliderType[] = [
  {
    id: 1,
    name: "Peach",
    image: Img1,
    count: "20",
  },
  {
    id: 2,
    name: "Vegetable",
    image: Img2,
    count: "15",
  },
  {
    id: 3,
    name: "strawberry",
    image: Img3,
    count: "25",
  },
  {
    id: 4,
    name: "apple",
    image: Img4,
    count: "30",
  },
  {
    id: 5,
    name: "orange",
    image: Img5,
    count: "18",
  },
  {
    id: 6,
    name: "potato",
    image: Img6,
    count: "22",
  },
  {
    id: 7,
    name: "carrot",
    image: Img7,
    count: "10",
  },
]; 

export const FeaturedItems: featuredSliderType[] = [
  {
    id: 1,
    image: Img8,
    category: "vegetable",
    name: "radish 500g",
    Dprice: "$2",
    Oprice: "$3.99",
  },
  {
    id: 2,
    image: Img9,
    category: "vegetable",
    name: "potato 1kg",
    Dprice: "$1",
    Oprice: "$1.99",
  },
  {
    id: 3,
    image: Img10,
    category: "fruit",
    name: "tomatos 200g",
    Dprice: "$0.30",
    Oprice: "$0.99",
  },
  {
    id: 4,
    image: Img11,
    category: "vegetable",
    name: "broccoli 1kg",
    Dprice: "$1.50",
    Oprice: "$2.99",
  },
  {
    id: 5,
    image: Img12,
    category: "vegetable",
    name: "green beans 250g",
    Dprice: "$1",
    Oprice: "$1.99",
  },
];

export const DailyItems: featuredSliderType[] = [
  {
    id: 1,
    image: Img13,
    category: "Coffee & Teas",
    name: "coffee 1kg",
    Dprice: "$20",
    Oprice: "$25",
  },
  {
    id: 2,
    image: Img14,
    category: "Meat",
    name: "Halal Sausage 350g",
    Dprice: "$4",
    Oprice: "$10",
  },
  {
    id: 3,
    image: Img15,
    category: "Coffe & Teas",
    name: "Green Tea 250g",
    Dprice: "$3",
    Oprice: "$7",
  },
  {
    id: 4,
    image: Img16,
    category: "vegetable",
    name: "Onion 1kg",
    Dprice: "$0.50",
    Oprice: "$2",
  },
];

export const getBgColor = (): string => {
  const bgarr: string[] = [
    "#feefea",
    "#fff3ff",
    "#f2fce4",
    "#fcffec",
    "#fffceb",
    "#def9ec",
  ];

  const randomBg: number = Math.floor(Math.random() * bgarr.length);
  const color: string = bgarr[randomBg];

  return color;
};