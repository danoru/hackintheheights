const EVENT_DATA = [
  {
    id: "e1",
    title: "Hackathon 2022: Young Frankenstein",
    description:
      "You know, I'm a rather brilliant programmer. Perhaps I can help you with that code.",
    location: "Hacienda Heights CA",
    date: "2022-09-24",
    image: "images/coding-event.jpg",
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return EVENT_DATA.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return EVENT_DATA;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = EVENT_DATA.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents;
}

export function getEventById(id) {
  return EVENT_DATA.find((event) => event.id === id);
}