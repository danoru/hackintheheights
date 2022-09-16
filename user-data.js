const EVENT_DATA = [
  {
    id: "p1",
    name: "Anna"
  },
  {
    id: "p2",
    name: "Corrie"
  },
  {
    id: "p3",
    name: "Daniel"
  },
  {
    id: "p4",
    name: "Meagan"
  },
  {
    id: "p5",
    name: "Sam"
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