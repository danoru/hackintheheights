import { useRouter } from "next/router";
import { getEventById } from "../../event-data";

function EventDetailPage() {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId)
  getEventById()

  return (
    <div>
      <h1>This is the event detail page.</h1>
    </div>
  )
}

export default EventDetailPage;