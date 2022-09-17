const USER_DATA = [
  {
    id: "p1",
    name: "Anna",
    image: "images/anna.jpg",
    link: "https://github.com/annaPerdomo",
    isFeatured: true
  },
  {
    id: "p2",
    name: "Corrie",
    image: "images/corrie.jpg",
    link: "https://github.com/contrabanjo",
    isFeatured: true
  },
  {
    id: "p3",
    name: "Daniel",
    image: "images/daniel.jpg",
    link: "https://github.com/danoru",
    isFeatured: true
  },
  {
    id: "p4",
    name: "Meagan",
    image: "images/meagan.jpg",
    link: "https://github.com/megmaggiemj",
    isFeatured: true
  },
  {
    id: "p5",
    name: "Sam",
    image: "images/sam.jpg",
    link: "https://github.com/sburba",
    isFeatured: true
  },
];

export function getFeaturedUsers() {
  return USER_DATA.filter((user) => user.isFeatured);
}

export function getAllUsers() {
  return USER_DATA;
}

export function getUserById(id) {
  return USER_DATA.find((user) => user.id === id);
}