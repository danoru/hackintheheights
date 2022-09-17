const USER_DATA = [
  {
    id: "p1",
    name: "Anna",
    image: "images/anna.jpg",
    isFeatured: true
  },
  {
    id: "p2",
    name: "Corrie",
    image: "images/corrie.jpg",
    isFeatured: true
  },
  {
    id: "p3",
    name: "Daniel",
    image: "images/daniel.jpg",
    isFeatured: true
  },
  {
    id: "p4",
    name: "Meagan",
    image: "images/meagan.jpg",
    isFeatured: true
  },
  {
    id: "p5",
    name: "Sam",
    image: "images/sam.jpg",
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