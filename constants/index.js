const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "products",
        title: "Products",
    },
    {
        id: "contactus",
        title: "Contact Us",
    },
];

const storyContents = [
    {
        id: 1,
        imgPath: "/images/farm.jpg",
        highlight: 'Image of a barn in a field.',
        content:
        "A family-run dairy farm built on over 20 years of dedication and care.",
    },
    {
        id:2,
        imgPath: "/images/cow-2.jpg",
        highlight: 'Image of cows being taken care of.',
        content:
        "Our cows are raised with ethical, stress-free practices and fed with high-quality organic feed.",
    },    
    {
        id: 3,
        imgPath: "/images/bottled-milk-2.jpg",
        highlight: 'Image of a bottled milk',
        content:
            "We produce fresh, high-quality dairy products you can trust every day.",
    },
];

const testimonials = [
  {
    id: 1,
    imgPath: "/images/customer-1.jpg",
    testimonial:
      "\"Golden Pastures has been my go to ever since I set up my cafe! Quality products!\"",
    user: "Mike",
    business: "Coffee Ball",
  },
  {
    id: 2,
    imgPath: "/images/customer-2.jpg",
    testimonial:
      "\"Delivery is always on time which is crucial as I bake early in the morning!\"",
    user: "Risa",
    business: "Rise Bakery",
  },
  {
    id: 3,
    imgPath: "/images/customer-3.jpg",
    testimonial:
          "\"My pizza would be nothing without their quality cheese products!\"",
    user: "Lucas",
    business: "Eta Da Pizza",
  },
  {
    id: 4,
    imgPath: "/images/customer-4.jpg",
    testimonial:
          "\"The kids love drinking their bottled milk! It keeps them energized for the day!\"",
    user: "Teresa",
    business: "The Playground",
  },
];

export {
    navLinks,
    storyContents,
    testimonials
}