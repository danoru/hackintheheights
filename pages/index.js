import { getFeaturedEvents } from '../event-data';
import EventList from "../components/events/event-list";

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1>Hack in the Heights</h1>
      <EventList 
        items={featuredEvents} 
      />
    </div>
  );
};

export default HomePage;