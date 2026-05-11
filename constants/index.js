const navLinks = [
  { id: "about", title: "About", path: "/about" },
  { id: "products", title: "Products", path: "/products" },
  { id: "contact", title: "Contact", path: "/contact" },
];

const storyContents = [
  {
    id: 1,
    imgPath: "/images/farm.jpg",
    highlight: "Image of a barn in a field.",
    content:
      "A family-run dairy farm built on over 20 years of dedication and care.",
  },
  {
    id: 2,
    imgPath: "/images/cow-2.jpg",
    highlight: "Image of cows being taken care of.",
    content:
      "Our cows are raised with ethical, stress-free practices and fed with high-quality organic feed.",
  },
  {
    id: 3,
    imgPath: "/images/bottled-milk-2.jpg",
    highlight: "Image of a bottled milk",
    content:
      "We produce fresh, high-quality dairy products you can trust every day.",
  },
];

const testimonials = [
  {
    id: 1,
    imgPath: "/images/customer-1.jpg",
    testimonial:
      '"Golden Pastures has been my go to ever since I set up my cafe! Quality products!"',
    user: "Mike",
    business: "Coffee Ball",
  },
  {
    id: 2,
    imgPath: "/images/customer-2.jpg",
    testimonial:
      '"Delivery is always on time which is crucial as I bake early in the morning!"',
    user: "Risa",
    business: "Rise Bakery",
  },
  {
    id: 3,
    imgPath: "/images/customer-3.jpg",
    testimonial:
      '"My pizza would be nothing without their quality cheese products!"',
    user: "Lucas",
    business: "Eta Da Pizza",
  },
  {
    id: 4,
    imgPath: "/images/customer-4.jpg",
    testimonial:
      '"The kids love drinking their bottled milk! It keeps them energized for the day!"',
    user: "Teresa",
    business: "The Playground",
  },
  {
    id: 5,
    imgPath: "/images/customer-5.jpg",
    testimonial:
      "\"My customer can identify if I use Golden Pasture's milk or not. It's crazy!\"",
    user: "Bob",
    business: "Cafe Bolpuen",
  },
];

const products = [
  {
    id: 1,
    imgPath: "/images/bottled-milk.jpg",
    name: "Fresh Bottled Milk - 500 mL",
    price: "3.50",
  },
  {
    id: 2,
    imgPath: "/images/flavored-milk.jpg",
    name: "Vanilla Bottled Milk - 500 mL",
    price: "4.50",
  },
  {
    id: 3,
    imgPath: "/images/fresh-yogurt.jpg",
    name: "Fresh Yogurt - 500 g",
    price: "6.99",
  },
  {
    id: 4,
    imgPath: "/images/parmesan.jpg",
    name: "Parmesan (Aged) - 100 g",
    price: "8.00",
  },
  {
    id: 5,
    imgPath: "/images/gouda.jpg",
    name: "Gouda - 250 g",
    price: "7.99",
  },
  {
    id: 6,
    imgPath: "/images/cheddar.jpg",
    name: "Cheddar - 250 g",
    price: "5.00",
  },
  {
    id: 7,
    imgPath: "/images/assorted-cheese.jpg",
    name: "Assorted Cheese - 500 g",
    price: "15.99",
  },
];

export { navLinks, storyContents, testimonials, products };
